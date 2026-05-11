const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#nav");

/* ========================= */
/* BACK TO TOP */
/* ========================= */

const toTopBtn =
  document.getElementById("toTopBtn");

if (toTopBtn) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

      toTopBtn.classList.add("visible");

    } else {

      toTopBtn.classList.remove("visible");
    }

  });

  toTopBtn.addEventListener("click", () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth"
    });

  });

}

/* ========================= */
/* MOBILE MENU */
/* ========================= */

if (hamburger && nav) {

  hamburger.addEventListener("click", () => {

    nav.classList.toggle("active");

  });

}

/* ========================= */
/* CLOSE MENU ON LINK CLICK */
/* ========================= */

const navLinks =
  document.querySelectorAll(".nav a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});

/* ========================= */
/* CINEMATIC PARALLAX */
/* ========================= */

const heroBg =
  document.querySelector(".hero-bg");

const finalBg =
  document.querySelector(".final-bg");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  if (heroBg) {

    heroBg.style.transform =
      `scale(1.03) translateY(${scrollY * 0.12}px)`;

  }

  if (finalBg) {

    finalBg.style.transform =
      `scale(1.04) translateY(${scrollY * 0.05}px)`;

  }

});

/* ========================= */
/* REVEALS */
/* ========================= */

const revealItems = document.querySelectorAll(
  `
  .statement-section,
  .process-card,
  .final-section,
  .still,
  .reality-copy,
  .reality-visual,
  .stories-image,
  .stories-copy,
  .belief-card,
  .industry-card,
  .journey-step,
  .reel-frame,
  .belief-manifesto-card
  `
);

const revealOnScroll = () => {

  revealItems.forEach((item) => {

    const rect =
      item.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.88) {

      item.classList.add("visible");

    }

  });

};

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();

/* ========================= */
/* FLOATING ATMOSPHERE */
/* ========================= */

const floatingItems =
  document.querySelectorAll(
    `
    .still img,
    .stories-image img,
    .industry-card img
    `
  );

window.addEventListener("mousemove", (e) => {

  const x =
    (e.clientX / window.innerWidth) - 0.5;

  const y =
    (e.clientY / window.innerHeight) - 0.5;

  floatingItems.forEach((item) => {

    item.style.transform =
      `
      scale(1.02)
      translate(
        ${x * 8}px,
        ${y * 8}px
      )
      `;

  });

});

/* ========================= */
/* CURSOR GLOW */
/* ========================= */

const glowCards =
  document.querySelectorAll(".glow-card");

glowCards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    card.style.setProperty(
      "--x",
      `${x}px`
    );

    card.style.setProperty(
      "--y",
      `${y}px`
    );

  });

});