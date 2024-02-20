// скрипт плавного появления секций
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('animated'); // Добавляем класс 'animated' при видимости
          observer.unobserve(entry.target);
      }
      });
  }, { threshold: 0.15 });

  sections.forEach(section => {
      observer.observe(section);
  });
});
// скрипт плавного появления секций
document.addEventListener('DOMContentLoaded', () => {
const articles = document.querySelectorAll('article');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('animated'); // Добавляем класс 'animated' при видимости
        observer.unobserve(entry.target);
    }
    });
}, { threshold: 0.15 });

articles.forEach(article => {
    observer.observe(article);
});
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


// burger
document.addEventListener('DOMContentLoaded', function() {
  // Получаем необходимые элементы DOM
  const burgerMenu = document.getElementById('header__burger');
  const overlayMenu = document.querySelector('.overlay-menu');
  const body = document.querySelector('body');
  const headerLogo = document.querySelector('.header__logo');
  let overlayBackground = document.createElement('div'); // Создаем элемент подложки overlay
  body.appendChild(overlayBackground); // Добавляем подложку в body

  // Функция для открытия/закрытия меню
  function toggleMenu() {
      overlayMenu.classList.toggle('active'); // Переключаем класс для меню
      body.classList.toggle('fixed'); // Переключаем класс для body
      
      // Добавляем/удаляем класс для header__logo при активации/деактивации меню
      headerLogo.classList.toggle('logo-active', overlayMenu.classList.contains('active'));

      // Показываем/скрываем подложку overlay background
      overlayBackground.classList.toggle('overlay-background', overlayMenu.classList.contains('active'));

      // Изменение иконки в зависимости от состояния меню
      if (overlayMenu.classList.contains('active')) {
          burgerMenu.innerHTML = `
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L20.7633 21.4149" stroke="black" stroke-width="2.25" stroke-linecap="round" />
            <path d="M21 2L2.57802 21.7391" stroke="black" stroke-width="2.25" stroke-linecap="round" />
          </svg>
          `;
      } else {
          burgerMenu.innerHTML = `
          <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H24" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
                        <path d="M2 12H24" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
                        <path d="M2 22H24" stroke="#191919" stroke-width="3" stroke-linecap="round"/>
          </svg>
          `;
      }
  }

  // Обработчик события клика на иконку бургер-меню
  burgerMenu.addEventListener('click', function(event) {
      event.stopPropagation();
      toggleMenu();
  });

  // Обработчик события клика вне меню (закрытие меню)
  document.addEventListener('click', function(event) {
      if (!overlayMenu.contains(event.target) && overlayMenu.classList.contains('active')) {
          toggleMenu();
      }
  });

  // Добавляем обработчики событий клика для ссылок в меню
  const menuLinks = document.querySelectorAll('.overlay-menu a');
  menuLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          toggleMenu(); // Закрываем меню при клике на ссылку
          // Добавьте дополнительный функционал, если необходимо (например, прокрутка к нужному разделу)
      });
  });
});




document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.partners__container');
  var wrapper = document.querySelector('.partners-gallery__wrapper');
  var slides = document.querySelectorAll('.swiper-slide');

  var slideWidth = slides[0].offsetWidth;
  var animationTime = 500; // Время анимации

  // Функция для перемещения карусели влево
  function moveLeft() {
      var totalWidth = wrapper.scrollWidth;
      var currentScroll = wrapper.scrollLeft;
      var endScroll = currentScroll + slideWidth;
      var distanceToMove = endScroll < totalWidth ? slideWidth : totalWidth - currentScroll;
      animate(wrapper.scrollLeft, currentScroll + distanceToMove, animationTime);
  }

  // Функция для анимации прокрутки
  function animate(start, end, duration) {
      var startTime = null;

      function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = timestamp - startTime;
          var percentage = Math.min(progress / duration, 1);

          wrapper.scrollLeft = start + (end - start) * percentage;

          if (progress < duration) {
              window.requestAnimationFrame(step);
          } else {
              if (wrapper.scrollLeft === wrapper.scrollWidth - wrapper.offsetWidth) {
                  wrapper.scrollLeft = 0;
              }
          }
      }

      window.requestAnimationFrame(step);
  }

  // Автоматическое перемещение карусели влево
  var intervalId = setInterval(moveLeft, 3000);

  // Пауза автоматического перемещения карусели при наведении мыши
  container.addEventListener('mouseenter', function () {
      clearInterval(intervalId);
  });

  // Возобновление автоматического перемещения карусели при уходе мыши
  container.addEventListener('mouseleave', function () {
      intervalId = setInterval(moveLeft, 3000);
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.portfolio-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 24,
    autoplay: {
      delay: 11000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.portfolio-slider-button-next',
      prevEl: '.portfolio-slider-button-prev',
    },
    pagination: {
      el: '.tariff-slider-secondary-pagination',
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      567: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    }
  });
});


document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.tariff-slider', {
      direction: 'horizontal',
      loop: true, // Если нужно бесконечное прокручивание
      slidesPerView: 'auto',
      spaceBetween: 467,
      autoplay: {
        delay: 11000, // Интервал между слайдами в миллисекундах
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.tariff-slider-button-next',
        prevEl: '.tariff-slider-button-prev',
      },
      pagination: {
        el: '.tariff-slider-pagination', // Элемент, куда будет рендериться пагинация
        clickable: true, // Разрешить переключение слайдов по клику на пагинации
        type: 'bullets',
      }
    });
});
  
