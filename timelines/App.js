// var tl = gsap.timeline()

// tl.to(".circle1",{
//   duration:2,
//   scale:0,
//   opacity:0,
//   delay:1,
// })
// .to(".circle2",{
//   duration:2,
//   x:-200,
// })
// .to(".circle3",{
//   duration:2,
//   x:-200,
//   borderRadius:0,
//   rotate:360,
// })
// .set(".circle1",{
//   duration:2,
//   delay:1,
//   scale:1,
//   opacity:1,
// })


//  refactor
var tl = gsap.timeline({
  defaults:{
    duration:1,
  }
})

tl.to(".circle1",{
  duration:2,
  scale:0,
  opacity:0,
  delay:1,
})
.to(".circle2",{
  x:-200,
})
.to(".circle3",{
  x:-200,
  borderRadius:0,
  rotate:360,
})
.set(".circle1",{
  x:300,
}).set(".circle1", {
  scale:1,
  opacity:1,
})

