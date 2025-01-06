let play = document.querySelector(".play")
let pause= document.querySelector(".pause")
let restart = document.querySelector(".restart")
let reverse = document.querySelector(".reverse")

let tween = gsap.to(".circle1",{
  y:-200,
  duration:5,
  backgroundColor:"yellow",
})

play.addEventListener("click", () => tween.play())
pause.addEventListener("click", () => tween.pause())
restart.addEventListener("click", () => tween.restart())
reverse.addEventListener("click", () => tween.reverse())



// let box = document.querySelector(".box")

// gsap.to(box,{
//     duration:1,
//     x:200,
//     repeat:2,
//     yoyo:true,
//     // ease: parametric,
//     ease: "power4.in",
// })

// function parametric(progress) {
//     var sqt = progress * progress;
//     return sqt / (2.0 * (sqt - progress) + 1.0)
// }


// let circle = document.querySelector(".circle")
// let text = document.querySelector(".name")
// gsap.to([box,circle,text], {
//     x:200,
//     rotation:360,
//     attr: { x: 100, y: 50, width: 100, height: 100 },
//     duration:4
// })

// gsap.to(box, {
//     xPercent:100,  // x-axis
//     yPercent:100,
//     scale:2,  // size
//     rotation:360,
//     transformOrigin: '100% 0%',
//     opacity:0.5,

//     duration:4
// })

//  gsap.to(box, {
//     rotation:360,
//     skewX:45,
//     skewY:45,
//     scaleX:3,
//     duration:4, 
//     x: 10vh
//  })
 
// const slider = document.querySelector(".slider")
// const progress = document.querySelector(".progress")
// const label = document.querySelector(".label")

// slider.addEventListener('input' , function ()  {
//     gsap.to(progress, {
//         width: `${this.value}%`,
//         duration:0.5,
//         onUpdate: function ()  {
//             label.textContent = `${Math.round(gsap.getProperty(progress,"width"))}%`
//         }
//     })
// })