(() => {
    "use strict";

    const product = (data) => ({
        id: data.id,
        nameKey: `products.${data.id}.name`,
        descriptionKey: data.description === false ? null : `products.${data.id}.description`,
        detailsKey: data.details ? `products.${data.id}.details` : null,
        price: data.price || null,
        priceKey: data.priceKey || null,
        prices: data.prices || null,
        interactive: data.interactive || false,
        image: data.image || null,
        imageFallback: data.imageFallback || (data.image ? "assets/img/platos/placeholder-plato.svg" : null),
        buttonLabelKey: data.buttonLabelKey || null,
        modalEyebrowKey: data.modalEyebrowKey || null,
        longDescriptionKey: data.longDescription ? `products.${data.id}.longDescription` : null,
        ingredientsKey: data.ingredients ? `products.${data.id}.ingredients` : null,
        allergensKey: data.allergens ? `products.${data.id}.allergens` : null,
        fishCatalog: data.fishCatalog || false
    });

    window.RAICES_FISH = [
        {
            id: "fula",
            nameKey: "fish.fula.name",
            image: "assets/img/platos/fula.png",
            plateImage: "assets/img/platos/fula-plato.png"
        },
        {
            id: "bocinegro",
            nameKey: "fish.bocinegro.name",
            image: "assets/img/platos/bocinegro.png",
            plateImage: "assets/img/platos/bocinegro-plato.png"
        },
        {
            id: "jurel",
            nameKey: "fish.jurel.name",
            image: "assets/img/platos/jurel.png",
            plateImage: "assets/img/platos/jurel-plato.png"
        },
        {
            id: "medregal",
            nameKey: "fish.medregal.name",
            image: "assets/img/platos/medregal.png",
            plateImage: "assets/img/platos/medregal-plato.png"
        },
        {
            id: "dorada",
            nameKey: "fish.dorada.name",
            image: "assets/img/platos/dorada.png",
            plateImage: "assets/img/platos/dorada-plato.png"
        },
        {
            id: "vieja",
            nameKey: "fish.vieja.name",
            image: "assets/img/platos/vieja.png",
            plateImage: "assets/img/platos/vieja-plato.png"
        }
    ];

    window.RAICES_MENU = [
        {
            id: "para-compartir",
            categoryKey: "categories.para-compartir",
            noteKey: "sectionNotes.para-compartir.text",
            notePriceKey: "sectionNotes.para-compartir.price",
            items: [
                product({ id: "uvas-y-quesos", price: "13,00 €" }),
                product({
                    id: "croquetas",
                    price: "13,00 €",
                    interactive: true,
                    image: "assets/img/platos/croquetas.png",
                    ingredients: true
                }),
                product({ id: "langostinos-ajillo", price: "13,00 €" }),
                product({
                    id: "carpaccio-pulpo-local",
                    price: "16,00 €",
                    interactive: true,
                    image: "assets/img/platos/carpaccio-pulpo.png",
                    ingredients: true
                }),
                product({ id: "carpaccio-salmon", price: "16,00 €" }),
                product({ id: "jamon-iberico-bellota", price: "32,00 €" }),
                product({
                    id: "roast-beef",
                    price: "16,00 €",
                    interactive: true,
                    image: "assets/img/platos/roast-beef.png",
                    ingredients: true
                }),
                product({ id: "vitello-tonnato", price: "16,00 €" }),
                product({ id: "carpaccio-remolacha", price: "13,00 €" })
            ]
        },
        {
            id: "de-la-finca",
            categoryKey: "categories.de-la-finca",
            items: [
                product({ id: "ensalada-cesar", price: "14,00 €" }),
                product({ id: "ensalada-raices", price: "13,50 €" }),
                product({
                    id: "parmigiana-melanzane",
                    price: "13,00 €",
                    interactive: true,
                    image: "assets/img/platos/parmigiana.png",
                    ingredients: true
                })
            ]
        },
        {
            id: "pastas",
            categoryKey: "categories.pastas",
            items: [
                product({
                    id: "pasta-marisco",
                    price: "19,00 €",
                    interactive: true,
                    image: "assets/img/platos/pasta-marisco.png",
                    ingredients: true
                }),
                product({
                    id: "pasta-salmon",
                    price: "19,00 €",
                    interactive: true,
                    image: "assets/img/platos/pasta-salmon.png",
                    ingredients: true
                })
            ]
        },
        {
            id: "del-mar",
            categoryKey: "categories.del-mar",
            noteKey: "sectionNotes.del-mar.text",
            items: [
                product({
                    id: "salmon-naranja",
                    price: "24,00 €",
                    interactive: true,
                    image: "assets/img/platos/salmon-naranja.png",
                    ingredients: true
                }),
                product({ id: "pulpo-km0", price: "24,00 €" }),
                product({
                    id: "fritura-mar",
                    price: "22,00 €",
                    interactive: true,
                    image: "assets/img/platos/fritura-mixta.png",
                    ingredients: true
                }),
                product({
                    id: "pescado-fresco-local",
                    priceKey: "interface.bySelectionWeight",
                    details: true,
                    interactive: true,
                    fishCatalog: true,
                    buttonLabelKey: "interface.viewFish",
                    modalEyebrowKey: "interface.freshFish"
                })
            ]
        },
        {
            id: "de-la-tierra",
            categoryKey: "categories.de-la-tierra",
            noteKey: "sectionNotes.de-la-tierra.text",
            items: [
                product({
                    id: "medallones-solomillo",
                    price: "24,00 €",
                    interactive: true,
                    image: "assets/img/platos/medallones-solomillo.png",
                    ingredients: true
                }),
                product({
                    id: "entrecot-raices",
                    price: "23,00 €",
                    interactive: true,
                    image: "assets/img/platos/entrecot-raices.png",
                    ingredients: true
                }),
                product({
                    id: "cordero-miel-pistacho",
                    price: "24,00 €",
                    interactive: true,
                    image: "assets/img/platos/cordero-miel-pistacho.png?v=12",
                    ingredients: true
                }),
                product({
                    id: "secreto-iberico",
                    price: "23,00 €",
                    interactive: true,
                    image: "assets/img/platos/secreto-iberico.png",
                    ingredients: true
                })
            ]
        },
        {
            id: "postres",
            categoryKey: "categories.postres",
            noteKey: "sectionNotes.postres.text",
            items: [
                product({ id: "tarta-queso", price: "7,00 €", details: true }),
                product({
                    id: "tiramisu",
                    interactive: true,
                    image: "assets/img/platos/tiramisu.png",
                    ingredients: true
                }),
                product({
                    id: "polvito-uruguayo",
                    price: "7,00 €",
                    interactive: true,
                    image: "assets/img/platos/polvito-uruguayo.png",
                    ingredients: true
                })
            ]
        },
        {
            id: "para-los-peques",
            categoryKey: "categories.para-los-peques",
            items: [
                product({ id: "fingers-pollo", price: "10,00 €" }),
                product({ id: "pasta-tomate", price: "10,00 €" })
            ]
        },
        {
            id: "cocteles",
            categoryKey: "categories.cocteles",
            leadKey: "sectionNotes.cocteles.lead",
            subleadKey: "sectionNotes.cocteles.sublead",
            items: [
                product({
                    id: "sangria-casera",
                    details: true,
                    description: false,
                    prices: {
                        copa: "6,50 €",
                        media: "10,00 €",
                        litro: "18,00 €"
                    }
                }),
                product({ id: "spritz", price: "6,00 €", details: true, description: false }),
                product({
                    id: "martini-bianco",
                    price: "6,00 €",
                    interactive: true,
                    image: "assets/img/platos/martini-bianco.png",
                    buttonLabelKey: "interface.viewCocktail",
                    modalEyebrowKey: "interface.viewCocktail",
                    ingredients: true
                }),
                product({
                    id: "martini-rosso",
                    price: "6,00 €",
                    interactive: true,
                    image: "assets/img/platos/martini-rosso.png",
                    buttonLabelKey: "interface.viewCocktail",
                    modalEyebrowKey: "interface.viewCocktail",
                    ingredients: true
                }),
                product({
                    id: "mojito",
                    price: "8,00 €",
                    interactive: true,
                    image: "assets/img/platos/mojito.png",
                    buttonLabelKey: "interface.viewCocktail",
                    modalEyebrowKey: "interface.viewCocktail",
                    ingredients: true
                }),
                product({
                    id: "margarita",
                    interactive: true,
                    image: "assets/img/platos/margarita.png",
                    buttonLabelKey: "interface.viewCocktail",
                    modalEyebrowKey: "interface.viewCocktail",
                    ingredients: true
                }),
                product({
                    id: "pina-colada",
                    price: "8,00 €",
                    interactive: true,
                    image: "assets/img/platos/pina-colada.png?v=11",
                    buttonLabelKey: "interface.viewCocktail",
                    modalEyebrowKey: "interface.viewCocktail",
                    longDescription: true,
                    ingredients: true
                }),
                product({
                    id: "espresso-martini",
                    price: "8,00 €",
                    interactive: true,
                    image: "assets/img/platos/espresso-martini.png",
                    buttonLabelKey: "interface.viewCocktail",
                    modalEyebrowKey: "interface.viewCocktail",
                    ingredients: true
                }),
                product({
                    id: "negroni",
                    price: "8,00 €",
                    interactive: true,
                    image: "assets/img/platos/negroni.png",
                    buttonLabelKey: "interface.viewCocktail",
                    modalEyebrowKey: "interface.viewCocktail",
                    ingredients: true
                })
            ]
        },
        {
            id: "vinos-blancos",
            categoryKey: "categories.vinos-blancos",
            groups: [
                {
                    titleKey: "groups.islas-canarias",
                    items: [
                        product({ id: "blanco-mondalon", prices: { copa: "7,00 €", botella: "30,00 €" } }),
                        product({ id: "blanco-yaiza", prices: { copa: "7,50 €", botella: "32,00 €" } }),
                        product({ id: "blanco-respiro", prices: { copa: "7,50 €", botella: "32,00 €" } })
                    ]
                },
                {
                    titleKey: "groups.vinos-blancos-nacionales",
                    items: [
                        product({ id: "blanco-casal-arman", prices: { copa: "7,00 €", botella: "30,00 €" } }),
                        product({ id: "blanco-pionero", prices: { copa: "6,50 €", botella: "25,00 €" } }),
                        product({ id: "blanco-essenzia", prices: { copa: "4,50 €", botella: "18,00 €" } }),
                        product({ id: "blanco-arabe-dulce", prices: { copa: "5,00 €", botella: "18,50 €" } }),
                        product({ id: "blanco-flamenco-seco", prices: { copa: "5,00 €", botella: "18,50 €" } }),
                        product({ id: "blanco-perrito-faldero", prices: { copa: "4,00 €", botella: "16,00 €" } })
                    ]
                }
            ]
        },
        {
            id: "vinos-rosados",
            categoryKey: "categories.vinos-rosados",
            items: [
                product({ id: "rosado-mondalon", prices: { copa: "7,00 €", botella: "30,00 €" } }),
                product({ id: "rosado-yaiza", prices: { copa: "7,50 €", botella: "32,00 €" } }),
                product({ id: "rosado-essenzia", prices: { copa: "4,50 €", botella: "18,00 €" } })
            ]
        },
        {
            id: "tintos",
            categoryKey: "categories.tintos",
            groups: [
                {
                    titleKey: "groups.islas-canarias",
                    items: [
                        product({ id: "tinto-mondalon", prices: { copa: "7,00 €", botella: "30,00 €" } })
                    ]
                },
                {
                    titleKey: "groups.nacionales-la-rioja",
                    items: [
                        product({ id: "ramon-bilbao-crianza", prices: { copa: "6,00 €", botella: "23,00 €" } }),
                        product({ id: "ramon-bilbao-edicion-limitada", prices: { copa: "7,00 €", botella: "30,00 €" } }),
                        product({ id: "bodegas-abalos-cosecha", prices: { copa: "4,00 €", botella: "16,00 €" } })
                    ]
                },
                {
                    titleKey: "groups.nacionales-ribera-duero",
                    items: [
                        product({ id: "sepa-gavilan", prices: { copa: "7,00 €", botella: "30,00 €" } }),
                        product({ id: "teofilo-reyes-tamiz-roble", prices: { copa: "6,00 €", botella: "24,00 €" } }),
                        product({ id: "teofilo-reyes-crianza", prices: { copa: "7,50 €", botella: "32,00 €" } }),
                        product({ id: "carmelo-rodero-roble", prices: { copa: "7,00 €", botella: "30,00 €" } }),
                        product({ id: "pago-capellanes-roble", prices: { copa: { textKey: "interface.notAvailable" }, botella: "45,00 €" } })
                    ]
                }
            ]
        },
        {
            id: "cavas-prosecco",
            categoryKey: "categories.cavas-prosecco",
            groups: [
                {
                    titleKey: "groups.cava-brut-prosecco",
                    items: [
                        product({ id: "cava-casa", description: false, prices: { copa: "4,00 €", botella: "16,00 €" } }),
                        product({ id: "cava-blanc-mar-blau", prices: { copa: "5,00 €", botella: "20,00 €" } }),
                        product({ id: "mionetto", prices: { copa: { textKey: "interface.notAvailable" }, botella: "25,00 €" } })
                    ]
                },
                {
                    titleKey: "groups.moscatel",
                    items: [
                        product({ id: "famara-lanzarote", prices: { copa: "7,50 €", botella: "32,00 €" } })
                    ]
                }
            ]
        }
    ];

    /*
    Categoria pendiente. No aparece en la navegación ni en la interfaz hasta que haya productos reales.

    {
        id: "bebidas",
        categoryKey: "categories.bebidas",
        items: []
    }
    */

    /*
    Ejemplo para activar posteriormente una ficha ampliada:

    product({
        id: "entrecot-raices",
        price: "23,00 €",
        interactive: true,
        image: "assets/img/platos/entrecot-raices.webp",
        longDescription: true,
        ingredients: true,
        allergens: true
    })

    Después añade o edita estos textos en js/translations.js:
    products.entrecot-raices.longDescription
    products.entrecot-raices.ingredients
    products.entrecot-raices.allergens
    */
})();
