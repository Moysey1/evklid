
const swiper = new Swiper('.hero__swiper', {

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    slideLabelMessage:'Изображение слайда {{index}} / {{slidesLength}}'
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
});





let tabsBtn = document.querySelectorAll('.slider__btn');
let tabsItem = document.querySelectorAll('.slider-item');



tabsBtn.forEach(function (element){
  element.addEventListener('click', function (e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn){btn.classList.remove('slider__btn-active')});
    e.currentTarget.classList.add('slider__btn-active');


    tabsItem.forEach(function (element){ element.classList.remove('slider-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('slider-item--active');

  });
});

new Accordion('.accordion');


let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = menu.querySelectorAll('.nav__link')

burger.addEventListener('click' ,

  function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('nav--active');

  document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function (el){
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('nav--active');

    document.body.classList.remove('stop-scroll');

  })
});


let loop = document.querySelector('.nav-btn');
let search = document.querySelector('.header-search');
let closed = document.querySelector('.header-search__closed');


loop.addEventListener('click' ,
  function () {
  search.classList.add('header-search--active');
  })

closed.addEventListener('click' ,
  function () {

    search.classList.remove('header-search--active');

  })
