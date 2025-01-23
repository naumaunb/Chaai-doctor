let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');

}


// Sticky Navigation Bar Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    } else {
    navbar.classList.remove("scrolled");
    }
});

  // Smooth Scroll Animation for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
    preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        });
    });
});

  // Responsive Image Gallery with Lightbox
document.querySelectorAll(".gallery img").forEach(image => {
    image.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modal img");
    modal.style.display = "flex";
    modalImg.src = image.src;
    });
});

document.querySelector(".modal").addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
});

  // Scroll Reveal Animations
const revealElements = document.querySelectorAll(".reveal");
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
    const revealTop = el.getBoundingClientRect().top;
    if (revealTop < windowHeight - 100) {
        el.classList.add("visible");
    } else {
        el.classList.remove("visible");
    }
    });
};

window.addEventListener("scroll", revealOnScroll);

  // Responsive Navigation Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});