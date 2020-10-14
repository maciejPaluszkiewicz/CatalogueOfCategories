const initialState = {
    categories:
        [
            {
                "name": "Candy",
                "description": "Candy canes, licorice, marmalade, etc."
            },
            {
                "name": "Cartoons",
                "description": "Spunch Bob, Futurama, South Park"
            },
            {
                "name": "Cats",
                "description": "Siamese, Burmese, Persians, Angora"
            },
            {
                "name": "Dogs",
                "description": "Pitbulls, direwolfs, dachshounds, terriers, scotch terriers"
            },
            {
                "name": "TV shows",
                "description": "Game of Thrones, Sherlock, Breaking Bad, Charmed, Doctor Who, Torchwood, Star Trek: Next Generation, Stargate, Battlestar Galactica, Chilling Adventures of Sabrina, etc."
            },
            {
                "name": "Architecture",
                "description": "Hundertwasser, Le Corbusier, Gaudi"
            },
            {
                "name": "Art",
                "description": "Rembrandt, Rubens, da Vinci, Klimt, Mucha"
            },
            {
                "name": "Literature",
                "description": "Dumas, Balzac, Flaubert, Hugo, Pushkin, Lermontov, Gogol, Goethe, Heine, Remarque"
            },
            {
                "name": "Languages",
                "description": "English, German, French, Russin, Ukrainian, Polish"
            },
            {
                "name": "Other Animals and Where to Find Them",
                "description": "Elephants, crocodiles, snakes, mice, frogs"
            },
            {
                "name": "Birds",
                "description": "Eagles, hawks, sparrows, doves"
            },
            {
                "name": "Hats",
                "description": "Fedoras, sombrero, deerstalkers, turbans"
            },
            {
                "name": "Weapons",
                "description": "Guns, knives, swords, cannons"
            },
            {
                "name": "History",
                "description": "Ancient World, Middle Ages, Renaissance, etc."
            },
            {
                "name": "Mathematics",
                "description": "Arithmetic operations, trigonometry, geometry, algebra"
            },
            {
                "name": "Smartphones",
                "description": "Samsung, Apple, Huawei, HTC, Asus"
            },
            {
                "name": "Software",
                "description": "Text editors, graphic editors, video and audio"
            },
            {
                "name": "Cathedrals",
                "description": "Mariacki Kosciol, Notre-Dame de Paris, Duomo di Milano, etc."
            },
            {
                "name": "Castles",
                "description": "Chateau d'If, Wawel, Chillon, Buda, etc."
            },
            {
                "name": "Games",
                "description": "Cards, strategies, chess, checkers"
            },
            {
                "name": "Shoes",
                "description": "Boots, sandals, sneakers"
            },
            {
                "name": "Search engines",
                "description": "Google, Yandex, Yahoo"
            }
        ].map((x, i) => ({ name: x.name, description: x.description, id: i, approved: true })),
    filter: {
        approved: false,
        forbidden: false
    }
}

export default initialState;