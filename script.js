function updateTime() {

  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;

  minutes = minutes < 10 ? '0' + minutes : minutes;

  const currentTime = `${hours}:${minutes} ${ampm}`;

  document.getElementById("time").innerText = currentTime;
}

updateTime();

setInterval(updateTime, 1000);

/* ELEMENTS */

const bear =
document.getElementById("bear");

const music =
document.getElementById("bearMusic");

/* HOVER */

if (bear) {
  bear.addEventListener("mouseenter", () => {

    /* CHANGE IMAGE */

    bear.src = "bear2.png";

    /* PLAY MUSIC */

    if (music) {
      music.currentTime = 0;
      music.play();
    }

  });

  /* LEAVE */

  bear.addEventListener("mouseleave", () => {

    /* BACK TO NORMAL */

    bear.src = "bear1.png";

    /* STOP MUSIC */

    if (music) {
      music.pause();
      music.currentTime = 0;
    }

  });
}

window.addEventListener('DOMContentLoaded', () => {

  const capy = document.getElementById("capyImg");
  const capyMusic = document.getElementById("capyMusic");

  if (capy) {
    capy.addEventListener("mouseover", function(){
      capy.src = "image-removebg-preview (2).png";
      if (capyMusic) {
        capyMusic.currentTime = 0;
        capyMusic.play().catch(() => {
          // Ignore play errors from browser autoplay restrictions.
        });
      }
    });

    capy.addEventListener("mouseout", function(){
      capy.src = "image-removebg-preview (1).png";
      if (capyMusic) {
        capyMusic.pause();
        capyMusic.currentTime = 0;
      }
    });
  }

});