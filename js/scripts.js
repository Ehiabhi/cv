const year = new Date().getFullYear();

document.getElementById("footer").innerHTML =
  "© " + year + " All rights reserved.";

$(document).ready(
  $(document).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition > 20) {
      $("header").addClass("header-scroll-effect");
      $(".social-nav").addClass("nav-item");
    } else {
      $("header").removeClass("header-scroll-effect");
      $(".social-nav").removeClass("nav-item");
    }
  })
);
