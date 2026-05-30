window.addEventListener("DOMContentLoaded", () => {

  /* ---------------- TIME ---------------- */

  function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    const timeEl = document.getElementById("time");

    if (timeEl) {
      timeEl.innerText = `${hours}:${minutes} ${ampm}`;
    }
  }

  updateTime();
  setInterval(updateTime, 1000);


  /* ---------------- BEAR ---------------- */

  const bear = document.getElementById("bear");
  const music = document.getElementById("bearMusic");

  if (bear) {
    bear.addEventListener("mouseenter", () => {
      bear.src = "bear2.png";

      if (music) {
        music.currentTime = 0;
        music.play();
      }
    });

    bear.addEventListener("mouseleave", () => {
      bear.src = "bear1.png";

      if (music) {
        music.pause();
        music.currentTime = 0;
      }
    });
  }


  /* ---------------- CAPY ---------------- */

  const capy = document.getElementById("capyImg");

  if (capy) {
    capy.addEventListener("mouseenter", () => {
      capy.src = "image-removebg-preview (2).png";
    });

    capy.addEventListener("mouseleave", () => {
      capy.src = "image-removebg-preview (1).png";
    });
  }

});