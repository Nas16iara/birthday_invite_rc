function openUp() {
  const $opentop = document.querySelector("#opentop");
  const $top = document.querySelector("#top");
  const $front = document.querySelector("#front");
  const $back = document.querySelector("#back");
  const $letter = document.querySelector("#letter");
  const $button = document.querySelector(".open");
  var audio = document.getElementById("background-music");
  console.log("Audio", audio);

  $opentop.beginElement();
  $top.style.zIndex = 2;
  $top.classList.add("animate");
  $front.classList.add("animate");
  $back.classList.add("animate");
  $button.classList.add("animate");
  $letter.classList.add("animate");
}

function closeUp() {
  var audio = document.getElementById("background-music");
  console.log("Audio", audio);
  audio.pause();
  audio.currentTime = 0;
  window.location.reload();
}

function stopAudio() {
  var audio = document.getElementById("background-music");
  console.log("Audio", audio);
  if (audio?.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

document.addEventListener("click", stopAudio);
