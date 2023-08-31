$(document).ready(function() {
  // Function to trigger the logo animation
  function animateLogo(logoTiming) {
    return new Promise(function(resolve) {
      $(".animated-logo").css({
        opacity: 1,
        transform: "translateX(0)"
      });

      // Resolve the promise after the animation is complete
      $(".animated-logo").on("transitionend", resolve);
    });
  }

  // Function to trigger the video animation
  function animateVideo(videoTiming) {
    return new Promise(function(resolve) {
      $(".animated-video").css({
        opacity: 1,
        transform: "translateX(0)"
      });

      // Resolve the promise after the animation is complete
      $(".animated-video").on("transitionend", resolve);
    });
  }

  const logoTimingInput = $("#logoTiming");
  const videoTimingInput = $("#videoTiming");

  // Get the timings from the inputs
  const logoTiming = parseInt(logoTimingInput.val());
  const videoTiming = parseInt(videoTimingInput.val());

  // Start animations after a delay using the specified timings
  setTimeout(function() {
    animateLogo(logoTiming).then(function() {
      // After the logo animation is complete, start the video animation
      animateVideo(videoTiming).then(function() {
        // Add the fade-in effect after both animations are complete
        $(".animated-logo, .animated-video").addClass("fade-in");
      });
    });
  }, 2000); // Delay of 2000 milliseconds (2 seconds)
});


// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the "Try Now" button element
  const tryNowButton = document.querySelector('.try-now-link');

  // Add a mouseover event listener to the button
  tryNowButton.addEventListener('mouseover', function () {
    // Add a class to trigger the shaking animation
    tryNowButton.classList.add('shake-animation');

    // Remove the class after a short delay to stop the animation
    setTimeout(() => {
      tryNowButton.classList.remove('shake-animation');
    }, 1000); // Adjust the delay duration as needed
  });
});