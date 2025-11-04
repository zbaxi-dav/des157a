(function(){
  'use strict';
  console.log('running JS');

  const cards = document.querySelectorAll('.food-card');

  cards.forEach(card => {
    const infoBox = card.querySelector('.info');
    const story = card.getAttribute('data-info');
    infoBox.textContent = story;

    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });

})();
