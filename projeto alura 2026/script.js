/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.innerHTML = isOpen
        ? '<i class="fas fa-xmark"></i>'
        : '<i class="fas fa-bars"></i>';

});


/* Fecha o menu ao clicar em um link */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});


/* =========================
   PAINEL DE ACESSIBILIDADE
========================= */

const accessibilityToggle =
    document.getElementById("accessibilityToggle");

const accessibilityMenu =
    document.getElementById("accessibilityMenu");


accessibilityToggle.addEventListener("click", () => {

    accessibilityMenu.classList.toggle("active");

});


/* =========================
   CONTROLE DE FONTE
========================= */

let currentFontSize = 16;

const increaseFont =
    document.getElementById("increaseFont");

const decreaseFont =
    document.getElementById("decreaseFont");

const resetAccessibility =
    document.getElementById("resetAccessibility");


increaseFont.addEventListener("click", () => {

    if (currentFontSize < 24) {

        currentFontSize += 2;

        document.documentElement.style
            .setProperty("--font-size", `${currentFontSize}px`);

    }

});


decreaseFont.addEventListener("click", () => {

    if (currentFontSize > 12) {

        currentFontSize -= 2;

        document.documentElement.style
            .setProperty("--font-size", `${currentFontSize}px`);

    }

});


/* =========================
   DARK MODE
========================= */

const darkMode =
    document.getElementById("darkMode");

darkMode.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const enabled =
        document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "darkMode",
        enabled
    );

});


/* Recupera preferência */

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark-mode");

}


/* =========================
   ALTO CONTRASTE
========================= */

const highContrast =
    document.getElementById("highContrast");

highContrast.addEventListener("click", () => {

    document.body.classList.toggle("high-contrast");

});


/* =========================
   RESTAURAR ACESSIBILIDADE
========================= */

resetAccessibility.addEventListener("click", () => {

    currentFontSize = 16;

    document.documentElement.style
        .setProperty("--font-size", "16px");

    document.body.classList.remove("dark-mode");

    document.body.classList.remove("high-contrast");

    localStorage.removeItem("darkMode");

});


/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const topButton =
    document.getElementById("topButton");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.classList.add("visible");

    } else {

        topButton.classList.remove("visible");

    }

});


topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   ANIMAÇÃO AO APARECER
========================= */

const animatedElements = document.querySelectorAll(
    ".feature-card, .technology-card, .benefit, .timeline-item, .sustainability-item"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================
   NAVEGAÇÃO POR TECLADO
========================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        accessibilityMenu.classList.remove("active");

        mainNav.classList.remove("active");

    }

});
