var imageList = [{"id":1403550,"or":"landscape","pos":"center"},{"id":1420440,"or":"portrait","pos":"center"}];
var imageNumber;

function generateSentence() {
	imageNumber = randomize(0,imageList.length-1);
	document.getElementById("sentenceHolder").style.backgroundImage = "url('https://images.pexels.com/photos/" + imageList[imageNumber].id + "/pexels-photo-" + imageList[imageNumber].id + ".jpeg?auto=compress&cs=tinysrgb&dpr=3&h=1080&w=1920')";
	if (imageList[imageNumber].or == "landscape") {
		document.getElementById("sentenceHolder").style.backgroundSize = "auto 640px";
	}
	else {
		document.getElementById("sentenceHolder").style.backgroundSize = "640px auto";
	}
}

function randomize(a,b) {
	return Math.floor(Math.random() * (b-a+1)) + a;
}