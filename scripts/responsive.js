hamburger.addEventListener("click", () => {
  //Animate Links
  // navbar.classList.toggle("wide");
  navLinks.classList.toggle("open-home");
  links.forEach((link) => {
    link.classList.toggle("fade-home");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle-home");
});
// about navbar responsive
hamburgerAbout.addEventListener("click", () => {
  //Animate Links
  // navbar.classList.toggle("wide");
  navLinksAbout.classList.toggle("open-about");
  linksAbout.forEach((link) => {
    link.classList.toggle("fade-about");
  });

  //Hamburger Animation
  hamburgerAbout.classList.toggle("toggle-about");
});

//scroll trigger orientation

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("show");
      entry.target.classList.remove("active");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
const hideElements = document.querySelectorAll(
  `.about .about-me-text-h2, 
  .about .reveal-text-first,
   .ren-image-child, 
   .about .reveal-text-first-paragraph,
    .about .reveal-text-second,
     .about .reveal-text-second-paragraph,
      .skills-header,
      .projects-header h2`
);
hiddenElements.forEach((e) => observer.observe(e));
hideElements.forEach((e) => observer.observe(e));
