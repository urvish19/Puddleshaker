$(document).ready(function() {
    $('.menu-icon').click(function() {
      $('.off-canvas').addClass('is-open');
      $('.off-canvas-overlay').fadeIn(200);
      $('body').addClass('no-scroll');
    });
  
    $('.close-button, .off-canvas-overlay').click(function() {
      $('.off-canvas').removeClass('is-open');
      $('.off-canvas-overlay').fadeOut(200);
      $('body').removeClass('no-scroll');
    });
  });
  