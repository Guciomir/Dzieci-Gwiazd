const featData = [
    {
        "id": "artificer-initiate",
        "name": "Artificer Initiate",
        "category": "changed",
        "description": [
            "(Prerequisites: Spellcasting Feature) You gain ability to learn two Artificer Infusions know and use one at the time. You can change infuse after long rest and If the infusione has a prerequisite of any kind, you can choose that infusion only if you're a artificer who meets the prerequisite. Whenever you gain a level, you can replace the infusion with another one from the artificer class. You gain proficiency with one type of artisan's tools of your choice, and you can use that type of tool as a spellcasting focus for any spell you cast that uses Intelligence as its spellcasting ability."
        ]
    },
    {
        "id": "charger",
        "name": "Charger",
        "category": "changed",
        "description": [
            "Increase your Strength or Dexterity by 1, to a maximum of 20. When you use your action to Dash, you can make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line immediately before this melee attack or shove, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)"
        ]
    },
    {
        "id": "aberrant-dragonmark",
        "name": "Aberrant Dragonmark",
        "category": "changed",
        "description": [
            "Nie masz epickiego boona."
        ]
    },
    {
        "id": "divinely-favored",
        "name": "Divinely Favored",
        "category": "allowed",
        "description": [
            "Bez wymogu backgroundu."
        ]
    },
    {
        "id": "elven-accuracy",
        "name": "Elven Accuracy",
        "category": "changed",
        "description": [
            "Increase your Dexterity, Intelligence, Wisdom, or Charisma by 1, to a maximum of 20. Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once, you can use this features once per turn."
        ]
    },
    {
        "id": "great-weapon-master",
        "name": "Great Weapon Master",
        "category": "changed",
        "description": [
            "Once on each of your turns when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can immediately make one melee weapon attack (no action required).",
            "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a −5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage. You cannot do so if the attack is made with the opposite end of your weapon."
        ]
    },
    {
        "id": "heavy-armor-master",
        "name": "Heavy Armor Master",
        "category": "changed",
        "description": [
            "Increase your Strength score by 1, to a maximum of 20. While you are wearing heavy armor, bludgeoning, piercing, and slashing damage you take from nonmagical attacks is reduced by an amount equal to your proficiency bonus. If the heavy armor you are wearing is magical, this damage reduction also applies to bludgeoning, piercing, and slashing damage from magical sources."
        ]
    },
    {
        "id": "initiate-of-high-sorcery",
        "name": "Initiate of High Sorcery",
        "category": "allowed",
        "description": [
            "Bez wymogu Dragonlance Campaign."
        ]
    },
    {
        "id": "knight-of-the-crown",
        "name": "Knight of the Crown",
        "category": "allowed",
        "description": [
            "Bez wymogu backgroundu."
        ]
    },
    {
        "id": "knight-of-the-rose",
        "name": "Knight of the Rose",
        "category": "allowed",
        "description": [
            "Bez wymogu backgroundu."
        ]
    },
    {
        "id": "knight-of-the-sword",
        "name": "Knight of the Sword",
        "category": "allowed",
        "description": [
            "Bez wymogu backgroundu."
        ]
    },
    {
        "id": "mage-slayer",
        "name": "Mage Slayer",
        "category": "changed",
        "description": [
            "When a creature within your range melee weapon attack casts a spell, you can use your reaction to make a melee weapon attack against that creature. When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration. You have advantage on saving throws against spells cast by creatures within 5 feet of you."
        ]
    },
    {
        "id": "magic-initiate",
        "name": "Magic Initiate",
        "category": "changed",
        "description": [
            "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's spell list. In addition, choose one 1st-level spell to learn from that same list. Using this feat, you can cast the spell once at its lowest level, and you must finish a long rest before you can cast it in this way again. You can also cast these spells using spell slots you have of the appropriate level.",
            "Your spellcasting ability for these spells depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
        ]
    },
    {
        "id": "orcish-fury",
        "name": "Orcish Fury",
        "category": "changed",
        "description": [
            "Prerequisite: Half-Orc and Orc",
            "Increase your Strength or Constitution by 1, to a maximum of 20. When you hit with an attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest. Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack."
        ]
    },
    {
        "id": "prodigy",
        "name": "Prodigy",
        "category": "changed",
        "description": [
            "You gain proficiency in two skills of your choice. You gain proficiency with two tools of your choice. You learn one language of your choice. Choose one skill or tool with which you are proficient. Your proficiency bonus is doubled for any ability check you make that uses the chosen proficiency."
        ]
    },
    {
        "id": "revenant-blade",
        "name": "Revenant Blade",
        "category": "changed",
        "description": [
            "Prerequisite: None",
            "Increase your Strength or Dexterity by 1, to a maximum of 20. While you are holding a double-bladed scimitar with two hands, you gain a +1 bonus to Armor Class. A double-bladed scimitar has the finesse property when you wield it."
        ]
    },
    {
        "id": "rune-shaper",
        "name": "Rune Shaper",
        "category": "allowed",
        "description": [
            "Bez wymogu backgroundu."
        ]
    },
    {
        "id": "savage-attacker",
        "name": "Savage Attacker",
        "category": "changed",
        "description": [
            "Increase your Strength score by 1, to a maximum of 20. Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total."
        ]
    },
    {
        "id": "scion-of-the-outer-planes",
        "name": "Scion of the Outer Planes",
        "category": "allowed",
        "description": [
            "Bez wymogu Planescape Campaign."
        ]
    },
    {
        "id": "sharpshooter",
        "name": "Sharpshooter",
        "category": "changed",
        "description": [
            "The normal and long range of ranged and thrown weapons is doubled for you. Your ranged weapon attacks ignore half cover, and three-quarters cover is considered half cover for you. Once on each of your turns when you make a ranged weapon attack, you can add your proficiency bonus to the damage roll."
        ]
    },
    {
        "id": "skilled",
        "name": "Skilled",
        "category": "changed",
        "description": [
            "Increase one ability score of your choice by 1, to a maximum of 20. You gain proficiency in any combination of three skills or tools of your choice."
        ]
    },
    {
        "id": "spell-sniper",
        "name": "Spell Sniper",
        "category": "changed",
        "description": [
            "When you cast a spell that requires you to make an attack roll, the spell's range is doubled. Your ranged spell attacks ignore half cover, and three-quarters cover is considered half cover for you. You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
        ]
    },
    {
        "id": "squire-of-solamnia",
        "name": "Squire of Solamnia",
        "category": "allowed",
        "description": [
            "Bez wymogu Dragonlance Campaign i backgroundu."
        ]
    },
    {
        "id": "strike-of-the-giants",
        "name": "Strike of the Giants",
        "category": "allowed",
        "description": [
            "Bez wymogu backgroundu."
        ]
    },
    {
        "id": "telekinetic",
        "name": "Telekinetic",
        "category": "changed",
        "description": [
            "Increase your Intelligence, Wisdom, or Charisma by 1, to a maximum of 20. You learn the mage hand cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible. If you already know this spell, its range increases by 30 feet when you cast it. Its spellcasting ability is the ability increased by this feat. As a bonus action, you can try to telekinetically shove one creature you can see within 30 feet of you. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + the ability modifier of the score increased by this feat) or be moved 5 feet toward you or away from you. A creature can willingly fail this save. You can use this bonus action a number of times equal to your proficiency bonus, and you regain all expended uses when you finish a short or long rest."
        ]
    }
];
