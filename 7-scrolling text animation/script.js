window.addEventListener("wheel", function (dets) {
    if (dets.deltaY > 0) {
        gsap.to(".marque", {
            transform: "translateX(-400%)",
            duration: 4,
            repeat: -1,
            ease: "none",
        })
    } else {
         gsap.to(".marque", {
            transform: "translateX(100%)",
            duration: 4,
            repeat: -1,
            ease: "none",})
    }
})

