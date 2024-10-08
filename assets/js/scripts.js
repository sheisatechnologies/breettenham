gsap.from(".slide-con1", {
    x: -800,        // Start from 800px to the right
    opacity: 0,    // Start with zero opacity
    duration: 3,   // Duration of 3 seconds
  });

  gsap.from(".h-slide1-img", {
    x: -300,        // Start from 800px to the right
    opacity: 0,    // Start with zero opacity
    duration: 3,   // Duration of 3 seconds
    delay:1
  });


  gsap.from(".buil-slide-con2", {
    x: 800,        // Start from 800px to the right
    opacity: 0,    // Start with zero opacity
    duration: 3,   // Duration of 3 seconds
  });

  gsap.from(".buil-slide2-img", {
    x: 800,        // Start from 800px to the right
    opacity: 0,    // Start with zero opacity
    duration: 3,   // Duration of 3 seconds
    delay:1
  });
  
  // gsap.to(".h-slide1-img", {
  //   x: -300,        // Start from 800px to the right
  //   opacity: 0,    // Start with zero opacity
  //   duration: 3,   // Duration of 3 seconds
  //   delay:1
  // });


  // gsap.to(".slide-con1", {
  //   x: -800,        // Start from 800px to the right
  //   opacity: 0,    // Start with zero opacity
  //   duration: 3,   // Duration of 3 seconds
  // });

  // const tl = gsap.timeline({ defaults: { duration: 1 } });

  // // Define animations
  // tl.from(".slide-con1", { x: -800, opacity: 0, duration: 2,  }) // Animate the box
  //   .from(".h-slide1-img",  { x: -300, opacity: 0, duration: 2 }) // Animate the circle at the same time as the box
  //   .to(".slide-con1", { x: -800, opacity: 0, duration: 2}) // Fade out the box
  //   .to(".h-slide1-img", { x: -300, opacity: 0, duration: 2}); // Fade out the circle

