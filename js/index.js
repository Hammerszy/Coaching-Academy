// const swiper = new Swiper('.swiper-testimonials', {
//     loop: true, 
//     navigation: {
//       nextEl: '#sliderNext',
//       prevEl: '#sliderPrev',
//     },

//     pagination: {
//         el: '#slider-controls__count', // Вказуємо ID контейнера

//       },
//   });

  const titles = document.querySelectorAll('.accordion-title__faq');
const contents = document.querySelectorAll('.accordion-content__faq');

titles.forEach(item => {
  item.addEventListener('click', () => {
    const activeContent = document.querySelector('#' + item.dataset.tab);

    if (activeContent.classList.contains('active')) {

      activeContent.classList.remove('active');
      item.classList.remove('active');
      activeContent.style.maxHeight = 0;
    } else {

      contents.forEach(element => {
        element.classList.remove('active');
        element.style.maxHeight = 0;
      });
      titles.forEach(element => element.classList.remove('active'));


      item.classList.add('active');
      activeContent.classList.add('active');
      activeContent.style.maxHeight = activeContent.scrollHeight + 'px';
    }
  });
});