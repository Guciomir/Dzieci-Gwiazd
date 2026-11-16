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
        "summary": true,
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
            "Stajesz się niewidzialny i łatwiej pozostajesz w ukryciu. Przemieszczenie o co najmniej 5 stóp kończy efekt. Pierwszy atak na nieświadomy cel zadaje dodatkowe obrażenia i kończy czar."
        ]
    },
    {
        "id": "elevated-sight",
        "name": "Elevated Sight",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 49",
        "summary": true,
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
            "Patrzysz przez niewidzialny punkt obserwacyjny do 120 stóp nad sobą. Przesuwa się wraz z tobą. Możesz zmieniać jego wysokość i przełączać się na własny wzrok."
        ]
    },
    {
        "id": "endure",
        "name": "Endure",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Warlock",
            "Tamer"
        ],
        "description": [
            "Chętna istota tymczasowo nie potrzebuje jedzenia ani wody i ignoruje część skutków wyczerpania i obezwładnienia."
        ]
    },
    {
        "id": "freedom-of-the-waves",
        "name": "Freedom of the Waves",
        "category": "new",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 176",
        "summary": true,
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
            "Przyzywasz walec wody. Istoty, które nie zdadzą rzutu Siły, otrzymują 2k8 obrażeń obuchowych i upadają. Wybrane cele mogą zdać automatycznie, a ty możesz przemieścić się w obrębie obszaru."
        ]
    },
    {
        "id": "freedom-of-the-winds",
        "name": "Freedom of the Winds",
        "category": "new",
        "source": "Tal’Dorei Campaign Setting Reborn · s. 176",
        "summary": true,
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
            "Uzyskujesz lot 60 stóp i przewagę przeciw wybranym sposobom unieruchomienia. Reakcją możesz teleportować się o 60 stóp przed atakiem lub czarem, co kończy efekt."
        ]
    },
    {
        "id": "frogskin",
        "name": "Frogskin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Wizard",
            "Tamer"
        ],
        "description": [
            "Zyskujesz śliską skórę i powtarzalny atak czarem w zwarciu, który zadaje 3k10 obrażeń od trucizny i zatruwa. Chwytanie działa na ciebie inaczej, a chwytające cię istoty są narażone na truciznę."
        ]
    },
    {
        "id": "globe-of-twilight",
        "name": "Globe of Twilight",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 50",
        "summary": true,
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
            "Tworzysz wokół siebie strefę półmroku, w której zwykłe światło nie działa. Wybrane istoty łatwiej się ukrywają, a pozostałe mogą zostać oślepione."
        ]
    },
    {
        "id": "shape-plants",
        "name": "Shape Plants",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 51",
        "summary": true,
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
            "Zmieniasz kształt i wzrost rośliny mieszczącej się w sześcianie o boku 5 stóp. Cierniste rośliny mogą stać się trudnym terenem zadającym obrażenia."
        ]
    },
    {
        "id": "stellar-bodies",
        "name": "Stellar Bodies",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 52",
        "summary": true,
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
            "Dwie krążące gwiazdy dają przyćmione światło i mogą zranić atakujących w zwarciu. Możesz też wystrzelić gwiazdę w cel, aby zadać obrażenia promieniste."
        ]
    },
    {
        "id": "veil-of-dusk",
        "name": "Veil of Dusk",
        "category": "new",
        "source": "Humblewood Campaign Setting · s. 52",
        "summary": true,
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
            "Cel zyskuje +1 do KP i przewagę w testach Stealth na czas działania czaru."
        ]
    },
    {
        "id": "ferocious-strike",
        "name": "Ferocious Strike",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Warlock",
            "Tamer"
        ],
        "description": [
            "Wykonujesz atak bronią. Trafienie zadaje dodatkowe 1k4 obrażeń tego samego rodzaju co broń. Premia rośnie na poziomach 5, 11 i 17."
        ]
    },
    {
        "id": "pins-needles",
        "name": "Pins & Needles",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Cel wykonuje rzut Kondycji. Porażka oznacza 1k8 obrażeń psychicznych, a porażka o co najmniej 5 utrudnia jego następny atak. Obrażenia rosną wraz z poziomem."
        ]
    },
    {
        "id": "spore-cloud",
        "name": "Spore Cloud",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Istoty w promieniu 5 stóp poza tobą wykonują rzut Kondycji lub otrzymują obrażenia od trucizny. Porażka o co najmniej 5 dodatkowo zatruwa."
        ]
    },
    {
        "id": "swarm",
        "name": "Swarm",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Cel wykonuje rzut Zręczności lub zostaje zatruty do końca swojej następnej tury. Od 5. poziomu nieudany rzut zadaje też obrażenia od trucizny."
        ]
    },
    {
        "id": "chameleon-skin",
        "name": "Chameleon Skin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Wizard",
            "Tamer"
        ],
        "description": [
            "Dotknięty cel dopasowuje barwę do otoczenia. Może się ukrywać akcją dodatkową nawet przy lekkim przesłonięciu."
        ]
    },
    {
        "id": "flipperform",
        "name": "Flipperform",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Wizard",
            "Tamer"
        ],
        "description": [
            "Chętna istota zyskuje szybkość pływania równą szybkości chodzenia. Czar można rzucić jako rytuał."
        ]
    },
    {
        "id": "eelskin",
        "name": "Eelskin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Wizard",
            "Tamer"
        ],
        "description": [
            "Dotknięty chętny cel zyskuje naelektryzowaną skórę. Jego ciosy bez broni i broń naturalna są magiczne i mogą zadawać obrażenia od błyskawic."
        ]
    },
    {
        "id": "endoleech",
        "name": "Endoleech",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Przy trafieniu atakiem czarem w zwarciu cel otrzymuje 5k6 obrażeń od zimna i chwilowo traci reakcje. Czar oddziałuje też na twoje tempo metabolizmu."
        ]
    },
    {
        "id": "mortiferous-pulse",
        "name": "Mortiferous Pulse",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Istoty w linii o szerokości 5 stóp i długości 50 stóp wykonują rzut Zręczności. Porażka oznacza 3k8 obrażeń nekrotycznych, sukces połowę."
        ]
    },
    {
        "id": "preserve",
        "name": "Preserve",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Wizard",
            "Tamer"
        ],
        "description": [
            "Istoty w promieniu 10 stóp wykonują rzut Charyzmy. Efekt pozwala zabezpieczyć magiczną esencję zwłok do pozyskania przez 24 godziny. Istoty o silnej esencji zdają automatycznie."
        ]
    },
    {
        "id": "sugar-rush",
        "name": "Sugar Rush",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Sorcerer",
            "Tamer"
        ],
        "description": [
            "Chętny cel zyskuje 15 stóp szybkości, +1 do KP i dodatkowe możliwości działania akcją dodatkową. Gdy efekt ustanie albo cel nie wykorzysta wymaganego ruchu, zostaje na krótko zatruty."
        ]
    },
    {
        "id": "influenza",
        "name": "Influenza",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Istoty w stożku 30 stóp wykonują rzut Zręczności przeciw 3k6 obrażeń od trucizny i zatruciu. Zatrute cele mogą doświadczać napadów kaszlu i ponawiają rzut Kondycji."
        ]
    },
    {
        "id": "the-bends",
        "name": "The Bends",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Cel wykonuje rzut Kondycji przeciw 5k8 obrażeń od trucizny i zatruciu. Sukces zmniejsza obrażenia o połowę. Pod wodą kości obrażeń zmieniają się na k10."
        ]
    },
    {
        "id": "zippit",
        "name": "Zippit!",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Reakcją próbujesz uciszyć istotę, gdy wydaje głos. Jeśli nie zda rzutu Kondycji, jej usta się zrastają. Przerwany czar z komponentem werbalnym zużywa akcję, ale nie slot."
        ]
    },
    {
        "id": "fungal-infection",
        "name": "Fungal Infection",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Istoty w sferze 15 stóp wykonują rzut Kondycji. Po porażce dotyka je klątwa o skutkach zależnych od wybranego grzyba. Mogą ponawiać rzut na końcu tury."
        ]
    },
    {
        "id": "tentacle-lash",
        "name": "Tentacle Lash",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Twoje ramię staje się macką. Atak na zasięgu do 30 stóp zadaje 5k8 obrażeń obuchowych i może przewrócić, odsunąć lub rozbroić przeciwnika po nieudanym rzucie Siły."
        ]
    },
    {
        "id": "feverskin",
        "name": "Feverskin",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Wizard",
            "Tamer"
        ],
        "description": [
            "Zyskujesz 15 stóp szybkości i na początku tur tymczasowe PW. Możesz ponawiać atak czarem w zwarciu zadający 6k6 obrażeń od ognia."
        ]
    },
    {
        "id": "lungburst",
        "name": "Lungburst",
        "category": "new",
        "source": "Heliana’s Guide to Monster Hunting",
        "summary": true,
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
            "Cel wykonuje rzut Kondycji przeciw 7k6 obrażeń od dźwięku i 7k6 nekrotycznych oraz duszeniu. Sukces daje połowę obrażeń bez duszenia. Istoty, które nie oddychają, są odporne."
        ]
    }
];
