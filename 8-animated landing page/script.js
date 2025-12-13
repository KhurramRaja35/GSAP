function page1() {
    var tl = gsap.timeline();

    tl.from("nav h1,nav li, nav button", {
        opacity: 0,
        y: -30,
        delay: 0.5,
        duration: 0.7,
        stagger: 0.2
    })

    tl.from(".center-part1 h1", {
        x: -300,
        duration: 0.5,
        opacity: 0
    })
    tl.from(".center-part1 p", {
        x: -100,
        duration: 0.4,
        opacity: 0
    })
    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.4,
    })
    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 0.4,
    }, "-=1")
    gsap.from(".section1buttom img", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".section1buttom img",
            scroller: "body",
            start: "top 90%",
            end: "top 60%",
            markers: true
        }
    })
}



function page2() {
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            markers: true,
            start: "top 50%",
            end: "top -50%",
            scrub: 2,
        }
    })

    tl2.from(".services", {
        y: 30,
        opacity: 0,
        duration: 1,
    })
    tl2.from(".elem.line1.left", {
        x: -300,
        opacity: 0,
    }, "anim") // is anim se ye ho ga k is trha jis b dsry element me same chz ho gi to wo timeline me ak sth play kry gi anim ki jagha kch b likh skty ap
    tl2.from(".elem.line1.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anim")
    tl2.from(".elem.line2.left", {
        x: -300,
        opacity: 0,
        duration: 1,
    }, "anim2")
    tl2.from(".elem.line2.right", {
        x: 300,
        opacity: 0,
        duration: 1,
    }, "anim2")
}

page1();
page2();