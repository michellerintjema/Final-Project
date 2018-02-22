console.log('connected');

$("#side-menu-burger").click(function(event) {
  event.preventDefault()
  $("#hide-side-menu-span").toggleClass("hide_side_menu_span")
  $("#show-menu-on-click").toggleClass("show_pop_out_menu");
});

$("#gallery, .mainTitle").click(function(event) {
  $('html, body').animate({
    scrollTop: $("#gallery-section").offset().top
  }, 1000);
});

$("#about, #contact").click(function(event) {
  $('html, body').animate({
    scrollTop: $("#about-contact-section").offset().top
  }, 1000);
});
