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
    },
    {
        "id": "aerial-expert",
        "name": "Aerial Expert",
        "category": "allowed",
        "source": "Humblewood Campaign Setting · s. 47",
        "description": [
            "Requires Glide. Calculate long and high jumps using Strength or Dexterity, without a running start, and double the resulting distance. You can Dash during a glide for up to one movement speed of extra travel, change direction at will, and climb up to 10 feet once before landing."
        ]
    },
    {
        "id": "bandit-cunning",
        "name": "Bandit Cunning",
        "category": "allowed",
        "source": "Humblewood Campaign Setting · s. 47",
        "description": [
            "Once per long rest, use your reaction when called on to save and add your Intelligence modifier to the roll. In battle, spend an action on Intelligence (Investigation), DC 10 + the CR of a creature you've watched fight. On success, choose one fact to learn: a damage resistance or immunity, a condition immunity, a damaging or protective ability, an attack/legendary action/reaction option, or a special sense."
        ]
    },
    {
        "id": "cruel",
        "name": "Cruel",
        "category": "allowed",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 190",
        "description": [
            "You get a pool of d6s equal to your proficiency bonus, replenished on a long rest. Spend at most one die per turn: add its result to damage you deal, gain that many temporary HP on a critical hit, or increase a Charisma (Intimidation) check by the roll."
        ]
    },
    {
        "id": "expert-harvester",
        "name": "Expert Harvester",
        "category": "allowed",
        "source": "Heliana’s Guide to Monster Hunting · s. 225",
        "description": [
            "Double your proficiency bonus on Harvesting checks with a skill you know. If you lack the relevant proficiency, still add the normal bonus. When assisting, contribute the full bonus regardless of proficiency. Doing both Assessment and Carving yourself carries no disadvantage from working alone."
        ]
    },
    {
        "id": "field-medic",
        "name": "Field Medic",
        "category": "allowed",
        "source": "Humblewood Tales · s. 171",
        "description": [
            "By sight you can tell if a creature is injured and whether it has more than half its HP. You have advantage on Medicine, Arcana, or Religion checks to diagnose curses, disease, possession, blindness, deafness, exhaustion, incapacitation, paralysis, or poisoning.",
            "You learn Spare the Dying and may cast it as a bonus action. You can cast Cure Wounds with Wisdom and no slot a number of times equal to half your proficiency bonus per long rest."
        ]
    },
    {
        "id": "flamewoken",
        "name": "Flamewoken",
        "category": "allowed",
        "source": "Humblewood Tales · s. 172",
        "description": [
            "You speak, read, and write Ignan and learn Produce Flame using Charisma. As a bonus action, empower the next fire damage you deal before the end of your next turn: one affected creature takes 2d10 extra fire damage. Recharge on a short or long rest.",
            "As a bonus action, address ordinary flames you can see within 30 feet in Ignan. If they fit in a 5-foot cube, you can put them out or spread them 5 feet in one direction where fuel is available."
        ]
    },
    {
        "id": "flash-recall",
        "name": "Flash Recall",
        "category": "allowed",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 190",
        "description": [
            "Requires the ability to prepare spells. Spend a bonus action to prepare an eligible spell of 1st level or higher from your spellbook (wizard) or class list (other prepared casters). It must be of a level for which you have slots and replaces a prepared spell of equal or greater level. Recharge on a short or long rest."
        ]
    },
    {
        "id": "perfect-landing",
        "name": "Perfect Landing",
        "category": "allowed",
        "source": "Humblewood Campaign Setting · s. 47",
        "description": [
            "Increase Dexterity by 1, up to 20. Ignore the first 30 feet when calculating falling damage and roll d4s instead of d6s for the remainder. Falling damage does not knock you prone."
        ]
    },
    {
        "id": "plantmender",
        "name": "Plantmender",
        "category": "allowed",
        "source": "Humblewood Tales · s. 172",
        "description": [
            "Requires Wisdom 13. Touch a plant as an action to see the last 24 hours of events affecting it and its immediate surroundings, and learn its current health and ailments. Uses per long rest equal twice your Wisdom modifier (minimum one).",
            "Learn Mend Plants and Shillelagh. Once per long rest you can cast either Barkskin or Spike Growth. Wisdom governs these spells."
        ]
    },
    {
        "id": "reapmaster",
        "name": "Reapmaster",
        "category": "allowed",
        "source": "Heliana’s Guide to Monster Hunting · s. 225",
        "description": [
            "Requires Expert Harvester. Gain proficiency in one of Arcana, Investigation, Medicine, Nature, Religion, or Survival. Roll Harvesting checks with advantage whenever you are proficient in the skill they use."
        ]
    },
    {
        "id": "remarkable-recovery",
        "name": "Remarkable Recovery",
        "category": "allowed",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 190",
        "description": [
            "Increase Constitution by 1, up to 20. When stabilized while dying, regain HP equal to your Constitution modifier (minimum 1). Add the same amount to healing you receive from a spell, potion, or class feature. The feat's own stabilization healing doesn't trigger the bonus."
        ]
    },
    {
        "id": "speech-of-the-ancient-beasts",
        "name": "Speech of the Ancient Beasts",
        "category": "allowed",
        "source": "Humblewood Campaign Setting · s. 47",
        "description": [
            "Increase Charisma by 1, up to 20. Large and bigger beasts are friendly unless you've attacked them, and you have advantage on Charisma checks with them. You can speak and understand Giant Eagle, Giant Elk, and Giant Owl. Other beasts of that size can understand you, though those with Intelligence 4 or lower may grasp only simple ideas."
        ]
    },
    {
        "id": "spelldriver",
        "name": "Spelldriver",
        "category": "allowed",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 190",
        "description": [
            "Requires character level 11 and spellcasting. Casting a leveled spell with your bonus action does not prevent you from using your action for another leveled spell. Of the spells you cast on that turn, at most one can be level 3 or above."
        ]
    },
    {
        "id": "spray-n-pray",
        "name": "Spray 'n' Pray",
        "category": "allowed",
        "source": "Heliana’s Guide to Monster Hunting · s. 223",
        "description": [
            "Requires proficiency with a magitech firearm or tommybow. You may reload these weapons as an action or bonus action. A hostile creature within 5 feet no longer imposes disadvantage on your ranged attacks.",
            "After attacking with a one-handed weapon as part of the Attack action, you can use a bonus action to attack with a held one-handed firearm or tommybow. Alternatively, after taking the Attack action with a tommybow or magitech firearm, use your bonus action for one or two shots from that weapon. Two shots each take a −5 penalty. Apply your ability modifier to their damage only if it is negative."
        ]
    },
    {
        "id": "thrown-arms-master",
        "name": "Thrown Arms Master",
        "category": "allowed",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 191",
        "description": [
            "Increase Strength or Dexterity by 1, up to 20. Simple and martial melee weapons gain thrown ranges for you: 20/60 feet for one-handed weapons or 15/30 for two-handed weapons. Weapons already thrown extend normal range by 20 feet and long range by 40 feet.",
            "A light thrown weapon that misses comes back at the end of your turn if its return isn't obstructed. You can catch and stow all qualifying weapons."
        ]
    },
    {
        "id": "vital-sacrifice",
        "name": "Vital Sacrifice",
        "category": "allowed",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 191",
        "description": [
            "Use a bonus action and suffer 1d6 necrotic damage that cannot be reduced to gain a blood boon for one hour. Spend the boon to add 1d6 to an attack roll, add 2d6 necrotic damage to a hit by an attack or spell, or subtract 1d4 from a Strength, Dexterity, or Constitution save you force another creature to make."
        ]
    },
    {
        "id": "woodwise",
        "name": "Woodwise",
        "category": "allowed",
        "source": "Humblewood Campaign Setting · s. 47",
        "description": [
            "Gain proficiency in Nature or Survival. Difficult terrain does not slow you, and only magic can make you lose your way in natural surroundings."
        ]
    }
];
