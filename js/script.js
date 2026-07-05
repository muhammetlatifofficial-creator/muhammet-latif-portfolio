const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");

const closeBtn = document.querySelector(".popup-close");
const prevBtn = document.querySelector(".popup-arrow.left");
const nextBtn = document.querySelector(".popup-arrow.right");

let currentImages = [];
let currentIndex = 0;

const galleries = {
    editorial: [
        "images/editorial1.jpg",
        "images/editorial2.jpg",
    ],

    commercial: [
        "images/commercial1.jpg",
        "images/commercial2.jpg",
    ],

    lifestyle: [
        "images/lifestyle1.jpg",
    ],

    portrait: [
        "images/portrait1.jpg",
    ],

    formal: [
        "images/formal1.jpg",
    ],

    runway: []
};

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        currentImages = galleries[card.dataset.gallery];

        currentIndex = 0;

        popupImage.src = currentImages[currentIndex];

        popup.classList.add("active");

        popupImage.onload = () => {

    popupImage.scrollIntoView({
        block: "center",
        inline: "center"
    });

};

        document.body.style.overflow = "hidden";

    });

});

nextBtn.onclick = () => {

    currentIndex++;

    if (currentIndex >= currentImages.length) {

        currentIndex = 0;

    }

    popupImage.src = currentImages[currentIndex];

};

prevBtn.onclick = () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = currentImages.length - 1;

    }

    popupImage.src = currentImages[currentIndex];

};

popup.onclick = (e) => {

    if (e.target === popup) {

        popup.classList.remove("active");

        document.body.style.overflow = "auto";

    }

};

/* ========================= */
/* ACTIVE NAVBAR */
/* ========================= */

const sections = document.querySelectorAll("header, section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});