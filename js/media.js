const audioEle = document.getElementById('audio');
let isPlaying = false;

function toggleAudio() {
	console.log(isPlaying);
	if (isPlaying) {
		audioEle.pause();
	} else {
		audioEle.play();
	}
	isPlaying = !isPlaying;
}

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
const imageChangeInterval = 3000; // 5 giây

// Bắt đầu thay đổi hình ảnh
setInterval(changeImage, imageChangeInterval);