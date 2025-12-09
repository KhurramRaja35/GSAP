// gsap.from("h1 span",{
//     y:60,
//     opacity:0,
//     stagger:0.2,
//     duration:0.5,
// })


function BreakText(){

    var h1 = document.querySelector("h1")
    var h1Text =  document.querySelector("h1").textContent;
    var splittedText = h1Text.split("");
    var halfValue = splittedText.length/2;
    
    var clutter = "";
    
    splittedText.forEach(function(elem,idx){
         // clutter = clutter + elem;
        // clutter += `<span>${elem}</span>`;
        // console.log(clutter)
        if(idx<halfValue){
            clutter += `<span class="a">${elem}</span>`;
        }else{
            clutter+= `<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = clutter;
}
// in this way u just broke the text simply into spans nothing else .. simple tareeqa b tha k khd repeatively span me likh dekty but we did it using js
BreakText();

// gsap.from("h1 span",{
//     y:100,
//     stagger:0.2,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
// })

gsap.from("h1 .a",{
    y:100,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:0.15,
})
gsap.from("h1 .b",{
    y:100,
    opacity:0,
    duration:0.8,
    delay:0.5,
    stagger:-0.15, // - means from right to left
})
