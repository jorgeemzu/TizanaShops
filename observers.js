const fader = document.querySelectorAll(".fader");

const faderOptions = {
  threshold: 0.5,
  rootMargin: "0px 0px 50px 0px",
};

const fadeIn = new IntersectionObserver((entries, fadeIn) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("fade-in");
      fadeIn.unobserve(entry.target);
    }
  });
}, faderOptions);

fader.forEach((fade) => {
  fadeIn.observe(fade);
});
