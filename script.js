function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  multiplier:0.7,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
// locomotive();
Shery.mouseFollower({
    skew: true,
    scale: 2,
  });

var tl = gsap.timeline();
gsap.to("#loader #n",{
    delay:1,
    duration:2,
    y:"-12vw",
    x:"-40vw",
})
gsap.to("#loader #y",{
    delay:1,
    duration:2,
    y:"-12vw",
    x:"-5.5vw",
})
gsap.to("#loader #c",{
    delay:1,
    duration:2,
    y:"-12vw",
    x:"32vw",
})

tl.to("#loader",{
    opacity:0,
    delay:3,
    duration:1,
    zIndex:0,
})

tl.from("#page1 img",{
    opacity:0,
    duration:0.5,
    y:1000,
})
tl.from("#page2 h1",{
  opacity:0,
  duration:0.5,
  y:1000,
})

gsap.to("#page2 #right h1",{
  duration:1,
  stagger:1,
  y:"-10",
  scrollTrigger:{
    trigger:"#page2 #right",
    scroll:"body",
    start:"top 60%",
    end:"top 100%",
    scrub:1,
  }
})
gsap.from("#page4 h1",{
  duration:1,
  x:"-100vh",
  scrollTrigger:{
    trigger:"#page4",
    scroll:"body",
    start:"top 50%",
    end:"top 10",
    scrub:1,
  }
})

gsap.to("#page5 #swiper",{
    transform:"translateX(-100%)",
    scrollTrigger:{
        trigger:"#page5",
        scroll:"body",
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true,
    }
})
