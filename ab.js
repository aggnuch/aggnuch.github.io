var w, h;

function setup() {
	w = window.innerWidth;
	h = window.innerHeight;
	b = 69;
	var left = document.getElementById("left");
	if ((w / h) < 1) {
		left.style.minWidth = "100%";
		left.style.maxWidth = "100%";
		right.style.minWidth = "100%";
		right.style.maxWidth = "100%";
	}
	else {
		left.style.minWidth = "20%";
		left.style.maxWidth = "20%";
		right.style.minWidth = "80%";
		right.style.maxWidth = "80%";
	}
	$('.holder').masonry({
		columnWidth: (w*0.1)
	});
}