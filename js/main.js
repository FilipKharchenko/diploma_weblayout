// FULL DOCUMENT //

$( function() {
  $( "#accordion-one" ).accordion({
    animate: {
      duration: 500,
      easing: 'swing',
    },
    collapsible: true,
    heightStyle: 'content',
  });

  $( "#accordion-two" ).accordion({
    animate: {
      duration: 500,
      easing: 'swing',
    },
    collapsible: true,
    heightStyle: 'content',
  });

  $( "#accordion-three" ).accordion({
    animate: {
      duration: 500,
      easing: 'swing',
    },
    collapsible: true,
    heightStyle: 'content',
  });

  $( "#accordion-four" ).accordion({
    animate: {
      duration: 500,
      easing: 'swing',
    },
    collapsible: true,
    heightStyle: 'content',
  });

  $( "#accordion-five" ).accordion({
    animate: {
      duration: 500,
      easing: 'swing',
    },
    collapsible: true,
    heightStyle: 'content',
  });
});


// HEADER //

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav__item-btn').forEach(item => {
    item.addEventListener('click', function () {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".nav__submenu-list");

      btn.parentElement.classList.toggle("nav__submenu-active");
      document.querySelectorAll('.nav__item-btn').forEach(el => {
        if (el != btn) {
          el.parentElement.classList.remove('nav__submenu-active')
        }
      })

      document.querySelectorAll(".nav__submenu-list").forEach(el => {
        if (el != dropdown) {
          el.classList.remove('nav__submenu-list-active');
          el.parentElement.classList.remove('nav')
        }
      })

      dropdown.classList.toggle("nav__submenu-list-active");

    })
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
    let dropdown = document.querySelectorAll('.nav__submenu-list');
    if (!target.closest(".header__menu")) {
       document.querySelectorAll(".nav__item-bottom").forEach(el => {
          el.classList.remove("nav__submenu-active");
      });
  
      dropdown.forEach(el => {
        el.classList.remove('nav__submenu-list-active')
      })
    }
  })

  let burger = document.querySelector('.burger');
  let burgerActive = document.querySelector('.header__nav-active')
  let closeMenu = document.querySelector('.burger__close')
  burger.addEventListener('click', function() {
    burgerActive.classList.add('header__nav-active-burger')
  })
  closeMenu.addEventListener('click', function() {
    burgerActive.classList.remove('header__nav-active-burger')
  })


  let searchBtn = document.querySelector('.header__search-btn');
  let searchActive = document.querySelector('.header__right');
  let closeBtn = document.querySelector('.header__right-cross');
  let entryField = document.querySelector('.nav__input-top');
  let searchBtnActive = document.querySelector('.header__right-search')

  closeBtn.addEventListener('click', function () {
    searchBtn.classList.remove('header__search-btn-active');
    searchActive.classList.remove('header__right-active');
  })

  document.addEventListener("click", function(e) {
    let target = e.target;
      if (target == searchBtn) {
        searchBtn.classList.add('header__search-btn-active');
        searchActive.classList.add('header__right-active');

      } else if (target != entryField && target != searchBtnActive && target != searchActive) {
        searchBtn.classList.remove('header__search-btn-active');
        searchActive.classList.remove('header__right-active');
      }
  })

})


// SECTION HERO //


// SECTION ABOUT //


// SECTION GALLERY //

// стилизация select
const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
});


// script by swiper on section gallery
swiperGallery = new Swiper('.gallery__swiper-container', {
  // Optional parameters
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  speed: 500,
  spaceBetween: 50,
  loop: false,
  grid: {
    fill: 'column',
    rows: 2,
  },

  breakpoints: {

    1131: {
      slidesPerView: 3,
      slidesPerColumn: 4,
      slidesPerGroup: 3,
    },

    1025: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 50,
    },

    577: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      grid: {
        fill: 'column',
        rows: 2,
      },
    
    },

    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerColumn: 1,
      grid: {
        fill: 'column',
        rows: 1,
      },
    }
  },

  pagination: {
    el: '.gallery__pagination',
    type: 'fraction', 
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
});



// SECTION CATALOG //

