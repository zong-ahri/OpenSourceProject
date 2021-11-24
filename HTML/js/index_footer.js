const music_pointer = document.querySelector("#music_pointer");
const music_like = document.querySelector("#music_like");
const music_left = document.querySelector("#music_left");
const music_right = document.querySelector("#music_right");
const music_pause = document.querySelector("#music_pause");
const music_play = document.querySelector("#music_play");

music_left.onclick = () => {
    music_pointer.style.left = "20%"
    music_play.style.display = "block";
    music_pause.style.display = "none";
}

music_right.onclick = () => {
    music_pointer.style.left = "79.5%"
    music_play.style.display = "block";
    music_pause.style.display = "none";
}

music_play.onclick = () => {
    music_play.style.display = "none";
    music_pause.style.display = "block";
}

music_pause.onclick = () => {
    music_play.style.display = "block";
    music_pause.style.display = "none";
}