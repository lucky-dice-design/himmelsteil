$(function () {
  $("#hamburger").on("click", function (e) {
    e.preventDefault();
    
    $("#nav-container").slideToggle();

    const icon = $(this).find("i");
    if (icon.hasClass("fa-bars")) {
      icon.removeClass("fa-bars").addClass("fa-x"); 
    } else {
      icon.removeClass("fa-x").addClass("fa-bars");
    }
  });
});
