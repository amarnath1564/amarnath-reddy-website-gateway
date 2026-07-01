/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* =====================================
   TYPING EFFECT
===================================== */

const roles = [
    "Developer",
    "Poet",
    "UI/UX Designer",
    "Creative Thinker",
    "Problem Solver"
];

const roleElement = document.querySelector(".hero h2");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (!deleting) {

        roleElement.textContent =
            currentRole.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        roleElement.textContent =
            currentRole.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 120);
}

typeEffect();

/* =====================================
   SCROLL REVEAL
===================================== */

const revealElements = document.querySelectorAll(
    "section, .project-card, .timeline-item, .skill"
);

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* =====================================
   ACTIVE NAVIGATION
===================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if (link.href.includes(current)) {

            link.classList.add("current");

        }

    });

});

/* =====================================
   NAVBAR SHADOW
===================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 25px 60px rgba(0,0,0,.45)";

    } else {

        navbar.style.boxShadow =
            "0 10px 40px rgba(0,0,0,.25)";
    }

});

/* =====================================
   PARALLAX BLOBS
===================================== */

const blobs = document.querySelectorAll(".blob");

window.addEventListener("mousemove", e => {

    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {

        const speed = (index + 1) * 20;

        blob.style.transform =
            `translate(${x * speed}px, ${y * speed}px)`;

    });

});

/* =====================================
   PROJECT CARD TILT
===================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -10;

        const rotateY =
            ((x / rect.width) - 0.5) * 10;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});

/* =====================================
   BUTTON RIPPLE
===================================== */

document.querySelectorAll(".primary-btn").forEach(button => {

    button.addEventListener("click", function(e) {

        const ripple = document.createElement("span");

        ripple.className = "ripple";

        const rect = this.getBoundingClientRect();

        ripple.style.left =
            `${e.clientX - rect.left}px`;

        ripple.style.top =
            `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* =====================================
   SCROLL TO TOP
===================================== */

const scrollTopBtn = document.createElement("button");

scrollTopBtn.innerHTML = "↑";

scrollTopBtn.className = "scroll-top";

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTopBtn.classList.add("visible");

    } else {

        scrollTopBtn.classList.remove("visible");

    }

});

scrollTopBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};