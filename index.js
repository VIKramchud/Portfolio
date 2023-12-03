
function scroll() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
scroll()
gsap.from(".logo h4", {
    y: -100,
    opacity: 0,
    stagger: 0.5,
    duration: 1.1,
    scrub: 1,
})

gsap.from("#page1 img",{
    opacity:0,
    scale:0,
    duration: 2.1,
    delay:.5,
    scrub: 1,
})


gsap.from(".intro-div p", {
    y:80,
    opacity:0,
    stagger:1,
    duration:1,
    ease: "linear",
    scrollTrigger: {
        trigger: ".intro-div p",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
    }
},)

gsap.to(".scroll-text h3", {
    x: "-100%",
    ease: "linear",
    scrollTrigger: {
        trigger: ".scroll-text",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        end: "top 10%",
        scrub: 3,
    }
},)

gsap.from(".contact_11 h2 , .contact_112 h2 ,.contact_113 h2", {
    y:80,
    opacity:0,
    stagger:0.2,
    duration:1,
    ease: "linear",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
    }
},)
gsap.from(".socialmedia img:nth-child(1) ", {
    y:150,
    x:-200,
    opacity:0,
    stagger:0.3,
    scale:1,
    delay:3,
    ease: "linear",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        // markers: true,
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
    }
},)
gsap.from(".socialmedia img:nth-child(3) ", {
    y:-160,
    x:-210,
    scale:1,
    opacity:0,
    stagger:0.3,
    delay:10,
    ease: "linear",
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 70%",
        end: "top 50%",
        scrub: 3,
    }
},)
