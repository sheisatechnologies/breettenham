  // GSAP Timeline Animation for all hero slider 
  const tl = gsap.timeline();

  // 1. Slide the wrapper in from the left
  tl.to(".wrapper", {
      duration: 1.5,
      x: 0, // Moves wrapper to its original position
      ease: "power4.out"
  })

  // 2. Reveal the image by animating the .image-reveal div
  .to(".image-reveal", {
      duration: 1.5,
      scaleX: 0, // Scale the div to 0 to reveal the image
      transformOrigin: "left",
      ease: "power2.out"
  });
  // GSAP Timeline Animation for all hero slider 








  
 // Home page slider 1 //

$(document).ready(function(){
    $('.slider-1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 5000,
        cssEase:"cubic-bezier(0.2, 0.4, 0.4, 0.9)",
        swipeToSlide: true,
        accessibility: true
    });
});
 // Home page slider 1 //



 // This code use for hide and show the top header //

$(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
        $('#normalLogo').hide();
        $('#fixedLogo').show();
    } else {
        $('#normalLogo').show();
        $('#fixedLogo').hide();
    }
});

 // This code use for hide and show the top header //







 // Floor plan Custom Js for calculation //
   
 
 let totalSum = 0;

    // Function to toggle the value of the clicked cell between adding and subtracting
    function toggleValue(cell) {
        let cellValue = parseFloat(cell.textContent.replace(/,/g, '')); // Remove commas and convert to number

        // Check if the cell has been clicked previously (toggle on/off)
        if (cell.classList.contains('clicked')) {
            // If cell is already clicked, subtract its value from the total
            totalSum -= cellValue;
            cell.classList.remove('clicked'); // Remove the clicked class to indicate deselection
        } else {
            // If cell is not clicked, add its value to the total
            totalSum += cellValue;
            cell.classList.add('clicked'); // Add the clicked class to indicate selection
        }

        // Update the sum display
        document.getElementById('sumCell').textContent = totalSum.toLocaleString();
    }

 // Floor plan Custom Js for calculation //


 $(document).ready(function(){
    $('.slider').slick({
        centerMode: true,               // Enable center mode
        centerPadding: '250px',         // Increase center padding to show more of the left and right slides
        slidesToShow: 1,                // Show 3 slides at a time
        infinite: true,                 // Enable infinite loop
        focusOnSelect: true,            // Focus on center slide when clicked
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,    // Show 1 slide at a time on smaller screens
                    centerMode: true,
                    centerPadding: '50px' // Adjust center padding for smaller screens
                }
            }
        ]
    });
});