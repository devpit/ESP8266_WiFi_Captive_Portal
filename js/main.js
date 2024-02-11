const viewPassword = document.getElementById('viewPass');
const passwordInput = document.getElementById('pass');

viewPassword.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
});


let docTitle = document.title;
let docIcon = document.querySelector('link[rel="icon"]').href;
let alertSound = new Audio('/aud/new_messages.mp3');
let audioPlayed = false;

document.addEventListener("visibilitychange", function() {
  if (document.hidden && !audioPlayed) {
    document.title = "Hei! Volte aqui...";
    document.querySelector('link[rel="icon"]').href = "https://www.svgrepo.com/show/185493/alarm-alert.svg";

    alertSound.play();
    audioPlayed = true; 
  } else {
    document.title = docTitle;
    document.querySelector('link[rel="icon"]').href = docIcon;
  }
});


document.addEventListener("visibilitychange", function() {
  if (!document.hidden) {
    alertSound.pause();
    alertSound.currentTime = 0;
    audioPlayed = false; 
  }
});