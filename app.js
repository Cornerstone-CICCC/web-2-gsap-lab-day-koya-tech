gsap.registerPlugin(ScrollTrigger);

gsap.from(".section1 .content h1 span:first-of-type", {
  x: -10000,
  opacity: 0,
  duration: 1,
});

gsap.from(".section1 .content h1 span:nth-of-type(2)", {
  x: 10000,
  opacity: 0,
  duration: 1,
});

gsap.from(".section1 .content p", {
  rotation: 90,
  transformOrigin: "left center",
  opacity: 0,
  duration: 1,
});

gsap.from(".section1 .content img", {
  y: 10000,
  opacity: 0,
  duration: 1,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    start: "top 20%",
    end: "bottom bottom",
    scrub: true,

    toggleActions: "restart none none none",
  },
});

tl2
  .from(".section2 h2 span:first-of-type", {
    y: -10000,
    opacity: 0,
    duration: 4,
  })
  .from(".section2 h2 span:nth-of-type(2)", {
    y: -10000,
    opacity: 0,
    duration: 4,
  })
  .from(".section2 p", {
    scaleX: 0,
    transformOrigin: "center center",
    opacity: 0,
    duration: 1,
  });

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section3",
    start: "top 20%",
    end: "bottom bottom",
    scrub: true,

    toggleActions: "restart none none none",
  },
});

tl3
  .from(".section3 h2", {
    scale: 10,
    x: -10000,
    opacity: 0,
    duration: 4,
  })
  .from(".section3 p span", {
    y: 10000,
    opacity: 0,
    duration: 4,
    stagger: 2,
  })
  .to(
    ".section3 p span",
    {
      backgroundColor: "white",
      color: "black",
    },
    "-=6"
  );

gsap.to(".horizontal-sections", {
  xPercent: -35,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-sections",
    pin: true,
    scrub: 1,
    start: "top top",
    end: () => "+=" + document.querySelector(".section4").offsetHeight,
  },
});

gsap.to(".section4 .portfolio-item", {
  x: -200,
  duration: 10,
  scrollTrigger: {
    trigger: ".horizontal-sections",
    start: "top top",
    end: () => "+=" + document.querySelector(".section4").offsetHeight,
    scrub: 1,
  },
});

var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section5",
    start: "top 20%",
    end: "bottom bottom",
    scrub: true,

    toggleActions: "restart none none none",
  },
});

const section5Heading = document.querySelector(".section5 h2");
const text = section5Heading.textContent;
section5Heading.textContent = "";

text.split("").forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char === " " ? "\u00A0" : char;
  section5Heading.appendChild(span);
});

tl5
  .from(".section5 h2 span", {
    y: -10000,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  })
  .from(".section5 p", {
    y: 100,
    opacity: 0,
    duration: 1,
  })
  .from(".section5 button", {
    scaleX: 0,
    transformOrigin: "center center",
    opacity: 0,
    duration: 1,
  })
  .from(".section5", {
    backgroundPosition: "100% 90%",
    duration: 2,
    ease: "power1.inOut",
  })
  .to(
    ".section5",
    {
      backgroundColor: "black",
      duration: 2,
      ease: "power1.inOut",
    },
    "-=2"
  );
