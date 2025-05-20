const gift = document.getElementById("gift");
const playBtn = document.getElementById("play-btn");
const anniversaryVideo = document.getElementById("anniversary-video");

document.addEventListener("DOMContentLoaded", function () {
   gift.classList.add("show");
   playBtn.classList.add("d-none");
   anniversaryVideo.classList.add("d-none");
});

function openPlayBtn() {
   gift.classList.remove("show");
   gift.classList.add("hide");
   setTimeout(() => {
      gift.classList.add("d-none");
      playBtn.classList.remove("d-none");
   }, 1000);
   playBtn.classList.remove("hide");
   playBtn.classList.add("show");
}
function openVideo() {
   playBtn.classList.remove("show");
   playBtn.classList.add("hide");
   setTimeout(() => {
      playBtn.classList.add("d-none");
      anniversaryVideo.classList.remove("d-none");
      anniversaryVideo.classList.add("show");
   }, 1000);
}

gift.addEventListener("click", openPlayBtn);
playBtn.addEventListener("click", openVideo);
