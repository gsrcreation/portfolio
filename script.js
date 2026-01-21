// ================= IDENTITY SECTION ANIMATION =================

const identitySection = document.querySelector(".identity");
const logoBox = document.querySelector(".logo-box");
const paragraphs = document.querySelectorAll(".text-box p");

const identityObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        setTimeout(() => {
          logoBox.classList.add("logo-show");
        }, 300);

        setTimeout(() => {
          logoBox.classList.add("logo-left");
        }, 1600);

        paragraphs.forEach((para, index) => {
          setTimeout(() => {
            para.classList.add("show");
          }, 2200 + index * 700);
        });

        identityObserver.unobserve(identitySection);
      }
    });
  },
  { threshold: 0.3 }
);

identityObserver.observe(identitySection);


// ================= WORK CARDS ANIMATION =================

const workCards = document.querySelectorAll(".card");

const showWorkCards = () => {
  workCards.forEach((card, index) => {
    if (card.classList.contains("show")) return;

    const rect = card.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.8;

    if (rect.top < triggerPoint) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 600);
    }
  });
};

window.addEventListener("scroll", showWorkCards);
showWorkCards();


// ================= SKILLS ANIMATION =================

const skillItems = document.querySelectorAll(".skills li");

const showSkills = () => {
  skillItems.forEach((item, index) => {
    if (item.classList.contains("show")) return;

    const rect = item.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.6;

    if (rect.top < triggerPoint) {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 400);
    }
  });
};

window.addEventListener("scroll", showSkills);
showSkills();


// ================= HERO + NAME TAG (SINGLE LOAD EVENT) =================

window.addEventListener("load", () => {
  const heroText = document.querySelector(".hero-text");
  const heroImage = document.querySelector(".hero-image");
  const nameTag = document.querySelector(".name-tag");

  setTimeout(() => {
    heroText.classList.add("move-left");
  }, 600);

  setTimeout(() => {
    heroImage.classList.add("show");
  }, 900);

  setTimeout(() => {
    nameTag.classList.add("show");
  }, 1200);
});

// ================= CURSOR GLOW =================

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && window.matchMedia("(hover: hover)").matches) {
  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  const animateGlow = () => {
    currentX += (mouseX - currentX) * 0.08;
    currentY += (mouseY - currentY) * 0.08;

    cursorGlow.style.left = `${currentX}px`;
    cursorGlow.style.top = `${currentY}px`;

    requestAnimationFrame(animateGlow);
  };

  animateGlow();
}
