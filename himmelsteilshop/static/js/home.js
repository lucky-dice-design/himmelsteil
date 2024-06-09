$(document).ready(function () {
  $(".hero-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
  });
});

$(document).on("click", function(event) {
  if (!$(event.target).closest("#nav-container, #hamburger").length && $("#nav-container").hasClass("active")) {
      $("#nav-container").removeClass("active");
  }
});

$("#hamburger").click(function (event) {
  event.stopPropagation();
  $("#nav-container").toggleClass("active");
});