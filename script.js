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


window.onload = function(){

  const capy =
  document.getElementById("capyImg");

  const music =
  document.getElementById("capyMusic");

  capy.addEventListener("mouseenter", function(){

    capy.src =
    "./image-removebg-preview (2).png";

    music.play();

  });

  capy.addEventListener("mouseleave", function(){

    capy.src =
    "./image-removebg-preview (1).png";

    music.pause();

    music.currentTime = 0;

  });

}