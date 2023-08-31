$(document).ready(function() {
  function animateVideo(videoTiming) {
    return new Promise(function(resolve) {
      $(".animated-video").css({
        opacity: 1,
        transform: "translateX(0)"
      });

      $(".animated-video").on("transitionend", resolve);
    });
  }

  const videoTimingInput = $("#videoTiming");
  const videoTiming = parseInt(videoTimingInput.val());

  setTimeout(function() {
    animateVideo(videoTiming).then(function() {
      $(".h1-container, p, .heroButton").addClass("fade-in");
    });
  }, 1000);
});