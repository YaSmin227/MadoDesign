// wow 
var wow = new WOW(
  {
    boxClass: 'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0,          // distance to the element when triggering the animation (default is 0)
    mobile: true,       // trigger animations on mobile devices (default is true)
    live: true,       // act on asynchronously loaded content (default is true)
    callback: function (box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

$('#gallaryCarousel').owlCarousel({
  loop: true,
  margin: 32,
  responsiveClass: true,
  nav: false,
  rtl: true,
  stagePadding: 0,
  stageMargin: 0,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    778: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1440: {
      items: 4,
      loop: false
    }
  }
})