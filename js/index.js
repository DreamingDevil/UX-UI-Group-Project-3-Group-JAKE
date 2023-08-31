$(document).ready(function() {
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

  const videoTimingInput = $("#videoTiming");
  const videoTiming = parseInt(videoTimingInput.val());

  setTimeout(function() {
    animateVideo(videoTiming).then(function() {
      // Add fade-in class to the specified elements
      $(".h1-container, p, .heroButton").addClass("fade-in");
    });
  }, 2000);
});