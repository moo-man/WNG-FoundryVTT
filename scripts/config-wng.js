const WNG = {}

CONFIG.ChatMessage.template = "systems/wng/templates/chat/chat-message.html"

// Should this be updated to the conditions below??
CONFIG.statusEffects = [
	"systems/wng/icons/conditions/bleeding1.png",
	"systems/wng/icons/conditions/bleeding2.png",
	"systems/wng/icons/conditions/bleeding3.png",
	"systems/wng/icons/conditions/bleeding4.png",
	"systems/wng/icons/conditions/poisoned1.png",
	"systems/wng/icons/conditions/poisoned2.png",
	"systems/wng/icons/conditions/poisoned3.png",
	"systems/wng/icons/conditions/poisoned4.png",
	"systems/wng/icons/conditions/ablaze1.png",
	"systems/wng/icons/conditions/ablaze2.png",
	"systems/wng/icons/conditions/ablaze3.png",
	"systems/wng/icons/conditions/ablaze4.png",
	"systems/wng/icons/conditions/deafened1.png",
	"systems/wng/icons/conditions/deafened2.png",
	"systems/wng/icons/conditions/deafened3.png",
	"systems/wng/icons/conditions/deafened4.png",
	"systems/wng/icons/conditions/stunned1.png",
	"systems/wng/icons/conditions/stunned2.png",
	"systems/wng/icons/conditions/stunned3.png",
	"systems/wng/icons/conditions/stunned4.png",
	"systems/wng/icons/conditions/entangled1.png",
	"systems/wng/icons/conditions/entangled2.png",
	"systems/wng/icons/conditions/entangled3.png",
	"systems/wng/icons/conditions/entangled4.png",
	"systems/wng/icons/conditions/fatigued1.png",
	"systems/wng/icons/conditions/fatigued2.png",
	"systems/wng/icons/conditions/fatigued3.png",
	"systems/wng/icons/conditions/fatigued4.png",
	"systems/wng/icons/conditions/blinded1.png",
	"systems/wng/icons/conditions/blinded2.png",
	"systems/wng/icons/conditions/blinded3.png",
	"systems/wng/icons/conditions/blinded4.png",
	"systems/wng/icons/conditions/broken1.png",
	"systems/wng/icons/conditions/broken2.png",
	"systems/wng/icons/conditions/broken3.png",
	"systems/wng/icons/conditions/broken4.png",
	"systems/wng/icons/conditions/prone.png",
	"systems/wng/icons/conditions/fear.png",
	"systems/wng/icons/conditions/surprised.png",
	"systems/wng/icons/conditions/unconscious.png",
	"systems/wng/icons/conditions/grappling.png",
	"systems/wng/icons/defeated.png",
]

CONFIG.controlIcons.defeated = "systems/wng/icons/defeated.png";

// Attribute Names
WNG.attributes = {
    "s" : "Strength",
    "t" : "Toughness",
    "a" : "Agility",
    "i" : "Initiative",
    "will" : "Willpower",
    "int" : "Intellect",
    "fel" : "Fellowship",
};

// Attribute Abbreviations
WNG.attributeAbbrev = {
    "s" : "S",
    "t" : "T",
    "a" : "A",
    "i" : "I",
    "will" : "Will",
    "int" : "Int",
    "fel" : "Fel",
};

// Skill Names
WNG.skills = {
    "ath" : "Athletics",
    "aw" : "Awareness",
    "bs" : "Ballistic Skill",
    "cun" : "Cunning",
    "dec" : "Deception",
    "ins" : "Insight",
    "int" : "Intimidation",
    "inv" : "Investigation",
    "lead" : "Leadership",
    "med" : "Medicae",
    "per" : "Persuasion",
    "pil" : "Pilot",
    "psy" : "Psychic Mastery",
    "sch" : "Scholar",
    "sth" : "Stealth",
    "surv" : "Survival",
    "tech" : "Tech",
    "ws" : "Weapon Skill"
};

// Skill Abbreviations
WNG.skillsAbbrev = {
    "ath" : "Ath",
    "aw" : "Awa",
    "bs" : "Bs",
    "cun" : "Cun",
    "dec" : "Dec",
    "ins" : "Insi",
    "int" : "Intim",
    "inv" : "Inve",
    "lead" : "Lead",
    "med" : "Med",
    "per" : "Per",
    "pil" : "Pil",
    "psy" : "Psy",
    "sch" : "Sch",
    "sth" : "Ste",
    "surv" : "Surv",
    "tech" : "Tech",
    "ws" : "Ws"
};

