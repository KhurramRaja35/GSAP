// the box animation logic
// gsap.to("#box1",{
//     x:1000,
//     duration:3,
//     delay:1,
//     rotate:360,
//     backgroundColor:"pink",
//     borderRadius:"50%",
//     scale:0.5,
// })
// gsap.from("#box2",{
//     x:1000,
//     duration:3,
//     delay:1,
// })


//text animation:-
// gsap.from("h1",{
    // y:20,
    // duration:1,
    // delay:1,
    // color:"red",
    // opacity:"0",
    // currently yahna tak hm ny dekha k upr h1 likha to sary h1 hi esy animate ho ry jbky hm chahty k ak ak kr k hn wo to ak property hoti hai stagger, stager kya karta hai k is saron ko ak ak kr k chalany ka kam karta hai. basically stagger kya hai ak naam k bht log hyn aur unko ak ak kr k chalana hai to tb stagger use krty hein. aur isko value me time dety like duration k kitny time baad next h1 ko animate krna...
    // aur lets say k ap ulta time dety to kya ho ga like -1 to phly 3rd chaly ga then 2nd and then 1st...
    // stagger:0.3, 
// })

//this was about repeat and yoyo property.. yoyo simply means like yoyo toy the object go and then comes back and repeat means repeat simple but here is the catch with repeat if u write repeat:1 the animation will occur twice 1 as default and 1 for repeat got it same for 2 it occurs three times and so on and if u want that it should be infinite than simple write repeat:-1 and turn yoyo:true now its infinitly running..
// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat:2,
//     yoyo:true,
// })




// Timeine

// gsap.to("#box",{
//     x:1500,
//     duration:1.5,
//     rotate:360,
//     delay:1
// })
// gsap.to("#box1",{
//     x:1500,
//     duration:1.5,
//     delay:2.5,
//     backgroundColor:"yellow",
// })
// gsap.to("#box2",{
//     x:1500,
//     duration:1.5,
//     delay:4,
//     scale:0.5,
//     borderRadius:"50%",
// })

// so in the above scenario we have seen if we want to animate multiple objects syncronously like after one finish animating than the other starts its animation so we have to do alot of calculation like set the delay with respect to the duration and delay of the previous object. so in the real world project that things gets so complicated cz we will be dealing in decimal figures like 0,0035 and at that time it wll be pain in the ass so to overcome this issue we use time and in timeline we dont have to mention delay and it will follow each other syncronously cool na..



// var tl = gsap.timeline();
// tl.to("#box",{
//     x:1500,
//     duration:1.5,
//     rotate:360,
//     delay:1,
// })
// tl.to("#box1",{
//     x:1500,
//     duration:1.5,
//     backgroundColor:"yellow",
// })

// tl.to("#box2",{
//     x:1500,
//     duration:1.5,
//     borderRadius:"50%",
// })

//well the above was a simple and most basic example now we will see a bit more beautifull one..


var tl = gsap.timeline();
tl.from("h2",{
    y:-20,
    duration:1,
    opacity:"0",
    delay:0.5,
})
tl.from("h4",{
    y:-20,
    duration:1,
    opacity:"0",
    stagger:0.3,
})
tl.from("h1",{
    y:20,
    duration:1,
    opacity:"0",
    scale:0.2,
})