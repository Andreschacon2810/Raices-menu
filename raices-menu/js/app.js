(() => {
    "use strict";

    document.documentElement.classList.add("js");

    const pageType = document.body.dataset.page || "home";
    const currentSectionId = document.body.dataset.sectionId || null;
    const menuSectionsRoot = document.querySelector("#menuSections");
    const categoryChooser = document.querySelector("#categoryChooser");
    const categoryNav = document.querySelector("#categoryNav");
    const backToTop = document.querySelector(".back-to-top");
    const story = document.querySelector(".story");
    const storyBody = document.querySelector("#storyBody");
    const storyToggle = document.querySelector(".story__toggle");
    const reservationForm = document.querySelector("#reservationForm");
    const reservationStatus = document.querySelector("#reservationStatus");
    const modal = document.querySelector("#dishModal");
    const modalDialog = modal?.querySelector(".modal__dialog");
    const modalImage = modal?.querySelector("#modalImage");
    const modalTitle = modal?.querySelector("#modalTitle");
    const modalPrice = modal?.querySelector("#modalPrice");
    const modalDescription = modal?.querySelector("#modalDescription");
    const modalLongDescription = modal?.querySelector("#modalLongDescription");
    const modalIngredients = modal?.querySelector("#modalIngredients");
    const modalAllergens = modal?.querySelector("#modalAllergens");
    const fishCatalogModal = document.querySelector("#fishCatalogModal");
    const fishCatalogDialog = fishCatalogModal?.querySelector(".modal__dialog");
    const fishCatalogList = fishCatalogModal?.querySelector("#fishCatalogList");
    const fishCatalogEyebrow = fishCatalogModal?.querySelector("#fishCatalogEyebrow");
    const fishCatalogTitle = fishCatalogModal?.querySelector("#fishCatalogTitle");
    const fishCatalogIntro = fishCatalogModal?.querySelector("#fishCatalogIntro");
    const languageSelector = document.querySelector("#languageSelector");
    const languageToggle = document.querySelector("#languageToggle");
    const languagePanel = document.querySelector("#languagePanel");
    const languageLive = document.querySelector("#languageLive");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportedLanguages = window.RAICES_SUPPORTED_LANGUAGES || ["es", "en", "de", "it", "fr"];
    const languageStorageKey = "raices-language";
    const menuData = window.RAICES_MENU || [];
    const catalogsById = new Map(Object.entries(window.RAICES_CATALOGS || {}));
    const productsById = new Map();
    let activeLanguage = getInitialLanguage();
    let lastFocusedElement = null;
    let activeModalProductId = null;
    let activeCatalogId = null;
    let activeCatalogItemId = null;
    let activeOverlay = null;

    modalIngredients?.classList.add("modal-ingredients");
    modalAllergens?.classList.add("modal-allergens");

    function getInitialLanguage() {
        const stored = readStoredLanguage();
        if (stored) {
            return stored;
        }

        const browserLanguage = (navigator.language || "").toLowerCase();
        if (supportedLanguages.includes(browserLanguage)) {
            return browserLanguage;
        }

        return "es";
    }

    function readStoredLanguage() {
        try {
            const stored = window.localStorage.getItem(languageStorageKey);
            return supportedLanguages.includes(stored) ? stored : null;
        } catch (error) {
            return null;
        }
    }

    function storeLanguage(language) {
        try {
            window.localStorage.setItem(languageStorageKey, language);
        } catch (error) {
            /* La carta sigue funcionando aunque localStorage no esté disponible. */
        }
    }

    const translate = (key, replacements = {}, language = activeLanguage) => window.t(key, language, replacements);

    const createElement = (tag, className, text) => {
        const element = document.createElement(tag);
        if (className) {
            element.className = className;
        }
        if (text !== undefined && text !== null) {
            element.textContent = text;
        }
        return element;
    };

    const getItems = (section) => {
        if (Array.isArray(section.items)) {
            return section.items;
        }
        return (section.groups || []).flatMap((group) => group.items || []);
    };

    const getSection = (sectionId = currentSectionId) => menuData.find((section) => section.id === sectionId) || menuData[0];

    const getSectionUrl = (section) => `${section.id}.html`;

    const resolveValue = (value) => {
        if (value && typeof value === "object" && value.textKey) {
            return translate(value.textKey);
        }
        return value || "";
    };

    const getProductName = (product) => translate(product.nameKey);

    const getCatalogItemName = (item) => item.nameKey ? translate(item.nameKey) : (item.name || item.id);

    const getCatalogItemDescription = (item) => item.descriptionKey ? translate(item.descriptionKey) : (item.description || "");

    const getCatalogItemIngredients = (item) => {
        if (item.ingredientsKey) {
            const ingredients = translate(item.ingredientsKey);
            return Array.isArray(ingredients) ? ingredients : [];
        }
        return Array.isArray(item.ingredients) ? item.ingredients : [];
    };

    const getProductDescription = (product) => product.descriptionKey ? translate(product.descriptionKey) : "";

    const getProductDetails = (product) => {
        if (!product.detailsKey) {
            return [];
        }
        const details = translate(product.detailsKey);
        return Array.isArray(details) ? details : [];
    };

    const getPriceText = (product) => {
        if (product.price) {
            return product.price;
        }
        if (product.priceKey) {
            return translate(product.priceKey);
        }
        if (!product.prices) {
            return "";
        }

        return Object.entries(product.prices)
            .filter(([, value]) => value !== null && value !== undefined)
            .map(([key, value]) => `${translate(`interface.priceLabels.${key}`)}: ${resolveValue(value)}`)
            .join(" · ");
    };

    const renderPrice = (product) => {
        const singlePrice = product.price || (product.priceKey ? translate(product.priceKey) : null);
        if (singlePrice) {
            return createElement("p", "menu-item__price", singlePrice);
        }

        if (!product.prices) {
            return null;
        }

        const visiblePrices = Object.entries(product.prices).filter(([, value]) => value !== null && value !== undefined);
        if (!visiblePrices.length) {
            return null;
        }

        const list = createElement("dl", "price-list");
        visiblePrices.forEach(([key, value]) => {
            const row = createElement("div", "price-list__row");
            row.appendChild(createElement("dt", "", translate(`interface.priceLabels.${key}`)));
            row.appendChild(createElement("dd", "", resolveValue(value)));
            list.appendChild(row);
        });
        return list;
    };

    const renderDetails = (details) => {
        if (!details.length) {
            return null;
        }

        const wrapper = createElement("div", "menu-item__details");
        wrapper.appendChild(createElement("p", "menu-item__details-label", translate("interface.options")));
        const list = createElement("ul", "");
        details.forEach((detail) => {
            list.appendChild(createElement("li", "", detail));
        });
        wrapper.appendChild(list);
        return wrapper;
    };

    const renderProduct = (product) => {
        productsById.set(product.id, product);
        const name = getProductName(product);
        const article = createElement("article", "menu-item");
        article.id = `producto-${product.id}`;

        const top = createElement("div", "menu-item__top");
        top.appendChild(createElement("h4", "", name));
        const price = renderPrice(product);
        if (price) {
            top.appendChild(price);
        }
        article.appendChild(top);

        const description = getProductDescription(product);
        if (description) {
            article.appendChild(createElement("p", "menu-item__description", description));
        }

        const details = renderDetails(getProductDetails(product));
        if (details) {
            article.appendChild(details);
        }

        if (product.interactive) {
            article.classList.add("menu-item--interactive");
            article.dataset.productId = product.id;

            const buttonLabelKey = product.buttonLabelKey || "interface.viewDish";
            const button = createElement("button", "dish-button", translate(buttonLabelKey));
            button.type = "button";
            button.dataset.productId = product.id;
            button.setAttribute("aria-label", translate("interface.dishDetailsAria", { name }));
            article.appendChild(button);
        }

        return article;
    };

    const renderSectionNotice = (section) => {
        if (!section.noteKey && !section.notePriceKey) {
            return null;
        }

        const notice = createElement("div", "section-note");
        if (section.noteKey) {
            notice.appendChild(createElement("p", "", translate(section.noteKey)));
        }
        if (section.notePriceKey) {
            notice.appendChild(createElement("p", "section-note__price", translate(section.notePriceKey)));
        }
        return notice;
    };

    const renderGroup = (group) => {
        const fragment = document.createDocumentFragment();
        if (group.titleKey) {
            fragment.appendChild(createElement("h3", "menu-group-title", translate(group.titleKey)));
        }

        const grid = createElement("div", "menu-grid");
        (group.items || []).forEach((product) => {
            grid.appendChild(renderProduct(product));
        });
        fragment.appendChild(grid);
        return fragment;
    };

    const renderMenuSection = (section) => {
        const menuSection = createElement("section", "menu-section");
        menuSection.id = section.id;
        menuSection.setAttribute("aria-labelledby", `${section.id}-title`);

        const category = translate(section.categoryKey);
        const header = createElement("div", "menu-section__header");
        header.appendChild(createElement("p", "section-kicker", translate("interface.menu")));
        const title = createElement("h2", "", category.title || category.nav);
        title.id = `${section.id}-title`;
        header.appendChild(title);

        if (section.leadKey) {
            header.appendChild(createElement("p", "menu-section__lead", translate(section.leadKey)));
        }
        if (section.subleadKey) {
            header.appendChild(createElement("p", "menu-section__sublead", translate(section.subleadKey)));
        }

        const notice = renderSectionNotice(section);
        if (notice) {
            header.appendChild(notice);
        }

        menuSection.appendChild(header);

        if (Array.isArray(section.groups)) {
            section.groups.forEach((group) => {
                menuSection.appendChild(renderGroup(group));
            });
        } else {
            menuSection.appendChild(renderGroup({ items: section.items }));
        }

        return menuSection;
    };

    const renderCategoryChooser = () => {
        if (!categoryChooser) {
            return;
        }

        categoryChooser.replaceChildren();

        if (pageType === "category") {
            const home = createElement("a", "category-card category-card--home", "");
            home.href = "index.html";
            home.appendChild(createElement("span", "category-card__title", translate("interface.backHome")));
            categoryChooser.appendChild(home);
        }

        menuData.forEach((section) => {
            if (!getItems(section).length) {
                return;
            }

            const category = translate(section.categoryKey);
            const card = createElement("a", "category-card", "");
            card.href = getSectionUrl(section);
            card.setAttribute("aria-label", translate("interface.openCategory", { name: category.title || category.nav }));

            if (section.id === currentSectionId && pageType === "category") {
                card.classList.add("is-active");
                card.setAttribute("aria-current", "page");
            }

            card.appendChild(createElement("span", "category-card__title", category.title || category.nav));
            card.appendChild(createElement("span", "category-card__meta", translate("interface.openCategory", { name: category.nav || category.title })));
            categoryChooser.appendChild(card);
        });
    };

    const renderCategoryNav = () => {
        if (!categoryNav) {
            return;
        }

        categoryNav.replaceChildren();

        const homeLink = createElement("a", "category-nav__link category-nav__link--home", translate("interface.home"));
        homeLink.href = "index.html";
        categoryNav.appendChild(homeLink);

        menuData.forEach((section) => {
            if (!getItems(section).length) {
                return;
            }

            const category = translate(section.categoryKey);
            const navLink = createElement("a", "category-nav__link", category.nav || category.title);
            navLink.href = getSectionUrl(section);
            navLink.dataset.sectionId = section.id;

            if (section.id === currentSectionId) {
                navLink.classList.add("is-active");
                navLink.setAttribute("aria-current", "page");
            }

            categoryNav.appendChild(navLink);
        });
    };

    const renderCurrentCategory = () => {
        if (!menuSectionsRoot || pageType !== "category") {
            return;
        }

        const section = getSection();
        productsById.clear();
        menuSectionsRoot.replaceChildren();
        menuSectionsRoot.appendChild(renderMenuSection(section));
        renderCategoryNav();
    };

    const updateStoryToggle = () => {
        if (!story || !storyToggle) {
            return;
        }

        const expanded = story.classList.contains("is-expanded");
        storyToggle.setAttribute("aria-expanded", String(expanded));
        storyToggle.textContent = expanded ? translate("interface.readLess") : translate("interface.readMore");
    };

    const initStory = () => {
        if (!story || !storyToggle) {
            return;
        }

        storyToggle.addEventListener("click", () => {
            story.classList.toggle("is-expanded");
            updateStoryToggle();
        });
    };

    const initBackToTop = () => {
        if (!backToTop) {
            return;
        }

        const toggleBackToTop = () => {
            backToTop.classList.toggle("is-visible", window.scrollY > 520);
        };

        window.addEventListener("scroll", toggleBackToTop, { passive: true });
        toggleBackToTop();

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
        });
    };

    const initReservationForm = () => {
        if (!reservationForm || !reservationStatus) {
            return;
        }

        reservationForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const targetEmail = (reservationForm.dataset.emailTarget || "").trim();
            const data = new FormData(reservationForm);
            const values = Object.fromEntries(data.entries());

            if (!targetEmail) {
                reservationStatus.textContent = translate("interface.reservationPending");
                reservationStatus.classList.add("is-visible");
                return;
            }

            const subject = `Solicitud de reserva - ${values.nombre || "Cliente"}`;
            const body = [
                `Nombre: ${values.nombre}`,
                `Telefono: ${values.telefono}`,
                `Personas: ${values.personas}`,
                `Fecha: ${values.fecha}`,
                `Hora: ${values.hora}`,
                `Zona: ${values.zona}`
            ].join("\\n");
            window.location.href = `mailto:${encodeURIComponent(targetEmail)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    };

    const renderModalList = (root, title, items) => {
        root.replaceChildren();
        if (!items || !items.length) {
            return;
        }

        root.appendChild(createElement("h3", "", title));
        const list = createElement("ul", "");
        items.forEach((item) => {
            list.appendChild(createElement("li", "", item));
        });
        root.appendChild(list);
    };

    const renderCatalogList = (catalogId) => {
        if (!fishCatalogList) {
            return;
        }

        const catalog = catalogsById.get(catalogId);
        if (!catalog) {
            return;
        }

        activeCatalogItemId = null;
        fishCatalogList.className = "fish-catalog";
        fishCatalogList.replaceChildren();
        fishCatalogEyebrow && (fishCatalogEyebrow.textContent = translate(catalog.eyebrowKey || catalog.titleKey));
        fishCatalogTitle && (fishCatalogTitle.textContent = translate(catalog.titleKey));
        fishCatalogIntro && (fishCatalogIntro.textContent = translate(catalog.introKey));

        if (!catalog.items.length) {
            fishCatalogList.appendChild(createElement("p", "fish-catalog__empty", translate(catalog.emptyKey)));
            return;
        }

        catalog.items.forEach((item) => {
            const name = getCatalogItemName(item);
            const card = createElement("button", "fish-card", "");
            card.type = "button";
            card.dataset.catalogId = catalogId;
            card.dataset.catalogItemId = item.id;
            card.setAttribute("aria-label", translate(catalog.openItemKey, { name }));
            card.appendChild(createElement("span", "fish-card__title", name));

            const description = getCatalogItemDescription(item);
            if (description) {
                card.appendChild(createElement("span", "fish-card__description", description));
            }
            card.appendChild(createElement("span", "fish-card__action", translate(catalog.detailsActionKey)));
            fishCatalogList.appendChild(card);
        });
    };

    const renderCatalogDetail = (catalogId, itemId) => {
        if (!fishCatalogList) {
            return;
        }

        const catalog = catalogsById.get(catalogId);
        const item = catalog?.items.find((entry) => entry.id === itemId);
        if (!catalog || !item) {
            return;
        }

        activeCatalogItemId = item.id;
        fishCatalogList.className = "fish-detail";
        fishCatalogList.replaceChildren();

        const name = getCatalogItemName(item);
        const backButton = createElement("button", "button button--secondary fish-detail__back", translate("interface.backToCatalog"));
        backButton.type = "button";
        backButton.dataset.catalogBack = "true";
        fishCatalogList.appendChild(backButton);

        const heading = createElement("div", "fish-detail__heading", "");
        heading.appendChild(createElement("p", "section-kicker", translate(catalog.eyebrowKey || catalog.titleKey)));
        heading.appendChild(createElement("h2", "", name));
        const description = getCatalogItemDescription(item);
        if (description) {
            heading.appendChild(createElement("p", "", description));
        }
        fishCatalogList.appendChild(heading);

        const images = createElement("div", "fish-detail__images", "");
        const imageBlocks = [{ src: item.image, label: translate(catalog.imageLabelKey) }];
        if (catalog.showPlate) {
            imageBlocks.push({ src: item.plateImage, label: translate(catalog.plateImageLabelKey) });
        }

        imageBlocks.forEach(({ src, label }) => {
            const block = createElement("figure", "fish-detail__image-card", "");
            const image = createElement("img", "", "");
            image.src = src || "assets/img/platos/placeholder-plato.svg";
            image.alt = src ? `${label}: ${name}` : translate("interface.pendingImageOf", { name });
            image.loading = "lazy";
            image.onerror = () => {
                image.src = "assets/img/platos/placeholder-plato.svg";
            };
            block.appendChild(image);
            block.appendChild(createElement("figcaption", "", label));
            images.appendChild(block);
        });
        fishCatalogList.appendChild(images);

        const ingredients = getCatalogItemIngredients(item);
        if (ingredients.length) {
            const ingredientsBlock = createElement("div", "fish-detail__ingredients", "");
            ingredientsBlock.appendChild(createElement("h3", "", translate("interface.ingredients")));
            const list = createElement("ul", "");
            ingredients.forEach((ingredient) => list.appendChild(createElement("li", "", ingredient)));
            ingredientsBlock.appendChild(list);
            fishCatalogList.appendChild(ingredientsBlock);
        }
    };

    const trapFocus = (event) => {
        if (event.key === "Escape") {
            closeModal();
            return;
        }

        const activeDialog = activeOverlay === "catalog" ? fishCatalogDialog : modalDialog;
        if (event.key !== "Tab" || !activeDialog) {
            return;
        }

        const focusable = activeDialog.querySelectorAll("a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex='-1'])");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) {
            event.preventDefault();
            return;
        }

        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    function closeModal() {
        if (activeOverlay === "catalog") {
            closeCatalog();
            return;
        }

        if (!modal) {
            return;
        }

        modal.hidden = true;
        activeModalProductId = null;
        activeOverlay = null;
        document.body.classList.remove("modal-open");
        document.removeEventListener("keydown", trapFocus);

        if (lastFocusedElement && document.contains(lastFocusedElement)) {
            lastFocusedElement.focus();
        }
    }

    const updateModalContent = (product) => {
        if (!modal) {
            return;
        }

        const name = getProductName(product);
        const image = product.image || "assets/img/platos/placeholder-plato.svg";
        modalImage.onerror = () => {
            if (product.imageFallback && modalImage.src.indexOf(product.imageFallback) === -1) {
                modalImage.src = product.imageFallback;
            }
        };
        modalImage.src = image;
        modalImage.alt = product.image ? translate("interface.photoOf", { name }) : translate("interface.pendingImageOf", { name });
        modal.querySelector(".modal__content .section-kicker").textContent = translate(product.modalEyebrowKey || "interface.modalEyebrow");
        modalTitle.textContent = name;
        modalPrice.textContent = getPriceText(product);
        modalDescription.textContent = getProductDescription(product);

        modalLongDescription.replaceChildren();
        if (product.longDescriptionKey) {
            const longDescription = translate(product.longDescriptionKey);
            if (longDescription) {
                modalLongDescription.appendChild(createElement("p", "", longDescription));
            }
        }

        const ingredients = product.ingredientsKey ? translate(product.ingredientsKey) : [];
        const allergens = product.allergensKey ? translate(product.allergensKey) : [];
        renderModalList(modalIngredients, translate("interface.ingredients"), Array.isArray(ingredients) ? ingredients : []);
        renderModalList(modalAllergens, translate("interface.allergens"), Array.isArray(allergens) ? allergens : []);
        const modalCloseIcon = modal.querySelector(".modal__close");
        const modalCloseButton = modal.querySelector("[data-modal-close].button");
        modalCloseIcon?.setAttribute("aria-label", translate("interface.closeDish"));
        if (modalCloseButton) {
            modalCloseButton.textContent = translate("interface.close");
        }
        const catalogCloseIcon = fishCatalogModal?.querySelector(".modal__close");
        catalogCloseIcon?.setAttribute("aria-label", translate("interface.closeCatalog"));
        const fishModalCloseIcon = fishCatalogModal?.querySelector(".modal__close");
        fishModalCloseIcon?.setAttribute("aria-label", translate("interface.closeCatalog"));
    };

    const openModal = (product, trigger) => {
        lastFocusedElement = trigger;
        activeModalProductId = product.id;
        activeOverlay = "dish";
        updateModalContent(product);

        modal.hidden = false;
        document.body.classList.add("modal-open");
        document.addEventListener("keydown", trapFocus);
        modalDialog.focus();
    };

    const openCatalog = (catalogId, trigger) => {
        if (!fishCatalogModal || !fishCatalogDialog || !fishCatalogList) {
            return;
        }

        lastFocusedElement = trigger;
        activeCatalogId = catalogId;
        activeCatalogItemId = null;
        activeOverlay = "catalog";
        renderCatalogList(catalogId);
        fishCatalogModal.hidden = false;
        document.body.classList.add("modal-open");
        document.addEventListener("keydown", trapFocus);
        fishCatalogDialog.focus();
    };

    function closeCatalog() {
        if (!fishCatalogModal) {
            return;
        }

        fishCatalogModal.hidden = true;
        activeCatalogId = null;
        activeCatalogItemId = null;
        activeOverlay = null;
        document.body.classList.remove("modal-open");
        document.removeEventListener("keydown", trapFocus);

        if (lastFocusedElement && document.contains(lastFocusedElement)) {
            lastFocusedElement.focus();
        }
    }

    const initModal = () => {
        if (!menuSectionsRoot || (!modal && !fishCatalogModal)) {
            return;
        }

        menuSectionsRoot.addEventListener("click", (event) => {
            const trigger = event.target.closest("[data-product-id]");
            if (!trigger || !menuSectionsRoot.contains(trigger)) {
                return;
            }

            const product = productsById.get(trigger.dataset.productId);
            if (product && (product.catalogKey || product.fishCatalog)) {
                openCatalog(product.catalogKey || "fish", trigger);
            } else if (product && product.interactive && modal) {
                openModal(product, trigger);
            }
        });

        modal?.addEventListener("click", (event) => {
            if (event.target.closest("[data-modal-close]")) {
                closeModal();
            }
        });

        fishCatalogModal?.addEventListener("click", (event) => {
            if (event.target.closest("[data-modal-close]")) {
                closeModal();
                return;
            }

            if (event.target.closest("[data-catalog-back]")) {
                renderCatalogList(activeCatalogId);
                fishCatalogDialog?.focus();
                return;
            }

            const catalogTrigger = event.target.closest("[data-catalog-item-id]");
            if (catalogTrigger) {
                const catalogId = catalogTrigger.dataset.catalogId;
                const itemId = catalogTrigger.dataset.catalogItemId;
                if (catalogId && itemId) {
                    activeCatalogId = catalogId;
                    renderCatalogDetail(catalogId, itemId);
                    fishCatalogDialog?.focus();
                }
            }
        });
    };

    const closeLanguageMenu = () => {
        languageSelector?.classList.remove("is-open");
        languageToggle?.setAttribute("aria-expanded", "false");
    };

    const toggleLanguageMenu = () => {
        const open = !languageSelector.classList.contains("is-open");
        languageSelector.classList.toggle("is-open", open);
        languageToggle.setAttribute("aria-expanded", String(open));
    };

    const renderLanguageControls = () => {
        if (!languagePanel || !languageToggle) {
            return;
        }

        languagePanel.replaceChildren();
        languagePanel.setAttribute("aria-label", translate("interface.languageMenu"));
        languageToggle.setAttribute("aria-label", translate("interface.languageToggle"));
        languageToggle.setAttribute("aria-controls", "languagePanel");
        languageToggle.querySelector(".language-toggle__label").textContent = translate("interface.language");
        languageToggle.querySelector(".language-toggle__code").textContent = translate(`languages.${activeLanguage}.short`);

        supportedLanguages.forEach((language) => {
            const isActive = language === activeLanguage;
            const button = createElement("button", "language-option", "");
            button.type = "button";
            button.dataset.language = language;
            button.setAttribute("aria-label", translate(`languages.${language}.aria`));
            button.setAttribute("aria-pressed", String(isActive));
            if (isActive) {
                button.classList.add("is-active");
                button.setAttribute("aria-current", "true");
            }

            const marker = createElement("span", "language-option__marker", isActive ? "✓" : "");
            marker.setAttribute("aria-hidden", "true");
            button.appendChild(marker);
            button.appendChild(createElement("span", "language-option__code", translate(`languages.${language}.short`)));
            button.appendChild(createElement("span", "language-option__name", translate(`languages.${language}.label`)));
            languagePanel.appendChild(button);
        });
    };

    const setLanguage = (language, announce = true) => {
        if (!supportedLanguages.includes(language)) {
            return;
        }

        const scrollTop = window.scrollY;
        activeLanguage = language;
        storeLanguage(language);
        applyLanguage(scrollTop);
        closeLanguageMenu();

        if (announce && languageLive) {
            languageLive.textContent = translate(`languages.${language}.changed`, {}, language);
        }
    };

    const initLanguageSelector = () => {
        if (!languageSelector || !languageToggle || !languagePanel) {
            return;
        }

        languageToggle.addEventListener("click", () => {
            toggleLanguageMenu();
        });

        languagePanel.addEventListener("click", (event) => {
            const button = event.target.closest("[data-language]");
            if (!button) {
                return;
            }
            const selectedLanguage = button.dataset.language;
            setLanguage(selectedLanguage);
            const activeButton = languagePanel.querySelector(`[data-language="${selectedLanguage}"]`);
            if (window.matchMedia("(max-width: 759px)").matches) {
                languageToggle.focus();
            } else if (activeButton) {
                activeButton.focus();
            }
        });

        document.addEventListener("click", (event) => {
            if (!languageSelector.contains(event.target)) {
                closeLanguageMenu();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeLanguageMenu();
            }
        });
    };

    const updateStaticText = () => {
        document.documentElement.lang = activeLanguage;

        const currentSection = getSection();
        const currentCategory = pageType === "category" ? translate(currentSection.categoryKey) : null;
        document.title = currentCategory ? `${currentCategory.title || currentCategory.nav} · ${translate("meta.title")}` : translate("meta.title");

        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", translate("meta.description"));
        }

        document.querySelector(".skip-link").textContent = translate("interface.skipToMenu");
        document.querySelector(".hero__logo").alt = translate("hero.logoAlt");
        document.querySelector(".hero__eyebrow").textContent = translate("hero.location");
        document.querySelector(".hero h1").textContent = translate("hero.brand");
        document.querySelector(".hero__kicker").textContent = currentCategory ? (currentCategory.title || currentCategory.nav) : translate("interface.menu");
        document.querySelector(".hero__tagline").textContent = translate("hero.tagline");
        document.querySelector(".hero__actions").setAttribute("aria-label", translate("interface.mainActionsLabel"));

        const primaryHeroButton = document.querySelector(".hero__actions .button--primary");
        const secondaryHeroButton = document.querySelector(".hero__actions .button--secondary");
        const reservationHeroButton = document.querySelector(".hero__actions .button--reservation");
        if (pageType === "home") {
            primaryHeroButton.textContent = translate("interface.viewMenu");
            secondaryHeroButton.textContent = translate("interface.storyLink");
        } else {
            primaryHeroButton.textContent = translate("interface.backHome");
            secondaryHeroButton.textContent = translate("interface.viewMenu");
        }

        if (reservationHeroButton) {
            reservationHeroButton.textContent = translate("interface.reservations");
        }
        if (pageType === "reservation") {
            document.querySelector(".hero__kicker").textContent = translate("interface.reservations");
            document.querySelector(".hero__tagline").textContent = translate("interface.reservationTagline");
        }
        document.querySelector(".category-nav")?.setAttribute("aria-label", translate("interface.navAria"));

        if (story && storyBody) {
            document.querySelector(".story .section-kicker").textContent = translate("story.kicker");
            document.querySelector("#historia-title").textContent = translate("story.title");
            storyBody.replaceChildren();
            translate("story.paragraphs").forEach((paragraph) => {
                storyBody.appendChild(createElement("p", "", paragraph));
            });
            updateStoryToggle();
        }

        const menuKicker = document.querySelector(".menu__intro .section-kicker");
        const menuTitle = document.querySelector("#carta-title");
        const menuText = document.querySelector(".menu__intro p:last-child");
        if (menuKicker) {
            menuKicker.textContent = translate("interface.menu");
        }
        if (menuTitle) {
            menuTitle.textContent = currentCategory ? (currentCategory.title || currentCategory.nav) : translate("interface.chooseMenuTitle");
        }
        if (menuText) {
            menuText.textContent = currentCategory ? translate("interface.categoryPageIntro") : translate("interface.chooseMenuText");
        }

        document.querySelector("#other-sections-kicker") && (document.querySelector("#other-sections-kicker").textContent = translate("interface.menu"));
        document.querySelector("#other-sections-title") && (document.querySelector("#other-sections-title").textContent = translate("interface.otherSections"));

        const footerLogo = document.querySelector(".site-footer img");
        const footerBrand = document.querySelector(".site-footer__brand");
        if (footerLogo) {
            footerLogo.alt = translate("footer.logoAlt");
        }
        if (footerBrand) {
            footerBrand.textContent = translate("footer.brand");
        }
        const footerParagraphs = document.querySelectorAll(".site-footer p");
        if (footerParagraphs[1]) {
            footerParagraphs[1].textContent = translate("footer.slogan");
        }
        if (footerParagraphs[2]) {
            footerParagraphs[2].textContent = translate("footer.changes");
        }
        if (footerParagraphs[3]) {
            footerParagraphs[3].textContent = translate("footer.allergens");
        }

        backToTop?.setAttribute("aria-label", translate("interface.backToTop"));
        const modalCloseIcon = modal?.querySelector(".modal__close");
        const modalCloseButton = modal?.querySelector("[data-modal-close].button");
        modalCloseIcon?.setAttribute("aria-label", translate("interface.closeDish"));
        if (modalCloseButton) {
            modalCloseButton.textContent = translate("interface.close");
        }
    };

    const applyLanguage = (preserveScrollTop = null) => {
        updateStaticText();
        renderLanguageControls();
        renderCurrentCategory();
        renderCategoryChooser();

        if (activeModalProductId && modal && !modal.hidden) {
            const product = productsById.get(activeModalProductId);
            if (product) {
                updateModalContent(product);
            }
        }

        if (activeOverlay === "catalog" && fishCatalogModal && !fishCatalogModal.hidden) {
            if (activeCatalogId && activeCatalogItemId) {
                renderCatalogDetail(activeCatalogId, activeCatalogItemId);
            } else {
                renderCatalogList(activeCatalogId);
            }
        }

        if (typeof preserveScrollTop === "number") {
            requestAnimationFrame(() => {
                window.scrollTo({ top: preserveScrollTop, behavior: "auto" });
            });
        }
    };

    const registerServiceWorker = () => {
        if (!("serviceWorker" in navigator) || window.location.protocol === "file:") {
            return;
        }

        window.addEventListener("load", () => {
            navigator.serviceWorker.register("service-worker.js").catch(() => {
                /* La carta sigue funcionando aunque el navegador no permita registrar la PWA. */
            });
        });
    };

    initStory();
    initBackToTop();
    initReservationForm();
    initModal();
    initLanguageSelector();
    applyLanguage();
    registerServiceWorker();
})();