document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.tariff-slider-secondary', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    autoplay: {
      delay: 11000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.tariff-slider-secondary-button-next',
      prevEl: '.tariff-slider-secondary-button-prev',
    },
    pagination: {
      el: '.tariff-slider-secondary-pagination',
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      567: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.tariff-slider-alt', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    centeredSlides: true,
    
    autoplay: {
      delay: 11000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.tariff-slider-alt-button-next',
      prevEl: '.tariff-slider-alt-button-prev',
    },
    pagination: {
      el: '.tariff-slider-alt-pagination',
      clickable: true,
      type: 'bullets',
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      991: {
        slidesPerView: 3,
      },
      767: {
        slidesPerView: 2,
      },
      567: {
        slidesPerView: 2,
      },
      290: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1,
      },
      
    },

    // используем jq для переопределения классов swiper-slide
    on: {
      init() {
        updateClasses(this);
      },
      slideChange() {
        updateClasses(this);
      },
    },
    
    
  });

  // функция jq превращаем слайд после .swiper-slide-next в .swiper-slide-next-next

  function updateClasses({ $el, slides, activeIndex }) {
    $el.find('.swiper-slide-prev-prev').removeClass('swiper-slide-prev-prev');
    slides.eq(activeIndex).prev().prev().addClass('swiper-slide-prev-prev');
  
    $el.find('.swiper-slide-next-next').removeClass('swiper-slide-next-next');
    slides.eq(activeIndex).next().next().addClass('swiper-slide-next-next');
  }
});


  document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.whyus-slider', {
      direction: 'horizontal',
      loop: true, // Если нужно бесконечное прокручивание
      slidesPerView: 'auto',
      spaceBetween: 30,
      autoplay: {
        delay: 11000, // Интервал между слайдами в миллисекундах
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.whyus-slider-button-next',
        prevEl: '.whyus-slider-button-prev',
      },


    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.team-slider', {
      direction: 'horizontal',
      loop: true, // Если нужно бесконечное прокручивание
      slidesPerView: 'auto',
      spaceBetween: 467,
      autoplay: {
        delay: 3000, // Интервал между слайдами в миллисекундах
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.team-slider-button-next',
        prevEl: '.team-slider-button-prev',
      },
      pagination: {
        el: '.team-slider-pagination', // Элемент, куда будет рендериться пагинация
        clickable: true, // Разрешить переключение слайдов по клику на пагинации
        type: 'bullets',
      }


    });
  });
  
// const videoSection = document.querySelector('.video');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             videoSection.classList.add('sticky');
//         } else {
//             videoSection.classList.remove('sticky');
//         }
//     });
// }, { threshold: 0.99 }); // 0.8 означает, что секция считается видимой, если она видна хотя бы на 80%

// observer.observe(videoSection);

// document.getElementById('myForm').addEventListener('submit', function(event) {
//   var inputName = document.getElementById('inputName').value.trim();
//   var errorMessage = document.querySelectorAll('.error-message');
//   if (!inputName.match(/[a-zA-Z]/)) {
//       errorMessage.style.display = 'block'; // Показываем кастомное сообщение об ошибке
//       event.preventDefault(); // Предотвращаем отправку формы
//   } else {
//       errorMessage.style.display = 'block'; // Скрываем кастомное сообщение об ошибке
//       // Дополнительная пользовательская валидация здесь, если необходимо
//   }
// });

// // Предотвращаем стандартное поведение HTML5-валидации
// document.getElementById('myForm').addEventListener('invalid', function(event) {
//   event.preventDefault();
// }, true);

// // Скрытие кастомного сообщения об ошибке при вводе в поле
// document.getElementById('inputName').addEventListener('input', function() {
//   var errorMessage = document.getElementById('nameErrorMessage');
//   errorMessage.style.display = 'block';
// });



document.addEventListener("DOMContentLoaded", function() {
  const subFilters = document.querySelectorAll('.sub-filters .list-group-item');

  subFilters.forEach(function(subFilter) {
      subFilter.addEventListener('click', function() {
          // Добавляем или удаляем класс "active" при клике на подфильтр
          this.classList.toggle('active');
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const popupTrigger = document.querySelector('.portfolio__filter-ico');
  const popup = document.getElementById('portfolioPopup');

  popupTrigger.addEventListener('click', function() {
      popup.classList.add('active');
  });

  popup.addEventListener('click', function(event) {
    if (event.target === this || event.target.closest('.close-popup')) {
        popup.classList.remove('active');
    }
  });

});





function toggleAccordion(buttonId, contentId) {
  const button = document.getElementById(buttonId);
  const content = document.getElementById(contentId);
  
  const expanded = button.getAttribute('aria-expanded') === 'true';
  
  if (expanded) {
      button.setAttribute('aria-expanded', 'false');
      content.setAttribute('aria-hidden', 'true');
  } else {
      button.setAttribute('aria-expanded', 'true');
      content.setAttribute('aria-hidden', 'false');
  }
}
