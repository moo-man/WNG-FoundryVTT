const WNG = {}

CONFIG.ChatMessage.template = "systems/wng/templates/chat/chat-message.html"

CONFIG.statusEffects = ["systems/wng/icons/conditions/bleeding1.png",
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
WNG.characteristics = {
	"ws": "Weapon Skill",
	"bs": "Ballistic Skill",
	"s": "Strength",
	"t": "Toughness",
	"i": "Initiative",
	"ag": "Agility",
	"dex": "Dexterity",
	"int": "Intelligence",
	"wp": "Willpower",
	"fel": "Fellowship"
};

// Characteristic Abbreviations
WNG.characteristicsAbbrev = {
	"ws": "WS",
	"bs": "BS",
	"s": "S",
	"t": "T",
	"i": "I",
	"ag": "Ag",
	"dex": "Dex",
	"int": "Int",
	"wp": "WP",
	"fel": "Fel"
};

WNG.skillTypes = {
	"bsc": "Basic",
	"adv": "Advanced"
};

WNG.xpCost = {
	"characteristic": [25, 30, 40, 50, 70, 90, 120, 150, 190, 230, 280, 330, 390, 450, 520],
	"skill": [10, 15, 20, 30, 40, 60, 80, 110, 140, 180, 220, 270, 320, 380, 440]
}

WNG.skillGroup = {
	"isSpec": "Is Specialization",
	"noSpec": "Not Specialization"
};

WNG.talentMax = {
	"1": "1",
	"2": "2",
	"none": "None",
	"ws": " Weapon Skill Bonus",
	"bs": "Ballistic Skill Bonus",
	"s": "Strength Bonus",
	"t": "Toughness Bonus",
	"i": "Initiative Bonus",
	"ag": "Agility Bonus",
	"dex": "Dexterity Bonus",
	"int": "Intelligence Bonus",
	"wp": "Willpower Bonus",
	"fel": "Fellowship Bonus"
}


// Weapon Groups
WNG.weaponGroups = {
	"basic": "Basic",
	"cavalry": "Cavalry",
	"fencing": "Fencing",
	"brawling": "Brawling",
	"flail": "Flail",
	"parry": "Parry",
	"polearm": "Polearm",
	"twohanded": "Two-Handed",
	"blackpowder": "Blackpowder",
	"bow": "Bow",
	"crossbow": "Crossbow",
	"entangling": "Entangling",
	"engineering": "Engineering",
	"explosives": "Explosives",
	"sling": "Sling",
	"throwing": "Throwing",
};

// Given a group, what's the primary type, melee or ranged
WNG.groupToType = {
	"basic": "melee",
	"cavalry": "melee",
	"fencing": "melee",
	"brawling": "melee",
	"flail": "melee",
	"parry": "melee",
	"polearm": "melee",
	"twohanded": "melee",
	"blackpowder": "ranged",
	"bow": "ranged",
	"crossbow": "ranged",
	"entangling": "ranged",
	"engineering": "ranged",
	"explosives": "ranged",
	"sling": "ranged",
	"throwing": "ranged",
};

WNG.weaponTypes = {
	"melee" : "Melee",
	"ranged" : "Ranged"
}

// Weapon Group Descriptions
WNG.weaponGroupDescriptions = {
	"basic": "Basic",
	"cavalry": "WNG.GroupDescription.Cavalry",
	"fencing": "Fencing",
	"brawling": "Brawling",
	"flail": "WNG.GroupDescription.Flail",
	"parry": "WNG.GroupDescription.Parry",
	"polearm": "Polearm",
	"twohanded": "Two-Handed",
	"blackpowder": "WNG.GroupDescription.Blackpowder",
	"bow": "Bow",
	"crossbow": "WNG.GroupDescription.Crossbow",
	"entangling": "Entangling",
	"engineering": "WNG.GroupDescription.Engineering",
	"explosives": "WNG.GroupDescription.Explosives",
	"sling": "Sling",
	"throwing": "WNG.GroupDescription.Throwing",
};

// Weapon Reach
WNG.weaponReaches = {
	"personal": "WNG.Reach.Personal",
	"vshort": "WNG.Reach.VShort",
	"short": "WNG.Reach.Short",
	"average": "WNG.Reach.Average",
	"long": "WNG.Reach.Long",
	"vLong": "WNG.Reach.VLong",
	"massive": "WNG.Reach.Massive",
}

// Weapon reach descriptions
WNG.reachDescription = {
	"personal": "WNG.Reach.PersonalDescription",
	"vshort": "WNG.Reach.VShortDescription",
	"short": "WNG.Reach.ShortDescription",
	"average": "WNG.Reach.AverageDescription",
	"long": "WNG.Reach.LongDescription",
	"vLong": "WNG.Reach.VLongDescription",
	"massive": "WNG.Reach.MassiveDescription",
}

// Ammo Groups
WNG.ammunitionGroups = {
	"BPandEng": "Blackpowder and Engineering",
	"bow": "Bow",
	"crossbow": "Crossbow",
	"sling": "Sling",
};

// Item Qualities
WNG.itemQualities = {
	"durable": "Durable",
	"fine": "Fine",
	"lightweight": "Lightweight",
	"practical": "Practical",
};

// Item Flaws
WNG.itemFlaws = {
	"ugly": "Ugly",
	"shoddy": "Shoddy",
	"unreliable": "Unreliable",
	"bulky": "Bulky",
}


// Weapon Qualities
WNG.weaponQualities = {
	"accurate": "Accurate",
	"blackpowder": "Blackpowder",
	"blast": "Blast",
	"damaging": "Damaging",
	"defensive": "Defensive",
	"entangle": "Entangle",
	"fast": "Fast",
	"hack": "Hack",
	"impact": "Impact",
	"impale": "Impale",
	"penetrating": "Penetrating",
	"pistol": "Pistol",
	"precise": "Precise",
	"pummel": "Pummel",
	"repeater": "Repeater",
	"shield": "Shield",
	"trapblade": "Trap Blade",
	"unbreakable": "Unbreakable",
	"wrap": "Wrap"
};

// Weapon Flaws
WNG.weaponFlaws = {
	"dangerous": "Dangerous",
	"imprecise": "Imprecise",
	"reload": "Reload",
	"slow": "Slow",
	"tiring": "Tiring",
	"undamaging": "Undamaging"
};


// Weapon Quality Descriptions (Used in dropdown info)
WNG.qualityDescriptions = {
	"accurate": "WNG.Properties.Accurate",
	"blackpowder": "WNG.Properties.Blackpowder",
	"blast": "WNG.Properties.Blast",
	"damaging": "WNG.Properties.Damage",
	"defensive": "WNG.Properties.Defensive",
	"distract": "WNG.Properties.Distract",
	"entangle": "WNG.Properties.Entangle",
	"fast": "WNG.Properties.Fast",
	"hack": "WNG.Properties.Hack",
	"impact": "WNG.Properties.Impact",
	"impale": "WNG.Properties.Impale",
	"penetrating": "WNG.Properties.Penetrating",
	"pistol": "WNG.Properties.Pistol",
	"precise": "WNG.Properties.Precise",
	"pummel": "WNG.Properties.Pummel",
	"repeater": "WNG.Properties.Repeater",
	"shield": "WNG.Properties.Shield",
	"trapblade": "WNG.Properties.Trapblade",
	"unbreakable": "WNG.Properties.Unbreakable",
	"wrap": "WNG.Properties.Wrap",
	"flexible": "WNG.Properties.Flexible",
	"impenetrable": "WNG.Properties.Impenetrable",
	"durable": "WNG.Properties.Durable",
	"fine": "WNG.Properties.Fine",
	"lightweight": "WNG.Properties.Lightweight",
	"practical": "WNG.Properties.Practical",
};

// Weapon Flaw Descriptions (used in dropdown info)
WNG.flawDescriptions = {
	"dangerous": "WNG.Properties.Dangerous",
	"imprecise": "WNG.Properties.Imprecise",
	"reload": "WNG.Properties.Reload",
	"slow": "WNG.Properties.Slow",
	"tiring": "WNG.Properties.Tiring",
	"undamaging": "WNG.Properties.Undamaging",
	"partial": "WNG.Properties.Partial",
	"weakpoints": "WNG.Properties.Weakpoints",
	"ugly": "WNG.Properties.Ugly",
	"shoddy": "WNG.Properties.Shoddy",
	"unreliable": "WNG.Properties.Unreliable",
	"bulky": "WNG.Properties.Bulky"
};

// Armor Qualities
WNG.armorQualities = {
	"flexible": "Flexible",
	"impenetrable": "Impenetrable",
};

// Armor Flaws
WNG.armorFlaws = {
	"partial": "Partial",
	"weakpoints": "Weakpoints",
};

// Equipment Types
WNG.armorTypes = {
	"softLeather": "WNG.ArmourType.SLeather",
	"boiledLeather": "WNG.ArmourType.BLeather",
	"mail": "WNG.ArmourType.Mail",
	"plate": "WNG.ArmourType.Plate",
	"other": "WNG.ArmourType.Other"
};

// Range Test Modifiers
WNG.rangeModifiers = {
	"Point Blank": "Easy (+40)",
	"Short Range": "Average (+20)",
	"Normal": "Challenging (+0)",
	"Long Range": "Difficult (-10)",
	"Extreme": "Very Hard (-30)",
}

// Difficulty Modifiers
WNG.difficultyModifiers = {
	"veasy": 60,
	"easy": 40,
	"average": 20,
	"challenging": 0,
	"difficult": -10,
	"hard": -20,
	"vhard": -30
}

// Difficulty Labels
WNG.difficultyLabels = {

	"veasy": "Very Easy (+60)",
	"easy": "Easy (+40)",
	"average": "Average (+20)",
	"challenging": "Challenging (+0)",
	"difficult": "Difficult (-10)",
	"hard": "Hard (-20)",
	"vhard": "Very Hard (-30)"
}

WNG.locations = {
	"head": "Head",
	"body": "Body",
	"rArm": "Right Arm",
	"lArm": "Left Arm",
	"rLeg": "Right Leg",
	"lLeg": "Left Leg",
}

// Trapping Availability
WNG.availability = {
	"None": "-",
	"common": "WNG.Availability.Common",
	"scarce": "WNG.Availability.Scarce",
	"rare": "WNG.Availability.Rare",
	"exotic": "WNG.Availability.Exotic",
}


// Trapping Types
WNG.trappingTypes = {
	"clothingAccessories": "WNG.TrappingType.ClothingAccessories",
	"foodAndDrink": "WNG.TrappingType.FoodDrink",
	"toolsAndKits": "WNG.TrappingType.ToolsKits",
	"booksAndDocuments": "WNG.TrappingType.BooksDocuments",
	"tradeTools": "WNG.TrappingType.TradeTools", // Unused - combined with tools and kits
	"drugsPoisonsHerbsDraughts": "WNG.TrappingType.DrugsPoisonsHerbsDraughts",
	"ingredient": "WNG.TrappingType.Ingredient",
	"misc": "WNG.TrappingType.Misc",
};

// These categories are used to label items in containers (Trapping tab)
WNG.trappingCategories = {
	"weapon": "WNG.TrappingType.Weapon",
	"armour": "WNG.TrappingType.Armour",
	"money": "WNG.TrappingType.Money",
	"ammunition": "WNG.TrappingType.Ammunition",
	"container": "WNG.TrappingType.Container",
	"clothingAccessories": "WNG.TrappingType.ClothingAccessories",
	"foodAndDrink": "WNG.TrappingType.FoodDrink",
	"toolsAndKits": "WNG.TrappingType.ToolsKits",
	"booksAndDocuments": "WNG.TrappingType.BooksDocuments",
	"tradeTools": "WNG.TrappingType.TradeTools",
	"drugsPoisonsHerbsDraughts": "WNG.TrappingType.DrugsPoisonsHerbsDraughts",
	"ingredient": "WNG.TrappingType.Ingredient",
	"misc": "WNG.TrappingType.Misc",
};

// Creature Sizes
WNG.actorSizes = {
	"tiny": "Tiny",
	"ltl": "Little",
	"sml": "Small",
	"avg": "Average",
	"lrg": "Large",
	"enor": "Enormous",
	"mnst": "Monstrous"
};

WNG.actorSizeNums = {
	"tiny": 0,
	"ltl": 1,
	"sml": 2,
	"avg": 3,
	"lrg": 4,
	"enor": 5,
	"mnst": 6
};

WNG.tokenSizes = {
	"tiny": 0.3,
	"ltl": 0.5,
	"sml": 0.8,
	"avg": 1,
	"lrg": 2,
	"enor": 3,
	"mnst": 4
};

// Condition Types
WNG.magicLores = {
	"petty": "Petty",
	"beasts": "Beasts",
	"death": "Death",
	"fire": "Fire",
	"heavens": "Heavens",
	"metal": "Metal",
	"life": "Life",
	"light": "Light",
	"shadow": "Shadow",
	"hedgecraft": "Hedgecraft",
	"witchcraft": "Witchcraft",
	"daemonology": "Daemonology",
	"necromancy": "Necromancy",
	"nurgle": "Nurgle",
	"slaanesh": "Slaanesh",
	"tzeentch": "Tzeentch",
};

// Given a Lore, what is the Wind
WNG.magicWind = {
	"petty": "None",
	"beasts": "Ghur",
	"death": "Shyish",
	"fire": "Aqshy",
	"heavens": "Azyr",
	"metal": "Chamon",
	"life": "Ghyran",
	"light": "Hysh",
	"shadow": "Ulgu",
	"hedgecraft": "None",
	"witchcraft": "None",
	"daemonology": "Dhar",
	"necromancy": "Dhar",
	"nurgle": "Dhar",
	"slaanesh": "Dhar",
	"tzeentch": "Dhar",
};

WNG.loreEffect = {
	"petty": "None",
	"beasts": "WNG.LoreDescription.Beasts",
	"death": "WNG.LoreDescription.Death",
	"fire": "WNG.LoreDescription.Fire",
	"heavens": "WNG.LoreDescription.Heavens",
	"metal": "WNG.LoreDescription.Metal",
	"life": "WNG.LoreDescription.Life",
	"light": "WNG.LoreDescription.Light",
	"shadow": "WNG.LoreDescription.Shadow",
	"hedgecraft": "WNG.LoreDescription.Hedgecraft",
	"witchcraft": "WNG.LoreDescription.Witchcraft",
	"daemonology": "",
	"necromancy": "",
	"nurgle": "",
	"slaanesh": "",
	"tzeentch": "",
};

// Types of prayers
WNG.prayerTypes = {
	"blessing": "Blessing",
	"miracle": "Miracle"
}

WNG.mutationTypes = {
	"physical": "Physical",
	"mental": "Mental"
}

WNG.encumbrancePenalties = {
	"encumbered": "WNG.EncumbrancePenalties.Encumbered",
	"veryEncumbered": "WNG.EncumbrancePenalties.VeryEnc",
	"maxEncumbered": "WNG.EncumbrancePenalties.MaxEnc",
}

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

WNG.symptoms = {
	"blight": "Blight",
	"buboes": "Buboes",
	"convulsions": "Convulsions",
	"coughsAndSneezes": "Coughs and Sneezes",
	"fever": "Fever",
	"flux": "Flux",
	"gangrene": "Gangrene",
	"lingering": "Lingering",
	"malaise": "Malaise",
	"nausea": "Nausea",
	"pox": "Pox",
	"wounded": "Wounded",
	"delirium": "Delirium",
	"swelling": "Swelling"
}

WNG.symptomDescriptions = {
	"blight": "WNG.SymptomDescriptions.Blight",
	"buboes": "WNG.SymptomDescriptions.Buboes",
	"convulsions": "WNG.SymptomDescriptions.Convulsions",
	"coughsAndSneezes": "WNG.SymptomDescriptions.CoughsandSneezes",
	"fever": "WNG.SymptomDescriptions.Fever",
	"flux": "WNG.SymptomDescriptions.Flux",
	"gangrene": "WNG.SymptomDescriptions.Gangrene",
	"lingering": "WNG.SymptomDescriptions.Lingering",
	"malaise": "WNG.SymptomDescriptions.Malaise",
	"nausea": "WNG.SymptomDescriptions.Nausea",
	"pox": "WNG.SymptomDescriptions.Pox",
	"wounded": "WNG.SymptomDescriptions.Wounded",
	"delirium": "WNG.SymptomDescriptions.Delirium",
	"swelling": "WNG.SymptomDescriptions.Swelling",
}

WNG.symptomTreatment = {
	"blight": "WNG.SymptomTreatment.Blight",
	"buboes": "WNG.SymptomTreatment.Buboes",
	"convulsions": "WNG.SymptomTreatment.Convulsions",
	"coughsAndSneezes": "WNG.SymptomTreatment.CoughsandSneezes",
	"fever": "WNG.SymptomTreatment.Fever",
	"flux": "WNG.SymptomTreatment.Flux",
	"gangrene": "WNG.SymptomTreatment.Gangrene",
	"lingering": "WNG.SymptomTreatment.Lingering",
	"malaise": "WNG.SymptomTreatment.Malaise",
	"nausea": "WNG.SymptomTreatment.Nausea",
	"pox": "WNG.SymptomTreatment.Pox",
	"wounded": "WNG.SymptomTreatment.Wounded",
	"delirium": "WNG.SymptomTreatment.Delirium",
	"swelling": "WNG.SymptomTreatment.Swelling",
}

WNG.earningValues = {
	"b": "2d10",
	"s": "1d10",
	"g": "1",
}

WNG.randomExp = {
	speciesRand: 20,
	careerRand: 50,
	careerReroll: 25,
	statsRand: 50,
	statsReorder: 25
}

WNG.traitBonuses = {
	"big": {
		"s": 10,
		"t": 10,
		"ag": -5
	},
	"brute": {
		"m": -1,
		"t": 10,
		"s": 10,
		"ag": -10
	},
	"clever": {
		"int": 20,
		"i": 10
	},
	"cunning": {
		"int": 10,
		"fel": 10,
		"i": 10
	},
	"elite": {
		"ws": 20,
		"bs": 20,
		"wp": 20
	},
	"fast": {
		"ag": 10,
		"m": 1
	},
	"leader": {
		"fel": 10,
		"wp": 10
	},
	"tough": {
		"t": 10,
		"wp": 10
	},
	"swarm": {
		"ws": 10
	}
}

WNG.talentBonuses = {
	"savvy": "int",
	"suave": "fel",
	"marksman": "bs",
	"very strong": "s",
	"sharp": "i",
	"lightning reflexes": "ag",
	"coolheaded": "wp",
	"very resilient": "t",
	"nimble fingered": "dex",
	"warrior born": "ws"
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