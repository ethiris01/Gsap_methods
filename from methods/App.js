
gsap.fromTo(".circle2" , {
  y:200,
  opacity:0,    // initial state
},{
    opacity:1,        // specify values
    y:-200,
    duration:3,
    ease:"linear",
    borderRadius:0,
    repeat:-1,
    yoyo:true,
})



