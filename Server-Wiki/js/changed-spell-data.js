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
    }
];
