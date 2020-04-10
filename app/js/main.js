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

  var mixer = mixitup('.products__inner-box');

});