document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.catalog__top-btn').forEach(function(workBtn) {
    workBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelector('.catalog__left-active').classList.remove('catalog__left-active');

      document.querySelectorAll('.catalog__content').forEach(function (workContent) {
        workContent.classList.remove('catalog__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content-active')
      document.querySelectorAll('.catalog__left-block').forEach(function (blockActive) {
        blockActive.classList.add('catalog__left-active')
      })
    })
  })

  $(document).on('click', '.catalog__item', function() {
    $(this).toggleClass('catalog__item-active').siblings().removeClass('catalog__item-active');
  });

  document.querySelectorAll('.catalog__accordion-btn').forEach(function(workBtn) {
    workBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog__left').forEach(function (workContent) {
        workContent.classList.remove('catalog__left-active');
      })
      document.querySelector(`[data-target="${path}"]`).classList.toggle('catalog__left-active');

    })
  })

  // catalog tab
  $(document).on('click', '.catalog__top-item', function() {
    $(this).addClass('catalog__top-item-active').siblings().removeClass('catalog__top-item-active');
  });



  $(document).on('click', '.catalog__accordion-item', function() {
    $(this).toggleClass('catalog__accordion-item-active').siblings().removeClass('catalog__accordion-item-active');
  });

  // Плавный переход по якорным ссылкам
  // Переход с каталога в галерею
  $(document).ready(function(){
    $(".catalog__left, .accordion__content-right, .nav__list, .nav__list-burger").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href');
        let  top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 800, 'swing');
    });
  });
})



 


// SECTION EVENTS //

// Анимация в секции events

$('.events__btn').click(function() {
  $('.events__more').slideDown(500);
  $('.events__btn').addClass('events__btn-off');
});

$('.events__btn').click(function() {
  $('.events__more-second').slideDown(500);
  $('.events__more-second').css("display", "flex");
  $('.events__btn').addClass('events__btn-off');
});



const eventsSlider = document.querySelector('.events__slider-container');
  let swiperEvents;

  function mobileSlider() {
    if (window.innerWidth <= 576 && eventsSlider.dataset.mobile == 'false') {
      swiperEvents = new Swiper(eventsSlider, {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: false,
        slideClass: 'events__item',
        pagination: {
        	el: '.events__swiper-pagination',
        	clickable: 'true',
          type: 'bullets',
        },
      });
  
      eventsSlider.dataset.mobile = 'true';
    }
  
    if (window.innerWidth > 576) {
      eventsSlider.dataset.mobile = 'false';
      if (eventsSlider.classList.contains('swiper-initialized')) {
        swiperEvents.destroy();
      }
    }
  }
  
  mobileSlider()
  
  window.addEventListener('resize', () => {
    mobileSlider();
  });


// SECTION PUBLIC //


// анимация активации и удаления кастомного чекбокса в мобильной версии
function checkboxToggle() {
  let btn = document.querySelector(".public__link-accordion");
  let labels = document.querySelectorAll(".public__label-mobile");
  let listLabels = document.querySelector(".public__left-list-mobile");
  let arrow = document.querySelector('.public__link-btn')
  btn.addEventListener("click", toggleSpoiler);
  btn.addEventListener("keyup", function(e) {
    if (e.code === "Enter") {
      toggleSpoiler();
    }
  })    

function toggleSpoiler() {

  this.classList.toggle('public__link-active');
  if (this.classList.contains('public__link-active')) {
    arrow.classList.add('public__link-btn-active');
  } else {
    arrow.classList.remove('public__link-btn-active');
  }
  
    if (!listLabels.classList.contains("block-active")) {
    listLabels.classList.add("block-active");
    labels.forEach(item => {
    item.classList.remove('delete-btn')
      animationItem(item, "checkbox__label-active", "animation-test", "add");
    })
  } else {
    listLabels.classList.remove("block-active");
    
    labels.forEach(item => {
      if (item.querySelector(".public__input").checked) {
        item.classList.add('delete-btn')
        
      animationItem(item, "checkbox__label-active", "animation-test", "add");
      } else {
        item.classList.remove('delete-btn')
        animationItem(item, "checkbox__label-active", "animation-test", "remove");
      }
      });
  }
  labels.forEach(item => {
    item.addEventListener("click", function() {
      if (!listLabels.classList.contains("block-active")) {
        animationItem(this, "checkbox__label-active", "animation-test", "remove");
      }
    });
  })
}
}

