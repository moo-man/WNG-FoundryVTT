const WNG = {}

CONFIG.ChatMessage.template = "systems/wng/templates/chat/chat-message.html"

// To be updated
CONFIG.statusEffects = [
    "systems/wng/icons/conditions/bleeding.png",
    "systems/wng/icons/conditions/blinded.png",
    "systems/wng/icons/conditions/defeated.png",
    "systems/wng/icons/conditions/dying.png",
    "systems/wng/icons/conditions/exhausted.png",
    "systems/wng/icons/conditions/fear.png",
    "systems/wng/icons/conditions/frenzied.png",
    "systems/wng/icons/conditions/grappled.png",
    "systems/wng/icons/conditions/hindered.png",
    "systems/wng/icons/conditions/hold.png",
    "systems/wng/icons/conditions/onfire.png",
    "systems/wng/icons/conditions/pinned.png",
    "systems/wng/icons/conditions/poisoned.png",
    "systems/wng/icons/conditions/prone.png",
    "systems/wng/icons/conditions/radpoison.png",
    "systems/wng/icons/conditions/restrained.png",
    "systems/wng/icons/conditions/suffocating.png",
    "systems/wng/icons/conditions/staggered.png",
    "systems/wng/icons/conditions/stealthed.png",
    "systems/wng/icons/conditions/terror.png",
    "systems/wng/icons/conditions/vulnerable.png",
    "systems/wng/icons/conditions/wounded.png"
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

// Weapon Type
WNG.weaponType = {
	"melee" : "Melee",
	"chain" : "Chain",
	"exotic" : "Exotic",
	"force" : "Force",
	"power" : "Power",
	"aeldarimelee" : "Aeldari Melee",
	"orkmelee" : "Ork Melee",
	"bolt" : "Bolt",
	"las" : "Las",
	"plasma" : "Plasma",
	"melta" : "Melta",
	"projectile" : "Projectile",
	"flame" : "Flame",
	"admecranged" : "Adeptus Mechanicus Ranged",
	"grenademissile" : "Grenade and Missile",
	"aeldariranged" : "Aeldari Ranged",
	"orkranged" : "Ork Ranged"
};

// Originally groupToType. Given a type, what's the primary range, melee or ranged
WNG.groupToRange = {
	"melee" : "Melee",
	"chain" : "Melee",
	"exotic" : "Melee",
	"force" : "Melee",
	"power" : "Melee",
	"aeldarimelee" : "Melee",
	"orkmelee" : "Melee",
	"bolt" : "Ranged",
	"las" : "Ranged",
	"plasma" : "Ranged",
	"melta" : "Ranged",
	"projectile" : "Ranged",
	"flame" : "Ranged",
	"admecranged" : "Ranged",
	"grenademissile" : "Ranged",
	"aeldariranged" : "Ranged",
	"orkranged" : "Ranged"
};

// Weapon Group
WNG.weaponGroup = {
	"melee" : "Melee",
	"force" : "Force",
	"pistol" : "Pistol",
	"basic" : "Basic",
	"heavy" : "Heavy",
	"launcher" : "Launcher",
	"thrown" : "Thrown"
};

// Weapon Group Descriptions
WNG.weaponGroupDesc = {
	"melee" : "Standard melee weapons that add strength to the base damage.",
	"force" : "Standard melee weapons that add strength and half willpower to the base damage.",
	"pistol" : "Ranged weapons that can be used in melee with a Ballistic Skill (A) Test at a +2 DN penalty.",
	"basic" : "Standard range weapons.",
	"heavy" : "Heavy weaponry have strength requirements to fire without brace, or else suffer a +2 DN penalty.",
	"launcher" : "Requires a missile or grenade for its damage profile.",
	"thrown" : "Medium effective range is based on strength multiplied by X."
};

// Weapon Traits
WNG.weaponTraits = {
	"agonising" : "Agonising",
	"arc" : "Arc (X)",
	"assault" : "Assault",
	"blastsize" : "Blast (Size)",
	"brutal" : "Brutal",
	"force" : "Force",
	"heavy" : "Heavy (X)",
	"inflictcondition" : "Inflict (Condition)",
	"kustom" : "Kustom",
	"melta" : "Melta",
	"parry" : "Parry",
	"pistol" : "Pistol",
	"rad" : "Rad (X)",
	"rapidfire" : "Rapid Fire (X)",
	"reliable" : "Reliable",
	"rending" : "Rending (X)",
	"silent" : "Silent",
	"sniper" : "Sniper (X)",
	"spread" : "Spread",
	"supercharge" : "Supercharge",
	"unwieldy" : "Unwieldy (X)",
	"waaagh!" : "Waaagh!",
	"warpweapons" : "Warp Weapons"
};

// Weapon Traits Descriptions
WNG.weaponDesc = {
	"agonising" : "Designed to inflict maximum pain, these weapons damage mind and morale as much as body.<br><br>Every Wound inflicted by an Agonising weapon also inflicts 1 Shock.",
	"arc" : "The deadly electrical discharge of Arc weapons scrambles vehicle technology.<br><br>Arc weapons gain +ED equal to their rating when you use them to attack a vehicle.",
	"assault" : "Optimised for firing whilst rushing righteously towards the enemy.<br><br>You can fire an Assault weapon as part of a Run, but take a +2 DN penalty when you do so.",
	"blastsize" : "Explosive weapons can devastate multiple enemies with a single attack.<br><br>Every Blast weapon has a (Size) which determines how many enemies it can hit, assuming they are close together. Choose any point in range, and make a DN 3 Ballistic Skill (A) Test; if you succeed, you deal Damage to all individuals within the Blast Radius. If you’re measuring distance accurately or using miniatures, multiply the Radius by 3 for the approximate blast radius in metres.<br><br>If a weapon with the Blast Trait misses, it Scatters.<br><br><br>Blast And Fire<br><br>If a weapon has the Blast Trait and the FIRE Keyword:<br><ul><li>Ignore bonuses to Defence from cover.</li><li>Missed shots don’t Scatter; the area is on fire, but the target dodged the flames.</li></ul>",
	"brutal" : "Brutal weapons inflict appalling, traumatic wounds.<br><br>When you roll Extra Damage Dice for a Brutal weapon:<br><ul><li>Results of 1 and 2 inflict 0 Damage.</li><li>Results of 3 and 4 inflict 1 Damage.</li><li>Results of 5 and 6 inflict 2 Damage.</li></ul>",
	"force" : "Psykers can channel the power of the Warp through the etheric circuit patterns and psycho-reactive materials of these weapons.<br><br>If you have the PSYKER Keyword, you may add half of your Wil Rating to a Force weapon’s Damage Value.",
	"heavy" : "Large and cumbersome weapons are difficult to fire accurately.<br><br>You must have a Strength equal to the Heavy weapon’s rating to fire it normally. All attacks with a Heavy weapon are made with a +2 DN penalty if you do not meet the minimum Strength, and a Complication knocks you Prone in addition to any other effects.<br><br>Taking the Brace Action or securing a Heavy weapon to something like a tripod negates the Heavy Trait.",
	"inflictcondition" : "These weapons are designed to harm the target in cruel and unusual ways.<br><br>Every Inflict weapon has a Condition that it imposes on the target if it deals a Wound. For example, if a weapon with Inflict (On Fire) deals a Wound to a target, the target is On Fire.<br><br>If an Inflict weapon has a number, that number determines the number of any Test made to remove the Condition. For example, if a weapon with Inflict (Poisoned 4) Wounds a target, they are Poisoned, and the target would need to make a DN 4 Toughness Test to recover at the beginning of their next turn.",
	"kustom" : "You can replace this weapon Trait with any other Weapon Trait of your choice when you acquire a weapon with this Trait. If the Trait you select has a Rating (X), roll 1d3 to determine the Rating.",
	"melta" : "The sub-atomic bursts that spew from these weapons melt flesh and reduce armour to slag.<br><br>When you roll Extra Damage Dice for a Melta weapon fired at Short Range:<br><ul><li>Results of 1 and 2 inflict 0 Damage.</li><li>Results of 3 and 4 inflict 1 Damage.</li><li>Results of 5 and 6 inflict 2 Damage.</li></ul><br><br>When you roll Extra Damage Dice for a Melta weapon fired against a vehicle or fortification at close range:<br><ul><li>Results of 1, 2 and 3 inflict 1 Damage.</li><li>Results of 4, 5 and 6 inflict 2 Damage.</li></ul>",
	"parry" : "You can use these weapons to deflect blows.<br><br>You gain +1 Defence against melee attacks while wielding a Parry weapon.",
	"pistol" : "Built light to be drawn quickly and used in close quarters.<br><br>Pistols can be fired while Engaged.",
	"rad" : "The dangerous radioactive materials fired by these weapons irrevocably damage flesh.<br><br>When you roll Extra Damage Dice for a Rad weapon, you add the Rating to the results of the dice.",
	"rapidfire" : "These weapons are capable of quickly unleashing a hail of death at close range.<br><br>If you hit with a Rapid Fire weapon at Short Range, you gain Extra Damage Dice equal to the weapon’s Rapid Fire rating.",
	"reliable" : "A rugged and easily maintained weapon.<br><br>You can ignore the first Complication related to this weapon per scene. Tests made to repair or maintain Reliable weapons are made with +1 bonus die.",
	"rending" : "These powerful weapons punch through armour.<br><br>When you Shift an Exalted Icon as part of an attack with a Rending weapon, the weapon’s AP improves by the Rending rating for that attack.",
	"silent" : "These stealthy weapons are designed to deal damage as quietly as possible.<br><br>When a weapon with this Trait is used as part of an attack, your Stealth Score is only reduced by 1.",
	"sniper" : "Weapons optimised for high accuracy over long range.<br><br>When you Aim with a Sniper weapon you gain an additional + 1 bonus die to the attack, and gain +ED equal to the weapon’s Sniper rating.",
	"spread" : "These wide-bore weapons wreak havoc on closely packed combatants.<br><br>When fired at Close Range, a Spread weapon can hit any number of targets in a radius of 3 metres. Double the total damage of a Spread weapon fired at a Mob in Short Range.",
	"supercharge" : "The super-heated matter plasma weapons fire can be overcharged with undeniably deadly results for the target and, occasionally, the wielder.<br><br>You can choose to fire a weapon with this Trait in Supercharge mode. If you roll a Complication, you take 1d6 Mortal Wounds. If you hit, the weapon deals an additional +3 ED.",
	"unwieldy" : "Whether unbalanced or too large, some weapons are harder to use.<br><br>Attacks made with Unwieldy weapons have their DN increased by an amount equal to their Unwieldy rating.",
	"waaagh!" : "Ork weapons defy understanding; they break the laws of mechanics and physics, but a Greenskin’s beliefs make them all the more deadly.<br><br>If you are an Ork, you gain +1 bonus die to attacks with a WAAAGH! weapon. If you are also Wounded, you deal an extra +1 ED.",
	"warpweapons" : "Powered by psychic energy, xenos technology, or the raw force of Chaos, few can face these ungodly weapons and emerge unharmed.<br><br>A Warp Weapon has a Damage value equal to the target’s Resilience –4, unless the weapon’s listed Damage is higher.",
};

// Ammo Types
WNG.ammunitionTypes = {
	"projectile" : "Projectile",
	"las" : "Las",
	"flame" : "Flame",
	"bolt" : "Bolt",
	"plasma" : "Plasma",
	"melta" : "Melta",
	"shuriken" : "Shuriken"
};

// Ammo Groups
WNG.ammunitionGroups = {
	"explosive" : "Explosive",
	"standard" : "Standard",
	"specialbolt" : "Special Bolt",
	"specialprojectile" : "Special Projectile"
};

// Ammo Groups Descriptions
WNG.ammunitionGroupsDesc = {
	"explosive" : "Explosive",
	"standard" : "Whether it is a fistful of loose cartridges or a fully juiced charge pack, a single point of Ammo represents an abstract amount of ammunition.",
	"specialbolt" : "These ammunition types can only be used with weapons that have the BOLT Keyword.",
	"specialprojectile" : "These ammunition types can only be used with weapons that have the PROJECTILE Keyword and do not have the HEAVY Keyword."
};

// Armour Types
WNG.armourTypes = {
	"armour" : "Armour",
	"poweredarmour" : "Powered Armour",
	"powerfields" : "Power Fields",
	"astartesarmour" : "Astartes Armour",
	"aeldariarmour" : "Aeldari Armour",
	"orkarmour" : "Ork Armour"
};

// Armour Groups
WNG.armourGroups = {
	"stdArmour" : "Standard Armour",
	"invarmour" : "Invulnerable Armour"
};

// Armour Groups Descriptions
WNG.armourGroupsDesc = {
	"stdArmour" : "Standard Armour is ignored with Armour Piercing (AP).",
	"invarmour" : "Any Armour Rating marked with an asterisk (*) is Invulnerable. Armour Piercing (AP) does not affect Invulnerable Armour."
};

// Armour Traits
WNG.armourTraits = {
	"bulk" : "Bulk (X)",
	"cumbersome" : "Cumbersome",
	"erewego" : "‘Ere We Go!",
	"powerfield" : "Power Field",
	"powered" : "Powered (X)",
	"shield" : "Shield"
};

// Armour Traits Descriptions
WNG.armourDesc = {
	"bulk" : "Heavy and restrictive armour possesses the Bulk trait.<br><br>Bulk reduces the Speed of the wearer by a number of metres equal to its rating.",
	"cumbersome" : "Large suits of armour can severely restrict movement.<br><br>You cannot Run or Sprint in Cumbersome armour.",
	"erewego" : "The latent psychic power of an Ork empowers their armour, allowing them to fight harder when harmed.<br><br>An Ork wearing armour with this Trait ignores the Bulk and Cumbersome Traits when Wounded.",
	"powerfield" : "Wonders of archeotech, personal Power Fields envelope their user in a protective barrier of energy.<br><br>Armour with this Trait allows you to roll Determination against Mortal Wounds.",
	"powered" : "This armour is designed to augment the wearer’s might through the marvels of mechanisation.<br><br>Whilst wearing armour with this Trait you gain a Strength bonus equal to the rating. Additionally, you are not knocked Prone when firing an unsecured Heavy weapon.",
	"shield" : "Wielded like a defensive weapon, shields are carried instead of worn, and used to deflect incoming attacks.<br><br>Armour with this Trait adds its AR to your Defence and Resilience, provided the GM agrees you can manoeuvre the shield to block the attack."
};

// Weapon Ranges
WNG.ranges = {
	"pistolsmelee" : "Pistols in Melee",
	"engaged" : "Engaged",
	"short" : "Short Range",
	"medium" : "Medium Range",
	"long" : "Long Range",
	"extreme" : "Extreme Range"
};

// Weapon Range Modifiers
WNG.rangeModifiers = {
	"pistolsmelee" : "You can fire a weapon with the Pistol Trait when Engaged in close combat. Any Ballistic Skill (A) Tests you make while you are Engaged suffer a +2 DN penalty. You can’t Aim while Engaged, but you can use other ranged combat options and weapon traits, such as Rapid Fire.",
	"engaged" : "Combatants who are within their opponent’s melee range are considered to be Engaged in close combat. If you are Engaged in close combat, you can only attack targets you are Engaged with. Cannot fire a ranged weapon while Engaged unless it has the Pistol Trait.",
	"short" : "Beyond Melee Range and under Short Range, gain +1 bonus dice to your Ballistic Skill (A) Test.",
	"medium" : "Beyond Short Range and under Medium Range, standard Ballistic Skill (A) Test.",
	"long" : "Beyond Medium Range and under Long Range, gain +2 Defence when you make a Ballistic Skill (A) Test.",
	"extreme" : "Beyond Long Range, any ranged attack automatically misses."
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

// Actor Size Modifier (Attack and Detection)
WNG.actorSizesMod = {
	"tiny" : "2DN",
	"small" : "1DN",
	"average" : "0",
	"large" : "1d",
	"huge" : "2d",
	"gargantuan" : "3d"
};

// Actor Size Examples/Descriptions
WNG.actorSizesEx = {
	"tiny" : "Servo Skull, Cherub, Tyranid Ripper",
	"small" : "Gun Drone, Grot, Ratling, Gyrinx",
	"average" : "Human, Eldar, T’au, Space Marine",
	"large" : "Space Marine Terminator, Necron Destroyer, Tyranid Warrior, Ogryn",
	"huge" : "Dreadnaught, Wraithlord, Hive Tyrant",
	"gargantuan" : "Greater Daemon, Land Raider, Baneblade"
};

// Vision Penalties (there is no proper name for these in the book, this is an approximation)
WNG.visionPenalties = {
	"mist" : "Twilight, light shadows, heavy mist",
	"fog" : "Very dim light, heavy rain, fog, drifting smoke",
	"smoke" : "Heavy fog, deployed smoke, torrential storm",
	"darkness" : "Total darkness, thermal smoke"
};

// Vision Penalties Range (BS and Aware)
WNG.visionPenaltiesRange = {
	"mist" : 1,
	"fog" : 2,
	"smoke" : 3,
	"darkness" : 4
};

// Vision Penalties Melee
WNG.visionPenaltiesMelee = {
	"mist" : 0,
	"fog" : 1,
	"smoke" : 2,
	"darkness" : 3
};

// Stealth Score Action (there is no proper name for these in the book, this is an approximation)
WNG.stealthAction = {
	"whisper" : "Whispering, readying a quiet weapon.",
	"soft" : "Talking softly, readying a weapon with moving parts (racking a stub gun), Reloading.",
	"speaking" : "Speaking, using any light-emitting gear, attacking an unaware sentry with a knife, shooting aMelta weapon.",
	"loud" : "Any sudden loud noise, fighting in melee combat (except the examples above), using a Chainweapon or striking with a Power weapon, Lasgun shots, Shuriken Catapult fire, a grav vehiclemoving, a jump pack engaging.",
	"screaming" : "Screaming, gunfire (auto, stub, plasma, etc.), a promethium vehicle ignition.",
	"explosion" : "Mass reactive (Bolter Rounds) and explosive detonations, flyer jet engines."
};

// Stealth Score Reduction
WNG.stealthReduction = {
	"whisper" : -1,
	"soft" : -2,
	"speaking" : -3,
	"loud" : -4,
	"screaming" : -5,
	"explosion" : -6
};

// Conditions
WNG.conditions = {
    "bleeding" : "Bleeding",
    "blinded" : "Blinded",
    "defeated" : "Defeated",
    "dying" : "Dying",
    "exhausted" : "Exhausted",
    "fear" : "Fear",
    "frenzied" : "Frenzied",
    "grappled" : "Grappled",
    "hindered" : "Hindered",
    "hold" : "Hold Action",
    "onfire" : "On Fire",
    "pinned" : "Pinned",
    "poisoned" : "Poisoned",
    "prone" : "Prone",
    "radpoison" : "Rad Poison",
    "restrained" : "Restrained",
    "suffocating" : "Suffocating",
    "staggered" : "Staggered",
    "stealthed" : "Stealthed",
    "terror" : "Terror",
    "vulnerable" : "Vulnerable",
    "wounded" : "Wounded"
};

// Condition Descriptions
WNG.conditionDesc = {
    "bleeding" : "You’re bleeding, afflicted with a grievous wound that is difficult to treat. You suffer one Mortal Wound at the end of your Turn. Bleeding can be stopped with a successful Toughness Test (DN 4), or if another character aids you with the Medicae Skill. You can attempt to use Medicae on yourself but do so at +1DN.",
    "blinded" : "You’re unable to see properly. Increase the DN for any sight-related task (including all combat Tests) by 4, replacing any lesser vision penalties. At the GM’s discretion you may use a Combat Action to remove the Blinded condition, using a narratively appropriate Skill.",
    "defeated" : "Defeated.",
    "dying" : "If you suffer more Wounds than your Maximum Wounds, you are Dying. You are on the verge of expiration, unable to move or fight properly, and will perish if you do not receive medical attention soon.<br><br>When you are Dying, you immediately suffer a Memorable Injury and fall Prone. You cannot stand up While you are Dying.<br><br>Whenever you take any amount of damage that would cause you to suffer a Wound While Dying, you suffer a Traumatic Injury instead. If you suffer more Traumatic Injuries than your Tier + 1, you die.<br><br>You may roll Determination when you take damage While Dying; if you use Determination to reduce any damage you take to 0, you do not suffer a Traumatic Injury.<br><br>A Dying character can be moved by another character if they use a Combat Action to drag or lift a fallen comrade.<br><br>If you recover any Wounds, you are no longer Dying.",
    "exhausted" : "You are weary from battle or persistent effort and suffer from fatigue. On your Turn, you can only Walk or Crawl, perform a basic Combat Action (attack with no combat options, such as Aim or Multi-Attack), or Fall Back. Additionally, you may not roll Determination. Any Shock suffered by an Exhausted character is immediately converted into Mortal Wounds. Certain circumstances directly inflict Exhaustion. You are automatically Exhausted if your Shock increases beyond your Maximum Shock. Certain weapons, psychic powers, or Ruin Actions can also cause you to become Exhausted even while you are below your Maximum Shock. If you are Exhausted from a source other than exceeding your Maximum Shock, that effect determines how you remove the Exhausted condition. Otherwise, the Exhausted condition is removed whenever you recover Shock.",
    "fear" : "You’re scared. Whatever is causing your Fear might also make you anxious, or trigger physical reactions like rapid breathing, shaking, and a lack of focus. When you encounter something that causes Fear, you roll your Resolve against a DN dictated by the source of Fear. Success allows you to act normally. If you fail, you suffer +2DN to all Tests. The penalty lasts until the end of the scene or until an ally passes a Leadership (Fel) Test of DN 2 + the source’s Fear value. A being that causes Fear is immune to Fear and Intimidation Interaction Attacks.",
    "frenzied" : "Whether whipped into a zealous fury or auto injecting Frenzon combat stims, you’re Frenzied. You lose all sense of self-preservation and throw yourself into the thick of combat. When you become Frenzied, you may choose to embrace the frenzy or attempt to resist it. If you choose to resist, at the start of your Turn make a DN 3 Willpower Test. If you pass, the rage subsides and you resist the frenzy. If the effect is triggered, embraced, or otherwise not resisted, you are Frenzied and must try to get into close combat as quickly as possible, charging the nearest visible enemy. If you are in cover, you break cover and move towards the nearest enemy. While Frenzied, you are immune to Fear and cannot be Pinned and must always use the All-Out Attack option, if possible. You gain +1 to your Strength Attribute While Frenzied.",
    "grappled" : "You can use your Combat Action to try to grapple a target you are Engaged with. Make an Opposed Strength Test with the target. If you win, you grapple the target.<br><br>Once grappled, a character is Restrained and may only use one-handed weapons. To break free from a grapple, a character must succeed an Opposed Strength Test using a Combat Action.<br><br>You may attempt to grapple multiple targets using a Multi-Attack, but you must be Engaged with all targets and you can’t grapple more targets than you have arms.<br><br>Size plays an important role in grappling. A target gains +2 bonus dice to the Opposed Strength Test for every size category it is larger than you.",
    "hindered" : "Something’s holding you back. While Hindered increase the DN for all Tests by +1, or higher if the rules of whatever is hindering you say so. Hindered lasts for one Round, unless otherwise stated.",
    "hold" : "You may choose to wait and act later in the Round. To do so, announce you are holding your Combat Action instead of taking it during your Turn. You may announce you are using your held Combat Action at any point later in the Round.<br><br>If you wish to Interrupt another character, you must succeed at an opposed Initiative Test. Failure means that the acting character takes their action first before you have the chance to intervene. If you don’tuse your held Combat Action by the end of the Round it is lost.",
    "onfire" : "You’re on fire! You take 1d3 Mortal Wounds at the start of each of your Turns. After taking the Mortal Wound, you must pass a DN 3 Willpower Test or be Hindered until the end of the Round.",
    "pinned" : "You’re under heavy fire, and there’s a chance your Resolve breaks under the pressure. If you are targeted with a Pinning Attack attack, you may be Pinned. To see if you are Pinned, make a Resolve Test with a DN equal to the Salvo value of the weapon, and add +1 DN for each additional enemy targeting you with a Pinning Attack (a Mob counts as a single attacker). If you fail, you lose your Movement and either hunker down behind existing cover or use your Movement to move towards the nearest cover on your next Turn. While Pinned, you can’t Charge or leave cover. You suffer a +2 DN penalty to Ballistic Skill (A) Tests against the enemies using Pinning Attack While you are Pinned. An ally may attempt to rally their comrades on their Turn by making a Leadership (Fel) Test with the same DN as the Resolve Test, adding an extra +1DN if a Pinned character has taken any damage during the combat. If the Test is successful, the character successfully rallies any Pinned allies within 5 metres, ending the effect.",
    "poisoned" : "You’ve been inflicted with one of the galaxy’s countless pathogens, plagues, or viruses. You could be suffering from neurotoxins injected into your system, alien acid splashed on you, or Nurgle’s contagions. All of these dangers leave you Poisoned. You suffer a +2 DN penalty to all Tests while Poisoned. Some poisons also inflict damage based on the poison. Some poisons may affect your ability to function instead of, or in addition to, causing damage. The Poisoned condition ends when you are treated using the Medicae Skill or you succeed on a Toughness Test (DN based on the poison) at the beginning of your Turn.",
    "prone" : "You’re knocked down on the ground. Your Defence is reduced by 2 against any attack made by a Threat within 5 metres of you. Your Defence is increased by 1 when you’re attacked from 6 or more metres away. If you become Prone while flying, you fall to the ground and suffer falling damage. Standing up when Prone is a Free Action on your Turn. If you stand up in this way, you can only use the Standard Movement option; you can’t use combat options such as Brace or Aim. An adjacent character may use their Movement to help you stand up immediately when you’re Prone.",
    "radpoison" : "If you are exposed to radiation for a significant time, or a particularly abundant source, you may contract rad poisoning. See Rad Poisoning Intensity to determine check and damage.",
    "restrained" : "You’re bound, possibly by some form of entangling attack such as an Genestealer Cultist Webber, a Barbed Strangler, or a good old-fashioned net. While Restrained you lose your Movement action for that Turn and your Defence is reduced by 2.",
    "suffocating" : "When deprived of oxygen underwater, in a smokefilled manufactorum, or in the void outside a Space Hulk, the consequence is the same — you suffocate.<br><br>You can attempt to hold your breath to conserve oxygen for a number of minutes equal to your Toughness Attribute. Certain enhancements and equipment can extend this time, such as the Adeptus Astartes Imbiber or multi-lung.<br><br>If you attempt to hold your breath during combat or any other Round-based encounter, you can do so for a number of Rounds equal to double your Toughness Attribute. If you reach the end of either of these times without breathing, you fall unconscious.<br><br>You must pass a DN 3 Toughness Attribute Test every minute or Round you hold your breath. If you fail the Test, you suffer 1d3 Shock damage. If suffocation causes you to suffer more Shock than your maximum, you fall unconscious. If you do not breathe oxygen before the allotted time runs out, then you automatically fall unconscious, even if you do not exceed your Maximum Shock. If you are deprived of oxygen and unconscious, you die after a number of Rounds equal to your Toughness Attribute.",
    "staggered" : "You’re off balance; you’ve run too fast over rough terrain, ordnance has impacted nearby, or you’ve been clipped by a stray bullet. When you move While Staggered, your Speed is reduced by half. You can’t Run or Sprint unless otherwise stated. The Staggered condition ends at the beginning of the next Round.",
    "stealthed" : "You can make a Stealth (A) Test as a Combat Action. Whenever you do this (or whenever the GM calls for a Stealth (A) Test), write down the number of Icons you roll. This is your Stealth Score for the scene. Whenever another character uses their Passive Awareness or makes an Awareness (Int) Test, they use your Stealth Score for the DN of their Test. If the enemy discovers you, you lose your Stealth Score for the scene. You can’t roll Stealth (A) again until the next scene, as dictated by the GM. This means you can’t hide and may need to confront (or run from) whatever you were trying to avoid.<br><br>Your Stealth Score can be decreased through various actions, and is ultimately adjudicated by the GM. The GM can award bonuses to your Stealth Score or your enemies’ Awareness (Int) Tests based on light sources, terrain, or other circumstances at their discretion. Below is a guideline for how various actions could reduce a Stealth Score.",
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
	"radiation" : "Radiation"
};

// Hazard Descriptions
WNG.hazardDesc = {
    "suffocation" : "When deprived of oxygen underwater, in a smokefilled manufactorum, or in the void outside a Space Hulk, the consequence is the same — you suffocate.<br><br> You can attempt to hold your breath to conserve oxygen for a number of minutes equal to your Toughness Attribute. Certain enhancements and equipment can extend this time, such as the Adeptus Astartes Imbiber or multi-lung.<br><br>If you attempt to hold your breath during combat or any other Round-based encounter, you can do so for a number of Rounds equal to double your Toughness Attribute. If you reach the end of either of these times without breathing, you fall unconscious.<br><br> You must pass a DN 3 Toughness Attribute Test every minute or Round you hold your breath. If you fail the Test, you suffer 1d3 Shock damage. If suffocation causes you to suffer more Shock than your maximum, you fall unconscious. If you do not breathe oxygen before the allotted time runs out, then you automatically fall unconscious, even if you do not exceed your Maximum Shock. If you are deprived of oxygen and unconscious, you die after a number of Rounds equal to your Toughness Attribute.",
    "electricity" : "Nature can be as deadly as any foe imaginable. Weaponised by countless militaries throughout the long and grim history of the galaxy, electrical currents can Turn armour against its wearer, reduce a tank to molten slag, and cook an Ork from the inside out.<br><br> Anyone struck by an electrical discharge faces the same devastating effects. First, you suffer damage equal to the intensity of the electricity. All electricity damage is Agonising.<br><br> After resolving the effects of the damage, you must then make a Toughness Attribute Test. If you fail, you are Restrained for one Round and knocked Prone on a Complication. If you pass, the electrical charge dissipates and you may act normally.",
    "extremeheatcold" : "Countless planets possess extreme environments that are far too hostile to support life, but the need for resources and defensible positions means there are Imperium colonies on almost every kind of world. Sometimes extreme temperatures occur naturally. Other temperature changes are caused by destructive weaponry, such as the Exterminatus, or the terraforming process of the Tyranid bio-fleets.<br><br> When you find yourself exposed to extreme hot or cold temperatures, you must pass a Toughness Attribute Test with a DN determined by the GM. During narrative time, you make a Test every hour. During combat time, you make a Toughness Test after a number of Rounds equal to your Toughness.<br><br> If you fail the Toughness Test, you become Exhausted until you Regroup or seek Respite.",
    "falling" : "Gravity is inevitable, indiscriminate, and often has painful consequences. When you fall a distance of 5 metres or more you suffer falling damage. You suffer 1 Mortal Wound, plus 1d3 Mortal Wounds for every extra 5 metres you fall.",
    "fire" : "Forge World furnaces, prometheum tank explosions, overheating Plasma weaponry; the 41st Millennium is filled with flammable situations. You must make an Athletics (A) Test every Round you are exposed to a hazard that could set you On Fire. The GM determines the DN of this Test. If you fail, you’re On Fire.<br><br> While On Fire, you take 1d3 Mortal Wounds at the start of each of your Turns. You must then pass a DN 3 Willpower Test to act normally on your Turn. If you fail, you are Pinned until the end of the Round as you spend your Turn crying out in pain or flailing around in an attempt to put out the fire. As an action, you can attempt to put out someone who is On Fire by passing an DN 3 Agility Test.<br><br> Anything that doesn’t have an Agility Attribute automatically passes Agility Attribute Tests to avoid being ignited or to put out a fire.<br><br> The cleansing purity and destructive power of fire makes it a popular weapon in the Imperium and beyond, with even energy weapons able to cause combustion. When you are hit by a FIRE weapon, follow this procedure:<br><ol><li>If hit, resolve the weapon’s damage first.</li><li>If desired, toll Determination against the damage.</li><li>Make a DN 3 Agility Attribute Test. The DN can be modified by weapon traits as follows:</li><ul><li>+1 for the Blast [Small] trait</li><li>+2 for the Blast [Medium] trait</li><li>+3 for the Blast [Large] trait</li><li>+4 for the Blast [Very Large] trait</li><li>+5 for the Blast [Huge] trait</li></ul><li>If you fail the Test, you’re On Fire.</li></ol>",
    "radiation" : "Radiation comes in many different forms, and is one of the most lethal and hardest to detect of all environmental hazards. The fuel of a crippled void ship, journeying the irradiated plains of a Death World, or encountering a sabotaged reactor on a Forge World can all lead to radiation exposure. A few weapons in the 41st Millennium even harness this dangerous and volatile power.<br><br> Detecting radiation is difficult. Without the correct equipment, a high DN Survival Test (minimum 9) is required to detect any source of radiation.<br><br> You must immediately take a Toughness Attribute Test whenever exposed to radiation. The GM decides on the DN — it should never be easy. If you fail the Test, the results are severe:<br><ul><li>You take 1d3 Mortal Wounds.</li><li>You take 1d6 Shock damage.</li><li>You are Staggered for 1 Round.</li></ul><br><br><br>Rad Poison<br><br> If you are exposed to radiation for a significant time, or a particularly abundant source, you may contract rad poisoning. See Rad Poisoning Intensity to determine check and damage."
};

// Hazard Electricity Sub Group
WNG.hazardElectricity = {
	"light" : "7+1ED; Agonising",
	"moderate" : "12+2ED; Agonising",
	"intense" : "17+3ED; Agonising"
};

// Hazard Radiation Sub Group
WNG.hazardRadiation = {
	"light" : "1 Mortal Wound",
	"moderate" : "1d3 Mortal Wounds",
	"intense" : "1d6 Mortal Wounds"
};

// Condition and Hazard Intensity
WNG.intensity = {
	"light" : "Light",
	"moderate" : "Moderate",
	"intense" : "Intense"
};

// Condition and Hazard Intensity Difficulty
WNG.intensityDifficulty = {
	"light" : 3,
	"moderate" : 5,
	"intense" : 7
};

// Damage Types
const DAMAGE_TYPE = {
	NORMAL: 0,
	IGNORE_AP: 1,
	IGNORE_TB: 2,
	IGNORE_ALL: 3
};

const PSEUDO_ENTITIES = [
	"Table",
	"Keywords",
    "Condition",
	"Roll"
];