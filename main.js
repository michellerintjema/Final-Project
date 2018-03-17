console.log('connected');

$(".sideMenu_burger").click(function(event) {
  event.preventDefault()
  $(".mainBanner").toggleClass("hide_mobile_mainBanner")
  $("#hide-side-menu-span").toggleClass("hide_sideMenu_menuSpan")
  $("#show-menu-on-click").toggleClass("show_sideMenu_popOut");
  $(".mainBanner_title").toggleClass("hide_mobile_mainBanner_title")
  $(".mainNav_downArrow").toggleClass("hide_mobile_mainNav_downArrow")
});

$("#sideMenu-popOut-galleries, .mainBanner_title, .mainNav_downArrow").click(function(event) {
  togglePopOutMenu();
  $('html, body').animate({
    scrollTop: $("#galleries").offset().top
  }, 1000);
});

$("#sideMenu-popOut-about").click(function(event) {
  togglePopOutMenu();
  $('html, body').animate({
    scrollTop: $("#about-contact-section").position().top
  }, 1000);
});

$("#sideMenu-popOut-contact").click(function(event) {
  togglePopOutMenu();
  $('html, body').animate({
    scrollTop: $("#footer").position().top
  }, 1000);
});

function togglePopOutMenu() {
  $(".hide_mobile_mainBanner").removeClass("hide_mobile_mainBanner")
  $("#show-menu-on-click").removeClass("show_sideMenu_popOut");
  $("#hide-side-menu-span").removeClass("hide_sideMenu_menuSpan")
  $(".hide_mobile_mainBanner_title").removeClass("hide_mobile_mainBanner_title")
  $(".hide_mobile_mainNav_downArrow").removeClass("hide_mobile_mainNav_downArrow")
}