function animationItem(item, class1, class2, f) {
 if (f === "add") {
    item.classList.add(class1);
  setTimeout(function() {
    item.classList.add(class2)
  }, 0);

 } else {
     item.classList.remove(class2);
  setTimeout(function() {
    item.classList.remove(class1)
  }, 300);
  }
 
}

checkboxToggle()


const publicSlider = document.querySelector('.public__swiper-container');
let swiperPublic;

function desktopSwiper() {
  if (window.innerWidth > 576 && publicSlider.dataset.desktop == 'true') {
    publicSlider.dataset.desktop = 'true';
    swiperPublic = new Swiper(publicSlider, {
      // Optional parameters
      slidesPerView: 1,
      spaceBetween: 50,
      slideClass: 'public__right-item',
      slidesPerGroup: 1,
      speed: 500,
      loop: false,
      

      breakpoints: {

        1130: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },

        769: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 50,
        },

        577: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 34,
        },



      },

      pagination: {
        el: '.public__pagination',
        type: 'fraction', 
      },

      // Navigation arrows
      navigation: {
        nextEl: '.public__button-next',
        prevEl: '.public__button-prev',
      },
    });
    publicSlider.dataset.desktop = 'false'
  }
  if (window.innerWidth <= 576) {
    if (publicSlider.classList.contains('swiper-initialized')) {
      swiperPublic.destroy();
    }
    publicSlider.dataset.desktop = 'true';
  }
}

desktopSwiper()

window.addEventListener('resize', () => {
  console.log('resize')
  desktopSwiper();
});



// SECTION PROJECTS //

// With the above scripts loaded, you can call `tippy()` with a CSS
// selector and a `content` prop:
tippy.setDefaultProps({trigger: 'click', theme: 'Amethyst',  maxWidth: 264});
tippy('#oneTooltip', {
  content: 'Пример современных тенденций - современная методология разработки.',
});

tippy('#twoTooltip', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции ',
});

tippy('#threeTooltip', {
  content: 'В стремлении повысить качество',
});

swiperProjects = new Swiper('.projects__swiper-container', {
  // Optional parameters

  slidesPerView: 1,
  // slidesPerColumnFill: 'column',
  slideClass: 'projects__item',
  slidesPerGroup: 1,
  slidesPerColumn: 1,
  speed: 500,
  spaceBetween: 50,
  loop: false,

  breakpoints: {

    1120: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },

    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    640: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    577: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },

    376: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.projects__button-next',
    prevEl: '.projects__button-prev',
  },
});


// SECTION CONTACTS //

 // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    var myMap = new ymaps.Map("myMap1", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.7, 37.60],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 10,
  });
  
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [55.7, 37.60] // координаты точки
    }
  });
  
  var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
    iconLayout: 'default#image',
    iconImageSize: [30, 42],
    iconImageOffset: [-3, -42],
    });
    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myPlacemark);
  };


// Валидация формы
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);


let inputName = document.querySelector('.contacts__input-name'); // Получаем input
let regex = /[0-9-%]/g; // регулярка только цифры
 
inputName.oninput = function(){
    this.value = this.value.replace(regex, '');
  }

let validateForms = function(selector, rules, successModal, yaGoal) {
  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 20,
        },
        tel: {
          required: true,
        //   function: (name, value) => {
        //     const phone = selector.inputmask.unmaskedvalue();
        //     return Number(phone) && phone.length === 10;
        // },
      },
      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено')
            }
          }
        }
        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset();
      }
    },
    
    messages: {
      name: {
        required: 'Как вас зовут?',
        minLength: 'Недопустимое значение',
      },
      tel: {
        required: 'Укажите ваш телефон'
      },
    },
  });  
}  

validateForms(selector, { email: {required: true, email: true}, tel: {required: true} }, '.thanks-popup', 'send goal');

// FOOTER //

