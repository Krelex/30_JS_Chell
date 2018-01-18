//Get our Elements!!

let player = document.querySelector('.player');
let video = player.querySelector('.viewer');
let progres = player.querySelector('.progress');
let playBtt = player.querySelector('.toggle');
let progresBar = player.querySelector('.progress__filled');
let progress = player.querySelector('.progress');
let slider = player.querySelectorAll('.player__slider');
let skipBtt = player.querySelectorAll('[data-skip]');

console.log(skipBtt);

//Build our function
function togglePlay() {
	if(video.paused) {
		video.play();
	}else {
		video.pause();
	}
}

function updateBtt () {
	let icon = this.paused ? '►' : '❚ ❚';
	playBtt.textContent = icon;
}

function skip () {
	console.log(this.dataset.skip);
	video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate () {
	video[this.name]= this.value;
	console.log(this.value);
	console.log(this.name);
}

function timeUpdate () {
	const persent = (video.currentTime / video.duration) * 100;
	progresBar.style.flexBasis = `${persent}%` ;
}

function scrub (e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;

	console.log(e);
}

//Hook up the event listeners

video.addEventListener("click", togglePlay); // stisak za play video
playBtt.addEventListener("click", togglePlay); // stisak za play button

video.addEventListener("play",updateBtt); //update "play" and "pause" slicica
video.addEventListener("pause",updateBtt);

video.addEventListener("timeupdate", timeUpdate); //bar trajanja vide-a

skipBtt.forEach( bt => bt.addEventListener('click', skip)); // stavljanje eventListenera na oba elementa i skipanje

slider.forEach(slid => slid.addEventListener('change', rangeUpdate)); //EL na elemente za zvuk i brzinu reprodukcije

let mousedown = false;
progress.addEventListener("click",scrub);
progress.addEventListener("mousemove", (e) => mousedown &&  scrub(e));
progress.addEventListener("mousedown",() => mousedown=true);
progress.addEventListener("mouseup",() => mousedown=false);

console.log(progress.offsetWidth);
