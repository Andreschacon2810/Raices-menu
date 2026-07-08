(() => {
    "use strict";

    const supportedLanguages = ["es", "en", "de", "it", "fr"];

    const translations = {
        es: {
            meta: {
                title: "Carta Raíces · Gran Tarajal",
                description: "Carta digital del restaurante Raíces en Gran Tarajal, Fuerteventura."
            },
            languages: {
                es: { short: "ES", label: "Español", aria: "Cambiar idioma a español", changed: "Idioma cambiado a español." },
                en: { short: "EN", label: "English", aria: "Cambiar idioma a inglés", changed: "Idioma cambiado a inglés." },
                de: { short: "DE", label: "Deutsch", aria: "Cambiar idioma a alemán", changed: "Idioma cambiado a alemán." },
                it: { short: "IT", label: "Italiano", aria: "Cambiar idioma a italiano", changed: "Idioma cambiado a italiano." },
                fr: { short: "FR", label: "Français", aria: "Cambiar idioma a francés", changed: "Idioma cambiado a francés." }
            },
            interface: {
                skipToMenu: "Saltar a la carta",
                mainActionsLabel: "Accesos principales",
                scrollToStoryLabel: "Bajar a Nuestra historia",
                navAria: "Navegación de la carta",
                menu: "Carta",
                viewMenu: "Ver la carta",
                home: "Inicio",
                backHome: "Volver a inicio",
                chooseMenuTitle: "Elige una sección de la carta",
                chooseMenuText: "Toca una categoría para abrir su página y ver solo esos platos.",
                openCategory: "Abrir {name}",
                otherSections: "Resto del menú",
                categoryPageIntro: "Esta página muestra solo esta sección. Puedes cambiar a otra categoría desde los botones del menú.",
                storyLink: "Nuestra historia",
                readMore: "Leer más",
                readLess: "Leer menos",
                options: "Opciones",
                viewDish: "Ver plato",
                viewCocktail: "Ver cóctel",
                dishDetailsAria: "Ver ficha de {name}",
                modalEyebrow: "Ver plato",
                ingredients: "Ingredientes",
                allergens: "Alérgenos",
                close: "Cerrar",
                closeDish: "Cerrar ficha del plato",
                backToTop: "Volver arriba",
                language: "Idioma",
                languageMenu: "Selector de idioma",
                languageToggle: "Cambiar idioma",
                bySelectionWeight: "Según selección y peso.",
                notAvailable: "No disponible",
                photoOf: "Fotografía de {name}",
                pendingImageOf: "Imagen pendiente de {name}",
                priceLabels: {
                    copa: "Copa",
                    media: "½ litro",
                    litro: "Litro",
                    botella: "Botella"
                }
            },
            hero: {
                logoAlt: "Logo de Raíces con raíces de árbol grabadas en madera",
                location: "Gran Tarajal · Fuerteventura",
                brand: "RAÍCES",
                tagline: "Misma playa, distintos estilos, distintas raíces"
            },
            story: {
                kicker: "Nuestra historia",
                title: "Un lugar para estar, para disfrutar, para volver.",
                paragraphs: [
                    "En Raíces queremos que cada visita sea algo más que una comida. Un lugar donde sentarse frente al mar, en el corazón de Gran Tarajal, y dejar que el tiempo fluya sin prisas.",
                    "Aquí todo empieza al sentarse a la mesa. Comienza a disfrutar con una copa de vino canario, un Aperol Spritz o un cóctel casero mientras te susurra el sonido del mar.",
                    "Nuestra cocina nace de nuestras raíces, apostando por el producto fresco. Pescado local según el día, carnes a la parrilla y una selección de platos pensados para compartir.",
                    "La mesa se llena poco a poco: entrantes ligeros, carpaccios, platos para el centro... sabores sencillos, bien cuidados, para disfrutar.",
                    "Creemos en una forma de comer más libre, más cercana, más viva. Probar, compartir, brindar... y alargar el momento sin mirar el reloj.",
                    "Raíces es eso: un lugar para estar, para disfrutar, para volver.",
                    "Bienvenidos."
                ]
            },
            menuIntro: {
                title: "Sabores para compartir frente al mar",
                text: "Producto fresco, cocina cercana y una mesa pensada para disfrutarse sin prisas."
            },
            footer: {
                logoAlt: "Logo de Raíces",
                brand: "Raíces · Gran Tarajal · Fuerteventura",
                slogan: "Un lugar para estar, para disfrutar, para volver.",
                changes: "Los productos y precios pueden estar sujetos a cambios.",
                allergens: "Consulta con nuestro personal cualquier duda sobre alérgenos."
            },
            categories: {
                "para-compartir": { nav: "Para compartir", title: "Para compartir" },
                "de-la-finca": { nav: "De la finca", title: "De la finca" },
                pastas: { nav: "Pastas", title: "Nuestras pastas" },
                "del-mar": { nav: "Del mar", title: "Del mar" },
                "de-la-tierra": { nav: "De la tierra", title: "De la tierra" },
                postres: { nav: "Postres", title: "Postres" },
                "para-los-peques": { nav: "Para los peques", title: "Para los peques" },
                cocteles: { nav: "Cócteles", title: "Cócteles" },
                "vinos-blancos": { nav: "Vinos blancos", title: "Vinos blancos" },
                "vinos-rosados": { nav: "Vinos rosados", title: "Vinos rosados" },
                tintos: { nav: "Tintos", title: "Vinos tintos" },
                "cavas-prosecco": { nav: "Cavas y Prosecco", title: "Cavas, Prosecco y Moscatel" },
                bebidas: { nav: "Bebidas", title: "Bebidas" }
            },
            groups: {
                "islas-canarias": "Islas Canarias",
                "vinos-blancos-nacionales": "Vinos blancos nacionales",
                "nacionales-la-rioja": "Nacionales · La Rioja",
                "nacionales-ribera-duero": "Nacionales · Ribera del Duero",
                "cava-brut-prosecco": "Cava Brut y Prosecco",
                moscatel: "Moscatel"
            },
            sectionNotes: {
                "para-compartir": {
                    text: "Pan majorero, AOVE, sal de escamas de Fuerteventura y alioli.",
                    price: "2,50 € por persona."
                },
                "del-mar": {
                    text: "Todos nuestros pescados locales van acompañados de papas arrugadas y ensalada fresca, junto con nuestro mojo picón casero."
                },
                "de-la-tierra": {
                    text: "Todas nuestras carnes están hechas en nuestra parrilla de piedra volcánica."
                },
                postres: {
                    text: "Todos nuestros postres son caseros y hechos en el día."
                },
                cocteles: {
                    lead: "El comienzo de la experiencia.",
                    sublead: "Nuestra selección de cócteles caseros."
                }
            },
            products: {
                "uvas-y-quesos": { name: "Uvas y Quesos Saben a Besos", description: "Selección de auténticos quesos de cabra de Fuerteventura." },
                croquetas: { name: "Croquetas", description: "Según selección del día." },
                "langostinos-ajillo": { name: "Langostinos al Ajillo", description: "Plato tradicional español de langostinos al ajillo con nuestro guiño." },
                "carpaccio-pulpo-local": { name: "Carpaccio de Pulpo Local con Toques Canarios", description: "Pulpo local finamente cortado, emplatado con granadas majoreras, láminas de papas y nuestro toque de Raíces." },
                "carpaccio-salmon": { name: "Carpaccio de Salmón al Estilo Raíces", description: "Salmón fresco marinado al estilo de la casa." },
                "jamon-iberico-bellota": { name: "Jamón Ibérico de Bellota", description: "Bellota 100 % · D.O.P. Dehesas de Extremadura." },
                "roast-beef": { name: "Roast Beef", description: "Carne de ternera marinada al estilo del chef, hecha al horno, cortada en lonchas finas y acompañada de rúcula, alcaparras, escamas de parmesano y AOVE." },
                "vitello-tonnato": { name: "Vitello Tonnato", description: "Carne de ternera cocida, servida en frío y cubierta con nuestra cremosa salsa a base de atún, mayonesa, anchoas, alcaparras y más." },
                "carpaccio-remolacha": { name: "Carpaccio de Remolacha", description: "Remolacha finamente cortada, rúcula fresca, fruta de temporada y queso rulo de cabra." },
                "ensalada-cesar": { name: "Ensalada César", description: "Ensalada de lechuga, pollo empanado, nuestra salsa César casera y queso parmesano rallado." },
                "ensalada-raices": { name: "Ensalada Raíces", description: "Ensalada mixta con verduras frescas y frutas del día." },
                "parmigiana-melanzane": { name: "Parmigiana di Melanzane", description: "Berenjenas fritas terminadas en el horno, con salsa de tomate casera, mozzarella y queso parmesano, aromatizadas con albahaca fresca." },
                "pasta-marisco": { name: "Pasta al Marisco", description: "Pasta fresca italiana salteada con almejas, chipirones, langostinos y mejillones, con nuestra salsa de tomate casera." },
                "pasta-salmon": { name: "Pasta al Salmón", description: "Pasta fresca italiana salteada con gambas, salmón fresco, toques de queso y nata." },
                "pescado-fresco-local": { name: "Pescado Fresco Local", description: "Acompañado de papas arrugadas y ensalada, con nuestro mojo picón casero.", details: ["A la espalda", "Frito", "Limpio sin espinas"] },
                "fritura-mar": { name: "Fritura de Mar", description: "Calamares, chipirones, langostinos y gambones fritos, servidos con ensalada y papas fritas caseras." },
                "salmon-naranja": { name: "Salmón a la Naranja", description: "Lomo de salmón con reducción de zumo de naranja natural, con su puré de papas casero." },
                "pulpo-km0": { name: "Pulpo Km 0", description: "Pulpo local salteado al wok con tomates cherry y papa canaria." },
                "medallones-solomillo": { name: "Medallones de Solomillo al Grill", description: "Medallones de solomillo a la parrilla, acompañados de verduras y papas al horno." },
                "entrecot-raices": { name: "Entrecot al Estilo Raíces", description: "Entrecot al grill cortado en tiras, presentado con rúcula, tomates cherry de Fuerteventura, crema balsámica y queso de cabra de Fuerteventura, acompañado de papas fritas." },
                "cordero-miel-pistacho": { name: "Cordero con Miel y Pistacho", description: "Cordero con miel y pistacho hecho al grill, acompañado de papas y ensalada verde." },
                "secreto-iberico": { name: "Secreto Ibérico", description: "Corte de cerdo ibérico a la parrilla, servido con papas fritas y verdura de temporada." },
                "tarta-queso": { name: "Tarta de Queso", description: "Cremosa tarta de queso con base de galleta al horno.", details: ["Frutos rojos", "Caramelo", "Chocolate"] },
                "polvito-uruguayo": { name: "Polvito Uruguayo", description: "Postre tradicional canario montado en capas de galletas y suspiros, con nuestra crema de polvito uruguayo." },
                "fingers-pollo": { name: "Fingers de Pollo", description: "Pollo de corral fresco, empanado y acompañado de papas fritas." },
                "pasta-tomate": { name: "Pasta al Tomate", description: "Pasta italiana fresca salteada con nuestra salsa de tomate casera." },
                "sangria-casera": { name: "Sangría Casera", details: ["Cava", "Vino tinto", "Vino blanco"] },
                spritz: { name: "Spritz", details: ["Aperol", "Limoncello"] },
                martini: { name: "Martini", details: ["Rojo", "Blanco"] },
                mojito: { name: "Mojito", details: ["Clásico", "Fresa", "Coco", "Piña", "Maracuyá"] },
                "pina-colada": {
                    name: "Piña Colada",
                    description: "Ron blanco, zumo de piña y leche de coco.",
                    longDescription: "Cóctel tropical, cremoso y refrescante, preparado con ron blanco, zumo de piña y leche de coco.",
                    ingredients: ["Ron blanco", "Zumo de piña", "Leche de coco"]
                },
                "espresso-martini": { name: "Espresso Martini", description: "Vodka, café, licor de café y sirope." },
                negroni: { name: "Negroni", description: "Ginebra, vermut rojo dulce y Campari." },
                "blanco-mondalon": { name: "Mondalón", description: "Gran Canaria · Albillo · Malvasía · Forastera Gomera · Seco." },
                "blanco-yaiza": { name: "Yaiza", description: "Lanzarote · Malvasía volcánica · Seco o semidulce." },
                "blanco-respiro": { name: "Respiro", description: "Lanzarote · Malvasía volcánica · Seco o semidulce." },
                "blanco-casal-arman": { name: "Casal de Armán", description: "D.O. Ribeiro · Seco." },
                "blanco-pionero": { name: "Pionero", description: "Albariño · Seco." },
                "blanco-essenzia": { name: "Essenzia", description: "Blanco verdejo sobre lías · Producción especial · Seco." },
                "blanco-arabe-dulce": { name: "Árabe Dulce", description: "Extremadura · Sauvignon Blanc." },
                "blanco-flamenco-seco": { name: "Flamenco Seco", description: "Rueda · Sauvignon Blanc · Verdejo." },
                "blanco-perrito-faldero": { name: "Perrito Faldero", description: "Rioja · Semidulce." },
                "rosado-mondalon": { name: "Mondalón", description: "Gran Canaria · Tempranillo · Garnacha." },
                "rosado-yaiza": { name: "Yaiza", description: "D.O. Lanzarote · Malvasía volcánica." },
                "rosado-essenzia": { name: "Essenzia", description: "Bodegas Zuazo Gastón · Tempranillo." },
                "tinto-mondalon": { name: "Mondalón", description: "Gran Canaria · Listán Negro · Tintilla." },
                "ramon-bilbao-crianza": { name: "Ramón Bilbao Crianza", description: "Tempranillo." },
                "ramon-bilbao-edicion-limitada": { name: "Ramón Bilbao Edición Limitada", description: "Garnacha." },
                "bodegas-abalos-cosecha": { name: "Bodegas de Ábalos Cosecha", description: "Tempranillo · Garnacha · Mazuelo." },
                "sepa-gavilan": { name: "Sepa Gavilán", description: "Crianza." },
                "teofilo-reyes-tamiz-roble": { name: "Teófilo Reyes Tamiz Roble", description: "Tempranillo." },
                "teofilo-reyes-crianza": { name: "Teófilo Reyes Crianza", description: "Tempranillo." },
                "carmelo-rodero-roble": { name: "Carmelo Rodero Roble", description: "Tempranillo." },
                "pago-capellanes-roble": { name: "Pago de Capellanes Roble", description: "Tempranillo." },
                "cava-casa": { name: "Cava Casa" },
                "cava-blanc-mar-blau": { name: "Cava Blanc de Mar Blau", description: "Macabeo · Xarel·lo · Parellada." },
                mionetto: { name: "Mionetto", description: "Prosecco." },
                "famara-lanzarote": { name: "Famara Lanzarote", description: "D.O. Lanzarote." }
            }
        },
        en: {
            meta: {
                title: "Raíces Menu · Gran Tarajal",
                description: "Digital menu for Raíces restaurant in Gran Tarajal, Fuerteventura."
            },
            languages: {
                es: { short: "ES", label: "Español", aria: "Change language to Spanish", changed: "Language changed to Spanish." },
                en: { short: "EN", label: "English", aria: "Change language to English", changed: "Language changed to English." },
                de: { short: "DE", label: "Deutsch", aria: "Change language to German", changed: "Language changed to German." },
                it: { short: "IT", label: "Italiano", aria: "Change language to Italian", changed: "Language changed to Italian." },
                fr: { short: "FR", label: "Français", aria: "Change language to French", changed: "Language changed to French." }
            },
            interface: {
                skipToMenu: "Skip to the menu",
                mainActionsLabel: "Main actions",
                scrollToStoryLabel: "Go to Our story",
                navAria: "Menu navigation",
                menu: "Menu",
                viewMenu: "View the menu",
                home: "Home",
                backHome: "Back to home",
                chooseMenuTitle: "Choose a menu section",
                chooseMenuText: "Tap a category to open its page and see only those dishes.",
                openCategory: "Open {name}",
                otherSections: "Rest of the menu",
                categoryPageIntro: "This page shows only this section. You can switch to another category using the menu buttons.",
                storyLink: "Our story",
                readMore: "Read more",
                readLess: "Read less",
                options: "Options",
                viewDish: "View dish",
                viewCocktail: "View cocktail",
                dishDetailsAria: "View details for {name}",
                modalEyebrow: "View dish",
                ingredients: "Ingredients",
                allergens: "Allergens",
                close: "Close",
                closeDish: "Close dish details",
                backToTop: "Back to top",
                language: "Language",
                languageMenu: "Language selector",
                languageToggle: "Change language",
                bySelectionWeight: "According to selection and weight.",
                notAvailable: "Not available",
                photoOf: "Photo of {name}",
                pendingImageOf: "Image pending for {name}",
                priceLabels: {
                    copa: "Glass",
                    media: "½ litre",
                    litro: "Litre",
                    botella: "Bottle"
                }
            },
            hero: {
                logoAlt: "Raíces logo with tree roots carved into wood",
                location: "Gran Tarajal · Fuerteventura",
                brand: "RAÍCES",
                tagline: "Same beach, different styles, different roots"
            },
            story: {
                kicker: "Our story",
                title: "A place to stay, to enjoy, to come back to.",
                paragraphs: [
                    "At Raíces, we want every visit to be more than just a meal. A place to sit by the sea, in the heart of Gran Tarajal, and let time flow without rushing.",
                    "Everything begins when you take your seat. Start with a glass of Canarian wine, an Aperol Spritz or a homemade cocktail while the sound of the sea whispers nearby.",
                    "Our cooking grows from our roots, with a commitment to fresh produce. Local fish depending on the day, grilled meats and a selection of dishes made for sharing.",
                    "The table fills little by little: light starters, carpaccios, dishes for the centre... simple, carefully prepared flavours to enjoy.",
                    "We believe in a freer, warmer, livelier way of eating. Tasting, sharing, raising a glass... and stretching the moment without watching the clock.",
                    "That is Raíces: a place to stay, to enjoy, to come back to.",
                    "Welcome."
                ]
            },
            menuIntro: {
                title: "Flavours to share by the sea",
                text: "Fresh produce, warm cooking and a table made to be enjoyed without hurry."
            },
            footer: {
                logoAlt: "Raíces logo",
                brand: "Raíces · Gran Tarajal · Fuerteventura",
                slogan: "A place to stay, to enjoy, to come back to.",
                changes: "Products and prices may be subject to change.",
                allergens: "Please ask our staff if you have any questions about allergens."
            },
            categories: {
                "para-compartir": { nav: "To Share", title: "To Share" },
                "de-la-finca": { nav: "From the Garden", title: "From the Garden" },
                pastas: { nav: "Our Pasta", title: "Our Pasta" },
                "del-mar": { nav: "From the Sea", title: "From the Sea" },
                "de-la-tierra": { nav: "From the Land", title: "From the Land" },
                postres: { nav: "Desserts", title: "Desserts" },
                "para-los-peques": { nav: "Kids’ Menu", title: "Kids’ Menu" },
                cocteles: { nav: "Cocktails", title: "Cocktails" },
                "vinos-blancos": { nav: "White Wines", title: "White Wines" },
                "vinos-rosados": { nav: "Rosé Wines", title: "Rosé Wines" },
                tintos: { nav: "Red Wines", title: "Red Wines" },
                "cavas-prosecco": { nav: "Cava & Prosecco", title: "Cava, Prosecco and Muscat" },
                bebidas: { nav: "Drinks", title: "Drinks" }
            },
            groups: {
                "islas-canarias": "Canary Islands",
                "vinos-blancos-nacionales": "Spanish White Wines",
                "nacionales-la-rioja": "Spanish · La Rioja",
                "nacionales-ribera-duero": "Spanish · Ribera del Duero",
                "cava-brut-prosecco": "Brut Cava and Prosecco",
                moscatel: "Muscat"
            },
            sectionNotes: {
                "para-compartir": {
                    text: "Majorero bread, extra virgin olive oil, Fuerteventura sea-salt flakes and alioli.",
                    price: "2,50 € per person."
                },
                "del-mar": {
                    text: "All our local fish is served with papas arrugadas and fresh salad, together with our homemade mojo picón."
                },
                "de-la-tierra": {
                    text: "All our meats are cooked on our volcanic-stone grill."
                },
                postres: {
                    text: "All our desserts are homemade and prepared fresh each day."
                },
                cocteles: {
                    lead: "The beginning of the experience.",
                    sublead: "Our selection of homemade cocktails."
                }
            },
            products: {
                "uvas-y-quesos": { name: "Grapes and Cheeses Taste Like Kisses", description: "A selection of authentic Fuerteventura goat cheeses." },
                croquetas: { name: "Croquettes", description: "According to the day’s selection." },
                "langostinos-ajillo": { name: "Garlic Prawns", description: "A traditional Spanish garlic prawn dish with our own Raíces touch." },
                "carpaccio-pulpo-local": { name: "Local Octopus Carpaccio with Canarian Touches", description: "Finely sliced local octopus, plated with Majorero pomegranate, potato slices and our Raíces touch." },
                "carpaccio-salmon": { name: "Raíces-Style Salmon Carpaccio", description: "Fresh salmon marinated in our house style." },
                "jamon-iberico-bellota": { name: "Acorn-Fed Ibérico Ham", description: "100% acorn-fed · D.O.P. Dehesas de Extremadura." },
                "roast-beef": { name: "Roast Beef", description: "Beef marinated in the chef’s style, oven-roasted, thinly sliced and served with rocket, capers, Parmesan flakes and extra virgin olive oil." },
                "vitello-tonnato": { name: "Vitello Tonnato", description: "Cooked veal served cold and covered with our creamy sauce made with tuna, mayonnaise, anchovies, capers and more." },
                "carpaccio-remolacha": { name: "Beetroot Carpaccio", description: "Finely sliced beetroot, fresh rocket, seasonal fruit and goat’s cheese log." },
                "ensalada-cesar": { name: "Caesar Salad", description: "Lettuce salad with breaded chicken, our homemade Caesar sauce and grated Parmesan cheese." },
                "ensalada-raices": { name: "Raíces Salad", description: "Mixed salad with fresh vegetables and fruit of the day." },
                "parmigiana-melanzane": { name: "Parmigiana di Melanzane", description: "Fried aubergines finished in the oven with homemade tomato sauce, mozzarella and Parmesan cheese, scented with fresh basil." },
                "pasta-marisco": { name: "Seafood Pasta", description: "Fresh Italian pasta sautéed with clams, baby squid, prawns and mussels, with our homemade tomato sauce." },
                "pasta-salmon": { name: "Salmon Pasta", description: "Fresh Italian pasta sautéed with prawns, fresh salmon, touches of cheese and cream." },
                "pescado-fresco-local": { name: "Fresh Local Fish", description: "Served with papas arrugadas and salad, with our homemade mojo picón.", details: ["Butterflied and grilled", "Fried", "Cleaned, without bones"] },
                "fritura-mar": { name: "Seafood Fritura", description: "Fried squid, baby squid, prawns and king prawns, served with salad and homemade chips." },
                "salmon-naranja": { name: "Salmon with Orange", description: "Salmon loin with a natural orange juice reduction, served with homemade mashed potatoes." },
                "pulpo-km0": { name: "Km 0 Octopus", description: "Local octopus wok-sautéed with cherry tomatoes and Canarian potato." },
                "medallones-solomillo": { name: "Grilled Sirloin Medallions", description: "Grilled sirloin medallions served with vegetables and baked potatoes." },
                "entrecot-raices": { name: "Raíces-Style Entrecôte", description: "Grilled entrecôte cut into strips, presented with rocket, Fuerteventura cherry tomatoes, balsamic cream and Fuerteventura goat cheese, served with chips." },
                "cordero-miel-pistacho": { name: "Lamb with Honey and Pistachio", description: "Grilled lamb with honey and pistachio, served with potatoes and green salad." },
                "secreto-iberico": { name: "Ibérico Secreto", description: "A cut of Ibérico pork grilled and served with chips and seasonal vegetables." },
                "tarta-queso": { name: "Cheesecake", description: "Creamy baked cheesecake with a biscuit base.", details: ["Red berries", "Caramel", "Chocolate"] },
                "polvito-uruguayo": { name: "Polvito Uruguayo", description: "Traditional Canarian layered dessert with biscuits and meringues, served with our polvito uruguayo cream." },
                "fingers-pollo": { name: "Chicken Fingers", description: "Fresh free-range chicken, breaded and served with chips." },
                "pasta-tomate": { name: "Tomato Pasta", description: "Fresh Italian pasta sautéed with our homemade tomato sauce." },
                "sangria-casera": { name: "Homemade Sangria", details: ["Cava", "Red wine", "White wine"] },
                spritz: { name: "Spritz", details: ["Aperol", "Limoncello"] },
                martini: { name: "Martini", details: ["Red", "White"] },
                mojito: { name: "Mojito", details: ["Classic", "Strawberry", "Coconut", "Pineapple", "Passion fruit"] },
                "pina-colada": {
                    name: "Piña Colada",
                    description: "White rum, pineapple juice and coconut milk.",
                    longDescription: "A tropical, creamy and refreshing cocktail made with white rum, pineapple juice and coconut milk.",
                    ingredients: ["White rum", "Pineapple juice", "Coconut milk"]
                },
                "espresso-martini": { name: "Espresso Martini", description: "Vodka, coffee, coffee liqueur and syrup." },
                negroni: { name: "Negroni", description: "Gin, sweet red vermouth and Campari." },
                "blanco-mondalon": { name: "Mondalón", description: "Gran Canaria · Albillo · Malvasía · Forastera Gomera · Dry." },
                "blanco-yaiza": { name: "Yaiza", description: "Lanzarote · Malvasía volcánica · Dry or semi-sweet." },
                "blanco-respiro": { name: "Respiro", description: "Lanzarote · Malvasía volcánica · Dry or semi-sweet." },
                "blanco-casal-arman": { name: "Casal de Armán", description: "D.O. Ribeiro · Dry." },
                "blanco-pionero": { name: "Pionero", description: "Albariño · Dry." },
                "blanco-essenzia": { name: "Essenzia", description: "White Verdejo on lees · Special production · Dry." },
                "blanco-arabe-dulce": { name: "Árabe Dulce", description: "Extremadura · Sauvignon Blanc." },
                "blanco-flamenco-seco": { name: "Flamenco Seco", description: "Rueda · Sauvignon Blanc · Verdejo." },
                "blanco-perrito-faldero": { name: "Perrito Faldero", description: "Rioja · Semi-sweet." },
                "rosado-mondalon": { name: "Mondalón", description: "Gran Canaria · Tempranillo · Garnacha." },
                "rosado-yaiza": { name: "Yaiza", description: "D.O. Lanzarote · Malvasía volcánica." },
                "rosado-essenzia": { name: "Essenzia", description: "Bodegas Zuazo Gastón · Tempranillo." },
                "tinto-mondalon": { name: "Mondalón", description: "Gran Canaria · Listán Negro · Tintilla." },
                "ramon-bilbao-crianza": { name: "Ramón Bilbao Crianza", description: "Tempranillo." },
                "ramon-bilbao-edicion-limitada": { name: "Ramón Bilbao Edición Limitada", description: "Garnacha." },
                "bodegas-abalos-cosecha": { name: "Bodegas de Ábalos Cosecha", description: "Tempranillo · Garnacha · Mazuelo." },
                "sepa-gavilan": { name: "Sepa Gavilán", description: "Crianza." },
                "teofilo-reyes-tamiz-roble": { name: "Teófilo Reyes Tamiz Roble", description: "Tempranillo." },
                "teofilo-reyes-crianza": { name: "Teófilo Reyes Crianza", description: "Tempranillo." },
                "carmelo-rodero-roble": { name: "Carmelo Rodero Roble", description: "Tempranillo." },
                "pago-capellanes-roble": { name: "Pago de Capellanes Roble", description: "Tempranillo." },
                "cava-casa": { name: "House Cava" },
                "cava-blanc-mar-blau": { name: "Cava Blanc de Mar Blau", description: "Macabeo · Xarel·lo · Parellada." },
                mionetto: { name: "Mionetto", description: "Prosecco." },
                "famara-lanzarote": { name: "Famara Lanzarote", description: "D.O. Lanzarote." }
            }
        },
        de: {
            meta: {
                title: "Speisekarte Raíces · Gran Tarajal",
                description: "Digitale Speisekarte des Restaurants Raíces in Gran Tarajal, Fuerteventura."
            },
            languages: {
                es: { short: "ES", label: "Español", aria: "Sprache auf Spanisch ändern", changed: "Sprache auf Spanisch geändert." },
                en: { short: "EN", label: "English", aria: "Sprache auf Englisch ändern", changed: "Sprache auf Englisch geändert." },
                de: { short: "DE", label: "Deutsch", aria: "Sprache auf Deutsch ändern", changed: "Sprache auf Deutsch geändert." },
                it: { short: "IT", label: "Italiano", aria: "Sprache auf Italienisch ändern", changed: "Sprache auf Italienisch geändert." },
                fr: { short: "FR", label: "Français", aria: "Sprache auf Französisch ändern", changed: "Sprache auf Französisch geändert." }
            },
            interface: {
                skipToMenu: "Zur Speisekarte springen",
                mainActionsLabel: "Hauptaktionen",
                scrollToStoryLabel: "Zu unserer Geschichte",
                navAria: "Navigation der Speisekarte",
                menu: "Speisekarte",
                viewMenu: "Speisekarte ansehen",
                home: "Startseite",
                backHome: "Zur Startseite",
                chooseMenuTitle: "Wählen Sie einen Bereich der Speisekarte",
                chooseMenuText: "Tippen Sie auf eine Kategorie, um ihre Seite zu öffnen und nur diese Gerichte zu sehen.",
                openCategory: "{name} öffnen",
                otherSections: "Weitere Bereiche",
                categoryPageIntro: "Diese Seite zeigt nur diesen Bereich. Über die Menüschaltflächen können Sie zu einer anderen Kategorie wechseln.",
                storyLink: "Unsere Geschichte",
                readMore: "Mehr lesen",
                readLess: "Weniger lesen",
                options: "Optionen",
                viewDish: "Gericht ansehen",
                viewCocktail: "Cocktail ansehen",
                dishDetailsAria: "Details zu {name} ansehen",
                modalEyebrow: "Gericht ansehen",
                ingredients: "Zutaten",
                allergens: "Allergene",
                close: "Schließen",
                closeDish: "Gerichtdetails schließen",
                backToTop: "Nach oben",
                language: "Sprache",
                languageMenu: "Sprachauswahl",
                languageToggle: "Sprache ändern",
                bySelectionWeight: "Je nach Auswahl und Gewicht.",
                notAvailable: "Nicht verfügbar",
                photoOf: "Foto von {name}",
                pendingImageOf: "Bild für {name} ausstehend",
                priceLabels: {
                    copa: "Glas",
                    media: "½ Liter",
                    litro: "Liter",
                    botella: "Flasche"
                }
            },
            hero: {
                logoAlt: "Raíces-Logo mit in Holz gravierten Baumwurzeln",
                location: "Gran Tarajal · Fuerteventura",
                brand: "RAÍCES",
                tagline: "Derselbe Strand, verschiedene Stile, verschiedene Wurzeln"
            },
            story: {
                kicker: "Unsere Geschichte",
                title: "Ein Ort zum Verweilen, Genießen und Wiederkommen.",
                paragraphs: [
                    "Bei Raíces möchten wir, dass jeder Besuch mehr ist als nur ein Essen. Ein Ort, an dem man am Meer sitzt, im Herzen von Gran Tarajal, und die Zeit ohne Eile fließen lässt.",
                    "Alles beginnt, wenn Sie am Tisch Platz nehmen. Genießen Sie ein Glas kanarischen Wein, einen Aperol Spritz oder einen hausgemachten Cocktail, während das Meer leise flüstert.",
                    "Unsere Küche entsteht aus unseren Wurzeln und setzt auf frische Produkte. Lokaler Fisch je nach Tagesangebot, Fleisch vom Grill und eine Auswahl an Gerichten zum Teilen.",
                    "Der Tisch füllt sich nach und nach: leichte Vorspeisen, Carpaccio, Gerichte für die Mitte... einfache, sorgfältig zubereitete Aromen zum Genießen.",
                    "Wir glauben an eine freiere, nähere und lebendigere Art zu essen. Probieren, teilen, anstoßen... und den Moment verlängern, ohne auf die Uhr zu schauen.",
                    "Das ist Raíces: ein Ort zum Verweilen, Genießen und Wiederkommen.",
                    "Willkommen."
                ]
            },
            menuIntro: {
                title: "Aromen zum Teilen am Meer",
                text: "Frische Produkte, nahbare Küche und ein Tisch, der ohne Eile genossen werden darf."
            },
            footer: {
                logoAlt: "Raíces-Logo",
                brand: "Raíces · Gran Tarajal · Fuerteventura",
                slogan: "Ein Ort zum Verweilen, Genießen und Wiederkommen.",
                changes: "Produkte und Preise können Änderungen unterliegen.",
                allergens: "Bitte wenden Sie sich bei Fragen zu Allergenen an unser Personal."
            },
            categories: {
                "para-compartir": { nav: "Zum Teilen", title: "Zum Teilen" },
                "de-la-finca": { nav: "Aus dem Garten", title: "Aus dem Garten" },
                pastas: { nav: "Unsere Pasta", title: "Unsere Pasta" },
                "del-mar": { nav: "Aus dem Meer", title: "Aus dem Meer" },
                "de-la-tierra": { nav: "Vom Land", title: "Vom Land" },
                postres: { nav: "Desserts", title: "Desserts" },
                "para-los-peques": { nav: "Für Kinder", title: "Für Kinder" },
                cocteles: { nav: "Cocktails", title: "Cocktails" },
                "vinos-blancos": { nav: "Weißweine", title: "Weißweine" },
                "vinos-rosados": { nav: "Roséweine", title: "Roséweine" },
                tintos: { nav: "Rotweine", title: "Rotweine" },
                "cavas-prosecco": { nav: "Cava & Prosecco", title: "Cava, Prosecco und Muskatwein" },
                bebidas: { nav: "Getränke", title: "Getränke" }
            },
            groups: {
                "islas-canarias": "Kanarische Inseln",
                "vinos-blancos-nacionales": "Spanische Weißweine",
                "nacionales-la-rioja": "Spanien · La Rioja",
                "nacionales-ribera-duero": "Spanien · Ribera del Duero",
                "cava-brut-prosecco": "Brut Cava und Prosecco",
                moscatel: "Muskatwein"
            },
            sectionNotes: {
                "para-compartir": {
                    text: "Majorero-Brot, natives Olivenöl extra, Fuerteventura-Meersalzflocken und Alioli.",
                    price: "2,50 € pro Person."
                },
                "del-mar": {
                    text: "Alle unsere lokalen Fische werden mit papas arrugadas und frischem Salat sowie unserem hausgemachten mojo picón serviert."
                },
                "de-la-tierra": {
                    text: "All unsere Fleischgerichte werden auf unserem Grill aus Vulkanstein zubereitet."
                },
                postres: {
                    text: "Alle unsere Desserts sind hausgemacht und werden täglich frisch zubereitet."
                },
                cocteles: {
                    lead: "Der Beginn des Erlebnisses.",
                    sublead: "Unsere Auswahl an hausgemachten Cocktails."
                }
            },
            products: {
                "uvas-y-quesos": { name: "Trauben und Käse schmecken wie Küsse", description: "Eine Auswahl echter Ziegenkäse aus Fuerteventura." },
                croquetas: { name: "Kroketten", description: "Je nach Tagesauswahl." },
                "langostinos-ajillo": { name: "Garnelen in Knoblauchöl", description: "Ein traditionelles spanisches Gericht mit Garnelen in Knoblauchöl und unserer eigenen Raíces-Note." },
                "carpaccio-pulpo-local": { name: "Carpaccio vom lokalen Oktopus mit kanarischen Akzenten", description: "Fein geschnittener lokaler Oktopus, angerichtet mit Majorero-Granatapfel, Kartoffelscheiben und unserer Raíces-Note." },
                "carpaccio-salmon": { name: "Lachs-Carpaccio nach Raíces-Art", description: "Frischer Lachs, nach Art des Hauses mariniert." },
                "jamon-iberico-bellota": { name: "Jamón Ibérico de Bellota", description: "100 % Eichelmast · D.O.P. Dehesas de Extremadura." },
                "roast-beef": { name: "Roast Beef", description: "Rindfleisch nach Art des Küchenchefs mariniert, im Ofen gegart, dünn aufgeschnitten und mit Rucola, Kapern, Parmesanspänen und nativem Olivenöl extra serviert." },
                "vitello-tonnato": { name: "Vitello Tonnato", description: "Gekochtes Kalbfleisch, kalt serviert und mit unserer cremigen Sauce aus Thunfisch, Mayonnaise, Sardellen, Kapern und mehr bedeckt." },
                "carpaccio-remolacha": { name: "Rote-Bete-Carpaccio", description: "Fein geschnittene Rote Bete, frischer Rucola, saisonales Obst und Ziegenkäserolle." },
                "ensalada-cesar": { name: "Caesar Salad", description: "Salat mit Blattsalat, paniertem Hähnchen, unserer hausgemachten Caesar-Sauce und geriebenem Parmesan." },
                "ensalada-raices": { name: "Raíces-Salat", description: "Gemischter Salat mit frischem Gemüse und Obst des Tages." },
                "parmigiana-melanzane": { name: "Parmigiana di Melanzane", description: "Frittierte Auberginen, im Ofen mit hausgemachter Tomatensauce, Mozzarella und Parmesan vollendet und mit frischem Basilikum aromatisiert." },
                "pasta-marisco": { name: "Pasta mit Meeresfrüchten", description: "Frische italienische Pasta, sautiert mit Venusmuscheln, Baby-Calamari, Garnelen und Miesmuscheln, mit unserer hausgemachten Tomatensauce." },
                "pasta-salmon": { name: "Pasta mit Lachs", description: "Frische italienische Pasta, sautiert mit Garnelen, frischem Lachs, einem Hauch Käse und Sahne." },
                "pescado-fresco-local": { name: "Frischer lokaler Fisch", description: "Serviert mit papas arrugadas und Salat, dazu unser hausgemachter mojo picón.", details: ["Aufgeschnitten und gegrillt", "Frittiert", "Gesäubert, ohne Gräten"] },
                "fritura-mar": { name: "Fritura aus dem Meer", description: "Frittierte Calamari, Baby-Calamari, Garnelen und Riesengarnelen, serviert mit Salat und hausgemachten Pommes." },
                "salmon-naranja": { name: "Lachs mit Orange", description: "Lachsfilet mit Reduktion aus natürlichem Orangensaft, serviert mit hausgemachtem Kartoffelpüree." },
                "pulpo-km0": { name: "Oktopus Km 0", description: "Lokaler Oktopus aus dem Wok mit Kirschtomaten und kanarischer Kartoffel." },
                "medallones-solomillo": { name: "Gegrillte Filetmedaillons", description: "Gegrillte Filetmedaillons, serviert mit Gemüse und Ofenkartoffeln." },
                "entrecot-raices": { name: "Entrecôte nach Raíces-Art", description: "Gegrilltes Entrecôte in Streifen, präsentiert mit Rucola, Kirschtomaten aus Fuerteventura, Balsamico-Creme und Ziegenkäse aus Fuerteventura, serviert mit Pommes." },
                "cordero-miel-pistacho": { name: "Lamm mit Honig und Pistazie", description: "Gegrilltes Lamm mit Honig und Pistazie, serviert mit Kartoffeln und grünem Salat." },
                "secreto-iberico": { name: "Secreto Ibérico", description: "Ein Stück vom Ibérico-Schwein, gegrillt und mit Pommes sowie saisonalem Gemüse serviert." },
                "tarta-queso": { name: "Käsekuchen", description: "Cremiger gebackener Käsekuchen mit Keksboden.", details: ["Rote Früchte", "Karamell", "Schokolade"] },
                "polvito-uruguayo": { name: "Polvito Uruguayo", description: "Traditionelles kanarisches Schichtdessert mit Keksen und Baiser, mit unserer Polvito-Uruguayo-Creme." },
                "fingers-pollo": { name: "Chicken Fingers", description: "Frisches Freilandhähnchen, paniert und mit Pommes serviert." },
                "pasta-tomate": { name: "Pasta mit Tomatensauce", description: "Frische italienische Pasta, sautiert mit unserer hausgemachten Tomatensauce." },
                "sangria-casera": { name: "Hausgemachte Sangría", details: ["Cava", "Rotwein", "Weißwein"] },
                spritz: { name: "Spritz", details: ["Aperol", "Limoncello"] },
                martini: { name: "Martini", details: ["Rot", "Weiß"] },
                mojito: { name: "Mojito", details: ["Klassisch", "Erdbeere", "Kokos", "Ananas", "Maracuja"] },
                "pina-colada": {
                    name: "Piña Colada",
                    description: "Weißer Rum, Ananassaft und Kokosmilch.",
                    longDescription: "Ein tropischer, cremiger und erfrischender Cocktail mit weißem Rum, Ananassaft und Kokosmilch.",
                    ingredients: ["Weißer Rum", "Ananassaft", "Kokosmilch"]
                },
                "espresso-martini": { name: "Espresso Martini", description: "Wodka, Kaffee, Kaffeelikör und Sirup." },
                negroni: { name: "Negroni", description: "Gin, süßer roter Wermut und Campari." },
                "blanco-mondalon": { name: "Mondalón", description: "Gran Canaria · Albillo · Malvasía · Forastera Gomera · Trocken." },
                "blanco-yaiza": { name: "Yaiza", description: "Lanzarote · Malvasía volcánica · Trocken oder halbsüß." },
                "blanco-respiro": { name: "Respiro", description: "Lanzarote · Malvasía volcánica · Trocken oder halbsüß." },
                "blanco-casal-arman": { name: "Casal de Armán", description: "D.O. Ribeiro · Trocken." },
                "blanco-pionero": { name: "Pionero", description: "Albariño · Trocken." },
                "blanco-essenzia": { name: "Essenzia", description: "Weißer Verdejo auf der Hefe · Sonderproduktion · Trocken." },
                "blanco-arabe-dulce": { name: "Árabe Dulce", description: "Extremadura · Sauvignon Blanc." },
                "blanco-flamenco-seco": { name: "Flamenco Seco", description: "Rueda · Sauvignon Blanc · Verdejo." },
                "blanco-perrito-faldero": { name: "Perrito Faldero", description: "Rioja · Halbsüß." },
                "rosado-mondalon": { name: "Mondalón", description: "Gran Canaria · Tempranillo · Garnacha." },
                "rosado-yaiza": { name: "Yaiza", description: "D.O. Lanzarote · Malvasía volcánica." },
                "rosado-essenzia": { name: "Essenzia", description: "Bodegas Zuazo Gastón · Tempranillo." },
                "tinto-mondalon": { name: "Mondalón", description: "Gran Canaria · Listán Negro · Tintilla." },
                "ramon-bilbao-crianza": { name: "Ramón Bilbao Crianza", description: "Tempranillo." },
                "ramon-bilbao-edicion-limitada": { name: "Ramón Bilbao Edición Limitada", description: "Garnacha." },
                "bodegas-abalos-cosecha": { name: "Bodegas de Ábalos Cosecha", description: "Tempranillo · Garnacha · Mazuelo." },
                "sepa-gavilan": { name: "Sepa Gavilán", description: "Crianza." },
                "teofilo-reyes-tamiz-roble": { name: "Teófilo Reyes Tamiz Roble", description: "Tempranillo." },
                "teofilo-reyes-crianza": { name: "Teófilo Reyes Crianza", description: "Tempranillo." },
                "carmelo-rodero-roble": { name: "Carmelo Rodero Roble", description: "Tempranillo." },
                "pago-capellanes-roble": { name: "Pago de Capellanes Roble", description: "Tempranillo." },
                "cava-casa": { name: "Haus-Cava" },
                "cava-blanc-mar-blau": { name: "Cava Blanc de Mar Blau", description: "Macabeo · Xarel·lo · Parellada." },
                mionetto: { name: "Mionetto", description: "Prosecco." },
                "famara-lanzarote": { name: "Famara Lanzarote", description: "D.O. Lanzarote." }
            }
        },
        it: {
            meta: {
                title: "Menu Raíces · Gran Tarajal",
                description: "Menu digitale del ristorante Raíces a Gran Tarajal, Fuerteventura."
            },
            languages: {
                es: { short: "ES", label: "Español", aria: "Cambia lingua in spagnolo", changed: "Lingua cambiata in spagnolo." },
                en: { short: "EN", label: "English", aria: "Cambia lingua in inglese", changed: "Lingua cambiata in inglese." },
                de: { short: "DE", label: "Deutsch", aria: "Cambia lingua in tedesco", changed: "Lingua cambiata in tedesco." },
                it: { short: "IT", label: "Italiano", aria: "Cambia lingua in italiano", changed: "Lingua cambiata in italiano." },
                fr: { short: "FR", label: "Français", aria: "Cambia lingua in francese", changed: "Lingua cambiata in francese." }
            },
            interface: {
                skipToMenu: "Vai al menu",
                mainActionsLabel: "Azioni principali",
                scrollToStoryLabel: "Vai alla nostra storia",
                navAria: "Navigazione del menu",
                menu: "Menu",
                viewMenu: "Vedi il menu",
                home: "Inizio",
                backHome: "Torna all’inizio",
                chooseMenuTitle: "Scegli una sezione del menu",
                chooseMenuText: "Tocca una categoria per aprire la sua pagina e vedere solo quei piatti.",
                openCategory: "Apri {name}",
                otherSections: "Resto del menu",
                categoryPageIntro: "Questa pagina mostra solo questa sezione. Puoi passare a un’altra categoria dai pulsanti del menu.",
                storyLink: "La nostra storia",
                readMore: "Leggi di più",
                readLess: "Leggi meno",
                options: "Opzioni",
                viewDish: "Vedi piatto",
                viewCocktail: "Vedi cocktail",
                dishDetailsAria: "Vedi la scheda di {name}",
                modalEyebrow: "Vedi piatto",
                ingredients: "Ingredienti",
                allergens: "Allergeni",
                close: "Chiudi",
                closeDish: "Chiudi la scheda del piatto",
                backToTop: "Torna su",
                language: "Lingua",
                languageMenu: "Selettore lingua",
                languageToggle: "Cambia lingua",
                bySelectionWeight: "Secondo selezione e peso.",
                notAvailable: "Non disponibile",
                photoOf: "Foto di {name}",
                pendingImageOf: "Immagine in attesa per {name}",
                priceLabels: {
                    copa: "Calice",
                    media: "½ litro",
                    litro: "Litro",
                    botella: "Bottiglia"
                }
            },
            hero: {
                logoAlt: "Logo di Raíces con radici di albero incise nel legno",
                location: "Gran Tarajal · Fuerteventura",
                brand: "RAÍCES",
                tagline: "Stessa spiaggia, stili diversi, radici diverse"
            },
            story: {
                kicker: "La nostra storia",
                title: "Un luogo dove stare, gustare e tornare.",
                paragraphs: [
                    "Da Raíces vogliamo che ogni visita sia qualcosa di più di un pasto. Un luogo dove sedersi davanti al mare, nel cuore di Gran Tarajal, e lasciare che il tempo scorra senza fretta.",
                    "Tutto comincia quando ci si siede a tavola. Inizia con un calice di vino canario, un Aperol Spritz o un cocktail fatto in casa mentre il suono del mare ti sussurra accanto.",
                    "La nostra cucina nasce dalle nostre radici, puntando sul prodotto fresco. Pesce locale secondo il giorno, carni alla griglia e una selezione di piatti pensati per la condivisione.",
                    "La tavola si riempie poco a poco: antipasti leggeri, carpacci, piatti al centro... sapori semplici, curati, da gustare.",
                    "Crediamo in un modo di mangiare più libero, più vicino, più vivo. Assaggiare, condividere, brindare... e prolungare il momento senza guardare l’orologio.",
                    "Raíces è questo: un luogo dove stare, gustare e tornare.",
                    "Benvenuti."
                ]
            },
            menuIntro: {
                title: "Sapori da condividere davanti al mare",
                text: "Prodotto fresco, cucina accogliente e una tavola pensata per essere vissuta senza fretta."
            },
            footer: {
                logoAlt: "Logo di Raíces",
                brand: "Raíces · Gran Tarajal · Fuerteventura",
                slogan: "Un luogo dove stare, gustare e tornare.",
                changes: "Prodotti e prezzi possono essere soggetti a modifiche.",
                allergens: "Consulta il nostro personale per qualsiasi dubbio sugli allergeni."
            },
            categories: {
                "para-compartir": { nav: "Da condividere", title: "Da condividere" },
                "de-la-finca": { nav: "Dall’orto", title: "Dall’orto" },
                pastas: { nav: "Le nostre paste", title: "Le nostre paste" },
                "del-mar": { nav: "Dal mare", title: "Dal mare" },
                "de-la-tierra": { nav: "Dalla terra", title: "Dalla terra" },
                postres: { nav: "Dolci", title: "Dolci" },
                "para-los-peques": { nav: "Per i più piccoli", title: "Per i più piccoli" },
                cocteles: { nav: "Cocktail", title: "Cocktail" },
                "vinos-blancos": { nav: "Vini bianchi", title: "Vini bianchi" },
                "vinos-rosados": { nav: "Vini rosati", title: "Vini rosati" },
                tintos: { nav: "Vini rossi", title: "Vini rossi" },
                "cavas-prosecco": { nav: "Cava e Prosecco", title: "Cava, Prosecco e Moscato" },
                bebidas: { nav: "Bevande", title: "Bevande" }
            },
            groups: {
                "islas-canarias": "Isole Canarie",
                "vinos-blancos-nacionales": "Vini bianchi nazionali",
                "nacionales-la-rioja": "Nazionali · La Rioja",
                "nacionales-ribera-duero": "Nazionali · Ribera del Duero",
                "cava-brut-prosecco": "Cava Brut e Prosecco",
                moscatel: "Moscato"
            },
            sectionNotes: {
                "para-compartir": {
                    text: "Pane majorero, olio extravergine d’oliva, fiocchi di sale di Fuerteventura e alioli.",
                    price: "2,50 € a persona."
                },
                "del-mar": {
                    text: "Tutti i nostri pesci locali sono serviti con papas arrugadas e insalata fresca, insieme al nostro mojo picón fatto in casa."
                },
                "de-la-tierra": {
                    text: "Tutte le nostre carni sono cotte sulla nostra griglia in pietra vulcanica."
                },
                postres: {
                    text: "Tutti i nostri dolci sono fatti in casa e preparati ogni giorno."
                },
                cocteles: {
                    lead: "L’inizio dell’esperienza.",
                    sublead: "La nostra selezione di cocktail fatti in casa."
                }
            },
            products: {
                "uvas-y-quesos": { name: "Uva e formaggi sanno di baci", description: "Selezione di autentici formaggi di capra di Fuerteventura." },
                croquetas: { name: "Crocchette", description: "Secondo la selezione del giorno." },
                "langostinos-ajillo": { name: "Gamberoni all’aglio", description: "Piatto tradizionale spagnolo di gamberoni all’aglio con il nostro tocco Raíces." },
                "carpaccio-pulpo-local": { name: "Carpaccio di polpo locale con tocchi canari", description: "Polpo locale tagliato finemente, impiattato con melograno majorero, lamelle di patate e il nostro tocco Raíces." },
                "carpaccio-salmon": { name: "Carpaccio di salmone stile Raíces", description: "Salmone fresco marinato secondo lo stile della casa." },
                "jamon-iberico-bellota": { name: "Jamón Ibérico de Bellota", description: "Bellota 100% · D.O.P. Dehesas de Extremadura." },
                "roast-beef": { name: "Roast Beef", description: "Manzo marinato secondo lo stile dello chef, cotto al forno, tagliato a fette sottili e accompagnato da rucola, capperi, scaglie di parmigiano e olio extravergine d’oliva." },
                "vitello-tonnato": { name: "Vitello Tonnato", description: "Vitello cotto, servito freddo e coperto con la nostra salsa cremosa a base di tonno, maionese, acciughe, capperi e altro." },
                "carpaccio-remolacha": { name: "Carpaccio di barbabietola", description: "Barbabietola tagliata finemente, rucola fresca, frutta di stagione e formaggio caprino a tronchetto." },
                "ensalada-cesar": { name: "Insalata Caesar", description: "Insalata di lattuga, pollo impanato, la nostra salsa Caesar fatta in casa e parmigiano grattugiato." },
                "ensalada-raices": { name: "Insalata Raíces", description: "Insalata mista con verdure fresche e frutta del giorno." },
                "parmigiana-melanzane": { name: "Parmigiana di Melanzane", description: "Melanzane fritte finite al forno con salsa di pomodoro fatta in casa, mozzarella e parmigiano, profumate con basilico fresco." },
                "pasta-marisco": { name: "Pasta ai frutti di mare", description: "Pasta fresca italiana saltata con vongole, calamaretti, gamberi e cozze, con la nostra salsa di pomodoro fatta in casa." },
                "pasta-salmon": { name: "Pasta al salmone", description: "Pasta fresca italiana saltata con gamberi, salmone fresco, tocchi di formaggio e panna." },
                "pescado-fresco-local": { name: "Pesce fresco locale", description: "Accompagnato da papas arrugadas e insalata, con il nostro mojo picón fatto in casa.", details: ["Aperto alla griglia", "Fritto", "Pulito senza spine"] },
                "fritura-mar": { name: "Frittura di mare", description: "Calamari, calamaretti, gamberi e gamberoni fritti, serviti con insalata e patate fritte fatte in casa." },
                "salmon-naranja": { name: "Salmone all’arancia", description: "Trancio di salmone con riduzione di succo d’arancia naturale, con purè di patate fatto in casa." },
                "pulpo-km0": { name: "Polpo Km 0", description: "Polpo locale saltato al wok con pomodorini e patata canaria." },
                "medallones-solomillo": { name: "Medaglioni di filetto alla griglia", description: "Medaglioni di filetto alla griglia, accompagnati da verdure e patate al forno." },
                "entrecot-raices": { name: "Entrecôte stile Raíces", description: "Entrecôte alla griglia tagliata a strisce, presentata con rucola, pomodorini di Fuerteventura, crema balsamica e formaggio di capra di Fuerteventura, accompagnata da patate fritte." },
                "cordero-miel-pistacho": { name: "Agnello con miele e pistacchio", description: "Agnello con miele e pistacchio cotto alla griglia, accompagnato da patate e insalata verde." },
                "secreto-iberico": { name: "Secreto Ibérico", description: "Taglio di maiale iberico alla griglia, servito con patate fritte e verdure di stagione." },
                "tarta-queso": { name: "Cheesecake", description: "Cremosa torta al formaggio cotta al forno con base di biscotto.", details: ["Frutti rossi", "Caramello", "Cioccolato"] },
                "polvito-uruguayo": { name: "Polvito Uruguayo", description: "Dolce tradizionale canario a strati con biscotti e meringhe, con la nostra crema di polvito uruguayo." },
                "fingers-pollo": { name: "Chicken Fingers", description: "Pollo ruspante fresco, impanato e accompagnato da patate fritte." },
                "pasta-tomate": { name: "Pasta al pomodoro", description: "Pasta fresca italiana saltata con la nostra salsa di pomodoro fatta in casa." },
                "sangria-casera": { name: "Sangria fatta in casa", details: ["Cava", "Vino rosso", "Vino bianco"] },
                spritz: { name: "Spritz", details: ["Aperol", "Limoncello"] },
                martini: { name: "Martini", details: ["Rosso", "Bianco"] },
                mojito: { name: "Mojito", details: ["Classico", "Fragola", "Cocco", "Ananas", "Maracuyá"] },
                "pina-colada": {
                    name: "Piña Colada",
                    description: "Rum bianco, succo d’ananas e latte di cocco.",
                    longDescription: "Un cocktail tropicale, cremoso e rinfrescante, preparato con rum bianco, succo d’ananas e latte di cocco.",
                    ingredients: ["Rum bianco", "Succo d’ananas", "Latte di cocco"]
                },
                "espresso-martini": { name: "Espresso Martini", description: "Vodka, caffè, liquore al caffè e sciroppo." },
                negroni: { name: "Negroni", description: "Gin, vermut rosso dolce e Campari." },
                "blanco-mondalon": { name: "Mondalón", description: "Gran Canaria · Albillo · Malvasía · Forastera Gomera · Secco." },
                "blanco-yaiza": { name: "Yaiza", description: "Lanzarote · Malvasía volcánica · Secco o semidolce." },
                "blanco-respiro": { name: "Respiro", description: "Lanzarote · Malvasía volcánica · Secco o semidolce." },
                "blanco-casal-arman": { name: "Casal de Armán", description: "D.O. Ribeiro · Secco." },
                "blanco-pionero": { name: "Pionero", description: "Albariño · Secco." },
                "blanco-essenzia": { name: "Essenzia", description: "Verdejo bianco sui lieviti · Produzione speciale · Secco." },
                "blanco-arabe-dulce": { name: "Árabe Dulce", description: "Extremadura · Sauvignon Blanc." },
                "blanco-flamenco-seco": { name: "Flamenco Seco", description: "Rueda · Sauvignon Blanc · Verdejo." },
                "blanco-perrito-faldero": { name: "Perrito Faldero", description: "Rioja · Semidolce." },
                "rosado-mondalon": { name: "Mondalón", description: "Gran Canaria · Tempranillo · Garnacha." },
                "rosado-yaiza": { name: "Yaiza", description: "D.O. Lanzarote · Malvasía volcánica." },
                "rosado-essenzia": { name: "Essenzia", description: "Bodegas Zuazo Gastón · Tempranillo." },
                "tinto-mondalon": { name: "Mondalón", description: "Gran Canaria · Listán Negro · Tintilla." },
                "ramon-bilbao-crianza": { name: "Ramón Bilbao Crianza", description: "Tempranillo." },
                "ramon-bilbao-edicion-limitada": { name: "Ramón Bilbao Edición Limitada", description: "Garnacha." },
                "bodegas-abalos-cosecha": { name: "Bodegas de Ábalos Cosecha", description: "Tempranillo · Garnacha · Mazuelo." },
                "sepa-gavilan": { name: "Sepa Gavilán", description: "Crianza." },
                "teofilo-reyes-tamiz-roble": { name: "Teófilo Reyes Tamiz Roble", description: "Tempranillo." },
                "teofilo-reyes-crianza": { name: "Teófilo Reyes Crianza", description: "Tempranillo." },
                "carmelo-rodero-roble": { name: "Carmelo Rodero Roble", description: "Tempranillo." },
                "pago-capellanes-roble": { name: "Pago de Capellanes Roble", description: "Tempranillo." },
                "cava-casa": { name: "Cava della casa" },
                "cava-blanc-mar-blau": { name: "Cava Blanc de Mar Blau", description: "Macabeo · Xarel·lo · Parellada." },
                mionetto: { name: "Mionetto", description: "Prosecco." },
                "famara-lanzarote": { name: "Famara Lanzarote", description: "D.O. Lanzarote." }
            }
        },
        fr: {
            meta: {
                title: "Carte Raíces · Gran Tarajal",
                description: "Carte digitale du restaurant Raíces à Gran Tarajal, Fuerteventura."
            },
            languages: {
                es: { short: "ES", label: "Español", aria: "Changer la langue en espagnol", changed: "Langue changée en espagnol." },
                en: { short: "EN", label: "English", aria: "Changer la langue en anglais", changed: "Langue changée en anglais." },
                de: { short: "DE", label: "Deutsch", aria: "Changer la langue en allemand", changed: "Langue changée en allemand." },
                it: { short: "IT", label: "Italiano", aria: "Changer la langue en italien", changed: "Langue changée en italien." },
                fr: { short: "FR", label: "Français", aria: "Changer la langue en français", changed: "Langue changée en français." }
            },
            interface: {
                skipToMenu: "Aller à la carte",
                mainActionsLabel: "Actions principales",
                scrollToStoryLabel: "Aller à Notre histoire",
                navAria: "Navigation de la carte",
                menu: "Carte",
                viewMenu: "Voir la carte",
                home: "Accueil",
                backHome: "Retour à l’accueil",
                chooseMenuTitle: "Choisissez une section de la carte",
                chooseMenuText: "Touchez une catégorie pour ouvrir sa page et voir uniquement ces plats.",
                openCategory: "Ouvrir {name}",
                otherSections: "Reste de la carte",
                categoryPageIntro: "Cette page affiche uniquement cette section. Vous pouvez changer de catégorie avec les boutons du menu.",
                storyLink: "Notre histoire",
                readMore: "Lire plus",
                readLess: "Lire moins",
                options: "Options",
                viewDish: "Voir le plat",
                viewCocktail: "Voir le cocktail",
                dishDetailsAria: "Voir la fiche de {name}",
                modalEyebrow: "Voir le plat",
                ingredients: "Ingrédients",
                allergens: "Allergènes",
                close: "Fermer",
                closeDish: "Fermer la fiche du plat",
                backToTop: "Retour en haut",
                language: "Langue",
                languageMenu: "Sélecteur de langue",
                languageToggle: "Changer de langue",
                bySelectionWeight: "Selon sélection et poids.",
                notAvailable: "Non disponible",
                photoOf: "Photo de {name}",
                pendingImageOf: "Image en attente pour {name}",
                priceLabels: {
                    copa: "Verre",
                    media: "½ litre",
                    litro: "Litre",
                    botella: "Bouteille"
                }
            },
            hero: {
                logoAlt: "Logo de Raíces avec des racines d’arbre gravées dans le bois",
                location: "Gran Tarajal · Fuerteventura",
                brand: "RAÍCES",
                tagline: "Même plage, styles différents, racines différentes"
            },
            story: {
                kicker: "Notre histoire",
                title: "Un lieu où rester, savourer et revenir.",
                paragraphs: [
                    "Chez Raíces, nous voulons que chaque visite soit plus qu’un simple repas. Un lieu où s’asseoir face à la mer, au cœur de Gran Tarajal, et laisser le temps passer sans hâte.",
                    "Tout commence quand on s’installe à table. Commencez avec un verre de vin canarien, un Aperol Spritz ou un cocktail maison pendant que le bruit de la mer vous murmure à l’oreille.",
                    "Notre cuisine naît de nos racines, avec un engagement pour les produits frais. Poisson local selon le jour, viandes grillées et une sélection de plats pensés pour être partagés.",
                    "La table se remplit peu à peu : entrées légères, carpaccios, plats à placer au centre... des saveurs simples, soignées, faites pour être savourées.",
                    "Nous croyons en une façon de manger plus libre, plus proche, plus vivante. Goûter, partager, trinquer... et prolonger le moment sans regarder l’heure.",
                    "Raíces, c’est cela : un lieu où rester, savourer et revenir.",
                    "Bienvenue."
                ]
            },
            menuIntro: {
                title: "Des saveurs à partager face à la mer",
                text: "Des produits frais, une cuisine chaleureuse et une table pensée pour être appréciée sans hâte."
            },
            footer: {
                logoAlt: "Logo de Raíces",
                brand: "Raíces · Gran Tarajal · Fuerteventura",
                slogan: "Un lieu où rester, savourer et revenir.",
                changes: "Les produits et les prix peuvent être soumis à modification.",
                allergens: "Veuillez consulter notre personnel pour toute question concernant les allergènes."
            },
            categories: {
                "para-compartir": { nav: "À partager", title: "À partager" },
                "de-la-finca": { nav: "Du potager", title: "Du potager" },
                pastas: { nav: "Nos pâtes", title: "Nos pâtes" },
                "del-mar": { nav: "De la mer", title: "De la mer" },
                "de-la-tierra": { nav: "De la terre", title: "De la terre" },
                postres: { nav: "Desserts", title: "Desserts" },
                "para-los-peques": { nav: "Menu enfant", title: "Menu enfant" },
                cocteles: { nav: "Cocktails", title: "Cocktails" },
                "vinos-blancos": { nav: "Vins blancs", title: "Vins blancs" },
                "vinos-rosados": { nav: "Vins rosés", title: "Vins rosés" },
                tintos: { nav: "Vins rouges", title: "Vins rouges" },
                "cavas-prosecco": { nav: "Cava et Prosecco", title: "Cava, Prosecco et Muscat" },
                bebidas: { nav: "Boissons", title: "Boissons" }
            },
            groups: {
                "islas-canarias": "Îles Canaries",
                "vinos-blancos-nacionales": "Vins blancs nationaux",
                "nacionales-la-rioja": "Nationaux · La Rioja",
                "nacionales-ribera-duero": "Nationaux · Ribera del Duero",
                "cava-brut-prosecco": "Cava Brut et Prosecco",
                moscatel: "Muscat"
            },
            sectionNotes: {
                "para-compartir": {
                    text: "Pain majorero, huile d’olive vierge extra, fleur de sel de Fuerteventura et alioli.",
                    price: "2,50 € par personne."
                },
                "del-mar": {
                    text: "Tous nos poissons locaux sont accompagnés de papas arrugadas et d’une salade fraîche, avec notre mojo picón maison."
                },
                "de-la-tierra": {
                    text: "Toutes nos viandes sont préparées sur notre gril en pierre volcanique."
                },
                postres: {
                    text: "Tous nos desserts sont faits maison et préparés le jour même."
                },
                cocteles: {
                    lead: "Le début de l’expérience.",
                    sublead: "Notre sélection de cocktails maison."
                }
            },
            products: {
                "uvas-y-quesos": { name: "Raisins et fromages ont un goût de baisers", description: "Sélection d’authentiques fromages de chèvre de Fuerteventura." },
                croquetas: { name: "Croquettes", description: "Selon la sélection du jour." },
                "langostinos-ajillo": { name: "Gambas à l’ail", description: "Plat espagnol traditionnel de gambas à l’ail avec notre touche Raíces." },
                "carpaccio-pulpo-local": { name: "Carpaccio de poulpe local aux touches canariennes", description: "Poulpe local finement tranché, dressé avec grenade majorera, lamelles de pommes de terre et notre touche Raíces." },
                "carpaccio-salmon": { name: "Carpaccio de saumon façon Raíces", description: "Saumon frais mariné selon le style de la maison." },
                "jamon-iberico-bellota": { name: "Jambon Ibérique de Bellota", description: "Bellota 100 % · D.O.P. Dehesas de Extremadura." },
                "roast-beef": { name: "Roast Beef", description: "Bœuf mariné à la façon du chef, cuit au four, tranché finement et accompagné de roquette, câpres, copeaux de parmesan et huile d’olive vierge extra." },
                "vitello-tonnato": { name: "Vitello Tonnato", description: "Veau cuit, servi froid et nappé de notre sauce crémeuse à base de thon, mayonnaise, anchois, câpres et plus encore." },
                "carpaccio-remolacha": { name: "Carpaccio de betterave", description: "Betterave finement tranchée, roquette fraîche, fruit de saison et fromage de chèvre en bûche." },
                "ensalada-cesar": { name: "Salade César", description: "Salade de laitue, poulet pané, notre sauce César maison et parmesan râpé." },
                "ensalada-raices": { name: "Salade Raíces", description: "Salade composée avec légumes frais et fruits du jour." },
                "parmigiana-melanzane": { name: "Parmigiana di Melanzane", description: "Aubergines frites terminées au four avec sauce tomate maison, mozzarella et parmesan, parfumées au basilic frais." },
                "pasta-marisco": { name: "Pâtes aux fruits de mer", description: "Pâtes fraîches italiennes sautées avec palourdes, petits calamars, gambas et moules, avec notre sauce tomate maison." },
                "pasta-salmon": { name: "Pâtes au saumon", description: "Pâtes fraîches italiennes sautées avec gambas, saumon frais, touches de fromage et crème." },
                "pescado-fresco-local": { name: "Poisson frais local", description: "Accompagné de papas arrugadas et salade, avec notre mojo picón maison.", details: ["Ouvert et grillé", "Frit", "Nettoyé sans arêtes"] },
                "fritura-mar": { name: "Friture de mer", description: "Calamars, petits calamars, gambas et grosses crevettes frits, servis avec salade et frites maison." },
                "salmon-naranja": { name: "Saumon à l’orange", description: "Pavé de saumon avec réduction de jus d’orange naturel, servi avec purée de pommes de terre maison." },
                "pulpo-km0": { name: "Poulpe Km 0", description: "Poulpe local sauté au wok avec tomates cerises et pomme de terre canarienne." },
                "medallones-solomillo": { name: "Médaillons de filet grillés", description: "Médaillons de filet grillés, accompagnés de légumes et pommes de terre au four." },
                "entrecot-raices": { name: "Entrecôte façon Raíces", description: "Entrecôte grillée coupée en lanières, présentée avec roquette, tomates cerises de Fuerteventura, crème balsamique et fromage de chèvre de Fuerteventura, accompagnée de frites." },
                "cordero-miel-pistacho": { name: "Agneau au miel et à la pistache", description: "Agneau au miel et à la pistache grillé, accompagné de pommes de terre et salade verte." },
                "secreto-iberico": { name: "Secreto Ibérico", description: "Morceau de porc ibérique grillé, servi avec frites et légumes de saison." },
                "tarta-queso": { name: "Cheesecake", description: "Gâteau au fromage crémeux cuit au four avec base biscuitée.", details: ["Fruits rouges", "Caramel", "Chocolat"] },
                "polvito-uruguayo": { name: "Polvito Uruguayo", description: "Dessert traditionnel canarien en couches de biscuits et meringues, avec notre crème de polvito uruguayo." },
                "fingers-pollo": { name: "Chicken Fingers", description: "Poulet fermier frais, pané et accompagné de frites." },
                "pasta-tomate": { name: "Pâtes à la tomate", description: "Pâtes fraîches italiennes sautées avec notre sauce tomate maison." },
                "sangria-casera": { name: "Sangria maison", details: ["Cava", "Vin rouge", "Vin blanc"] },
                spritz: { name: "Spritz", details: ["Aperol", "Limoncello"] },
                martini: { name: "Martini", details: ["Rouge", "Blanc"] },
                mojito: { name: "Mojito", details: ["Classique", "Fraise", "Coco", "Ananas", "Fruit de la passion"] },
                "pina-colada": {
                    name: "Piña Colada",
                    description: "Rhum blanc, jus d’ananas et lait de coco.",
                    longDescription: "Un cocktail tropical, crémeux et rafraîchissant, préparé avec du rhum blanc, du jus d’ananas et du lait de coco.",
                    ingredients: ["Rhum blanc", "Jus d’ananas", "Lait de coco"]
                },
                "espresso-martini": { name: "Espresso Martini", description: "Vodka, café, liqueur de café et sirop." },
                negroni: { name: "Negroni", description: "Gin, vermouth rouge doux et Campari." },
                "blanco-mondalon": { name: "Mondalón", description: "Gran Canaria · Albillo · Malvasía · Forastera Gomera · Sec." },
                "blanco-yaiza": { name: "Yaiza", description: "Lanzarote · Malvasía volcánica · Sec ou demi-doux." },
                "blanco-respiro": { name: "Respiro", description: "Lanzarote · Malvasía volcánica · Sec ou demi-doux." },
                "blanco-casal-arman": { name: "Casal de Armán", description: "D.O. Ribeiro · Sec." },
                "blanco-pionero": { name: "Pionero", description: "Albariño · Sec." },
                "blanco-essenzia": { name: "Essenzia", description: "Verdejo blanc sur lies · Production spéciale · Sec." },
                "blanco-arabe-dulce": { name: "Árabe Dulce", description: "Extremadura · Sauvignon Blanc." },
                "blanco-flamenco-seco": { name: "Flamenco Seco", description: "Rueda · Sauvignon Blanc · Verdejo." },
                "blanco-perrito-faldero": { name: "Perrito Faldero", description: "Rioja · Demi-doux." },
                "rosado-mondalon": { name: "Mondalón", description: "Gran Canaria · Tempranillo · Garnacha." },
                "rosado-yaiza": { name: "Yaiza", description: "D.O. Lanzarote · Malvasía volcánica." },
                "rosado-essenzia": { name: "Essenzia", description: "Bodegas Zuazo Gastón · Tempranillo." },
                "tinto-mondalon": { name: "Mondalón", description: "Gran Canaria · Listán Negro · Tintilla." },
                "ramon-bilbao-crianza": { name: "Ramón Bilbao Crianza", description: "Tempranillo." },
                "ramon-bilbao-edicion-limitada": { name: "Ramón Bilbao Edición Limitada", description: "Garnacha." },
                "bodegas-abalos-cosecha": { name: "Bodegas de Ábalos Cosecha", description: "Tempranillo · Garnacha · Mazuelo." },
                "sepa-gavilan": { name: "Sepa Gavilán", description: "Crianza." },
                "teofilo-reyes-tamiz-roble": { name: "Teófilo Reyes Tamiz Roble", description: "Tempranillo." },
                "teofilo-reyes-crianza": { name: "Teófilo Reyes Crianza", description: "Tempranillo." },
                "carmelo-rodero-roble": { name: "Carmelo Rodero Roble", description: "Tempranillo." },
                "pago-capellanes-roble": { name: "Pago de Capellanes Roble", description: "Tempranillo." },
                "cava-casa": { name: "Cava maison" },
                "cava-blanc-mar-blau": { name: "Cava Blanc de Mar Blau", description: "Macabeo · Xarel·lo · Parellada." },
                mionetto: { name: "Mionetto", description: "Prosecco." },
                "famara-lanzarote": { name: "Famara Lanzarote", description: "D.O. Lanzarote." }
            }
        }
    };

    const getValue = (source, key) => key.split(".").reduce((value, part) => {
        if (value && Object.prototype.hasOwnProperty.call(value, part)) {
            return value[part];
        }
        return undefined;
    }, source);

    const format = (value, replacements = {}) => {
        if (typeof value !== "string") {
            return value;
        }
        return value.replace(/\{(\w+)\}/g, (_, token) => replacements[token] ?? "");
    };

    const t = (key, language = "es", replacements = {}) => {
        const lang = supportedLanguages.includes(language) ? language : "es";
        const translated = getValue(translations[lang], key);

        if (translated !== undefined) {
            return format(translated, replacements);
        }

        const fallback = getValue(translations.es, key);
        if (fallback !== undefined) {
            console.warn(`[Raíces i18n] Missing translation "${key}" for "${lang}". Using Spanish fallback.`);
            return format(fallback, replacements);
        }

        console.warn(`[Raíces i18n] Missing translation key "${key}".`);
        return "";
    };

    window.RAICES_SUPPORTED_LANGUAGES = supportedLanguages;
    window.RAICES_TRANSLATIONS = translations;
    window.t = t;
})();
