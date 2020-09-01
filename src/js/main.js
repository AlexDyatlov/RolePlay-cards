$(function(){

  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
    $('.slider-inner, .faction-slider').slick('refresh');
  });
  
  $('.organization__item').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('organization__item--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('faction__content--active');

    $(this).addClass('organization__item--active');
    $($(this).attr('href')).addClass('faction__content--active');
    $('.faction-slider').slick('refresh');
  });

  $('.slider-inner').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-arrows slider-arrows__right"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slider-arrows slider-arrows__left"><img src="images/icons/arrow-right.svg" alt=""></button>',
  });

  $('.list__item-btn').on('click', function(){
    $(this).toggleClass('list__item-btn--active');
  });
  
  document.querySelectorAll('.cars__info').forEach((item) =>
  item.addEventListener('click', () => {

    const parent = item.parentNode;
    
        if (parent.classList.contains('cars__box--active')) {
            parent.classList.remove('cars__box--active');
        } 
        else {
        
          document
            .querySelectorAll('.cars__box')
            .forEach((child) => child.classList.remove('cars__box--active'))
              
          parent.classList.add('cars__box--active');
          
        }
    
    })
  );

  $('.faction-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="slider-arrows faction-arrows slider-arrows__right"><img src="images/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slider-arrows faction-arrows slider-arrows__left"><img src="images/icons/arrow-right.svg" alt=""></button>',
  });

});