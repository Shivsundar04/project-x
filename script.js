var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x+"px"
//     crsr.style.top = dets.y+"px"
//     blur.style.left = dets.x-150+"px"
//     blur.style.top = dets.y-150+"px"
// })

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  gsap.to(crsr, { duration: 0.7, x, y });
});
document.addEventListener('mousemove', (e) => {
    const x = e.clientX-150;
    const y = e.clientY-150;
    gsap.to(blur, { duration: 2, x, y });
  });

// var crsr = document.querySelector("#cursor");
// var blur = document.querySelector("#cursor-blur");

// var distance = 150; // Distance between cursor and cursor-blur

// document.addEventListener("mousemove", function(event) {
//     // Get the cursor position
//     var x = event.clientX;
//     var y = event.clientY;

//     // Set the cursor position
//     crsr.style.left = x + "px";
//     crsr.style.top = y + "px";

//     // Calculate cursor-blur position based on the distance
//     blur.style.left = x - distance + "px";
//     blur.style.top = y - distance + "px";
// });




var h4all = document.querySelectorAll("#nav h4")
h4all.forEach((elem) =>{
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"


    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"


    })
})



gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 55%",
        scrub:1
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }

})