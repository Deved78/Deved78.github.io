let metal = "amF2YXNjcmlwdDogbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NwYWNlYmFyX2NsaWNrZXJfZ2FtZScsICd7ImVtcHR5IjpmYWxzZSwidiI6MTAwMDAwMDAwMDAwMDAwMDAsIml0ZW1zIjpbeyJjb3N0IjozMCwibHZsIjowLCJ2YWx1ZSI6MC4yfSx7ImNvc3QiOjEyMCwibHZsIjowLCJ2YWx1ZSI6M30seyJjb3N0Ijo1MDAsImx2bCI6MCwidmFsdWUiOjIwfSx7ImNvc3QiOjYwMDAsImx2bCI6MH0seyJjb3N0IjoxMDAwMCwibHZsIjowLCJ2YWx1ZSI6MTUwfSx7ImNvc3QiOjIwMDAwMCwibHZsIjowLCJ2YWx1ZSI6NjAwfSx7ImNvc3QiOjgwMDAwMCwibHZsIjowLCJ2YWx1ZSI6MzUwMH0seyJjb3N0IjoyMDAwMDAwLCJsdmwiOjAsInZhbHVlIjoyNTAwMH0seyJjb3N0IjoxMDAwMDAwMCwibHZsIjowLCJ2YWx1ZSI6MTAwMDAwfSx7ImNvc3QiOjgwMDAwMDAwLCJsdmwiOjAsInZhbHVlIjoxMDAwMDAwfV19Jyk7IHdpbmRvdy5sb2NhdGlvbi5ocmVmPSJodHRwczovL2pzMTNrZ2FtZXMuY29tL2dhbWVzL3NwYWNlYmFyLWNsaWNrZXIvaW5kZXguaHRtbCI7";
let tungsten = "";


function writeScript(script) {
  if (script = "spacebarclicker") {alert("HACKER!!!!  " + atob(metal))} 
  else if (script = "") {alert("!  " + atob())}
  else if (script = "") {alert("!  " + atob())};
};

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

