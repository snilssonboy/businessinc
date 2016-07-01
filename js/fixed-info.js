$(document).ready(function() {
  
  $("#info-bank").hover(function(){
    $("#bank-hover").toggleClass("hidden");
  });

  $(".menu-toggle").click(function(){
    updateModal();
    $("#menu-modal").modal("show");
  });

  $('.back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });

  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the
      //nav bar to stick.
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 150) {
      $('.info-box').addClass('nav-fixed');
      $('#content-container').addClass('content-padding');
      $('#bank-hover').addClass('bank-hover-scrolled');
      $('.back-to-top').removeClass("hidden");
    }
    if ($(window).scrollTop() < 151) {
      $('.info-box').removeClass('nav-fixed');
      $('#content-container').removeClass('content-padding');
      $('#bank-hover').removeClass('bank-hover-scrolled');
      $('.back-to-top').addClass("hidden");
    }
  });
});
