
//timeline k andr b round bracket k andr agr ye likhyn k {paused:true} tb b animation rook jaye gi
var tl = gsap.timeline();


tl.to("#full",{
    right:0,
    duration:0.7,
})
tl.from("#full h4",{
    x:500,
    stagger:0.3,
    duration:0.7,
    opacity:0,
})
tl.from("#full i",{
    scale:0,
    duration:0.7,
    opacity:0,
    
})

tl.pause() // animation ko rok de ga


var menu = document.querySelector("#nav i");
menu.addEventListener("click",function(){
    tl.play() // ab timeline start ho gi
})
var close = document.querySelector("#full i");
close.addEventListener("click",function(){
    tl.reverse() // dobara reverse ho jaye gi agr play true tha to false r agr false tha to true same for pause
})