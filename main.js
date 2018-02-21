console.log('connected');

$("#menu_burger").click(function(event) {
  event.preventDefault()
  $("#hide-menu-span").toggleClass("hide_menu_span")
  $("#show-menu-on-click").toggleClass("show_pop_out_menu");

})
