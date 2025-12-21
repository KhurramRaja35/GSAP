var initialPath = `M 10 100 Q 500 100 990 100`;
var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string")

string.addEventListener("mousemove",function(dets){ // what is this dets... lets see jb jb mene mouse enter kia tb tb string variable k sth jo kch b hua us sb ki detail hmy mil jaye gi .. look into the console log hmy mouse event mila with all the details.. 
     console.log(dets)
     initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`

     gsap.to("svg path", {
        attr:{
            d:initialPath,
        },
        duration:0.3,
        ease:"power3.out",
     })
})
// ab yahan tk to ez seen tha string apk mouse sth move kr ri but wo chore ni rhi to usy kesy tackle kryn gy look..



string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{
            d:finalPath,
        },
        duration:1.5,
        ease:"elastic.out(1,0.1)",
    })
})
