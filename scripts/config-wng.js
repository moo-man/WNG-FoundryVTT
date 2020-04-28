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


// Species
WNG.species = {
	"human": "Human",
	"dwarf": "Dwarf",
	"halfling": "Halfling",
	"helf": "High Elf",
	"welf": "Wood Elf",
};

// Characteristic Names
WNG.attributes = {
    "s" : "Strength",
    "t" : "Toughness",
    "a" : "Agility",
    "i" : "Initiative",
    "will" : "Willpower",
    "int" : "Intellect",
    "fel" : "Fellowship",
};

// Characteristic Abbreviations
WNG.attributeAbbrev = {
    "s" : "S",
    "t" : "T",
    "a" : "A",
    "i" : "I",
    "will" : "Will",
    "int" : "Int",
    "fel" : "Fel",
};

WNG.skillTypes = {
	"bsc": "Basic",
	"adv": "Advanced"
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