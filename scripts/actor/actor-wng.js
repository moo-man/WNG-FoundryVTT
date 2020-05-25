/**
 * Provides the main Actor data computation and organization.
 *
 * ActorWNG contains all the preparation data and methods used for preparing an actor:
 * going through each Owned Item, preparing them for display based on characteristics.
 * Additionally, it handles all the different types of roll requests, setting up the
 * test dialog, how each test is displayed, etc.
 *
 *
 * @see   ActorSheetWNG - Base sheet class
 * @see   ActorSheetWNGCharacter - Character sheet class
 * @see   ActorSheetWNGNPC - NPC sheet class
 * @see   ActorSheetWNGCreature - Creature sheet class
 * @see   DiceWNG4e - Sends test data to roll tests.
 */
class ActorWNG extends Actor {


  /**
   * Calculates simple dynamic data when actor is updated.
   *
   * prepareData() is called when actor data is updated to recalculate values such as Characteristic totals, bonus (e.g.
   * this is how Strength total and Strength Bonus gets updated whenever the user changes the Strength characteristic),
   * movement values, and encumbrance. Some of these may or may not actually be calculated, depending on the user choosing
   * not to have them autocalculated. These values are relatively simple, more complicated calculations that require items
   * can be found in the sheet's getData() function.
   * 
   * NOTE: NOT TO BE CONFUSED WITH prepare() - that function is called upon rendering to organize and process actor data
   *
   * @see ActorSheetWNG.getData()
   */
  prepareData()
  {
    super.prepareData();
  }

  /* --------------------------------------------------------------------------------------------------------- */
  /* Setting up Rolls
  /*
  /* All "setup______" functions gather the data needed to roll a certain test. These are in 3 main objects.
  /* These 3 objects are then given to DiceWNG.prepareTest() to show the dialog, see that function for its usage.
  /*
  /* The 3 Main objects:
  /* testData - Data associated with modifications to rolling the test itself, or results of the test.
  /*            Examples of this are whether hit locations are found, Weapon qualities that may cause
                criticals/fumbles more often or ingredients for spells that cancel miscasts.
      dialogOptions - Data for rendering the dialog that's important for a specific test type.
                      Example: when casting or channelling, there should be an option for Malignant
                      Influences, but only for those tests.
      cardOptions - Which card to use, the title of the card, the name of the actor, etc.
  /* --------------------------------------------------------------------------------------------------------- */

  /**
   * Setup a Characteristic Test.
   *
   * Characteristics tests are the simplest test, all that needs considering is the target number of the
   * characteristic being tested, and any modifiers the user enters.
   *
   * @param {String} characteristicId     The characteristic id (e.g. "ws") - id's can be found in config.js
   *
   */
  setupCharacteristic(characteristicId, options = {}) {
    let char = this.data.data.characteristics[characteristicId];
    let title = char.label + " " + game.i18n.localize("Test");

    let testData = {
      target : char.value,
      hitLocation : false,
      extra : {
        size : this.data.data.details.size.value,
        options : options
      }
    };

    if (options.rest)
      testData.extra.options["tb"] = char.bonus;

    // Default a WS or BS test to have hit location checked
    if (characteristicId == "ws" || characteristicId == "bs")
      testData.hitLocation = true;

    // Setup dialog data: title, template, buttons, prefilled data
    let dialogOptions = {
      title: title,
      template : "/systems/wng/templates/chat/characteristic-dialog.html",
      // Prefilled dialog data
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        advantage : this.data.data.status.advantage.value || 0,
      },
      callback : (html, roll) => {
        // When dialog confirmed, fill testData dialog information
        // Note that this does not execute until DiceWNG.prepareTest() has finished and the user confirms the dialog
        cardOptions.rollMode =    html.find('[name="rollMode"]').val();
        testData.testModifier =   Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = WNG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus =   Number(html.find('[name="successBonus"]').val());
        testData.slBonus =        Number(html.find('[name="slBonus"]').val());
        // Target value is the final value being tested against, after all modifiers and bonuses are added
        testData.target =         testData.target + testData.testModifier + testData.testDifficulty;
        testData.hitLocation =    html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses =       html.find('[name = "talentBonuses"]').val();

          // Combine all Talent Bonus values (their times taken) into one sum
        testData.successBonus +=  talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        // Use the assigned roll function (see DiceWNG.prepareTest() to see how this roll function is assigned)
        roll(testData, cardOptions);
      }
    };

    if (options.rest)
    {
      dialogOptions.data.testDifficulty = "average"
    }

    // Call the universal cardOptions helper
    let cardOptions = this._setupCardOptions("systems/wng/templates/chat/characteristic-card.html", title)

    // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
    DiceWNG.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions
    });
  }

  /**
   * Setup a Skill Test.
   *
   * Skill tests are much like Characteristic Tests in their simplicity, just with another layer of modifiers (skill advances).
   * However, there is more complication if the skill is instead for an Income test, which adds computation after the roll is
   * completed.
   *
   * @param {Object} skill    The skill item being tested. Skill items contain the advancements and the base characteristic, see template.json for more information.
   * @param {bool}   income   Whether or not the skill is being tested to determine Income.
   */
  setupSkill(skill, income = false) {
    let title = skill.name + " " + game.i18n.localize("Test");
    let testData = {
      hitLocation : false,
      income : income,
      extra : {
        size : this.data.data.details.size.value
      }
    };

    // Default a WS, BS, Melee, or Ranged to have hit location checked
    if (skill.data.characteristic.value == "ws" ||
        skill.data.characteristic.value == "bs" ||
        skill.name.includes("Melee") ||
        skill.name.includes("Ranged"))
    {
      testData.hitLocation = true;
    }

    // Setup dialog data: title, template, buttons, prefilled data   
    let dialogOptions = {
      title: title,
      template : "/systems/wng/templates/chat/skill-dialog.html",
      // Prefilled dialog data
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        characteristicList : WNG.characteristics,
        characteristicToUse : skill.data.characteristic.value,
        advantage : this.data.data.status.advantage.value || 0
      },
      callback : (html, roll) => {
        // When dialog confirmed, fill testData dialog information
        // Note that this does not execute until DiceWNG.prepareTest() has finished and the user confirms the dialog
        cardOptions.rollMode =    html.find('[name="rollMode"]').val();
        testData.testModifier =   Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = WNG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus =   Number(html.find('[name="successBonus"]').val());
        testData.slBonus =        Number(html.find('[name="slBonus"]').val());
        let characteristicToUse = html.find('[name="characteristicToUse"]').val();
        // Target value is the final value being tested against, after all modifiers and bonuses are added
        testData.target =
        this.data.data.characteristics[characteristicToUse].value
        + testData.testModifier
        + testData.testDifficulty
        + skill.data.advances.value;

        testData.hitLocation =    html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses =       html.find('[name = "talentBonuses"]').val();

          // Combine all Talent Bonus values (their times taken) into one sum
        testData.successBonus +=  talentBonuses.reduce(function (prev, cur) {
          return prev + Number(cur)
        }, 0)

        // Use the assigned roll function (see below for how rollOverride is assigned, and then
        // DiceWNG.prepareTest() for more info on how the override is used, if any)
        roll(testData, cardOptions)
      }
    };

    // If Income, use the specialized income roll handler
    if (testData.income)
    {
     dialogOptions.rollOverride = this.constructor.incomeOverride;
     dialogOptions.data.testDifficulty = "average";
    }

    // Call the universal cardOptions helper
    let cardOptions = this._setupCardOptions("systems/wng/templates/chat/skill-card.html", title)

    // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
    DiceWNG.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  /**
   * Setup a Weapon Test.
   *
   * Probably the most complicated type of Test, weapon tests' complexity comes from all the different
   * factors and variables of the different weapons available and how they might affect test results,
   * as well as ammo usage, the effects of using different skills etc.
   *
   * @param {Object} weapon   The weapon Item being used.
   * @param {bool}   event    The event that called this Test, used to determine if attack is melee or ranged.
   */
  setupWeapon(weapon, event = {}) {
    let skillCharList = []; // This array is for the different options available to roll the test (Skills and characteristics)
    let slBonus = 0   // Used when wielding Defensive weapons
    let modifier = 0; // Used when atatcking with Accurate weapons
    let successBonus = 0;
    let title = game.i18n.localize("WeaponTest") + " - " + weapon.name;

    // Prepare the weapon to have the complete data object, including qualities/flaws, damage value, etc.
    let wep = this.prepareWeaponCombat(duplicate(weapon));
    let ammo; // Ammo object, if needed

    let testData = {
      target : 0,
      hitLocation : true,
      extra : { // Store this extra weapon/ammo data for later use
        weapon : wep,
        ammo : ammo,
        size : this.data.data.details.size.value
      }
    };

    if (wep.attackType == "melee")
      skillCharList.push("Weapon Skill")

    else if (wep.attackType == "ranged")
    {
      // If Ranged, default to Ballistic Skill, but check to see if the actor has the specific skill for the weapon
      skillCharList.push("Ballistic Skill")
      if (weapon.data.weaponGroup.value != "throwing" && weapon.data.weaponGroup.value != "explosives" && weapon.data.weaponGroup.value != "entangling")
      {
        // Check to see if they have ammo if appropriate
        ammo = duplicate(this.getEmbeddedEntity("OwnedItem", weapon.data.currentAmmo.value))
        if (!ammo || weapon.data.currentAmmo.value == 0 || ammo.data.quantity.value == 0)
        {
          ui.notifications.error(game.i18n.localize("Error.NoAmmo"))
          return
        }
      }
      else if (weapon.data.weaponGroup.value != "entangling" && weapon.data.quantity.value == 0)
      {
        // If this executes, it means it uses its own quantity for ammo (e.g. throwing), which it has none of
        ui.notifications.error(game.i18n.localize("Error.NoAmmo"))
        return;
      }
      else
      {
        // If this executes, it means it uses its own quantity for ammo (e.g. throwing)
        ammo = weapon;
      }
    }

    let defaultSelection // The default skill/characteristic being used
    if (wep.skillToUse)
    {
        // If the actor has the appropriate skill, default to that.
        skillCharList.push(wep.skillToUse.name)
        defaultSelection = skillCharList.indexOf(wep.skillToUse.name)
    }

    // ***** Automatic Test Data Fill Options ******

    // Try to automatically fill the dialog with values based on context
    // If the auto-fill setting is true, and there is combat....
    if (game.settings.get("wng", "testAutoFill") && (game.combat && game.combat.data.round != 0 && game.combat.turns))
    {
      try
      {
        let currentTurn = game.combat.turns.find(t => t.active)

        // If actor is a token
        if (this.data.token.actorLink)
        {
          // If it is NOT the actor's turn
          if (currentTurn && this.data.token != currentTurn.actor.data.token)
            slBonus = this.data.flags.defensive; // Prefill Defensive values (see prepareItems() for how defensive flags are assigned)

          else // If it is the actor's turn
          {
            // Prefill dialog according to qualities/flaws
            if (wep.properties.qualities.includes("Accurate"))
              modifier += 10;
            if (wep.properties.qualities.includes("Precise"))
              successBonus += 1;
            if (wep.properties.flaws.includes("Imprecise"))
              slBonus -= 1;
          }
        }
        else // If the actor is not a token
        {
          // If it is NOT the actor's turn
          if (currentTurn && currentTurn.tokenId != this.token._id)
            slBonus = this.data.flags.defensive;

          else // If it is the actor's turn
          {
            // Prefill dialog according to qualities/flaws
            if (wep.properties.qualities.includes("Accurate"))
              modifier += 10;
            if (wep.properties.qualities.includes("Precise"))
              successBonus += 1;
            if (wep.properties.flaws.includes("Imprecise"))
              slBonus -= 1;
          }
        }
      }
      catch // If something went wrong, default to 0 for all prefilled data
      {
        slBonus = 0;
        successBonus = 0;
        modifier = 0;
      }
    }

    // Setup dialog data: title, template, buttons, prefilled data
    let dialogOptions = {
      title: title,
      template : "/systems/wng/templates/chat/weapon-dialog.html",
      // Prefilled dialog data
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        skillCharList : skillCharList,
        slBonus : slBonus || 0,
        successBonus : successBonus || 0,
        modifier : modifier || 0,
        defaultSelection : defaultSelection,
        advantage : this.data.data.status.advantage.value || 0
      },
      callback : (html, roll) => {
        // When dialog confirmed, fill testData dialog information
        // Note that this does not execute until DiceWNG.prepareTest() has finished and the user confirms the dialog
        cardOptions.rollMode =    html.find('[name="rollMode"]').val();
        testData.testModifier =   Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = WNG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus =   Number(html.find('[name="successBonus"]').val());
        testData.slBonus =        Number(html.find('[name="slBonus"]').val());
        let skillSelected =       skillCharList[Number(html.find('[name="skillSelected"]').val())];

        // Determine final target if a characteristic was selected
        if (skillSelected == "Weapon Skill" || skillSelected == "Ballistic Skill")
        {
          if (skillSelected == "Weapon Skill")
            testData.target = this.data.data.characteristics.ws.value
          else if (skillSelected == "Ballistic Skill")
            testData.target = this.data.data.characteristics.bs.value

          testData.target += testData.testModifier + testData.testDifficulty;
        }
        else // If a skill was selected
        {
          // If using the appropriate skill, set the target number to characteristic value + advances + modifiers
          // Target value is the final value being tested against, after all modifiers and bonuses are added
          let skillUsed = testData.extra.weapon.skillToUse;

          testData.target =
          this.data.data.characteristics[skillUsed.data.characteristic.value].value
          + testData.testModifier
          + testData.testDifficulty
          + skillUsed.data.advances.value;
        }

        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');

        let talentBonuses = html.find('[name = "talentBonuses"]').val();

        // Combine all Talent Bonus values (their times taken) into one sum
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        // Use the assigned roll function (see below for how rollOverride is assigned, and then
        // DiceWNG.prepareTest() for more info on how the override is used, if any)
        roll(testData, cardOptions);

        // Reduce ammo if necessary
        if (ammo && skillSelected != "Weapon Skill" && weapon.data.weaponGroup.value != "Entangling")
        {
          ammo.data.quantity.value--;
          this.updateEmbeddedEntity("OwnedItem", {_id: ammo._id, "data.quantity.value" : ammo.data.quantity.value });
        }
      },

      // Override the default test evaluation to use specialized rollWeaponTest function
      rollOverride : this.constructor.weaponOverride
    };

    // Call the universal cardOptions helper
    let cardOptions = this._setupCardOptions("systems/wng/templates/chat/weapon-card.html", title)

    // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
    DiceWNG.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }


  /**
   * Display a dialog for the user to choose casting or channelling.
   *
   * When clicking on a spell, the user will get an option to Cast or Channel that spell
   * Each option leads to their respective "setup" functions.
   *
   * @param {Object} spell     The spell item clicked on, petty spells will automatically be Casted, without the option to channel.
   *
   */
  spellDialog(spell) {
    // Do not show the dialog for Petty spells, just cast it.
    if (spell.data.lore.value == "petty")
      this.setupCast(spell)
    else
    {
      renderTemplate("systems/wng/templates/chat/cast-channel-dialog.html").then(dlg => {
        new Dialog({
          title: game.i18n.localize("ACTOR.CastOrChannel"),
          content: dlg,
          buttons: {
            cast: {
              label: game.i18n.localize("Cast"),
              callback: btn => {
                this.setupCast(spell);
              }
            },
            channel: {
              label: game.i18n.localize("Channel"),
              callback: btn => {
                this.setupChannell(spell);
              }
            },
          },
          default: 'cast'
        }).render(true);
      })
    }
  }

  /**
   * Setup a Casting Test.
   *
   * Casting tests are more complicated due to the nature of spell miscasts, ingredients, etc. Whatever ingredient
   * is selected will automatically be used and negate one miscast. For the spell rolling logic, see DiceWNG.rollCastTest
   * where all this data is passed to in order to calculate the roll result.
   *
   * @param {Object} spell    The spell Item being Casted. The spell item has information like CN, lore, and current ingredient ID
   *
   */
  setupCast(spell) {
    let title = game.i18n.localize("CastingTest") + " - " + spell.name;

    // castSkill array holds the available skills/characteristics to cast with - Casting: Intelligence
    let castSkills = [{key : "int", name : "Intelligence"}]

    // if the actor has Language (Magick), add it to the array.
    castSkills = castSkills.concat(this.items.filter(i => i.name.toLowerCase() == "language (magick)" && i.type == "skill"))

    // Default to Language Magick if it exists
    let defaultSelection = castSkills.findIndex(i => i.name.toLowerCase() == "language (magick)")

    // Whether the actor has Instinctive Diction is important in the test rolling logic
    let instinctiveDiction = (this.data.flags.talentTests.findIndex(x=>x.talentName.toLowerCase() == "instinctive diction") > -1) // instinctive diction boolean

    // Prepare the spell to have the complete data object, including damage values, range values, CN, etc.
    let preparedSpell = this.prepareSpellOrPrayer(spell);
    let testData = {
      target : 0,
      extra : { // Store this data to be used by the test logic
        spell : preparedSpell,
        malignantInfluence : false,
        ingredient : false,
        ID : instinctiveDiction,
        size : this.data.data.details.size.value
      }
    };

    // If the spell does damage, default the hit location to checked
    if (preparedSpell.damage)
      testData.hitLocation = true;

    // Setup dialog data: title, template, buttons, prefilled data
    let dialogOptions = {
      title: title,
      template : "/systems/wng/templates/chat/spell-dialog.html",
      // Prefilled dialog data
      data : {
        hitLocation : testData.hitLocation,
        malignantInfluence : testData.malignantInfluence,
        talents : this.data.flags.talentTests,
        advantage : this.data.data.status.advantage.value || 0,
        defaultSelection : defaultSelection,
        castSkills : castSkills
      },
      callback : (html, roll) => {
        // When dialog confirmed, fill testData dialog information
        // Note that this does not execute until DiceWNG.prepareTest() has finished and the user confirms the dialog
        cardOptions.rollMode =    html.find('[name="rollMode"]').val();
        testData.testModifier =   Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = WNG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus =   Number(html.find('[name="successBonus"]').val());
        testData.slBonus =        Number(html.find('[name="slBonus"]').val());

        let skillSelected = castSkills[Number(html.find('[name="skillSelected"]').val())];

        // If an actual skill (Language Magick) was selected, use that skill to calculate the target number
        if (skillSelected.key != "int")
        {
          testData.target = this.data.data.characteristics[skillSelected.data.data.characteristic.value].value
          + skillSelected.data.data.advances.value
          + testData.testDifficulty
          + testData.testModifier;
        }
        else // if a characteristic was selected, use just the characteristic
        {
          testData.target = this.data.data.characteristics.int.value
          + testData.testDifficulty
          + testData.testModifier;
        }

        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        testData.extra.malignantInfluence = html.find('[name="malignantInfluence"]').is(':checked');

        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        // Combine all Talent Bonus values (their times taken) into one sum
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        // Find ingredient being used, if any
        let ing = duplicate(this.getEmbeddedEntity("OwnedItem", testData.extra.spell.data.currentIng.value))
        if (ing)
        {
          // Decrease ingredient quantity
          testData.extra.ingredient = true;
          ing.data.quantity.value--;
          this.updateEmbeddedEntity("OwnedItem", ing);
        }
        // If quantity of ingredient is 0, disregard the ingredient
        else if (!ing || ing.data.data.quantity.value <= 0)
          testData.extra.ingredient = false;

        // Use the assigned roll function (see below for how rollOverride is assigned, and then
        // DiceWNG.prepareTest() for more info on how the override is used, if any)
        roll(testData, cardOptions);
      },
      // Override the default test evaluation to use specialized rollCastTest function
      rollOverride : this.constructor.castOverride
    };

    // Call the universal cardOptions helper
    let cardOptions = this._setupCardOptions("systems/wng/templates/chat/spell-card.html", title)

    // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
    DiceWNG.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  /**
   * Setup a Channelling Test.
   *
   * Channelling tests are more complicated due to the nature of spell miscasts, ingredients, etc. Whatever ingredient
   * is selected will automatically be used and mitigate miscasts. For the spell rolling logic, see DiceWNG.rollChannellTest
   * where all this data is passed to in order to calculate the roll result.
   *
   * @param {Object} spell    The spell Item being Channelled. The spell item has information like CN, lore, and current ingredient ID
   * This spell SL will then be updated accordingly.
   *
   */
  setupChannell(spell) {
    let title = game.i18n.localize("ChannellingTest") +  " - " + spell.name;

    // channellSkills array holds the available skills/characteristics to  with - Channelling: Willpower
    let channellSkills = [{key : "wp", name : "Willpower"}]

    // if the actor has any channel skills, add them to the array.
    channellSkills = channellSkills.concat(this.items.filter(i => i.name.toLowerCase().includes("channel") && i.type == "skill"))

    // Find the spell lore, and use that to determine the default channelling selection
    let spellLore = spell.data.lore.value;
    let defaultSelection 
    if (spell.data.wind && spell.data.wind.value)
    {
      defaultSelection = channellSkills.indexOf(channellSkills.find(x => x.name.includes(spell.data.wind.value)))
      if (defaultSelection == -1)
      {
        let customChannellSkill = this.items.find(i => i.name.toLowerCase().includes(spell.data.wind.value.toLowerCase()) && i.type == "skill");
        if (customChannellSkill)
        {
          channellSkills.push(customChannellSkill)
          defaultSelection =  channellSkills.length-1
        }
      }
    }
    else
    {
      defaultSelection = channellSkills.indexOf(channellSkills.find(x => x.name.includes(WNG.magicWind[spellLore])));
    }

    if (spellLore == "witchcraft")
      defaultSelection = channellSkills.indexOf(channellSkills.find(x => x.name.includes("Channelling")))

    // Whether the actor has Aethyric Attunement is important in the test rolling logic
    let aethyricAttunement = (this.data.flags.talentTests.findIndex(x=>x.talentName.toLowerCase() == "aethyric attunement") > -1) // aethyric attunement boolean

    let testData = {
      target : 0,
      extra : { // Store data to be used by the test logic
        spell : this.prepareSpellOrPrayer(spell),
        malignantInfluence : false,
        ingredient : false,
        AA : aethyricAttunement,
        size : this.data.data.details.size.value
      }
    };

    // Setup dialog data: title, template, buttons, prefilled data
    let dialogOptions = {
      title: title,
      template : "/systems/wng/templates/chat/channel-dialog.html",
      // Prefilled dialog data
      data : {
        malignantInfluence : testData.malignantInfluence,
        channellSkills : channellSkills,
        defaultSelection: defaultSelection,
        talents : this.data.flags.talentTests,
        advantage : "N/A"
      },
      callback : (html, roll) => {
          // When dialog confirmed, fill testData dialog information
        // Note that this does not execute until DiceWNG.prepareTest() has finished and the user confirms the dialog
        cardOptions.rollMode =    html.find('[name="rollMode"]').val();
        testData.testModifier =   Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = WNG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus =   Number(html.find('[name="successBonus"]').val());
        testData.slBonus =        Number(html.find('[name="slBonus"]').val());
        testData.extra.malignantInfluence = html.find('[name="malignantInfluence"]').is(':checked');

        let skillSelected = channellSkills[Number(html.find('[name="skillSelected"]').val())];
        // If an actual Channelling skill was selected, use that skill to calculate the target number
        if (skillSelected.key != "wp")
        {
          testData.target = testData.testModifier + testData.testDifficulty
                            + this.data.data.characteristics[skillSelected.data.data.characteristic.value].value
                            + skillSelected.data.data.advances.value
          testData.extra.channellSkill = skillSelected.data
        }
        else // if the ccharacteristic was selected, use just the characteristic
          testData.target = testData.testModifier + testData.testDifficulty + this.data.data.characteristics.wp.value

        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        // Combine all Talent Bonus values (their times taken) into one sum
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)


        // Find ingredient being used, if any
        let ing = duplicate(this.getEmbeddedEntity("OwnedItem", testData.extra.spell.data.currentIng.value))
        if (ing)
        {
          // Decrease ingredient quantity
          testData.extra.ingredient = true;
          ing.data.quantity.value--;
          this.updateEmbeddedEntity("OwnedItem", ing);
        }
        // If quantity of ingredient is 0, disregard the ingredient
        else if(!ing || ing.data.data.quantity.value <= 0)
          testData.extra.ingredient = false;

        // Use the assigned roll function (see below for how rollOverride is assigned, and then
        // DiceWNG.prepareTest() for more info on how the override is used, if any)
        roll(testData, cardOptions);
      },
      // Override the default test evaluation to use specialized rollCastTest function
      rollOverride : this.constructor.channellOverride
    };

    // Call the universal cardOptions helper
    let cardOptions = this._setupCardOptions("systems/wng/templates/chat/channel-card.html", title)

    // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
    DiceWNG.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  /**
   * Setup a Prayer Test.
   *
   * Prayer tests are fairly simple, with the main complexity coming from sin and wrath of the gods,
   * the logic of which can be found in DiceWNG.rollPrayerTest, where all this data here is passed
   * to in order to calculate the roll result.
   *
   * @param {Object} prayer    The prayer Item being used, compared to spells, not much information
   * from the prayer itself is needed.
   */
  setupPrayer(prayer) {
    let title = game.i18n.localize("PrayerTest") + " - " + prayer.name;

    // ppraySkills array holds the available skills/characteristics to pray with - Prayers: Fellowship
    let praySkills = [{key : "fel", name : "Fellowship"}]

    // if the actor has the Pray skill, add it to the array.
    praySkills = praySkills.concat(this.items.filter(i => i.name.toLowerCase() == "pray" && i.type == "skill"));

    // Default to Pray skill if available
    let defaultSelection = praySkills.findIndex(i => i.name.toLowerCase() == "pray")

    // Prepare the prayer to have the complete data object, including damage values, range values, etc.
    let preparedPrayer = this.prepareSpellOrPrayer(prayer);
    let testData = { // Store this data to be used in the test logic
      target : 0,
      hitLocation : false,
      extra : {
        prayer : preparedPrayer,
        size : this.data.data.details.size.value,
        sin: this.data.data.status.sin.value
      }
    };


    // If the spell does damage, default the hit location to checked
    if (preparedPrayer.damage)
      testData.hitLocation = true;

    // Setup dialog data: title, template, buttons, prefilled data
    let dialogOptions = {
      title: title,
      template : "/systems/wng/templates/chat/prayer-dialog.html",
      // Prefilled dialog data
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        advantage : this.data.data.status.advantage.value || 0,
        praySkills : praySkills,
        defaultSelection : defaultSelection
      },
      callback : (html, roll) => {
        // When dialog confirmed, fill testData dialog information
        // Note that this does not execute until DiceWNG.prepareTest() has finished and the user confirms the dialog
        cardOptions.rollMode =    html.find('[name="rollMode"]').val();
        testData.testModifier =   Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = WNG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus =   Number(html.find('[name="successBonus"]').val());
        testData.slBonus =        Number(html.find('[name="slBonus"]').val());

        let skillSelected = praySkills[Number(html.find('[name="skillSelected"]').val())];
        // If an actual skill (Pray) was selected, use that skill to calculate the target number
        if (skillSelected.key != "fel")
        {
          testData.target = this.data.data.characteristics[skillSelected.data.data.characteristic.value].value
          + skillSelected.data.data.advances.value
          + testData.testDifficulty
          + testData.testModifier;
        }
        else // if a characteristic was selected, use just the characteristic
        {
          testData.target = this.data.data.characteristics.fel.value
          + testData.testDifficulty
          + testData.testModifier;
        }

        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');

        let talentBonuses = html.find('[name = "talentBonuses"]').val();
        // Combine all Talent Bonus values (their times taken) into one sum
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        // Use the assigned roll function (see below for how rollOverride is assigned, and then
        // DiceWNG.prepareTest() for more info on how the override is used, if any)
        roll(testData, cardOptions);
      },
      // Override the default test evaluation to use specialized rollPrayerTest function
      rollOverride : this.constructor.prayerOverride
    };

    // Call the universal cardOptions helper
    let cardOptions = this._setupCardOptions("systems/wng/templates/chat/prayer-card.html", title)

    // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
    DiceWNG.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }

  /**
   * Setup a Trait Test.
   *
   * Some traits are rollable, and so are assigned a rollable characteristic, this is where
   * rolling those characteristics is setup. Additonally, sometimes these traits have a
   * "Bonus characteristic" which in most all cases means what characteristic bonus to add
   * to determine damage. See the logic in traitOverride.
   *
   * @param {Object} trait   The trait Item being used, containing which characteristic/bonus characteristic to use
   */
  setupTrait(trait) {
    if (!trait.data.rollable.value)
      return;
    let title =   WNG.characteristics[trait.data.rollable.rollCharacteristic] + ` ${game.i18n.localize("Test")} - ` + trait.name;
    let testData = {
      hitLocation : false,
      extra : { // Store this trait data for later use
        trait : trait,
        size : this.data.data.details.size.value
      }
    };

    // Default hit location checked if the rollable trait's characteristic is WS or BS
    if (trait.data.rollable.rollCharacteristic == "ws" || trait.data.rollable.rollCharacteristic == "bs" )
      testData.hitLocation = true;

    // Setup dialog data: title, template, buttons, prefilled data
    let dialogOptions = {
      title: title,
      template : "/systems/wng/templates/chat/skill-dialog.html", // Reuse skill dialog
      // Prefilled dialog data
      data : {
        hitLocation : testData.hitLocation,
        talents : this.data.flags.talentTests,
        characteristicList : WNG.characteristics,
        characteristicToUse : trait.data.rollable.rollCharacteristic,
        advantage : this.data.data.status.advantage.value || 0,
        testDifficulty : trait.data.rollable.defaultDifficulty
      },
      callback : (html, roll) => {
        // When dialog confirmed, fill testData dialog information
        // Note that this does not execute until DiceWNG.prepareTest() has finished and the user confirms the dialog
        cardOptions.rollMode =    html.find('[name="rollMode"]').val();
        testData.testModifier =   Number(html.find('[name="testModifier"]').val());
        testData.testDifficulty = WNG.difficultyModifiers[html.find('[name="testDifficulty"]').val()];
        testData.successBonus =   Number(html.find('[name="successBonus"]').val());
        testData.slBonus =        Number(html.find('[name="slBonus"]').val());
        let characteristicToUse = html.find('[name="characteristicToUse"]').val();
        // Target value is the final value being tested against, after all modifiers and bonuses are added
        testData.target = this.data.data.characteristics[characteristicToUse].value
                              + testData.testModifier
                              + testData.testDifficulty
        testData.hitLocation = html.find('[name="hitLocation"]').is(':checked');
        let talentBonuses =    html.find('[name = "talentBonuses"]').val();

        // Combine all Talent Bonus values (their times taken) into one sum
        testData.successBonus += talentBonuses.reduce(function (prev, cur){
          return prev + Number(cur)
        }, 0)

        // Use the assigned roll function (see below for how rollOverride is assigned, and then
        // DiceWNG.prepareTest() for more info on how the override is used, if any)
        roll(testData, cardOptions);
        },
      // Override the default test evaluation to use a specialized function to handle traits
      rollOverride : this.constructor.traitOverride
    };

    // Call the universal cardOptions helper
    let cardOptions = this._setupCardOptions("systems/wng/templates/chat/skill-card.html", title)

    // Provide these 3 objects to prepareTest() to create the dialog and assign the roll function
    DiceWNG.prepareTest({
      dialogOptions : dialogOptions,
      testData : testData,
      cardOptions : cardOptions});
  }


  /**
   * Universal card options for setup functions.
   *
   * The setup_____() functions all use the same cardOptions, just different templates. So this is
   * a standardized helper function to maintain DRY code.
   *
   * @param {string} template   Fileptah to the template being used
   * @param {string} title      Title of the Test to be displayed on the dialog and card
   */
  _setupCardOptions(template, title)
  {
    let cardOptions = {
      speaker: {
        alias: this.data.token.name,
        actor : this.data._id,
      },
      title: title,
      template : template,
      flags : {img: this.data.token.randomImg ? this.data.img : this.data.token.img} 
      // img to be displayed next to the name on the test card - if it's a wildcard img, use the actor image
    }

    // If the test is coming from a token sheet
    if (this.token)
    {
      cardOptions.speaker.alias = this.token.data.name; // Use the token name instead of the actor name
      cardOptions.speaker.token = this.token.data._id;
      cardOptions.speaker.scene = canvas.scene._id
      cardOptions.flags.img = this.token.data.img; // Use the token image instead of the actor image
    }
    else // If a linked actor - use the currently selected token's data if the actor id matches
    {
      let speaker = ChatMessage.getSpeaker()
      if (speaker.actor == this.data._id)
      {
        cardOptions.speaker.alias = speaker.alias
        cardOptions.speaker.token = speaker.token
        cardOptions.speaker.scene = speaker.scene
        cardOptions.flags.img = speaker.token ? canvas.tokens.get(speaker.token).data.img : cardOptions.flags.img
      }
    }

    return cardOptions
  }

  /* --------------------------------------------------------------------------------------------------------- */
  /* --------------------------------------------- Roll Overides --------------------------------------------- */
  /* --------------------------------------------------------------------------------------------------------- */
  /**
   * Roll overrides are specialized functions for different types of rolls. In each override, DiceWNG is called
   * to perform the test logic, which has its own specialized functions for different types of tests. For exapmle,
   * weaponOverride() calls DiceWNG.rollWeaponTest(). Additionally, any post-roll logic that needs to be performed
   * is done here. For example, Income tests use incomeOverride, which determines how much money is made after the
   * roll is completed. A normal Skill Test does not go through this process, instead using defaultRoll override,
   * however both overrides just use the standard DiceWNG.rollTest().
   *
  /* --------------------------------------------------------------------------------------------------------- */

  /**
   * Default Roll override, the standard rolling method for general tests.
   *
   * defaultRoll is the default roll override (see DiceWNG.prepareTest() for where it's assigned). This follows
   * the basic steps. Call DiceWNG.rollTest for standard test logic, send the result and display data to
   * DiceWNG.renderRollCard() as well as handleOpposedTarget().
   *
   * @param {Object} testData         All the data needed to evaluate test results - see setupSkill/Characteristic
   * @param {Object} cardOptions      Data for the card display, title, template, etc.
   * @param {Object} rerenderMessage  The message to be updated (used if editing the chat card)
   */
  static async  defaultRoll(testData, cardOptions, rerenderMessage = null) {
    let result = DiceWNG.rollTest(testData);
    result.postFunction = "defaultRoll";
    if (testData.extra)
      mergeObject(result, testData.extra);

    Hooks.call("wng:rollTest", result)

    if (game.user.targets.size)
        cardOptions.title += ` - ${game.i18n.localize("Opposed")}`

    await DiceWNG.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
      OpposedWNG.handleOpposedTarget(msg) // Send to handleOpposed to determine opposed status, if any.
    })
  }

  /**
   * incomeOverride is used to add income calculation to Skill tests.
   *
   * Normal skill Tests just use defaultRoll() override, however, when testing Income, this override is used instead
   * because it adds 'post processing' in the form of determining how much money was earned. See this.setupSkill()
   * for how this override is assigned.
   *
   * @param {Object} testData         All the data needed to evaluate test results - see setupSkill()
   * @param {Object} cardOptions      Data for the card display, title, template, etc.
   * @param {Object} rerenderMessage  The message to be updated (used if editing the chat card)
   */
  static async incomeOverride(testData, cardOptions, rerenderMessage = null)
  {
    let result = DiceWNG.rollTest(testData);
    result.postFunction = "incomeOverride"

    Hooks.call("wng:rollIncomeTest", result)


    if (game.user.targets.size)
        cardOptions.title += ` - ${game.i18n.localize("Opposed")}`

    let dieAmount = WNG.earningValues[testData.income.tier][0] // b, s, or g maps to 2d10, 1d10, or 1 respectively (takes the first letter)
    dieAmount = Number(dieAmount) * testData.income.standing;     // Multilpy that first letter by your standing (Brass 4 = 8d10 pennies)
    let moneyEarned;
    if (testData.income.tier != "g") // Don't roll for gold, just use standing value
    {
      dieAmount = dieAmount + "d10";
      moneyEarned = new Roll(dieAmount).roll().total;
    }
    else
      moneyEarned = dieAmount;

    // After rolling, determined how much, if any, was actually earned
    if (result.description.includes("Success"))
    {
      result.incomeResult = game.i18n.localize("INCOME.YouEarn") + " " + moneyEarned;
      switch (testData.income.tier)
      {
        case "b":
          result.incomeResult += " brass pennies."
          break;
        case "s":
          result.incomeResult += " silver shillings."
          break;
        case "g":
            if (moneyEarned > 1)
              result.incomeResult += " gold crowns."
            else
              result.incomeResult += " gold crown"
            break;
      }
    }
    else if (Number(result.SL) > -6)
    {
      moneyEarned /= 2;
      result.incomeResult = game.i18n.localize("INCOME.YouEarn") + " " + moneyEarned;
      switch (testData.income.tier)
      {
        case "b":
          result.incomeResult += " brass pennies."
          break;
        case "s":
          result.incomeResult += " silver shillings."
          break;
        case "g":
            if (moneyEarned > 1)
              result.incomeResult += " gold crowns."
            else
              result.incomeResult += " gold crown"
            break;
      }
    }
    else
    {
      result.incomeResult = game.i18n.localize("INCOME.Failure")
      moneyEarned = 0;
    }
    result.moneyEarned = moneyEarned + testData.income.tier;
    await DiceWNG.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
      OpposedWNG.handleOpposedTarget(msg)
    })
  }

  /**
   * weaponOverride is used for weapon tests, see setupWeapon for how it's assigned.
   *
   * weaponOverride doesn't add any special functionality, it's main purpose being to call
   * DiceWNG.rollWeaponTest() instead of the generic DiceWNG.rollTest()
   *
   * @param {Object} testData         All the data needed to evaluate test results - see setupWeapon()
   * @param {Object} cardOptions      Data for the card display, title, template, etc.
   * @param {Object} rerenderMessage  The message to be updated (used if editing the chat card)
   */
  static async weaponOverride(testData, cardOptions, rerenderMessage = null)
  {
    if (game.user.targets.size)
        cardOptions.title += ` - ${game.i18n.localize("Opposed")}`

    let result = DiceWNG.rollWeaponTest(testData);
    result.postFunction = "weaponOverride";

    Hooks.call("wng:rollWeaponTest", result)


    await DiceWNG.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
      OpposedWNG.handleOpposedTarget(msg) // Send to handleOpposed to determine opposed status, if any.
    })
  }

  /**
   * castOverride is used for casting tests, see setupCast for how it's assigned.
   *
   * The only special functionality castOverride adds is reseting spell SL channelled back to 0, other than that,
   * it's main purpose is to call DiceWNG.rollCastTest() instead of the generic DiceWNG.rollTest().
   *
   * @param {Object} testData         All the data needed to evaluate test results - see setupCast()
   * @param {Object} cardOptions      Data for the card display, title, template, etc.
   * @param {Object} rerenderMessage  The message to be updated (used if editing the chat card)
   */
  static async castOverride(testData, cardOptions, rerenderMessage = null)
  {
    if (game.user.targets.size)
        cardOptions.title += ` - ${game.i18n.localize("Opposed")}`

    let result = DiceWNG.rollCastTest(testData);
    result.postFunction = "castOverride";

    Hooks.call("wng:rollCastTest", result)


    // Update spell to reflect SL from channelling resetting to 0
    WNG_Utility.getSpeaker(cardOptions.speaker).updateEmbeddedEntity("OwnedItem", {_id: testData.extra.spell._id, 'data.cn.SL' : 0});

    await DiceWNG.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
      OpposedWNG.handleOpposedTarget(msg) // Send to handleOpposed to determine opposed status, if any.
    })
  }

  /**
   * channellOverride is used for casting tests, see setupCast for how it's assigned.
   *
   * channellOveride doesn't add any special functionality, it's main purpose being to call
   * DiceWNG.rollChannellTest() instead of the generic DiceWNG.rollTest()
   *
   * @param {Object} testData         All the data needed to evaluate test results - see setupChannell()
   * @param {Object} cardOptions      Data for the card display, title, template, etc.
   * @param {Object} rerenderMessage  The message to be updated (used if editing the chat card)
   */
  static async channellOverride(testData, cardOptions, rerenderMessage = null)
  {
    if (game.user.targets.size)
        cardOptions.title += ` - ${game.i18n.localize("Opposed")}`

    let result = DiceWNG.rollChannellTest(testData, WNG_Utility.getSpeaker(cardOptions.speaker));
    result.postFunction = "channellOverride";

    Hooks.call("wng:rollChannelTest", result)

    await DiceWNG.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
      OpposedWNG.handleOpposedTarget(msg) // Send to handleOpposed to determine opposed status, if any.
    })
  }

  /**
   * prayerOverride is used for casting tests, see setupCast for how it's assigned.
   *
   * prayerOverride doesn't add any special functionality, it's main purpose being to call
   * DiceWNG.rollPrayerTest() instead of the generic DiceWNG.rollTest()
   *
   * @param {Object} testData         All the data needed to evaluate test results - see setupPrayer()
   * @param {Object} cardOptions      Data for the card display, title, template, etc.
   * @param {Object} rerenderMessage  The message to be updated (used if editing the chat card)
   */
  static async prayerOverride(testData, cardOptions, rerenderMessage = null)
  {
    if (game.user.targets.size)
        cardOptions.title += ` - ${game.i18n.localize("Opposed")}`

    let result = DiceWNG.rollPrayTest(testData, WNG_Utility.getSpeaker(cardOptions.speaker));
    result.postFunction = "prayerOverride";

    Hooks.call("wng:rollPrayerTest", result)

    await DiceWNG.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
      OpposedWNG.handleOpposedTarget(msg) // Send to handleOpposed to determine opposed status, if any.
    })
  }

  /**
   * traitOverride is used for Trait tests, see setupTrait for how it's assigned.
   *
   * Since traitOverride calls the generic DiceWNG.rollTest(), which does not consider damage,
   * some post processing must be done to calculate damage values.
   *
   * @param {Object} testData         All the data needed to evaluate test results - see setupTrait()
   * @param {Object} cardOptions      Data for the card display, title, template, etc.
   * @param {Object} rerenderMessage  The message to be updated (used if editing the chat card)
   */
  static async traitOverride(testData, cardOptions, rerenderMessage = null)
  {
    if (game.user.targets.size)
        cardOptions.title += ` - ${game.i18n.localize("Opposed")}`

    let result = DiceWNG.rollTest(testData);
    result.postFunction = "traitOverride";
    try
    {
      // If the specification of a trait is a number, it's probably damage. (Animosity (Elves) - not a number specification: no damage)
      if (!isNaN(testData.extra.trait.data.specification.value)) //         (Bite 7 - is a number specification, do damage)
      {
        testData.extra.damage = Number(result.SL) // Start damage off with SL

        if (Number(testData.extra.trait.data.specification.value)) // Add the specification starting value
          testData.extra.damage +=  Number(testData.extra.trait.data.specification.value)

        if (testData.extra.trait.data.rollable.bonusCharacteristic) // Add the bonus characteristic (probably strength)
          testData.extra.damage += Number(WNG_Utility.getSpeaker(cardOptions.speaker).data.data.characteristics[testData.extra.trait.data.rollable.bonusCharacteristic].bonus) || 0;
      }
    }
    catch (error)
    {
      ui.notifications.error(game.i18n.localize("CHAT.DamageError") + " " + error)
    } // If something went wrong calculating damage, do nothing and still render the card

    if (testData.extra)
      mergeObject(result, testData.extra);

    Hooks.call("wng:rollTraitTest", result)

      await DiceWNG.renderRollCard(cardOptions, result, rerenderMessage).then(msg => {
        OpposedWNG.handleOpposedTarget(msg) // Send to handleOpposed to determine opposed status, if any.
      })
  }


  /* --------------------------------------------------------------------------------------------------------- */
  /* --------------------------------- Preparation & Calculation Functions ----------------------------------- */
  /* --------------------------------------------------------------------------------------------------------- */
  /**
   * Preparation function takes raw item data and processes it with actor data, typically using the calculate
   * functions to do so. For example, A weapon passed into prepareWeaponCombat will turn the weapon's damage 
   * from "SB + 4" to the actual damage value by using the actor's strength bonus. See the specific functions
   * below for more details on what exactly is processed. These functions are used when rolling a test 
   * (determining a weapon's base damage) or setting up the actor sheet to be displayed (displaying the damage
   * in the combat tab).
   *
  /* --------------------------------------------------------------------------------------------------------- */

  /**
   * Prepares actor data for display and other features.
   * 
   * prepare() is the principal function behind taking every aspect of an actor and processing them
   * for display (getData() - see ActorSheetWNG) and other needs. This is where all items (call to 
   * prepareItems()) are prepared and  organized, then used to calculate different Actor features, 
   * such as the Size trait influencing wounds and token size, or how talents might affect damage. 
   * In many areas here, these talents/traits that affect some calculation are updated only if a 
   * difference is detected to avoid infinite loops, I would like an alternative but I'm not sure 
   * where to go instead.
   * 
   * NOTE: THIS FUNCTION IS NOT TO BE CONFUSED WITH prepareData(). That function is called upon updating 
   * an actor. This function is called whenever the sheet is rendered.
   */
  prepare()
  {
    let preparedData = duplicate(this.data)
    console.log(preparedData)
    for(let sk in preparedData.data.skills)
    {
      preparedData.data.skills[sk].attribute = WNG.attributeAbbrev[preparedData.data.skills[sk].attribute]
    }
    // Call prepareItems first to organize and process OwnedItems
    mergeObject(preparedData, this.prepareItems())

    return preparedData;
  }

  /**
   * Augments actor preparation with additional calculations for Characters.
   * 
   * Characters have more features and so require more calculation. Specifically,
   * this will add pure soul talent advances to max corruption, as well as display
   * current career values (details, advancement indicatiors, etc.). 
   * 
   * Note that this functions requires actorData to be prepared, by this.prepare().
   * 
   * @param {Object} actorData  prepared actor data to augment 
   */
  prepareCharacter(actorData)
  {
   
  }

  /**
   * Augments actor preparation with additional calculations for NPCs.
   * 
   * Currently NPCs do not need any additional calculation, hooray.
   * 
   * @param {Object} actorData  prepared actor data 
   */
  prepareNPC(actorData)
  {
    // If no actor data passed in, return this.prepare() which calls this function properly
    if (!actorData)
    {
      return this.prepare()
    }
  }

  /**
   * Augments actor preparation with additional calculations for Creatures.
   * 
   * preparing for Creatures mainly involves excluding traits that were marked to be excluded,
   * then replacing the traits array with only the included traits (which is used by prepare()).
   * 
   * Note that this functions requires actorData to be prepared, by this.prepare().
   * 
   * @param {Object} actorData  prepared actor data to augment 
   */
  prepareCreature(actorData)
  {
    // If no actor data passed in, return this.prepare() which calls this function properly
    if (!actorData)
    {
      return this.prepare()
    }

    // mark each trait as included or not
    for (let trait of actorData.traits)
    {
      if (actorData.data.excludedTraits.includes(trait._id))
      {
        trait.included = false;
      }
      else
      {
        trait.included = true;
      }
    }
 
    // notes traits is all traits - for display in the notes tab
    actorData.notesTraits = actorData.traits.sort(WNG_Utility.nameSorter);
    // "traits" is only included traits 
    actorData.traits = actorData.traits.filter(t => t.included);
 
    // Combine all skills into a skill array (for creatur overview in the maintab)
    actorData.skills = (actorData.basicSkills.concat(actorData.advancedOrGroupedSkills)).sort(WNG_Utility.nameSorter);
    // Filter those skills by those trained (only show skills with an advancement in the main tab)
    actorData.trainedSkills = actorData.skills.filter(s => s.data.advances.value > 0) 
 
    for (let weapon of actorData.weapons)
    {
      try // For each weapon, if it has ammo equipped, add the ammo name to the weapon
      {   // This is needed because we can't have both ammo dropdowns functional in the main tab and the combat tab easily
        if (weapon.data.currentAmmo.value)
          weapon.ammoName = actorData.inventory.ammunition.items.find(a => a._id == weapon.data.currentAmmo.value).name;
      }
      catch
      {}
    }
  }

  /**
   * Iterates through the Owned Items, processes them and organizes them into containers.
   * 
   * This behemoth of a function goes through all Owned Items, separating them into individual arrays
   * that the html templates use. Before adding them into the array, they are typically processed with
   * the actor data, which can either be a large function itself (see prepareWeaponCombat) or not, such
   * as career items which have minimal processing. These items, as well as some auxiliary data (e.g.
   * encumbrance, AP) are bundled into an return object
   * 
   */
  prepareItems()
  {
    let actorData = duplicate(this.data)
    // These containers are for the various different tabs
    const careers = [];
    const basicSkills = [];
    const advancedOrGroupedSkills = [];
    const talents = [];
    const traits = [];
    const weapons = [];
    const armour = [];
    const injuries = [];
    const grimoire = [];
    const petty = [];
    const blessings = [];
    const miracles = [];
    const psychology = [];
    const mutations = [];
    const diseases = [];
    const criticals = [];
    let penalties = {
      [game.i18n.localize("Armour")]: {
        value: ""
      },
      [game.i18n.localize("Injury")]: {
        value: ""
      },
      [game.i18n.localize("Mutation")]: {
        value: ""
      },
      [game.i18n.localize("Criticals")]: {
        value: ""
      },
    };

    const AP = {
      head: {
        value: 0,
        layers: [],
      },
      body: {
        value: 0,
        layers: [],
      },
      rArm: {
        value: 0,
        layers: [],
      },
      lArm: {
        value: 0,
        layers: [],
      },
      rLeg: {
        value: 0,
        layers: [],
      },
      lLeg: {
        value: 0,
        layers: [],
      },
      shield: 0
    }

    // Inventory object is for the Trappings tab - each sub object is for an individual inventory section
    const inventory = {
      weapons: {
        label: game.i18n.localize("WNG.TrappingType.Weapon"), // Label - what is displayed in the inventory section header
        items: [],                                  // Array of items in the section
        toggle: true,                               // Is there a toggle in the section? (Equipped, worn, etc.)
        toggleName: game.i18n.localize("Equipped"), // What is the name of the toggle in the header
        show: false,                                // Should this section be shown (if an item exists in this list, it is set to true)
        dataType: "weapon"                          // What type of FVTT Item is in this section (used by the + button to add an item of this type)
      },
      armor: {
        label: game.i18n.localize("WNG.TrappingType.Armour"),
        items: [],
        toggle: true,
        toggleName: game.i18n.localize("Worn"),
        show: false,
        dataType: "armour"
      },
      ammunition: {
        label: game.i18n.localize("WNG.TrappingType.Ammunition"),
        items: [],
        show: false,            
        dataType: "ammunition"
      },
      clothingAccessories: {
        label: game.i18n.localize("WNG.TrappingType.ClothingAccessories"),
        items: [],
        toggle: true,
        toggleName: game.i18n.localize("Worn"),
        show: false,
        dataType: "trapping"
      },
      booksAndDocuments: {
        label: game.i18n.localize("WNG.TrappingType.BooksDocuments"),
        items: [],
        show: false,
        dataType: "trapping"
      },
      toolsAndKits: {
        label: game.i18n.localize("WNG.TrappingType.ToolsKits"),
        items: [],
        show: false,
        dataType: "trapping"
      },
      foodAndDrink: {
        label: game.i18n.localize("WNG.TrappingType.TradeTools"),
        items: [],
        show: false,
        dataType: "trapping"
      },
      drugsPoisonsHerbsDraughts: {
        label: game.i18n.localize("WNG.TrappingType.DrugsPoisonsHerbsDraughts"),
        items: [],
        show: false,
        dataType: "trapping"
      },
      misc: {
        label: game.i18n.localize("WNG.TrappingType.Misc"),
        items: [],
        show: true,
        dataType: "trapping"
      }
    };
    const inContainers = []; // inContainers is the temporary storage for items within a container


    let hasSpells = false;    // if the actor has atleast a single spell - used to display magic tab
    let hasPrayers = false;   // if the actor has atleast a single prayer - used to display religion tab
    let defensiveCounter = 0; // Counter for weapons with the defensive quality

    // Iterate through items, allocating to containers
    // Items that need more intense processing are sent to a specialized function (see preparation functions below)
    // Physical items are also placed into containers instead of the inventory object if their 'location' is not 0
    // A location of 0 means not in a container, otherwise, the location corresponds to the id of the container the item is in
    for (let i of actorData.items) 
    {
      try 
      {
        i.img = i.img || DEFAULT_TOKEN;

        // *********** TALENTS ***********
        if (i.type === "talent") 
        {
          talents.push(i);
        } 
        // *********** Ammunition ***********
        else if (i.type === "ammunition") 
        {
          inventory.ammunition.items.push(i);
        } 

        // *********** Weapons ***********
        // Weapons are "processed" at the end for efficency
        else if (i.type === "weapon") 
        {
          inventory.weapons.items.push(i);
        } 

        // *********** Armour ***********
        // Armour is prepared only if it is worn, otherwise, it is just pushed to inventory and encumbrance is calculated
        else if (i.type === "armour") 
        {
            inventory.armour.items.push(i);
        } 
        // *********** Injuries ***********
        else if (i.type == "injury") 
        {
          injuries.push(i);
        } 

        // *********** Criticals ***********
        else if (i.type == "critical") 
        {
          criticals.push(i);
        } 

        // *********** Mutations ***********   
        // Some mutations have modifiers - see the penalties section below 
        else if (i.type === "mutation") 
        {
          mutations.push(i);
        } 

      } 
      catch (error) 
      {
        console.error("Something went wrong with preparing item " + i.name + ": " + error)
        ui.notifications.error("Something went wrong with preparing item " + i.name + ": " + error)
        ui.notifications.error("Deleting " + i.name);
        this.deleteEmbeddedEntity("OwnedItem", i._id);
      }
    } // END ITEM SORTING

    // Return all processed objects
    let preparedData = {
      inventory: inventory,
      talents: talents
  }
  return preparedData
}

  /**
   * Calculates the wounds of an actor based on prepared items
   * 
   * Once all the item preparation is done (prepareItems()), we have a list of traits/talents to use that will
   * factor into Wonuds calculation. Namely: Hardy and Size traits. If we find these, they must be considered
   * in Wound calculation. 
   * 
   * @param {Object} actorData    prepared actor data - all items organized and processed 
   * 
   * @returns {Number} Max wound value calculated
   */
  calculateWounds(actorData)
  {
    /// There's both a Hardy Trait and Hardy Talent (thanks C7) so find both.
    let hardyTrait = actorData.traits.find(t => t.name.toLowerCase().includes("hardy"))
    let hardyTalent = actorData.talents.find(t => t.name.toLowerCase().includes("hardy"))

    /// tbMultiplier is the additional amount of TB to add to Wounds. 0 if no Hardy
    let tbMultiplier = (hardyTrait ? 1 : 0)
    if (hardyTalent) // The talent can be taken multiple times, so take into account advances.
      tbMultiplier += hardyTalent.data.advances.value || 0

    // Easy to reference bonuses
    let sb = actorData.data.characteristics.s.bonus;
    let tb = actorData.data.characteristics.t.bonus;
    let wpb =actorData.data.characteristics.wp.bonus;

    if (actorData.flags.autoCalcCritW)
      actorData.data.status.criticalWounds.max = tb;

    let wounds = actorData.data.status.wounds.max;

    if (actorData.flags.autoCalcWounds)
    {
      // Construct trait means you use SB instead of WPB 
      if (actorData.traits.find(t => t.name.toLowerCase().includes("construct")) || actorData.traits.find(t => t.name.toLowerCase().includes("mindless")))
        wpb = sb;
      switch (actorData.data.details.size.value) // Use the size to get the correct formula (size determined in prepare())
      {
        case "tiny":
        wounds = 1 + tb * tbMultiplier;
        break;

        case "ltl":
        wounds = tb + tb * tbMultiplier;
        break;

        case "sml":
        wounds = 2 * tb + wpb + tb * tbMultiplier;
        break;

        case "avg":
        wounds = sb + 2 * tb + wpb + tb * tbMultiplier;
        break;

        case "lrg":
        wounds = 2 * (sb + 2 * tb + wpb + tb * tbMultiplier);
        break;

        case "enor":
        wounds = 4 * (sb + 2 * tb + wpb + tb * tbMultiplier);
        break;

        case "mnst":
        wounds = 8 * (sb + 2 * tb + wpb + tb * tbMultiplier);
        break;
      }
    }

    let swarmTrait = actorData.traits.find(t => t.name.toLowerCase().includes("swarm"))
    if (swarmTrait)
      wounds *= 5;


    return wounds
  }

  /**
   * Apply damage to an actor, taking into account armor, size, and weapons.
   *
   * applyDamage() is typically called at the end of an oppposed tests, where you can
   * right click the chat message and apply damage. This function goes through the
   * process of calculating and reducing damage if needede based on armor, toughness,
   * size, armor qualities/flaws, and weapon qualities/flaws
   *
   * @param {Object} victim       id of actor taking damage
   * @param {Object} opposedData  Test results, all the information needed to calculate damage
   * @param {var}    damageType   enum for what the damage ignores, see config.js
   */
  static applyDamage(victim, opposeData, damageType = DAMAGE_TYPE.NORMAL)
  {
    if (!opposeData.damage)
      return `<b>Error</b>: ${game.i18n.localize("CHAT.DamageAppliedError")}`
    // If no damage value, don't attempt anything
    if (!opposeData.damage.value)
      return game.i18n.localize("CHAT.DamageAppliedErrorTiring");

    // Get actor/tokens for those in the opposed test
    let actor = WNG_Utility.getSpeaker(victim);
    let attacker = WNG_Utility.getSpeaker(opposeData.speakerAttack)

    // Start wound loss at the damage value
    let totalWoundLoss = opposeData.damage.value
    let newWounds = actor.data.data.status.wounds.value;
    let applyAP = (damageType == DAMAGE_TYPE.IGNORE_TB || damageType == DAMAGE_TYPE.NORMAL)
    let applyTB = (damageType == DAMAGE_TYPE.IGNORE_AP || damageType == DAMAGE_TYPE.NORMAL)

    // Start message update string
    let updateMsg = `<b>${game.i18n.localize("CHAT.DamageApplied")}</b><span class = 'hide-option'>: @TOTAL`;
    if (damageType != DAMAGE_TYPE.IGNORE_ALL)
      updateMsg += " ("

    let weaponProperties
    // If armor at hitloc has impenetrable value or not
    let impenetrable = false;
    // If weapon is undamaging
    let undamaging = false;
    // If weapon has Hack
    let hack = false;
    // If weapon has Impale
    let impale = false;
    // If weapon has Penetrating
    let penetrating = false;

    if (applyAP)
    {
      // I dislike this solution but I can't think of any other way to do it
      // Prepare the entire actor to get the AP layers at the hitloc
      let AP = actor.prepareItems().AP[opposeData.hitloc.value]
      AP.ignored = 0;
      if (opposeData.attackerTestResult.weapon) // If the attacker is using a weapon
      {
        // Determine its qualities/flaws to be used for damage calculation
        weaponProperties = opposeData.attackerTestResult.weapon.properties;
        penetrating = weaponProperties.qualities.includes("Penetrating")
        undamaging = weaponProperties.flaws.includes("Undamaging")
        hack = weaponProperties.qualities.includes("Hack")
        impale = weaponProperties.qualities.includes("Impale")
      }
      // see if armor flaws should be triggered
      let ignorePartial = opposeData.attackerTestResult.roll % 2 == 0 || opposeData.attackerTestResult.extra.critical
      let ignoreWeakpoints = (opposeData.attackerTestResult.roll % 2 == 0 || opposeData.attackerTestResult.extra.critical)
                              && impale

      // Mitigate damage with armor one layer at a time
      for (let layer of AP.layers)
      {
        if (ignoreWeakpoints && layer.weakpoints)
        {
          AP.ignored += layer.value
        }
        else if (ignorePartial && layer.partial)
        {
          AP.ignored += layer.value;
        }
        else if (penetrating) // If penetrating - ignore 1 or all armor depending on material
        {
          AP.ignored += layer.metal ? 1 : layer.value
        }
        if (opposeData.attackerTestResult.roll % 2 != 0 && layer.impenetrable)
        {
          impenetrable = true;
          break;
        }
      }

      // AP.used is the actual amount of AP considered
      AP.used = AP.value - AP.ignored
      AP.used = AP.used < 0 ? 0 : AP.used;           // AP minimum 0
      AP.used = undamaging ? AP.used * 2 : AP.used;  // Double AP if undamaging

      // show the AP usage in the updated message
      if (AP.ignored)
        updateMsg += `${AP.used}/${AP.value} AP`
      else
        updateMsg += AP.used + " AP"

      // If using a shield, add that AP as well
      let shieldAP = 0;
      if (opposeData.defenderTestResult.weapon)
      {
        if (opposeData.defenderTestResult.weapon.properties.qualities.find(q => q.includes("Shield")))
          shieldAP = Number(opposeData.defenderTestResult.weapon.properties.qualities.find(q => q.includes("Shield")).split(" ")[1])
      }

      if (shieldAP)
        updateMsg += ` + ${shieldAP} ${game.i18n.localize("CHAT.DamageShield")}`

      if (applyTB)
        updateMsg += " + "
      else
        updateMsg += ")"

      // Reduce damage done by AP
      totalWoundLoss -= (AP.used + shieldAP)
    }

    // Reduce damage by TB
    if (applyTB)
    {
      totalWoundLoss -= actor.data.data.characteristics.t.bonus
      updateMsg += actor.data.data.characteristics.t.bonus + " TB"
    }

    // If the actor has the Robust talent, reduce damage by times taken
    totalWoundLoss -= actor.data.flags.robust || 0;

    if (actor.data.flags.robust)
      updateMsg += ` + ${actor.data.flags.robust} Robust)`
    else
      updateMsg += ")"

    // Minimum 1 wound if not undamaging
    if (!undamaging)
      totalWoundLoss = totalWoundLoss <= 0 ? 1 : totalWoundLoss
    else
      totalWoundLoss = totalWoundLoss <= 0 ? 0 : totalWoundLoss

    newWounds -= totalWoundLoss

    // If damage taken reduces wounds to 0, show Critical
    if (newWounds <= 0 && !impenetrable)
      updateMsg += `<br><a class ="table-click critical-roll" data-table = "crit${opposeData.hitloc.value}" ><i class='fas fa-list'></i> Critical</a>`

    else if (impenetrable)
      updateMsg += `<br>Impenetrable - ${game.i18n.localize("CHAT.CriticalsNullified")}`

    if (hack)
      updateMsg += `<br>${game.i18n.localize("CHAT.DamageAP")} ${WNG.locations[opposeData.hitloc.value]}`

    if (newWounds <= 0)
      newWounds = 0; // Do not go below 0 wounds


    updateMsg +="</span>"
    updateMsg = updateMsg.replace("@TOTAL", totalWoundLoss)

    // Update actor wound value
    actor.update({"data.status.wounds.value" : newWounds})
    return updateMsg;
  }
}

// Assign the actor class to the CONFIG
CONFIG.Actor.entityClass = ActorWNG;

// Treat the custom default token as a true default token
// If you change the actor image from the default token, it will automatically set the same image to be the token image
Hooks.on("preUpdateActor", (data, updatedData) =>{
  if (data.data.token.img == "systems/wng/tokens/unknown.png" && updatedData.img)
  {
    updatedData["token.img"] = updatedData.img;
    data.data.token.img = updatedData.img;
  }
})