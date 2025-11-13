// MUSIC BUTTON
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");
let isPlaying = false;

musicButton.addEventListener("click", () => {
  if (isPlaying) {
    backgroundMusic.pause();
    musicButton.textContent = "♪"; // reset symbol
  } else {
    backgroundMusic.play();
    musicButton.textContent = "⏹︎"; // pause symbol
  }
  isPlaying = !isPlaying;
});





const infoIcon = document.getElementById('infoIcon');
const infoLightbox = document.getElementById('infoLightbox');
// INFO BOX OPEN
infoIcon.addEventListener('click', () => {
  infoLightbox.classList.remove('hidden');
});
//INFO BOX CLOSE
infoLightbox.querySelector('.close-lightbox').addEventListener('click', () => {
  infoLightbox.classList.add('hidden');
});





document.addEventListener("DOMContentLoaded", () => {
  const dishes = document.querySelectorAll("#dish1, #dish2, #dish3, #dish4, #dish5, #dish6, #dish7");
  const lightboxes = document.querySelectorAll(".lightbox");
  const closeButtons = document.querySelectorAll(".close-lightbox");


  // OPEN LIGHT BOX
  dishes.forEach((dish, index) => {
    dish.addEventListener("click", () => {
      const clickLightbox = document.getElementById(`lightbox${index + 1}`);
      if (clickLightbox) {
        clickLightbox.classList.remove("hidden");
      }
    });
  });

  // CLOSE
  lightboxes.forEach(lightbox => {
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        lightbox.classList.add("hidden");
      }
    });
  });

  // CLOSE WITH X
  closeButtons.forEach(button => {
    button.addEventListener("click", (event) => {
      const lightbox = button.closest(".lightbox");
      if (lightbox) {
        lightbox.classList.add("hidden");
      }
    });
  });
});
