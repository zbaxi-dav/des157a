(() => {
  "use strict";
  console.log("reading js");


// MUSIC BUTTON
  const musicButton = document.getElementById("musicButton");
  const backgroundMusic = document.getElementById("backgroundMusic");
  let isPlaying = false; 

  musicButton.addEventListener("click", () => {
    if (isPlaying) {
      backgroundMusic.pause();
      musicButton.textContent = "♪"; // Reset to music note
    } else {
      backgroundMusic.play();
      musicButton.textContent = "⏹︎"; // Change to stop/pause icon
    }
    isPlaying = !isPlaying;
  });

// INFO BUTTON
  const infoIcon = document.getElementById("infoIcon");
  const infoLightbox = document.getElementById("infoLightbox");

  infoIcon.addEventListener("click", () => {
    infoLightbox.classList.remove("hidden");
  });

  infoLightbox.querySelector(".close-lightbox").addEventListener("click", () => {
    infoLightbox.classList.add("hidden");
  });

// OPENING A DISH

  document.addEventListener("DOMContentLoaded", () => {
    const dishes = document.querySelectorAll("#dish1, #dish2, #dish3, #dish4, #dish5, #dish6, #dish7");
    const lightboxes = document.querySelectorAll(".lightbox");
    const closeButtons = document.querySelectorAll(".close-lightbox");

    dishes.forEach((dish, index) => {
      dish.addEventListener("click", () => {
        const clickedLightbox = document.getElementById(`lightbox${index + 1}`);
        if (clickedLightbox) {
          clickedLightbox.classList.remove("hidden");
        }
      });
    });

    

// CLOSE A DISH
    lightboxes.forEach(lightbox => {
      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
          lightbox.classList.add("hidden");
        }
      });
    });

    closeButtons.forEach(button => {
      button.addEventListener("click", () => {
        const lightbox = button.closest(".lightbox");
        if (lightbox) {
          lightbox.classList.add("hidden");
        }
      });
    });
  });

})();
