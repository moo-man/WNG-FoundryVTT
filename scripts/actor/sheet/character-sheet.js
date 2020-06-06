/**
* Provides the specific interaction handlers for Character Sheets.
*
* ActorSheetWNGCharacter are assigned to character type actors, and the specific interactions
* character type actors need are defined here, specifically for careers and spending exp.
*
*/
class ActorSheetWNGCharacter extends ActorSheetWNG
{
  static get defaultOptions()
  {
    const options = super.defaultOptions;
    mergeObject(options,
      {
        classes: options.classes.concat(["wng", "actor", "character-sheet"]),
        width: 610,
        height: 740,
      });
      return options;
    }


    /**
    * Get the correct HTML template path to use for rendering this particular sheet
    * @type {String}
    */
    get template()
    {
      if (!game.user.isGM && this.actor.limited) return "systems/wng/templates/actors/actor-limited.html";
      return "systems/wng/templates/actors/actor-sheet.html";

    }


    /* --------------------------------------------------------------------------------------------------------- */
    /* ------------------------------------ Event Listeners and Handlers --------------------------------------- */
    /* --------------------------------------------------------------------------------------------------------- */
    /**
    * This list of event handlers is focused on character interactions, such has spending exp and handling careers.
    *
    *
    /* --------------------------------------------------------------------------------------------------------- */

    /**
    * Activate event listeners using the prepared sheet HTML
    * @param html {HTML}   The prepared HTML object ready to be rendered into the DOM
    */
    activateListeners(html)
    {
      super.activateListeners(html);

      html.find('.button-roll').click(event => {
        let dice = html.find('#dice').val();
        let difficulty = html.find('#difficulty').val();
        let complexity = html.find('#complexity').val();
        event.preventDefault();
        this.roll(dice, difficulty, complexity);
      });
    }

    roll(dice, difficulty = 0, complexity = 0) {
      let r = new Roll("(@dice)d6", {dice: dice});
      r.roll();
      console.log(r);
      let rolls = ""
      let separator = "";
      let icons = 0;
      let exalted = 0;
      r.parts[0].rolls.forEach((res, i) => {
        console.log(res, i)
        if (res.roll > 3 && res.roll < 6) {
          icons++;
          rolls = rolls + "<li class='roll die d6'>" + res.roll + "</li>";
        }
        if (res.roll == 6) {
          icons++;
          icons++;
          exalted++;
          rolls = rolls + "<li class='roll die d6 max'>" + res.roll + "</li>";
        }
        if (res.roll <= 3) {
          rolls = rolls + "<li class='roll die d6 min'>" + res.roll + "</li>";
        }
      });
      console.log(rolls);
      let header; //"<b style='float:right'>DN " + difficulty + ":" + complexity + "</b>";
      let footer;
      let rollResult = "[" + rolls + "]";
      let body;
      /*if (r.total >= complexity) {
        body = "<b style='color:green'>SUCCEED</b> with " + (r.total - complexity) + " degrees</br>"
      } else {
        body = "<b style='color:red'>FAILED</b> with " + (r.total - complexity) + " degrees</br>"
      }*/
      /*
      <div class="dice-roll">
          <div class="dice-result">
              <div class="dice-formula">5d6</div>
              <div class="dice-tooltip" style="display: block;">
                <section class="tooltip-part">
                    <div class="dice">
                        <p class="part-formula">
                            5d6
                            <span class="part-total">21</span>
                        </p>
                        <ol class="dice-rolls">
                            <li class="roll die d6">5</li>
                            <li class="roll die d6 max">6</li>
                            <li class="roll die d6 min">1</li>
                            <li class="roll die d6">4</li>
                            <li class="roll die d6">5</li>
                        </ol>
                    </div>
                </section>
              </div>
              <h4 class="dice-total">21</h4>
          </div>
      </div>
      */
      /*header = '<div class="dice-roll"><div class="dice-result"><div class="dice-formula">' +
                dice + 'd6 <span class="part-total">Icons ' + icons + '</span></p><ol class="dice-rolls">';
      footer = '</ol></div></div></div>';*/

      //let chatContent = header + rolls + footer;
      let chatContent =
      '<div class="dice-roll">'+
        '<div class="dice-result">' +
          '<div class="dice-formula">'+ dice +'d6</div>' +
          '<div class="dice-tooltip" style="display:block">' +
            '<section class="tooltip-part">' +
                '<div class="dice">' +
                  '<p class="part-formula">' +
                      dice +'d6' +
                      '<span class="part-total">icons: ' + icons + '</span>' +
                      '<span class="part-total">exalted: ' + exalted + '</span>' +
                      '<span class="part-total">wrath: ' + r.parts[0].rolls[0].roll + '</span>' +
                  '</p>' +
                  '<ol class="dice-rolls">' +
                    rolls +
                  '</ol>' +
                '</div>' +
            '</section>' +
          '</div>' +
          '<h4 class="dice-total">'+ icons +'</h4>'
        '</div>' +
      '</div>';


      let chatData = {
        user: game.user._id,
        content: chatContent
      };

      //await showDiceSoNice(roll,cardOptions.rollMode);

      ChatMessage.create(chatData, {});
      //r.toMessage(chatData)
    }


    /**
    * Add support for the Dice So Nice module
    * @param {Object} roll
    * @param {String} rollMode
    */
    static async showDiceSoNice(roll,rollMode)
    {
      if(game.modules.get("dice-so-nice") && game.modules.get("dice-so-nice").active)
      {
        let whisper = null;
        let blind = false;
        switch(rollMode)
        {
          case "blindroll": //GM only
          blind = true;
          case "gmroll": //GM + rolling player
          whisper = game.users.filter(user => user.isGM);
          break;
          case "roll": //everybody
          whisper = game.users.filter(user => user.active);
          break;
        }
        await game.dice3d.showForRoll(roll,whisper,blind);
      }
    }



  }

  // Register Character Sheet
  Actors.registerSheet("wng", ActorSheetWNGCharacter,
  {
    types: ["character"],
    makeDefault: true
  });
