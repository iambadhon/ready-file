$(function () {
  //=====================scroll top start=====================//
  $(".scroll_top").click(function () {
    $("html,css").animate({
      scrollTop: 0,
    }, 00);
  });

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()

    if (scrolling > 100) {
      $(".scroll_top").fadeIn(800);
    } else {
      $(".scroll_top").fadeOut(800);
    }
  });

  //=====================scroll top end=====================//


  //================nav hide start================//
  let navBar = document.querySelectorAll('.nav-link');
  let navCollapse = document.querySelector('.navbar-collapse.collapse');
  navBar.forEach(function (a) {
    a.addEventListener("click", function () {
      navCollapse.classList.remove("show");
    })
  })
  //================nav hide end================//


  //=====================sticky nav start=====================//
  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()

    if (scrolling > 150) {
      $(".main_nav").addClass("nav_sticky");
    } else {
      $(".main_nav").removeClass("nav_sticky");
    }
  });
  //=====================sticky nav end=====================//


  //=====================smooth scroll start=====================//
  var html_body = $("html, body");
  $("nav a").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate({
            scrollTop: target.offset().top - 0,
          },
          00
        );
        return false;
      }
    }
  });

  //=====================smooth scroll end=====================//

});