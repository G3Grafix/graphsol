const music = document.getElementById("music");
const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

function formatTime(time){

    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);

    return mins + ":" + String(secs).padStart(2,"0");

}

music.addEventListener("loadedmetadata", () => {

    progress.max = music.duration;

    duration.textContent = formatTime(music.duration);

});

playBtn.addEventListener("click", () => {

    if(music.paused){

        music.play();

        playBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

    }else{

        music.pause();

        playBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    }

});

music.addEventListener("timeupdate", () => {

    progress.value = music.currentTime;

    current.textContent =
    formatTime(music.currentTime);

});

progress.addEventListener("input", () => {

    music.currentTime = progress.value;

});

music.addEventListener("ended", () => {

    progress.value = 0;

    current.textContent = "0:00";

    playBtn.innerHTML =
    '<i class="fa-solid fa-play"></i>';

});