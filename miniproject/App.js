var tl = gsap.timeline({
  defaults: {
    opacity: 0,
    ease: "power2.in",
    duration: 1,
  },
});


  gsap.from(".logo-container", {
    duration: 1.5, 
    y: -100,     
    ease: "bounce.out", 
    opacity: 0    
  });



tl.fromTo(
  ".sidebar",
  { width: 0 },
  {
    opacity: 1,
    width: "40%",
  }
);

gsap.fromTo(
  ".main-img",
  { 
    x: 0,         
    opacity: 0    
  },
  {
    x: -50,       
    opacity: 1,    
    delay: 2,      
    duration: 1.5, 
    ease: "power3.out"
  }
);


tl.fromTo(
  ".main-title",
  { x: 100 },
  {
    opacity: 1,
    x: 0,
  }
);
tl.fromTo(
  ".main-info",
  {
     y: 100 
    },
  {
    opacity: 1,
    x: 10,
    y:-10,
    delay:1,
    duration:1,
    
  }
);
