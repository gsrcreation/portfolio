const identitySection = document.querySelector(".identity");
const logoBox = document.querySelector(".logo-box");
const paragraphs = document.querySelectorAll(".text-box p");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {

        // Step 1: Logo zoom in (slow)
        setTimeout(() => {
          logoBox.classList.add("logo-show");
        }, 300);

        // Step 2: Logo move slightly left (after visible)
        setTimeout(() => {
          logoBox.classList.add("logo-left");
        }, 1600);

        // Step 3: Paragraphs one by one
        paragraphs.forEach((para, index) => {
          setTimeout(() => {
            para.classList.add("show");
          }, 2200 + index * 700);
        });

        observer.unobserve(identitySection); // run only once
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(identitySection);


  const workCards = document.querySelectorAll(".card");

  const showWorkCards = () => {
    workCards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardTriggerPoint = window.innerHeight * 0.8; // 👈 40% scroll logic
  
      if (rect.top < cardTriggerPoint) {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 600); // 👈 one-by-one delay thoda bada
      }
    });
  };
  
  window.addEventListener("scroll", showWorkCards);
  showWorkCards();
  

  const skillItems = document.querySelectorAll(".skills li");

const showSkills = () => {
  skillItems.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    const triggerPoint = window.innerHeight * 0.6; // 👈 40% logic

    if (rect.top < triggerPoint) {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 400); // 👈 one by one delay
    }
  });
};

window.addEventListener("scroll", showSkills);
showSkills();

window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");
  
    // Text fade + slide
    setTimeout(() => {
      heroText.classList.add("move-left");
    }, 600);
  
    // Image fade + slide (slightly after text)
    setTimeout(() => {
      heroImage.classList.add("show");
    }, 900);
  });

  window.addEventListener("load", () => {
    const nameTag = document.querySelector(".name-tag");
  
    setTimeout(() => {
      nameTag.classList.add("show");
    }, 1200); // 👈 image ke baad aaye
  });

