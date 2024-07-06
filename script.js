document.getElementById('menu-icon').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
'use strict';



/**
 * navbar toggle
 */


const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");

    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById('member-counter');
    let count = 0;
    const targetCount = 131;
    const duration = 2000;
    const intervalTime = duration / targetCount;

    const counter = setInterval(() => {
        count++;
        counterElement.textContent = count;
        updateColor();
        if (count >= targetCount) {
            clearInterval(counter);
            counterElement.classList.add("blast");
        }
    }, 50);
});

function updateColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById('member-counter').style.color = randomColor;
}

let count = 0;
const counterElement = document.getElementById('member-counter');

document.addEventListener("DOMContentLoaded", function() {
    const memberCount = document.getElementById("member-counter");
    const count = 131; // Set your count here

    if (parseInt(memberCount.textContent) === count) {
        memberCount.classList.add("blast");
    }
});
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1200, // Animation duration
        easing: 'ease-in-out', // Easing function
        once: true, // Whether animation should happen only once - while scrolling down
        mirror: false // Whether elements should animate out while scrolling past them
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });
});


/**
 * header & go-top-btn active
 * when window scroll down to 400px
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 400) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});
