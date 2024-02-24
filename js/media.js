const audioEle = document.getElementById('audio');
let isPlaying = false;

var tracks = audioEle.getElementsByTagName('source');
var currentTrack = Math.floor(Math.random() * (tracks.length));;
console.log(currentTrack);
audioEle.addEventListener('ended', function () {
	currentTrack = (currentTrack + 1) % tracks.length;
	audioEle.src = tracks[currentTrack].src;
	audioEle.play();
});

function toggleAudio() {
	if (isPlaying) {
		audioEle.pause();
	} else {
		audioEle.play();
	}
	isPlaying = !isPlaying;
}
document.onkeydown = function (e) {
	if (e.keyCode === 32) {
		toggleAudio();
	}
};

let currentImageIndex = 0;
const imageElements = document.querySelectorAll('.transition-image');

// Hàm thay đổi hình ảnh
function changeImage() {
	currentImageIndex = (currentImageIndex + 1) % imageElements.length;
	const currentImageElement = imageElements[currentImageIndex];

	imageElements.forEach(element => {
		element.classList.remove('active');
	});

	currentImageElement.classList.add('active');
}

// Đặt thời gian thay đổi hình ảnh (đơn vị là mili-giây)
const imageChangeInterval = 5000; // 5 giây

// Bắt đầu thay đổi hình ảnh
setInterval(changeImage, imageChangeInterval);