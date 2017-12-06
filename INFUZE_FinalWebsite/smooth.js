$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1400 );
  });
  
  
});// JavaScript Document