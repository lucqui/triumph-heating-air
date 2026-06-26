(function () {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxClose = document.querySelector("[data-lightbox-close]");
  const languageButtons = document.querySelectorAll("[data-lang-switch]");
  const languageStorageKey = "triumph-language-choice";

  const translations = {
    en: {
      pageTitle: "Triumph Heating & Air | HVAC Contractor in Northern Utah",
      metaDescription: "Triumph Heating & Air provides HVAC installation, ductwork, maintenance, and indoor air quality service for homes in Davis County, Weber County, Salt Lake County, Layton, and nearby Utah communities.",
      skip: "Skip to content",
      nav_services: "Services",
      nav_work: "Work",
      nav_why: "Why Triumph",
      nav_contact: "Contact",
      hero_eyebrow: "Licensed and insured HVAC service in Northern Utah",
      hero_title: "Clean installs.|Steady comfort.|Easy to reach.",
      hero_copy: "Triumph Heating & Air is a local, family-oriented HVAC company serving Davis County, Weber County, Salt Lake County, Layton, and nearby communities.",
      call_or_text: "Call or text",
      free_estimate: "Free estimate",
      proof_rating: "Google rating",
      proof_reviews: "Google reviews",
      proof_local: "Family oriented",
      intro_copy: "From new ductless systems to seasonal maintenance, Triumph focuses on practical recommendations, careful workmanship, and cleaner air inside the home.",
      second_opinion_cta: "Request a second opinion",
      services_eyebrow: "What we handle",
      services_title: "Residential comfort without the runaround.",
      services_copy: "Clear scopes, tidy installs, and maintenance that catches small issues before the weather turns them into big ones.",
      service_ac_title: "Air conditioning",
      service_ac_copy: "AC installs, repairs, tune-ups, and cooling upgrades for Utah summer heat.",
      service_heating_title: "Heating",
      service_heating_copy: "Heating system maintenance, diagnostics, replacements, and winter readiness.",
      service_duct_title: "Ductwork",
      service_duct_copy: "Thoughtful duct runs, airflow fixes, and cleaner-looking mechanical work.",
      service_air_title: "Indoor air quality",
      service_air_copy: "Home air comfort help from filters and ventilation to whole-home system planning.",
      service_maintenance_title: "Maintenance",
      service_maintenance_copy: "Seasonal checkups that protect efficiency, performance, and equipment life.",
      service_second_title: "Second opinions",
      service_second_copy: "Straight answers before you commit to a major repair or replacement.",
      work_eyebrow: "Recent work",
      work_title: "Real installs, real homes.",
      work_copy: "A quick look across exterior equipment, line routing, rooftop service, and mechanical troubleshooting from our public project photos.",
      feature_eyebrow: "Install details",
      feature_title: "Equipment set cleanly, connected carefully, and left ready to service.",
      feature_copy: "The best HVAC work should still look organized after our crew leaves. Our project photos show exterior equipment, mechanical access, line routing, and maintenance details across different jobs.",
      feature_check_1: "Clean condenser placement",
      feature_check_2: "Service-ready mechanical access",
      feature_check_3: "Thoughtful line and electrical routing",
      why_eyebrow: "Why Triumph",
      why_title: "Small-business care, professional-grade work.",
      why_copy: "Homeowners get direct communication, clear recommendations, and a team focused on long-term comfort instead of quick pressure.",
      why_1_title: "Responsive communication",
      why_1_copy: "Call, text, email, or message the Facebook page to get the conversation moving.",
      why_2_title: "Practical solutions",
      why_2_copy: "Repairs, maintenance, ductwork, and installs are scoped around the home, not a script.",
      why_3_title: "Clean install details",
      why_3_copy: "Visible equipment, line covers, and ductwork are treated like part of the home.",
      area_eyebrow: "Service area",
      area_title: "Serving Layton and nearby Northern Utah communities.",
      nearby_cities: "Nearby cities",
      contact_eyebrow: "Book a visit",
      contact_title: "Need AC help, a maintenance visit, or a second opinion?",
      contact_copy: "Send a few details about the home, the system, and what is happening. Triumph can follow up with next steps and a clear estimate.",
      email_label: "Email",
      facebook_message: "Message Triumph Heating & Air",
      request_estimate: "Request a free estimate",
      footer_copy: "Local HVAC service for cleaner air, better comfort, and reliable home systems.",
      areas_label: "Areas"
    },
    es: {
      pageTitle: "Triumph Heating & Air | Contratista HVAC en el norte de Utah",
      metaDescription: "Triumph Heating & Air ofrece instalación HVAC, ductos, mantenimiento y soluciones de calidad del aire para hogares en Davis County, Weber County, Salt Lake County, Layton y comunidades cercanas.",
      skip: "Saltar al contenido",
      nav_services: "Servicios",
      nav_work: "Trabajos",
      nav_why: "Por qué Triumph",
      nav_contact: "Contacto",
      hero_eyebrow: "Servicio HVAC con licencia y seguro en el norte de Utah",
      hero_title: "Instalaciones limpias.|Comodidad constante.|Fácil de contactar.",
      hero_copy: "Triumph Heating & Air es una compañía HVAC local y familiar que sirve a Davis County, Weber County, Salt Lake County, Layton y comunidades cercanas.",
      call_or_text: "Llame o mande texto",
      free_estimate: "Estimado gratis",
      proof_rating: "Calificación en Google",
      proof_reviews: "Reseñas en Google",
      proof_local: "Enfoque familiar",
      intro_copy: "Desde nuevos sistemas sin ductos hasta mantenimiento de temporada, Triumph se enfoca en recomendaciones prácticas, trabajo cuidadoso y aire más limpio dentro del hogar.",
      second_opinion_cta: "Pida una segunda opinión",
      services_eyebrow: "Lo que hacemos",
      services_title: "Comodidad residencial sin vueltas.",
      services_copy: "Alcances claros, instalaciones ordenadas y mantenimiento que detecta problemas pequeños antes de que el clima los convierta en problemas grandes.",
      service_ac_title: "Aire acondicionado",
      service_ac_copy: "Instalaciones, reparaciones, afinaciones y mejoras de enfriamiento para el calor del verano en Utah.",
      service_heating_title: "Calefacción",
      service_heating_copy: "Mantenimiento, diagnóstico, reemplazo y preparación de sistemas de calefacción para el invierno.",
      service_duct_title: "Ductos",
      service_duct_copy: "Instalación de ductos, mejoras de flujo de aire y trabajo mecánico más limpio.",
      service_air_title: "Calidad del aire interior",
      service_air_copy: "Ayuda para mejorar la comodidad del hogar, desde filtros y ventilación hasta planificación de sistemas completos.",
      service_maintenance_title: "Mantenimiento",
      service_maintenance_copy: "Revisiones de temporada que protegen la eficiencia, el rendimiento y la vida del equipo.",
      service_second_title: "Segundas opiniones",
      service_second_copy: "Respuestas claras antes de comprometerse con una reparación o reemplazo importante.",
      work_eyebrow: "Trabajos recientes",
      work_title: "Instalaciones reales, hogares reales.",
      work_copy: "Una mirada rápida a equipos exteriores, líneas, servicio en techo y diagnóstico mecánico de nuestras fotos públicas de proyectos.",
      feature_eyebrow: "Detalles de instalación",
      feature_title: "Equipo colocado limpiamente, conectado con cuidado y listo para recibir servicio.",
      feature_copy: "El mejor trabajo HVAC debe seguir viéndose organizado después de que nuestro equipo se va. Nuestras fotos muestran equipos exteriores, acceso mecánico, líneas y detalles de mantenimiento en diferentes trabajos.",
      feature_check_1: "Ubicación limpia del condensador",
      feature_check_2: "Acceso mecánico listo para servicio",
      feature_check_3: "Rutas cuidadosas para líneas y electricidad",
      why_eyebrow: "Por qué Triumph",
      why_title: "Atención de negocio pequeño, trabajo profesional.",
      why_copy: "Los dueños de casa reciben comunicación directa, recomendaciones claras y un equipo enfocado en comodidad a largo plazo, no en presión rápida.",
      why_1_title: "Comunicación rápida",
      why_1_copy: "Llame, mande texto, envíe email o escriba por Facebook para empezar la conversación.",
      why_2_title: "Soluciones prácticas",
      why_2_copy: "Reparaciones, mantenimiento, ductos e instalaciones se planean alrededor del hogar, no con un libreto.",
      why_3_title: "Detalles limpios",
      why_3_copy: "El equipo visible, las cubiertas de líneas y los ductos se tratan como parte del hogar.",
      area_eyebrow: "Área de servicio",
      area_title: "Sirviendo a Layton y comunidades cercanas del norte de Utah.",
      nearby_cities: "Ciudades cercanas",
      contact_eyebrow: "Agende una visita",
      contact_title: "¿Necesita ayuda con AC, mantenimiento o una segunda opinión?",
      contact_copy: "Envíe algunos detalles sobre la casa, el sistema y lo que está pasando. Triumph puede responder con los próximos pasos y un estimado claro.",
      email_label: "Email",
      facebook_message: "Mensaje a Triumph Heating & Air",
      request_estimate: "Pida un estimado gratis",
      footer_copy: "Servicio HVAC local para aire más limpio, mejor comodidad y sistemas confiables en el hogar.",
      areas_label: "Áreas"
    }
  };

  function getSavedLanguage() {
    try {
      return window.localStorage.getItem(languageStorageKey);
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      window.localStorage.setItem(languageStorageKey, language);
    } catch (error) {
      return;
    }
  }

  function getBrowserLanguage() {
    const languages = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || "en"];
    return languages.some((language) => language.toLowerCase().startsWith("es")) ? "es" : "en";
  }

  function applyLanguage(language, shouldSave) {
    const activeLanguage = translations[language] ? language : "en";
    const dictionary = translations[activeLanguage];
    document.documentElement.lang = activeLanguage;
    document.title = dictionary.pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute("content", dictionary.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (!dictionary[key]) return;

      if (element.hasAttribute("data-i18n-lines")) {
        element.setAttribute("aria-label", dictionary[key].replaceAll("|", " "));
        const lines = dictionary[key].split("|").map((line) => {
          const span = document.createElement("span");
          span.textContent = line;
          return span;
        });
        element.replaceChildren(...lines);
        return;
      }

      element.textContent = dictionary[key];
    });

    languageButtons.forEach((button) => {
      const isActive = button.getAttribute("data-lang-switch") === activeLanguage;
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (shouldSave) saveLanguage(activeLanguage);
  }

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 16);
  }

  function closeMenu() {
    if (!menuToggle || !nav) return;
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!menuToggle || !nav) return;
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  }

  function openLightbox(src) {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = src;
    lightbox.hidden = false;
    document.body.classList.add("menu-open");
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImage) return;
    lightbox.hidden = true;
    lightboxImage.src = "";
    document.body.classList.remove("menu-open");
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();

  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang-switch"), true);
      closeMenu();
    });
  });

  document.querySelectorAll("[data-nav] a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.querySelectorAll("[data-gallery]").forEach((item) => {
    item.addEventListener("click", () => openLightbox(item.getAttribute("data-gallery")));
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      closeLightbox();
    }
  });

  window.addEventListener("load", () => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  applyLanguage(getSavedLanguage() || getBrowserLanguage(), false);
})();
