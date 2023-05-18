let metal = "";
let tungsten = "";


function script(script) {
  if (script = "") {alert("!  " + atob())} 
  else if (script = "") {alert("!  " + atob())}
  else if (script = "") {alert("!  " + atob())};
}
;

function boom() {
mainBoom = document.createElement("div");
mainBoomAudio = document.createElement("audio");
mainBoomImage = document.createElement("img");
mainBoomAudio.src = "./media/boom.mp3";
mainBoomImage.src = "./media/boom.png";
mainBoomImage.classList.add("largo");
document.body.appendChild(mainBoom);
mainBoom.appendChild(mainBoomAudio);
mainBoom.appendChild(mainBoomImage);
mainBoomAudio.play();
};

function playSong(song) {
songPlayer = document.createElement("audio");
songPlayer.src = "./media/" +song+ ".mp3";
document.body.appendChild(songPlayer);
songPlayer.play();

//Alert To Song Playing
alertSong = document.createElement("div");
alertSong.innerHTML = "Now Playing " + song + "!";
alertSong.classList.add("alertText")
document.body.appendChild(alertSong);
setInterval(function () {
  alertSong.remove()
}, 4900);
//Alert To Song Playing
};


function stopSong() {
songPlayer.remove();
};

