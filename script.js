// Scroll Reveal Animation

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop =
            element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// Mouse Parallax Effect

const yogaGirl =
    document.getElementById("floatingImage");

document.addEventListener(
    "mousemove",
    (e) => {

        const x =
            (window.innerWidth / 2 - e.pageX) / 40;

        const y =
            (window.innerHeight / 2 - e.pageY) / 40;

        yogaGirl.style.transform =
            `translate(${x}px, ${y}px)`;
    }
);

// Smooth Button Scroll

const startBtn =
    document.querySelector(".main-btn");

startBtn.addEventListener(
    "click",
    () => {

        document.querySelector("#types")
            .scrollIntoView({
                behavior: "smooth"
            });
    }
);

// Navbar Background Change on Scroll

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(10,10,25,0.8)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.2)";
        } else {

            navbar.style.background =
                "rgba(255,255,255,0.05)";

            navbar.style.boxShadow =
                "none";
        }
    }
);

// Card Hover Glow Effect

const cards =
    document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                card.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            card.style.background =
                `radial-gradient(
                    circle at ${x}px ${y}px,
                    rgba(0,212,255,0.25),
                    rgba(255,255,255,0.06)
                )`;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.background =
                "rgba(255,255,255,0.06)";
        }
    );
});

// Counter Animation

const counters =
    document.querySelectorAll(".stat-card h1");

let started = false;

function startCounter() {

    const statsSection =
        document.querySelector("#stats");

    const top =
        statsSection.getBoundingClientRect().top;

    if (
        top < window.innerHeight &&
        !started
    ) {

        counters.forEach((counter) => {

            const target =
                parseInt(counter.innerText);

            let count = 0;

            const updateCounter = () => {

                const increment =
                    target / 100;

                if (count < target) {

                    count += increment;

                    counter.innerText =
                        Math.ceil(count) + "+";

                    setTimeout(
                        updateCounter,
                        20
                    );

                } else {

                    counter.innerText =
                        target + "+";
                }
            };

            updateCounter();
        });

        started = true;
    }
}

window.addEventListener(
    "scroll",
    startCounter
);
