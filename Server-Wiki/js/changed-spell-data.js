const changedSpellData = [
    {
        "id": "blade-ward",
        "name": "Blade Ward",
        "level": 0,
        "school": "Abjuration",
        "castingTime": "1 action",
        "range": "self",
        "duration": "2 rounds",
        "components": "V, S",
        "description": [
            "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage."
        ],
        "classes": [
            "Bard",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "category": "changed"
    },
    {
        "id": "dancing-lights",
        "name": "Dancing Lights",
        "level": 0,
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "120",
        "duration": "10 minutes",
        "components": "V, S, M (A bit of phosphorus or wychwood, or a glowworm)",
        "description": [
            "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.",
            "As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell’s range.",
            "You can dismiss spell whenever you want."
        ],
        "classes": [
            "Bard",
            "Wizard",
            "Sorcerer"
        ],
        "category": "changed"
    },
    {
        "id": "dedication-solo",
        "name": "Dedication Solo",
        "level": 0,
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "60",
        "duration": "Instantaneous",
        "components": "V, S, M (instrument worth of 1 sp)",
        "description": [
            "You play a powerful note on your instrument, directing a concentrated pulse of sound toward one creature you can see within range.",
            "",
            "Make a ranged spell attack against the target. On a hit, the target takes 1d4 thunder damage. If the target is Medium or smaller, it is also pushed 5 feet away from you.",
            "",
            "At Higher Levels. This spell's damage increases by 1d4 when you reach 5th level (2d4), 11th level (3d4), and 17th level (4d4)."
        ],
        "classes": [],
        "category": "new"
    },
    {
        "id": "encode-thoughts",
        "name": "Encode Thoughts",
        "level": 0,
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "Self",
        "duration": "8 hours",
        "components": "S",
        "description": [
            "You pull a memory, an idea, or a message from your mind and transform it into a tangible string of glowing energy called a thought strand, which persists for the duration or until you cast this spell again. The thought strand appears in an unoccupied space within 5 feet of you as a Tiny, weightless, semisolid object that can be held and carried like a ribbon. It is otherwise stationary. Or if caster is touching a willing creature, instead of creating the string caster can deliver its message to this creature mind.",
            "",
            "If you cast this spell while concentrating on a spell or an ability that allows you to read or manipulate the thoughts of others (such as detect thoughts or modify memory), you can transform the thoughts or memories you read, rather than your own, into a thought strand.",
            "",
            "Casting this spell while holding a thought strand allows you to instantly receive whatever memory, idea, or message the thought strand contains. (Casting detect thoughts on the strand has the same effect.)"
        ],
        "classes": [
            "Wizard"
        ],
        "category": "changed"
    },
    {
        "id": "gust",
        "name": "Gust",
        "level": 0,
        "school": "Transmutation",
        "castingTime": "1 action",
        "range": "60",
        "duration": "Instantaneous/ 1 hour",
        "components": "S",
        "description": [
            "You seize the air and compel it to create one of the following effects at a point you can see within range:",
            "",
            "One Medium or smaller creature that you choose must succeed on a Strength saving throw or (you can choose) be pushed up to 5 feet away and top you from you or be prone.",
            "",
            "You create a small blast of air capable of moving one object that is neither held nor carried and that weighs no more than 5 pounds. The object is pushed up to 10 feet away from you or to you. It isn’t pushed/pulled with enough force to cause damage.",
            "You create a harmless sensory affect using air, such as causing leaves to rustle, wind to slam shutters shut/slam doors, or your clothing to ripple in a breeze.",
            "You can change colour of gas or change its smell in 5 foot cube for 1 hour.",
            "",
            "If you cast this spell multiple times, you can have no more than two of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action."
        ],
        "classes": [
            "Sorcerer",
            "Wizard",
            "Druid"
        ],
        "category": "changed"
    },
    {
        "id": "sonic-blast",
        "name": "Sonic Blast",
        "level": 0,
        "school": "Enchantment",
        "castingTime": "1 action",
        "range": "60",
        "duration": "Instantaneous",
        "components": "V, S, M (instrument worth of 1 sp)",
        "description": [
            "You play your instrument, unleashing a blast of thunderous sound. Choose one creature you can see within range, or two creatures you can see within range that are within 5 feet of each other.",
            "",
            "Each target must make a Constitution saving throw. On a failed save, a target takes 1d6 thunder damage.",
            "",
            "A creature made of inorganic material, such as stone, crystal, or metal, has disadvantage on this saving throw.",
            "",
            "The sound of the blast is audible out to 100 feet.",
            "",
            "At Higher Levels. This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
        ],
        "classes": [
            "Bard"
        ],
        "category": "new"
    },
    {
        "id": "true-strike",
        "name": "True Strike",
        "level": 0,
        "school": "Divination",
        "castingTime": "1 bonus action",
        "range": "Self",
        "duration": "Concentration, up to 1 minute",
        "components": "S",
        "description": [
            "Your magic grants you a brief insight into the target’s defenses. On your next attack, you gain advantage on your first attack roll against the target, provided that this spell hasn’t ended."
        ],
        "classes": [
            "Bard",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "category": "changed"
    },
    {
        "id": "ambush-prey",
        "name": "Ambush Prey",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 49",
        "level": 2,
        "school": "Illusion",
        "castingTime": "1 action",
        "range": "Self",
        "duration": "1 hour",
        "components": "S, M (a broken twig)",
        "classes": [
            "Ranger"
        ],
        "description": [
            "You turn invisible with advantage on Dexterity (Stealth) checks to stay hidden. Going 5 feet or more from where you cast the spell ends it. Your first attack against a creature unaware of you while invisible deals 1d6 extra damage and also ends the spell.",
            "At Higher Levels. Add 1d6 to the extra damage per slot level above 2nd."
        ]
    },
    {
        "id": "elevated-sight",
        "name": "Elevated Sight",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 49",
        "level": 1,
        "school": "Divination",
        "castingTime": "1 action",
        "range": "Self",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S",
        "classes": [
            "Cleric",
            "Druid",
            "Ranger",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "Look through an invisible sensor up to 120 feet overhead, with a full view in all directions. The sensor travels with you at its current height. Change its height as a bonus action, up to the same limit. While using it you are blinded at your own location, but you can switch between views at any time on your turn."
        ]
    },
    {
        "id": "endure",
        "name": "Endure",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 5,
        "school": "Necromancy",
        "castingTime": "1 action",
        "range": "60 feet",
        "duration": "1 minute",
        "components": "V, S, M (a gem-encrusted cockroach worth 250 gp, which the spell consumes)",
        "classes": [
            "Cleric",
            "Druid",
            "Paladin",
            "Ranger",
            "Warlock"
        ],
        "description": [
            "A visible, willing target needs neither food nor water and ignores exhaustion and poisoning. It can't be incapacitated, stunned, paralyzed, or rendered unconscious while the spell lasts. Whenever damage would drop it to 0 HP, it makes a death save instead. Three failed saves kill it.",
            "When the spell ends, the target gains one exhaustion level per failed death save. A survivor falls unconscious for as long as the spell affected it and only Wish can wake it early. If the target died from the saves and is resurrected, it remains unconscious for an equivalent period and gains three exhaustion levels on waking.",
            "At Higher Levels. Slots of 6th, 7th, 8th, or 9th level can extend the duration to 10 minutes, 1 hour, 8 hours, or 1 day respectively."
        ]
    },
    {
        "id": "freedom-of-the-waves",
        "name": "Freedom of the Waves",
        "category": "new",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 176",
        "level": 3,
        "school": "Conjuration",
        "castingTime": "1 action",
        "range": "120 feet",
        "duration": "Instantaneous",
        "components": "V, S, M (a strand of wet hair)",
        "classes": [
            "Druid",
            "Ranger",
            "Sorcerer"
        ],
        "description": [
            "Center a 15-foot-radius, 10-foot-high cylinder of seawater on a point in range. A creature there that fails a Strength save takes 2d8 bludgeoning damage and falls prone. Choose up to your spellcasting ability modifier in creatures (minimum one) to pass automatically. If you are inside the cylinder when casting, you may teleport as part of the casting action to a visible open space within it."
        ]
    },
    {
        "id": "freedom-of-the-winds",
        "name": "Freedom of the Winds",
        "category": "new",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 176",
        "level": 5,
        "school": "Abjuration",
        "castingTime": "1 action",
        "range": "Self",
        "duration": "Concentration, up to 10 minutes",
        "components": "V, S, M (a scrap of sailcloth)",
        "classes": [
            "Druid",
            "Sorcerer",
            "Ranger"
        ],
        "description": [
            "While the spell lasts, you fly at 60 feet and have advantage on checks to avoid a grapple and saves against restraint or paralysis. If targeted by an attack or spell, you can react by teleporting up to 60 feet to an unoccupied space you can see. If you leave the triggering effect's range it misses you. The spell ends when you reappear."
        ]
    },
    {
        "id": "frogskin",
        "name": "Frogskin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 4,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Self",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S, M (some frogspawn)",
        "classes": [
            "Druid",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "Make a melee spell attack when you cast and again as an action on later turns. A hit deals 3d10 poison damage and poisons the target through the end of your next turn.",
            "Your slippery body gives advantage on checks and saves against grapples or restraint and disadvantage when you try to grapple. A creature grappled by you or grappling you saves with Constitution at the start of each of its turns, taking 3d10 poison damage on failure or half on success.",
            "At Higher Levels. Each slot level above 4th adds 1d10 to both damage rolls."
        ]
    },
    {
        "id": "globe-of-twilight",
        "name": "Globe of Twilight",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 50",
        "level": 3,
        "school": "Conjuration",
        "castingTime": "1 action",
        "range": "Self (15-foot radius)",
        "duration": "Concentration, up to 10 minutes",
        "components": "V, S, M (a dab of pitch and a bag of glittering sand)",
        "classes": [
            "Druid",
            "Ranger",
            "Warlock"
        ],
        "description": [
            "The sphere is lightly obscured. Ordinary light is ineffective, low-level magical light provides dim light only in a 5-foot space, and spells of 3rd level or higher can illuminate it normally.",
            "Choose any number of creatures you see when casting. They gain advantage on Dexterity (Stealth) checks in the sphere and can attempt to hide there at any time. Creatures inside have disadvantage on sight-based Wisdom (Perception) checks to see outside. Unchosen creatures have disadvantage on Perception checks within the sphere and must pass a Wisdom save when first entering or starting a turn there or be blinded through the end of that turn."
        ]
    },
    {
        "id": "shape-plants",
        "name": "Shape Plants",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 51",
        "level": 4,
        "school": "Transmutation",
        "castingTime": "1 action",
        "range": "Touch",
        "duration": "Instantaneous (see effect)",
        "components": "V, S",
        "classes": [
            "Bard",
            "Cleric",
            "Druid"
        ],
        "description": [
            "Reshape visible plant life within reach that fits in a 5-foot cube. You can vary the growth of its flowers, leaves, vines, fruit, branches, or thorns. With a thorn-bearing plant, you can make the reshaped space difficult terrain that deals 2d4 piercing damage per 5 feet traveled.",
            "The plant reverts after an hour. If you can communicate with it, you can ask it to keep the shape permanently, subject to the plant's willingness and the GM's decision.",
            "At Higher Levels. Increase the cube's side by 5 feet per slot level above 4th."
        ]
    },
    {
        "id": "stellar-bodies",
        "name": "Stellar Bodies",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 52",
        "level": 4,
        "school": "Evocation",
        "castingTime": "1 action",
        "range": "Special",
        "duration": "1 minute",
        "components": "V, S",
        "classes": [
            "Cleric",
            "Druid",
            "Sorcerer",
            "Wizard"
        ],
        "description": [
            "Two stars revolve around you and cast dim light to 10 feet. A creature within 5 feet that hits you in melee must pass a Wisdom save or take 1d8 radiant damage per remaining star.",
            "Once per round on your turn, spend an action and a star to make a ranged spell attack against a target within 120 feet. A hit deals 4d8 radiant damage and the target must make a Constitution save or be blinded until your next turn starts. The spell ends if you fall unconscious, spend every star, or reach its duration.",
            "At Higher Levels. Add a star for each two slot levels above 4th, increasing the dim light radius by 5 feet per extra orbiting star."
        ]
    },
    {
        "id": "veil-of-dusk",
        "name": "Veil of Dusk",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 52",
        "level": 1,
        "school": "Abjuration",
        "castingTime": "1 bonus action",
        "range": "60 feet",
        "duration": "Concentration, up to 10 minutes",
        "components": "V, S, M (a pinch of soot)",
        "classes": [
            "Druid",
            "Warlock"
        ],
        "description": [
            "Shadows cloak a creature in range. Until the spell ends, the creature gets +1 AC and advantage on Stealth checks."
        ]
    },
    {
        "id": "ferocious-strike",
        "name": "Ferocious Strike",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 0,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Self",
        "duration": "Instantaneous",
        "components": "V, S",
        "classes": [
            "Bard",
            "Druid",
            "Sorcerer",
            "Warlock"
        ],
        "description": [
            "Make one weapon attack against a target you can reach or that is in range. Add 1d4 of the weapon's damage type on a hit. The extra damage rises to 2d4, 3d4, and 4d4 when you reach character levels 5, 11, and 17 respectively."
        ]
    },
    {
        "id": "pins-needles",
        "name": "Pins & Needles",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 0,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "60 feet",
        "duration": "Instantaneous",
        "components": "V, S",
        "classes": [
            "Druid",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "A visible creature in range makes a Constitution save. Failure deals 1d8 psychic damage. On a failure by 5 or more, the target also has disadvantage on its next attack roll before the end of its next turn. Damage rises to 2d8, 3d8, and 4d8 at levels 5, 11, and 17."
        ]
    },
    {
        "id": "spore-cloud",
        "name": "Spore Cloud",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 0,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Self (5-foot radius)",
        "duration": "Instantaneous",
        "components": "V, S, M (a toadstool)",
        "classes": [
            "Druid",
            "Sorcerer",
            "Warlock"
        ],
        "description": [
            "All other creatures within 5 feet make Constitution saves or take 1d4 poison damage. A creature that fails by 5 or more is also poisoned until its next turn ends. Damage totals listed at character levels 5, 11, and 17 are 2d4, 3d4, and 4d4."
        ]
    },
    {
        "id": "swarm",
        "name": "Swarm",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 0,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "90 feet",
        "duration": "1 round",
        "components": "V, S, M (a spider sac)",
        "classes": [
            "Druid",
            "Sorcerer",
            "Warlock"
        ],
        "description": [
            "A creature in range must pass a Dexterity save or be poisoned until the end of its next turn. A failed save also deals poison damage from character level 5 onward: 1d10 at 5th level, 2d10 at 11th, and 3d10 at 17th."
        ]
    },
    {
        "id": "chameleon-skin",
        "name": "Chameleon Skin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 1,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Touch",
        "duration": "Concentration, up to 10 minutes",
        "components": "V, S, M (red, yellow, and blue pigment)",
        "classes": [
            "Bard",
            "Druid",
            "Ranger",
            "Wizard"
        ],
        "description": [
            "A touched creature's appearance and gear blend into the environment. The target can Hide as a bonus action even in light obscurement. If it stayed still on its previous turn, sight-based Wisdom (Perception) checks to spot it have disadvantage. Senses that do not rely on sight bypass that penalty.",
            "At Higher Levels. Add one target per slot level above 1st."
        ]
    },
    {
        "id": "flipperform",
        "name": "Flipperform",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 1,
        "school": "Biomancy",
        "castingTime": "1 action (ritual)",
        "range": "30 feet",
        "duration": "1 hour",
        "components": "V, S, M (a fish's fin)",
        "classes": [
            "Druid",
            "Ranger",
            "Sorcerer",
            "Wizard"
        ],
        "description": [
            "Give a willing creature a swim speed equal to its walk speed.",
            "At Higher Levels. Each slot level above 1st adds one target and doubles the duration."
        ]
    },
    {
        "id": "eelskin",
        "name": "Eelskin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 2,
        "school": "Biomancy",
        "castingTime": "1 bonus action",
        "range": "Touch",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S, M (some jellied eel)",
        "classes": [
            "Druid",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "A willing creature you touch gains magical natural weapon attacks and unarmed strikes. The first such hit on each of its turns deals 1d8 additional lightning damage. The creature has advantage on checks and saves against being grappled or restrained and disadvantage when attempting a grapple.",
            "At Higher Levels. Add 1d8 for every two slot levels above 2nd."
        ]
    },
    {
        "id": "endoleech",
        "name": "Endoleech",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 2,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Touch",
        "duration": "Instantaneous",
        "components": "V, S, M (red, yellow, and blue pigment)",
        "classes": [
            "Druid",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "Make a melee spell attack. On a hit the creature takes 5d6 cold damage and cannot react until the end of its next turn. Until that same point, it loses 15 feet of speed and you gain 15 feet.",
            "At Higher Levels. Add 1d6 per slot level above 2nd."
        ]
    },
    {
        "id": "mortiferous-pulse",
        "name": "Mortiferous Pulse",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 2,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Self (50-foot line)",
        "duration": "Instantaneous",
        "components": "V, S, M (a dead animal)",
        "classes": [
            "Druid",
            "Warlock"
        ],
        "description": [
            "Creatures in a line 50 feet long and 5 feet wide extending from you save with Dexterity. They take 3d8 necrotic damage on failure or half on success.",
            "At Higher Levels. Add 1d8 per slot level above 2nd."
        ]
    },
    {
        "id": "preserve",
        "name": "Preserve",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 2,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "60 feet",
        "duration": "24 hours",
        "components": "V, S, M (some ether)",
        "classes": [
            "Cleric",
            "Druid",
            "Paladin",
            "Ranger",
            "Wizard"
        ],
        "description": [
            "Choose a visible point. Creatures in a 10-foot-radius sphere centered there make Charisma saves. A failed save binds the creature's essence to its form. If it dies under the effect, harvesting can begin for up to 24 hours after death. Starting the harvest ends the spell on that corpse. Creatures with robust or stronger essence (generally CR 7+) pass automatically.",
            "At Higher Levels. The threshold for automatic success rises to potent essence (typically CR 12) with a 4th-level slot, mythic (CR 18) with a 6th-level slot, and deific (CR 25) with an 8th-level slot."
        ]
    },
    {
        "id": "sugar-rush",
        "name": "Sugar Rush",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 2,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "30 feet",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S, M (some candy)",
        "classes": [
            "Bard",
            "Cleric",
            "Paladin",
            "Sorcerer"
        ],
        "description": [
            "A visible, willing creature gains 15 feet of speed and +1 AC. On each turn it may Dash, Disengage, Hide, or Use an Object as a bonus action. When the spell ends, or if it ends a turn without spending movement equal to its walking speed, it becomes poisoned until the end of its next turn.",
            "At Higher Levels. Add one target per slot level above 2nd."
        ]
    },
    {
        "id": "influenza",
        "name": "Influenza",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 3,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Self (30-foot cone)",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S, M (some pollen)",
        "classes": [
            "Cleric",
            "Druid",
            "Warlock"
        ],
        "description": [
            "The casting is audible up to 300 feet away. Creatures in a 30-foot cone take 3d6 poison damage and are poisoned on a failed Dexterity save. Success halves the damage and avoids poisoning. A poisoned creature can end the effect with a Constitution save at the end of its turn.",
            "At the start of each of its turns a poisoned creature rolls a d12. On 3 or less it is incapacitated until its next turn starts. Creatures within 5 feet at that moment must pass a Constitution save or suffer the spell's poisoning too.",
            "At Higher Levels. Each slot level above 3rd adds 1d6 damage and raises the coughing threshold by 1."
        ]
    },
    {
        "id": "the-bends",
        "name": "The Bends",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 3,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "90 feet",
        "duration": "Instantaneous",
        "components": "V, S",
        "classes": [
            "Druid",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "One visible target makes a Constitution save. Failure deals 5d8 poison damage and poisons it for a minute. Success deals half damage and avoids poisoning. Use d10s instead of d8s if the target is fully underwater. A poisoned target can repeat the save at the end of each turn.",
            "At Higher Levels. Add one damage die per slot level above 3rd."
        ]
    },
    {
        "id": "zippit",
        "name": "Zippit!",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 3,
        "school": "Biomancy",
        "castingTime": "1 reaction, which you take when a creature within range vocalises",
        "range": "60 feet",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S",
        "classes": [
            "Bard",
            "Druid",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "React when a creature in range vocalizes. On a failed Constitution save its mouth seals and it cannot speak. If this interrupts a spell with a verbal component, the casting action is lost but the slot is kept.",
            "At the end of each turn, the target may try a Strength save. Success tears its mouth open and deals 1d8 slashing damage. It can instead cut its mouth open as an action with a blade, taking the same damage and ending the silence.",
            "At Higher Levels. Add 1d8 slashing damage per slot level above 3rd."
        ]
    },
    {
        "id": "fungal-infection",
        "name": "Fungal Infection",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 4,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "90 feet",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S, M (a mushroom)",
        "classes": [
            "Druid",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "Choose one fungus. Creatures in a 15-foot-radius sphere at a point in range must pass a Constitution save or suffer that fungus's curse. They can repeat the save after the end-of-turn effects resolve.",
            "Amanita Rotgut: 2d6 poison damage immediately and at the end of each later turn while poisoned by the spell. Necrotising Zygomycosis: 2d8 necrotic damage immediately and at the start of every turn. Psilocybin Quickitrippiae: roll a d4 at each turn's start; on a 1 the target cannot move or act that turn.",
            "Paralysing Mucorales: at turn's end the target is stunned until its next turn starts, or paralyzed instead if its previous save failed by at least 5. Raging Henbane: the target is charmed and must use its reaction at turn's start to make a weapon attack against a random eligible target other than you. Veiled Lady: disadvantage on Dexterity saves and advantage on ranged attacks against it.",
            "At Higher Levels. Per slot level above 4th, add 1d6 to the Amanita damage and 1d8 to the Zygomycosis damage. A slot of 6th level or higher allows two different fungi."
        ]
    },
    {
        "id": "tentacle-lash",
        "name": "Tentacle Lash",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 4,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Self",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S, M (a miniature plunger)",
        "classes": [
            "Druid",
            "Ranger",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "When you cast and as an action on later turns, make a melee spell attack against a creature within 30 feet. A hit deals 5d8 bludgeoning damage. If the creature is Huge or smaller, a failed Strength save lets you knock it prone, shove it 5 feet in a direction you choose, or take one object it is holding. The GM may allow the tentacle to serve as a rope or grappling hook.",
            "At Higher Levels. Add 1d8 per slot level above 4th."
        ]
    },
    {
        "id": "feverskin",
        "name": "Feverskin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 5,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "Touch",
        "duration": "Concentration, up to 1 minute",
        "components": "V, S, M (a red hot chilli pepper, which the spell consumes)",
        "classes": [
            "Cleric",
            "Druid",
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "Make a melee spell attack when casting or as an action on subsequent turns, dealing 6d6 fire damage on a hit. Until the spell ends, your walking speed is 15 feet higher and you gain 2d6 temporary HP at the start of each of your turns.",
            "At Higher Levels. Add 1d6 fire damage per slot level above 5th."
        ]
    },
    {
        "id": "lungburst",
        "name": "Lungburst",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "level": 6,
        "school": "Biomancy",
        "castingTime": "1 action",
        "range": "90 feet",
        "duration": "Instantaneous",
        "components": "V, S",
        "classes": [
            "Sorcerer",
            "Warlock",
            "Wizard"
        ],
        "description": [
            "A visible creature makes a Constitution save, with disadvantage if holding its breath. On failure it takes 7d6 thunder and 7d6 necrotic damage and starts suffocating. Success halves the damage and avoids suffocation. A suffocating target may repeat the save at the end of each turn. Greater Restoration, Heal, or Wish can also restore breathing. Creatures that don't need to breathe are unaffected.",
            "At Higher Levels. Each slot level above 6th adds 1d6 to each damage type."
        ]
    }
];
