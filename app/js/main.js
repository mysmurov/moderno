$(function () {

  $(".rate-star").rateYo({
    rating: 5.0,
    starWidth: "12px",
    readOnly: true,
  });

  $(".product-slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    // autoplay: true,
    // autoplaySpeed: 2000,
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$",
    // skin: "round",
  });

  $(".icon-th-list").on("click", function(){
    $(".product__item").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });

  $(".icon-th-large").on("click", function(){
    $(".product__item").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });

  new WOW().init();

  $('.product-one__tabs .tab, .settings__tab .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs, .settings__tab').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, .settings__tab .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });

  $(".menu__btn").on("click", function(){
    $(".menu__list").slideToggle();
  });

  $(".header__btn-menu").on("click", function(){
    $(".header__box").toggleClass("active");
  });
  
  var mixer = mixitup('.products__inner-box');

});