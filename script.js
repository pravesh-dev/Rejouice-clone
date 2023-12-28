function loaderAnimation(){
  let tl = gsap.timeline();
  tl.from("#loader h2", {
    x: 100,
    stagger: 0.2,
    opacity: 0,
    duration: 1,
    delay: 0.8,
  });
  tl.to("#loader h2", {
    x: -100,
    stagger: 0.2,
    opacity: 0,
    duration: 1,
  });
  tl.to("#loader",{
    opacity: 0,
  });
  tl.to("#loader",{
    display: "none",
  });
  gsap.from("#page1_content #theVanture", {
    x: 200,
    opacity: 0.3,
    duration: 1,
    delay: 3.2,
  });
  gsap.from("#page1_content h1 span", {
    y: 400,
    stagger: 0.2,
    duration: 0.7,
    delay: 3.2,
  });
};
function locomotiveScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
};
function page1CursorAnimation() {
  let orangeCursor = document.querySelector("#orange_cursor");
  let page1Content = document.querySelector("#page1_content");
  page1Content.addEventListener("mousemove", (e) => {
    gsap.to(orangeCursor, {
      x: e.clientX,
      y: e.clientY,
    });
  });
  page1Content.addEventListener("mouseenter", () => {
    gsap.to(orangeCursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", () => {
    gsap.to(orangeCursor, {
      scale: 0,
      opacity: 0,
    });
  });
};
function page2Animation() {
  gsap.from(".elem h1, #page2_top h3, #page2_top h4", {
    y: 120,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 62%",
      end: "top 61%",
      scrub: 7,
    },
  });
};
function page3Animation() {
  gsap.from("#page3_top h3", {
    y: 120,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 62%",
      end: "top 61%",
      scrub: 5,
    },
  });
};
function page4Animation() {
  gsap.from(".page4_elem h1, #page4_top h3", {
    y: 120,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 62%",
      end: "top 61%",
      scrub: 7,
    },
  });
};
function page4CursorAnimation() {
  let blackCursor = document.querySelector("#page4_cursor");
  let page4Bottom = document.querySelector("#page4_bottom");
  page4Bottom.addEventListener("mousemove", (e) => {
    gsap.to(blackCursor, {
      x: e.x,
      y: e.y,
    });
  });
  page4Bottom.addEventListener("mouseenter", () => {
    gsap.to(blackCursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page4Bottom.addEventListener("mouseleave", () => {
    gsap.to(blackCursor, {
      scale: 0,
      opacity: 0,
    });
  });
};
function page5Animation() {
  gsap.from(".page5_elem h1, #page5_top h3", {
    y: 120,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 62%",
      end: "top 61%",
      scrub: 7,
    },
  });
};
function page6SliderAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
  });
};
function page7Animation() {
  gsap.from(".page7elem h3", {
    y: 120,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 72%",
      end: "top 71%",
      scrub: 5,
    },
  });
};
function page8Animation() {
  gsap.from("#page8_top_left, #page8_top_right", {
    y: -160,
    stagger: 0.2,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 82%",
      end: "top 34%",
      scrub: 9,
    },
  });
  gsap.from("#page8_bottom_part1", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 82%",
      end: "top 34%",
      scrub: 9,
    },
  });
  gsap.from("#page8_bottom span", {
    y: -400,
    stagger: 0.2,
    duration: 2,
    scrollTrigger: {
      trigger: "#page8_bottom",
      scroller: "#main",
      start: "top 82%",
      end: "top 81%",
      scrub: 8,
    },
  });
};
loaderAnimation();
locomotiveScroll();
page1CursorAnimation();
page2Animation();
page3Animation();
page4Animation();
page4CursorAnimation();
page5Animation();
page6SliderAnimation();
page7Animation();
page8Animation();