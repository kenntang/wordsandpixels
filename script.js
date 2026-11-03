const cardTriggers = document.querySelectorAll(".card-trigger");

cardTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(panelId);
    const isOpening = trigger.getAttribute("aria-expanded") !== "true";

    trigger.setAttribute("aria-expanded", String(isOpening));
    panel.hidden = !isOpening;
    trigger.closest(".portfolio-card").classList.toggle("is-open", isOpening);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpening = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpening));
  menuToggle.setAttribute("aria-label", isOpening ? "close navigation" : "open navigation");
  mainNav.classList.toggle("is-open", isOpening);
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
    mainNav.classList.remove("is-open");
  });
});

document.getElementById("current-year").textContent = new Date().getFullYear();
