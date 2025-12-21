// gsap.from("#page1 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     delay:0.5,
// })
// gsap.from("#page2 #box",{
//     scale:0,
//     duration:2,
//     rotate:360,
//     // scrollTrigger:"#page2 #box" // scrollTrigger page2 k ander ka box han ye tareeqa upr upr se thk hai but hm deep jyn gy
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start: "top 60%"
//     }
// })


//ok lets see another example i am commenting out the above code..

// gsap.from("#page2 h1",{
//     opacity:0,
//     x:800,
//     duration:3,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })
// gsap.from("#page2 h2",{
//     opacity:0,
//     x:-800,
//     duration:3,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

// cool na...again going back to box in page2...

// gsap.from("#page2 #box",{
//     opacity:0,
//     scale:0,
//     duration:1,
//     rotate:720,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 10%",
//         // ab ak bht imp property ki bt kryn gy scrub like abhi na jessy hi hm wo trigger hit krty hyn to animation start ho k khtm b ho jati hai phr upr jao ya neechy koi faida nai but agr hm chahty hyn k animation totally scrolling py depend kry to usk liye hm scrub property use krty hyn lets see.. to scrub ko deny k do tareeqy hyn ya to ap de skty ho boolean mein me ya phr number de skty ho 1 se ly 5 k bch me depending on smoothness .. well isko dekh k hi smj ay gi
//         // scrub:true, // is ny scroller start aur end k drmian apni journey ko rkha ha aur ye vice virsa b hai like jb ap dobara upr scroll kro gy to nimation reverse ho gi cool na..
//         scrub:3, // ab ap dekhyn gy k ye smooth ho ajye ga kafi true me srf behaviour change hua tha but tha wo bht rough now its smooth as fuck.

//         // ab ak r heavy property jis ko pin kehty is se animation scrolling k time py pin ho jati hai
//         pin:true,
//     }
// })

// to understand pin we will do some thing new...

gsap.to(".page2 h1",{
    transform:"translateX(-220%)",
    scrollTrigger:{
        trigger:".page2", // jb b pin use kryn gy to trigger parent ko select kryn gy..
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:3,
        pin:true,
    }
})