const WNG = {}

CONFIG.ChatMessage.template = "systems/wng/templates/chat/chat-message.html"

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
WNG.rangedKeywords = ["adeptusastartes", "adeptusmechanicus", "adeptussororitas", "aeldari", "any", "arc", "astramilitarum", "asuryani", "blade", "bolt", "explosive", "fire", "imperium", "las", "melta", "ork", "primaris", "projectile", "scum", "shuriken"];

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

WNG.weaponTypes = {

}

// Weapon Group Descriptions
WNG.weaponGroupDescriptions = {

};

// Weapon Reach
WNG.weaponReaches = {

}


// Ammo Groups
WNG.ammunitionGroups = {

};


// Weapon Qualities
WNG.weaponQualities = {

};

// Weapon Flaws
WNG.weaponFlaws = {

};


// Weapon Quality Descriptions (Used in dropdown info)
WNG.qualityDescriptions = {

};

// Weapon Flaw Descriptions (used in dropdown info)
WNG.flawDescriptions = {

};

// Armor Qualities
WNG.armorQualities = {

};

// Armor Flaws
WNG.armorFlaws = {

};

// Equipment Types
WNG.armorTypes = {

};

// Range Test Modifiers
WNG.rangeModifiers = {

}

// Difficulty Modifiers
WNG.difficultyModifiers = {

}

// Difficulty Labels
WNG.difficultyLabels = {

}

WNG.locations = {

}

// Trapping Availability
WNG.availability = {

}


// Trapping Types
WNG.trappingTypes = {

};

// These categories are used to label items in containers (Trapping tab)
WNG.trappingCategories = {

};

// Creature Sizes
WNG.actorSizes = {

};

WNG.actorSizeNums = {

};

WNG.tokenSizes = {

};


WNG.conditions = {
	"ablaze": "Ablaze",
	"bleeding": "Bleeding",
	"blinded": "Blinded",
	"broken": "Broken",
	"deafened": "Deafened",
	"entangled": "Entangled",
	"fatigued": "Fatigued",
	"poisoned": "Poisoned",
	"prone": "Prone",
	"stunned": "Stunned",
	"surprised": "Surprised",
	"unconscious": "Unconscious",
	"grappling": "Grappling",
	"fear": "Fear",
	"defeated": "Defeated"
}


WNG.conditionDescriptions = {
	"ablaze": "WNG.Conditions.Ablaze",
	"bleeding": "WNG.Conditions.Bleeding",
	"blinded": "WNG.Conditions.Blinded",
	"broken": "WNG.Conditions.Broken",
	"deafened": "WNG.Conditions.Deafened",
	"entangled": "WNG.Conditions.Entangled",
	"fatigued": "WNG.Conditions.Fatigued",
	"poisoned": "WNG.Conditions.Poisoned",
	"prone": "WNG.Conditions.Prone",
	"stunned": "WNG.Conditions.Stunned",
	"surprised": "WNG.Conditions.Surprised",
	"unconscious": "WNG.Conditions.Unconscious",
	"grappling": "WNG.Conditions.Grappling",
	"fear": "WNG.Conditions.Fear",
}

const DAMAGE_TYPE = {
	NORMAL: 0,
	IGNORE_AP: 1,
	IGNORE_TB: 2,
	IGNORE_ALL: 3
}

const PSEUDO_ENTITIES = [
	"Table",
	"Condition",
	"Symptom",
	"Roll"
]