// XP Costs of Base
WNG.xpCost = {
    "attribute" : [0, 4, 10, 20, 35, 55, 80, 110, 145, 185, 230, 280],
    "skill" : [2, 6, 12, 20, 30, 42, 56, 72]
};

// XP Costs of Increment
WNG.xpCostInc = {
    "attribute" : [0, 4, 6, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    "skill" : [2, 4, 6, 8, 10, 12, 14, 16]
};

// Species
WNG.species = {
    "human" : "Human",
    "astartes" : "Astartes",
    "primaris" : "Primaris Astartes",
    "aeldari" : "Aeldari",
    "ork" : "Ork"
};

// Species Movement
WNG.speciesMovement = {
    "human" : 6,
    "astartes" : 7,
    "primaris" : 7,
    "aeldari" : 8,
    "ork" : 6,
};

// Species Attributes
WNG.speciesAttributes = {
    "human" :
    {
        "s" : 1,
        "t" : 1,
        "a" : 1,
        "i" : 1,
        "will" : 1,
        "int" : 1,
        "fel" : 1,
    },
    "astartes" : 
    {
        "s" : 4,
        "t" : 4,
        "a" : 4,
        "i" : 4,
        "will" : 3,
        "int" : 3,
        "fel" : 1,
    },
    "primaris" : 
    {
        "s" : 5,
        "t" : 5,
        "a" : 4,
        "i" : 4,
        "will" : 3,
        "int" : 3,
        "fel" : 1,
    },
    "aeldari" : 
    {
        "s" : 1,
        "t" : 1,
        "a" : 3,
        "i" : 1,
        "will" : 1,
        "int" : 1,
        "fel" : 1,
    },
    "ork" : 
    {
        "s" : 3,
        "t" : 3,
        "a" : 1,
        "i" : 1,
        "will" : 1,
        "int" : 1,
        "fel" : 1,
    }
};

// Species Skills
WNG.speciesSkills = {
    "human" :
    {
        "ath" : 0,
        "aw" : 0,
        "bs" : 0,
        "cun" : 0,
        "dec" : 0,
        "ins" : 0,
        "int" : 0,
        "inv" : 0,
        "lead" : 0,
        "med" : 0,
        "per" : 0,
        "pil" : 0,
        "psy" : 0,
        "sch" : 0,
        "sth" : 0,
        "surv" : 0,
        "tech" : 0,
        "ws" : 0
    },
    "astartes" : 
    {
        "ath" : 3,
        "aw" : 3,
        "bs" : 3,
        "cun" : 0,
        "dec" : 0,
        "ins" : 0,
        "int" : 0,
        "inv" : 0,
        "lead" : 0,
        "med" : 0,
        "per" : 0,
        "pil" : 0,
        "psy" : 0,
        "sch" : 0,
        "sth" : 3,
        "surv" : 0,
        "tech" : 0,
        "ws" : 3
    },
    "primaris" : 
    {
        "ath" : 3,
        "aw" : 3,
        "bs" : 4,
        "cun" : 0,
        "dec" : 0,
        "ins" : 0,
        "int" : 0,
        "inv" : 0,
        "lead" : 0,
        "med" : 0,
        "per" : 0,
        "pil" : 0,
        "psy" : 0,
        "sch" : 0,
        "sth" : 3,
        "surv" : 0,
        "tech" : 0,
        "ws" : 3
    },
    "aeldari" : 
    {
        "ath" : 0,
        "aw" : 0,
        "bs" : 0,
        "cun" : 0,
        "dec" : 0,
        "ins" : 0,
        "int" : 0,
        "inv" : 0,
        "lead" : 0,
        "med" : 0,
        "per" : 0,
        "pil" : 0,
        "psy" : 0,
        "sch" : 0,
        "sth" : 0,
        "surv" : 0,
        "tech" : 0,
        "ws" : 0
    },
    "ork" : 
    {
        "ath" : 0,
        "aw" : 0,
        "bs" : 0,
        "cun" : 0,
        "dec" : 0,
        "ins" : 0,
        "int" : 0,
        "inv" : 0,
        "lead" : 0,
        "med" : 0,
        "per" : 0,
        "pil" : 0,
        "psy" : 0,
        "sch" : 0,
        "sth" : 0,
        "surv" : 0,
        "tech" : 0,
        "ws" : 0,
    }
};

// Species Abilities
WNG.speciesAbilities = {
    "human" : [

    ],
    "astartes" : [
        "Angel of Death", 
        "Honour the Chapter", 
        "Space Marine Implants"
    ],
    "primaris" : [
        "Angel of Death", 
        "Honour the Chapter (Primaris)", 
        "Space Marine Implants"
    ],
    "aeldari" : [
        "Outsider", 
        "Intense Emotions", 
        "Psychosensitive"
    ],
    "ork" : [
        "Outsider", 
        "Orky", 
        "Bigger is Better"
    ]
};

// Keywords
WNG.Keywords = {
    "adeptusarbites" : "ADEPTUS ARBITES",
    "adeptusastartes" : "ADEPTUS ASTARTES",
    "adeptusastratelepathica" : "ADEPTUS ASTRA TELEPATHICA",
    "adeptusmechanicus" : "ADEPTUS MECHANICUS",
    "adeptusministorum" : "ADEPTUS MINISTORUM",
    "adeptussororitas" : "ADEPTUS SORORITAS",
    "aeldari" : "AELDARI",
    "alphalegion" : "ALPHA LEGION",
    "anhrathe" : "ANHRATHE",
    "any" : "[ANY]",
    "arc" : "ARC",
    "armageddon" : "ARMAGEDDON STEEL LEGION",
    "astramilitarum" : "ASTRA MILITARUM",
    "asuryani" : "ASURYANI",
    "auditory" : "AUDITORY",
    "badmoons" : "BAD MOONS",
    "blacklegion" : "BLACK LEGION",
    "blade" : "BLADE",
    "bloodangels" : "BLOOD ANGELS",
    "bloodaxes" : "BLOOD AXES",
    "bolt" : "BOLT",
    "cadian" : "CADIAN SHOCK TROOPERS",
    "catachan" : "CATACHAN JUNGLE FIGHTERS",
    "chain" : "CHAIN",
    "chaos" : "CHAOS",
    "chapter" : "[CHAPTER]",
    "clan" : "[CLAN]",
    "coterie" : "[COTERIE]",
    "craftworld" : "[CRAFTWORLD]",
    "cultmechanicus" : "CULT MECHANICUS",
    "daemon" : "DAEMON",
    "darkangels" : "DARK ANGELS",
    "darkmechanicus" : "DARK MECHANICUS",
    "deathguard" : "DEATH GUARD",
    "deathskulls" : "DEATHSKULLS",
    "dynasty" : "[DYNASTY]",
    "emperorschildren" : "EMPEROR'S CHILDREN",
    "evilsunz" : "EVIL SUNZ",
    "exotic" : "EXOTIC",
    "explosive" : "EXPLOSIVE",
    "fire" : "FIRE",
    "flak" : "FLAK",
    "force" : "FORCE",
    "forcefield" : "FORCEFIELD",
    "forgeworld" : "[FORGE WORLD]",
    "genestealercult" : "GENESTEALER CULT",
    "gilead" : "GILEAD GRAVE DIGGERS",
    "goffs" : "GOFFS",
    "heavy" : "HEAVY",
    "heretic" : "HERETIC",
    "hereticastartes" : "HERETIC ASTARTES",
    "human" : "HUMAN",
    "imperialfists" : "IMPERIAL FISTS",
    "imperium" : "IMPERIUM",
    "inquisition" : "INQUISITION",
    "ironhands" : "IRON HANDS",
    "ironwarriors" : "IRON WARRIORS",
    "khorne" : "KHORNE",
    "kinetic" : "KINETIC",
    "krieg" : "DEATH KORPS OF KRIEG",
    "las" : "LAS",
    "legion" : "[LEGION]",
    "light" : "LIGHT",
    "markofchaos" : "[MARK OF CHAOS]",
    "melta" : "MELTA",
    "militarumtempestus" : "MILITARUM TEMPESTUS",
    "mutant" : "MUTANT",
    "nightlords" : "NIGHT LORDS",
    "nurgle" : "NURGLE",
    "officioprefectus" : "OFFICIO PREFECTUS",
    "order" : "[ORDER]",
    "ordersdialogus" : "ORDERS DIALOGUS",
    "ordersfamulous" : "ORDERS FAMULOUS",
    "ordershospitaller" : "ORDERS HOSPITALLER",
    "ordersmilitant" : "ORDERS MILITANT",
    "orderspronatus" : "ORDERS PRONATUS",
    "orderssabine" : "ORDERS SABINE",
    "ordo" : "[ORDO]",
    "ordohereticus" : "ORDO HERETICUS",
    "ordomalleus" : "ORDO MALLEUS",
    "ordoxenos" : "ORDO XENOS",
    "ork" : "ORK",
    "otherordos" : "OTHER ORDOS",
    "powered" : "POWERED",
    "powerfield" : "POWERFIELD",
    "primaris" : "PRIMARIS",
    "primitive" : "PRIMITIVE",
    "projectile" : "PROJECTILE",
    "psychic" : "PSYCHIC",
    "psyker" : "PSYKER",
    "ravenguard" : "RAVEN GUARD",
    "regiment" : "[REGIMENT]",
    "roguetrader" : "ROGUE TRADER",
    "salamanders" : "SALAMANDERS",
    "scholasticapsykana" : "SCHOLASTICA PSYKANA",
    "scum" : "SCUM",
    "servitor" : "SERVITOR",
    "shuriken" : "SHURIKEN",
    "skitarii" : "SKITARII",
    "slaanesh" : "SLAANESH",
    "snakebites" : "SNAKEBITES",
    "spacewolves" : "SPACE WOLVES",
    "tallarn" : "TALLARN DESERT RAIDERS",
    "telepathy" : "TELEPATHY",
    "thousandsons" : "THOUSAND SONS",
    "twohanded" : "2-HANDED",
    "tyranid" : "TYRANID",
    "tzeentch" : "TZEENTCH",
    "ultramarines" : "ULTRAMARINES",
    "valhalla" : "VALHALLAN ICE WARRIORS",
    "vostroya" : "VOSTROYAN FIRSTBORN",
    "whitescars" : "WHITE SCARS",
    "wordbearers" : "WORD BEARERS",
    "worldeaters" : "WORLD EATERS",
    "wraithconstruct" : "WRAITH CONSTRUCT",
};

// Species Keywords
WNG.speciesKeywords = ["adeptusarbites", "adeptusastartes", "adeptusastratelepathica", "adeptusmechanicus", "adeptusministorum", "adeptussororitas", "aeldari", "anhrathe", "any", "astramilitarum", "asuryani", "chaos", "chapter", "clan", "coterie", "craftworld", "cultmechanicus", "daemon", "darkmechanicus", "dynasty", "forgeworld", "genestealercult", "heretic", "hereticastartes", "human", "imperium", "inquisition", "legion", "markofchaos", "militarumtempestus", "mutant", "officioprefectus", "order", "ordo", "ork", "primaris", "psyker", "regiment", "roguetrader", "scholasticapsykana", "scum", "servitor", "skitarii", "tyranid", "wraithconstruct"];

// Chapter Keywords
WNG.chapterKeywords = ["bloodangels", "darkangels", "imperialfists", "ironhands", "ravenguard", "salamanders", "spacewolves", "ultramarines", "whitescars"];

// Clan Keywords
WNG.clanKeywords = ["badmoons", "bloodaxes", "deathskulls", "evilsunz", "goffs", "snakebites"];

// Legion Keywords
WNG.legionKeywords = ["alphalegion", "blacklegion", "deathguard", "emperorschildren", "ironwarriors", "nightlords", "thousandsons", "wordbearers", "worldeaters"];

// Mark of Chaos Keywords
WNG.markKeywords = ["khorne", "nurgle", "slaanesh", "tzeentch"];

// Order Keywords
WNG.orderKeywords = ["ordersdialogus", "ordersfamulous", "ordershospitaller", "ordersmilitant", "orderspronatus", "orderssabine"];

// Ordo Keywords
WNG.ordoKeywords = ["ordohereticus", "ordomalleus", "ordoxenos", "otherordos"];

// Regiment Keywords
WNG.regimentKeywords = ["armageddon", "cadian", "catachan", "krieg", "gilead", "tallarn", "valhalla", "vostroya"];

// Armour Keywords
WNG.armourKeywords = ["adeptusastartes", "adeptusmechanicus", "adeptusministorum", "adeptussororitas", "aeldari", "anhrathe", "any", "astramilitarum", "asuryani", "flak", "forcefield", "heavy", "imperium", "inquisition", "light", "militarumtempestus", "ork", "powered", "primaris", "primitive", "skitarii"];

// Melee Weapon Keywords
WNG.meleeKeywords = ["adeptusarbites", "adeptusastartes", "adeptusmechanicus", "adeptusministorum", "adeptussororitas", "aeldari", "anhrathe", "any", "asuryani", "blade", "chain", "chaos", "exotic", "force", "imperium", "inquisition", "ork", "powerfield", "primitive", "twohanded"];

// Ranged Weapon Keywords
WNG.rangedKeywords = ["adeptusastartes", "adeptusmechanicus", "adeptussororitas", "aeldari", "any", "arc", "astramilitarum", "asuryani", "blade", "bolt", "explosive", "fire", "heavy", "imperium", "las", "melta", "ork", "primaris", "projectile", "scum", "shuriken"];

// Ammo Keywords
WNG.ammoKeywords = ["adeptusastartes", "adeptusmechanicus", "any", "imperium", "scum"];

// Upgrade Keywords
WNG.upgradeKeywords = ["any", "astramilitarum", "chaos", "imperium", "scum"];

// Tools and Equipment Keywords
WNG.toolsKeywords = ["adeptusastartes", "adeptusmechanicus", "adeptusministorum", "adeptussororitas", "aeldari", "any", "astramilitarum", "imperium", "ork", "primaris", "scum"];

// Augmetics Keywords
WNG.augmeticsKeywords = ["any", "imperium", "adeptusmechanicus", "adeptusministorum", "aeldari", "ork"];

// Psychic Power Keywords
WNG.psychicKeywords = ["fire", "kinetic", "psychic", "telepathy", "auditory", "light", "chaos", "aeldari"];

// Rank
WNG.rank = {
    "initiate" : "Initiate",
    "veteran" : "Veteran",
    "champion" : "Champion"
};

// Rank XP Min
WNG.rank = {
    "initiate" : 0,
    "veteran" : 40,
    "champion" : 80
};

// Weapon Groups
WNG.weaponGroups = {

};

// Given a group, what's the primary type, melee or ranged
WNG.groupToType = {

};

// Weapon Group Descriptions
WNG.weaponGroupDescriptions = {

};

// Weapon Reach
WNG.weaponReaches = {

}

// Weapon Traits
WNG.weaponTraits = {

};

// Weapon Traits Descriptions
WNG.weaponDesc = {

};

// Ammo Groups
WNG.ammunitionGroups = {

};

// Armour Groups
WNG.armourGroups = {

};

// Armour Traits
WNG.armourTraits = {

};

// Armour Traits Descriptions
WNG.armourDesc = {

};

// Range Test Modifiers
WNG.rangeModifiers = {

};

// Blast Sizes
WNG.blastSizes = {
	"small" : "Small",
	"medium" : "Medium",
	"large" : "Large",
	"verylarge" : "Very Large",
	"huge" : "Huge"
};

// Blast Radius
WNG.blastRadius = {
	"small" : 1,
	"medium" : 3,
	"large" : 5,
	"verylarge" : 10,
	"huge" : 15
};

// Difficulty Labels
WNG.difficultyLabels = {
	"easy" : "Easy",
	"standard" : "Standard",
	"challenging" : "Challenging",
	"difficult" : "Difficult",
	"extreme" : "Extreme",
	"nearimpossible" : "Near Impossible"
};

// Difficulty Modifiers
WNG.difficultyModifiers = {
	"easy" : -2,
	"standard" : 0,
	"challenging" : 2,
	"difficult" : 4,
	"extreme" : 6,
	"nearimpossible" : 9
};

// Difficulty DN
WNG.difficultyDN = {
	"easy" : 1,
	"standard" : 3,
	"challenging" : 5,
	"difficult" : 7,
	"extreme" : 9,
	"nearimpossible" : 11
};

//  Rarity
WNG.rarity = {
	"common" : "Common",
	"uncommon" : "Uncommon",
	"rare" : "Rare",
	"veryrare" : "Very Rare",
	"unique" : "Unique"
};

//  Rarity Penalty
WNG.rarityPenalty = {
	"common" : 0,
	"uncommon" : 1,
	"rare" : 2,
	"veryrare" : 3,
	"unique" : 4
};

// Actor Sizes
WNG.actorSizes = {
	"tiny" : "Tiny",
	"small" : "Small",
	"average" : "Average",
	"large" : "Large",
	"huge" : "Huge",
	"gargantuan" : "Gargantuan"
};

// Actor Size Modifier
WNG.actorSizesMod = {
	"tiny" : "2DN",
	"small" : "1DN",
	"average" : "0",
	"large" : "1d",
	"huge" : "2d",
	"gargantuan" : "3d"
};

// Conditions
WNG.conditions = {
	"bleeding" : "Bleeding",
	"blinded" : "Blinded",
	"exhausted" : "Exhausted",
	"fear" : "Fear",
	"frenzied" : "Frenzied",
	"hindered" : "Hindered",
	"onfire" : "On Fire",
	"pinned" : "Pinned",
	"poisoned" : "Poisoned",
	"prone" : "Prone",
	"restrained" : "Restrained",
	"staggered" : "Staggered",
	"terror" : "Terror",
	"vulnerable" : "Vulnerable",
	"wounded" : "Wounded"
};

// Condition Descriptions
WNG.conditionDescriptions = {
	"bleeding" : "You’re bleeding, afflicted with a grievous wound that is difficult to treat. You suffer one Mortal Wound at the end of your Turn. Bleeding can be stopped with a successful Toughness Test (DN 4), or if another character aids you with the Medicae Skill. You can attempt to use Medicae on yourself but do so at +1DN.",
	"blinded" : "You’re unable to see properly. Increase the DN for any sight-related task (including all combat Tests) by 4, replacing any lesser vision penalties. At the GM’s discretion you may use a Combat Action to remove the Blinded condition, using a narratively appropriate Skill.",
	"exhausted" : "You are weary from battle or persistent effort and suffer from fatigue. On your Turn, you can only Walk or Crawl, perform a basic Combat Action (attack with no combat options, such as Aim or Multi-Attack), or Fall Back. Additionally, you may not roll Determination. Any Shock suffered by an Exhausted character is immediately converted into Mortal Wounds. Certain circumstances directly inflict Exhaustion. You are automatically Exhausted if your Shock increases beyond your Maximum Shock. Certain weapons, psychic powers, or Ruin Actions can also cause you to become Exhausted even while you are below your Maximum Shock. If you are Exhausted from a source other than exceeding your Maximum Shock, that effect determines how you remove the Exhausted condition. Otherwise, the Exhausted condition is removed whenever you recover Shock.",
	"fear" : "You’re scared. Whatever is causing your Fear might also make you anxious, or trigger physical reactions like rapid breathing, shaking, and a lack of focus. When you encounter something that causes Fear, you roll your Resolve against a DN dictated by the source of Fear. Success allows you to act normally. If you fail, you suffer +2DN to all Tests. The penalty lasts until the end of the scene or until an ally passes a Leadership (Fel) Test of DN 2 + the source’s Fear value. A being that causes Fear is immune to Fear and Intimidation Interaction Attacks.",
	"frenzied" : "Whether whipped into a zealous fury or auto injecting Frenzon combat stims, you’re Frenzied. You lose all sense of self-preservation and throw yourself into the thick of combat. When you become Frenzied, you may choose to embrace the frenzy or attempt to resist it. If you choose to resist, at the start of your Turn make a DN 3 Willpower Test. If you pass, the rage subsides and you resist the frenzy. If the effect is triggered, embraced, or otherwise not resisted, you are Frenzied and must try to get into close combat as quickly as possible, charging the nearest visible enemy. If you are in cover, you break cover and move towards the nearest enemy. While Frenzied, you are immune to Fear and cannot be Pinned and must always use the All-Out Attack option, if possible. You gain +1 to your Strength Attribute While Frenzied.",
	"hindered" : "Something’s holding you back. While Hindered increase the DN for all Tests by +1, or higher if the rules of whatever is hindering you say so. Hindered lasts for one Round, unless otherwise stated.",
	"onfire" : "You’re on fire! You take 1d3 Mortal Wounds at the start of each of your Turns. After taking the Mortal Wound, you must pass a DN 3 Willpower Test or be Hindered until the end of the Round.",
	"pinned" : "You’re under heavy fire, and there’s a chance your Resolve breaks under the pressure. If you are targeted with a Pinning Attack attack, you may be Pinned. To see if you are Pinned, make a Resolve Test with a DN equal to the Salvo value of the weapon, and add +1 DN for each additional enemy targeting you with a Pinning Attack (a Mob counts as a single attacker). If you fail, you lose your Movement and either hunker down behind existing cover or use your Movement to move towards the nearest cover on your next Turn. While Pinned, you can’t Charge or leave cover. You suffer a +2 DN penalty to Ballistic Skill (A) Tests against the enemies using Pinning Attack While you are Pinned. An ally may attempt to rally their comrades on their Turn by making a Leadership (Fel) Test with the same DN as the Resolve Test, adding an extra +1DN if a Pinned character has taken any damage during the combat. If the Test is successful, the character successfully rallies any Pinned allies within 5 metres, ending the effect.",
	"poisoned" : "You’ve been inflicted with one of the galaxy’s countless pathogens, plagues, or viruses. You could be suffering from neurotoxins injected into your system, alien acid splashed on you, or Nurgle’s contagions. All of these dangers leave you Poisoned. You suffer a +2 DN penalty to all Tests while Poisoned. Some poisons also inflict damage based on the poison. Some poisons may affect your ability to function instead of, or in addition to, causing damage. The Poisoned condition ends when you are treated using the Medicae Skill or you succeed on a Toughness Test (DN based on the poison) at the beginning of your Turn.",
	"prone" : "You’re knocked down on the ground. Your Defence is reduced by 2 against any attack made by a Threat within 5 metres of you. Your Defence is increased by 1 when you’re attacked from 6 or more metres away. If you become Prone while flying, you fall to the ground and suffer falling damage. Standing up when Prone is a Free Action on your Turn. If you stand up in this way, you can only use the Standard Movement option; you can’t use combat options such as Brace or Aim. An adjacent character may use their Movement to help you stand up immediately when you’re Prone.",
	"restrained" : "You’re bound, possibly by some form of entangling attack such as an Genestealer Cultist Webber, a Barbed Strangler, or a good old-fashioned net. While Restrained you lose your Movement action for that Turn and your Defence is reduced by 2.",
	"staggered" : "You’re off balance; you’ve run too fast over rough terrain, ordnance has impacted nearby, or you’ve been clipped by a stray bullet. When you move While Staggered, your Speed is reduced by half. You can’t Run or Sprint unless otherwise stated. The Staggered condition ends at the beginning of the next Round.",
	"terror" : "You’re overcome with a sense of intense dread and rational thought becomes impossible: this is allconsuming Terror. Make a Resolve Test against the DN of the source of Terror. If you pass, you may act normally on your Turn. If you fail, you suffer all of the effects of Fear, and you must use every action available on each of your Turns to move as far away as possible until you no longer have line of sight to the source of Terror. Terror lasts until the end of the scene or until an ally passes a Leadership (Fel) Test of DN 2 + the Terror value. Any effect that grants a bonus to Fear Tests also applies to Terror Tests. Any effect that grants immunity to Fear grants one extra Icon on your Resolve Test against Terror. A being that causes Terror is immune to Fear, Terror, and Intimidation Interaction Attacks.",
	"vulnerable" : "Your defences are open! While Vulnerable, you suffer −1 to your Defence. Certain abilities and effects increase this penalty. Being Vulnerable lasts until the end of your next Turn.",
	"wounded" : "If you have suffered any Wounds, you are Wounded. Wounded characters suffer a +1 DN penalty to all Tests."
};

// Hazards
WNG.hazards = {
	"suffocation" : "Suffocation",
	"electricity" : "Electricity",
	"extremeheatcold" : "Extreme Heat and Cold",
	"falling" : "Falling",
	"fire" : "Fire",
	"radiation" : "Radiation",
};

// Hazard Descriptions (should this be a thing?  they will be very long)
WNG.hazardDescriptions = {

};

// What is this?  Is there something this needs to align with?
const DAMAGE_TYPE = {
	NORMAL: 0,
	IGNORE_AP: 1,
	IGNORE_TB: 2,
	IGNORE_ALL: 3
};

// What is this?  Is there something this needs to align with?
const PSEUDO_ENTITIES = [
	"Table",
	"Condition",
	"Symptom",
	"Roll"
];