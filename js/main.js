$(document).ready(function(){

  

  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



  

  $('.country').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('ul.tabs li').click(function(){
  var tab_id = $(this).attr('data-tab');

  $('ul.tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $("#"+tab_id).addClass('current');
})



const burger = document.querySelector(".burger");
const navbar = document.querySelector(".mt-mobile");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  body.classList.toggle("body-open");
  burger.classList.toggle("burger-open");
});




    // const burger = document.querySelector(".burger");
    // const navbar = document.querySelector(".mt-mobile");
    // const body = document.querySelector("body");
    
    // burger.addEventListener("click", () => {
    //   navbar.classList.toggle("nav-open");
    //   body.classList.toggle("body-open");
    //   burger.classList.toggle("burger-open");
    // });

    // $( document ).ready(function(){
    //   jQuery('.scroll').onePgaeNav({
    //     wrapper : '#onePgaeNav'
    //   });
    // });  



  // (function( $ ) {
  
  // $.fn.onePgaeNav = function( options ){

  //     var settings = $.extend({
  //         activeClass     : 'active',
  //         wrapper         : '',       // Nav wrapper selector for scroll effect
  //         speed           : 900,      // animation speed
  //         navStop         : 100,      // stop before top
  //         navStart        : 200,      // change class before navstart pixel

  //     }, options ),
  //     $that = $(this);

  //     $(this).on( 'click' , clickScroll );

  //     if (settings.wrapper) {
  //         $(window).on('scroll',function(){
  //             var sectionTop  = [],
  //             windowTop   = $(window).scrollTop();

  //             $that.each(function(){
  //                 var hash = $(this).attr('href'),
  //                     hashOffset = $( hash ).offset();
  //                 if (typeof hashOffset !== 'undefined' ) {
  //                     sectionTop.push( hashOffset.top);
  //                 };
  //             });

  //             $.each( sectionTop, function(index){
  //                 if ( windowTop > sectionTop[index] - settings.navStart ){
  //                     $that.removeClass(settings.activeClass)
  //                         .eq(index).addClass(settings.activeClass);
  //                 }
  //             });
  //         });
  //     };

  //     function clickScroll(event){
  //         event.preventDefault();

  //         var hash        = $(this).attr('href'),
  //             hashOffset  = $(hash).offset(),
  //             hashTop     = hashOffset.top;

  //         $('html, body').animate({
  //             scrollTop: hashTop - settings.navStop
  //         }, settings.speed);
  //     }

  // };

  // }(jQuery));


  
  


});


$( function() {
  const RUB = 'RUB';
  const EUR = 'EUR';

const amountEl = $("#amount");
const sliderEl = $("#slider-range-max");
const currencyEl = $("#currency");
const currencyResultEl = $("#currencyResult");

const moneyOption = {
  RUB: {
    step: 100,
    currencyCount: 12500,
    min: 100,
    max: 75000,
  },
  EUR: {
    step: 1,
    currencyCount: 150,
    min: 3,
    max: 1000,
  },
};

const money = {
  currency: RUB,
  currencyCount: moneyOption.RUB.currencyCount,
  min: moneyOption.RUB.min,
  max: moneyOption.RUB.max,
  step: moneyOption.RUB.step,
  rate: 86,
};

function getSliderOption() {
  return {
  range: "max",
  min: money.min,
  step: money.step,
  max: money.max,
  value: money.currencyCount,
  slide: function( event, ui ) {
    setCurrencyCount(ui.value);
  }
};
}

function getCorrectMoney(amount) {
  let result = money.min;

  if(amount && !isNaN(amount)) {
    if(amount > money.max) {
      result = money.max;
    } else if(amount < money.min) {
      result = money.min;
      } else {
      result = amount;
    }
  }

  return result;
}

function isCurrencyRub() {
  return money.currency === RUB;
}

function getCurrencyLabel() {
  return isCurrencyRub() ? 'евро' : 'руб.';
}

function setCurrency(cur) {
  let opt = moneyOption[cur];
  money.currency = cur;
  money.currencyCount = opt.currencyCount;
  money.min = opt.min;
  money.max = opt.max;
  money.step = opt.step;

  sliderEl.slider("destroy");

  setTimeout(function () {
    sliderEl.slider(getSliderOption());
  }, 200);

  setCurrencyCount(money.currencyCount);
  currencyEl.empty().text(getCurrencyLabel());
}

function setCurrencyCount(count) {
  money.currencyCount = count;

  if(isCurrencyRub()) {
    amountEl.val(formatCurrency(count));
    currencyResultEl.empty().text(formatCurrency(Math.round(count / money.rate)));
  } else {
    amountEl.val(formatCurrency(count));
    currencyResultEl.empty().text(formatCurrency(Math.round(count * money.rate)));
  }
}

sliderEl.slider(getSliderOption());

function formatCurrency(val) {
    let result = 0;

    if(val) {
    result = isNaN(val) ? parseInt(val.split(' ').join('')) : val;
  }
  return result.toLocaleString('ru-RU');
}

let keyupTimeout = null;

amountEl.on("keyup", function() {
    clearTimeout(keyupTimeout);

    let val = $(this).val();

  keyupTimeout = setTimeout(function () {
    val = getCorrectMoney(val);
    sliderEl.slider("value", val);
    setCurrencyCount(val);
  }, 1500);
});

amountEl.on('click', function() { this.select(); });

$('input[type=radio][name=currency]').on('change', function() {
  switch ($(this).val()) {
    case RUB:
      setCurrency(RUB);
      break;
    case EUR:
      setCurrency(EUR);
      break;
  }
});

setCurrencyCount(money.currencyCount);

currencyEl.empty().text(getCurrencyLabel());
});