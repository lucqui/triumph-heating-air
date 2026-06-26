(function () {
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const lightbox = document.querySelector("[data-lightbox]");
  const lightboxImage = document.querySelector("[data-lightbox-image]");
  const lightboxClose = document.querySelector("[data-lightbox-close]");

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
})();
