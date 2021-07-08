$(function () {

  $('.header__button').on('click', function () {
  $('.menu').toggleClass('menu--visible');
  $('.header__phone').toggleClass('header__phone--visible');
  })

  $('.cards-item__heart').on('click', function(){
  $(this).toggleClass('cards-item__heart--active')
});


  $('.menu__list-link').on('click', function () {
  $('.menu').removeClass('menu--visible');
  $('.header__phone').removeClass('header__phone--visible');


});

})