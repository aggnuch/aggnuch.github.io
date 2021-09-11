var quoteList = ["You're like the sun that shines, my love.","Don't beat yourself up over small things.","If anyone hasn't told you today, you are special.","You are the best person on this planet.","Don't compare yourself to others.","Take a rest if you badly need one.","Don't forget to take care of yourself today.","You don't need the approval of others for your self-worth.","You are the most beautiful human being ever.","I want you to be happy today!","Don't overstress yourself!","I am happy that you are alive right now.","You deserve all the love in this world.","Always put yourself first.","A smile on your face would look good on you.","Don't play with your feelings, my love.","Do your extra best today!","Make yourself happy everyday.","Someone out there loves and cares for you.","It's okay to cry! Let all your feelings out.","You are special in your own ways even if you don't realize it.","Soon you will achieve everything you dream of being.","Your failures will turn into success one day.","I love you very much!","We all go at our own paces.","Stop overthinking :(","Promise me that you will love yourself today?","Have a great day, my love!","Don't pressure yourself to work if you don't feel like it.","Make yourself feel special today!","Reward yourself for your little achievements :)","Give yourself a pat on the back for doing great today.","Hang in there; better days are coming for you.","Make some time for yourself.","I hope your day goes well for you!","Don't feel too upset because you weren't productive enough!","A lot more people love you more than you think.","You deserve happiness, my love!","You're doing great today!","I'm proud of you for surviving today.","Keep yourself hydrated all the time!","I want you to bring out the best of yourself :)","Don't be too sad if things don't go your way :(","You are beautiful in your own way.","Never let others bring you down."];
var imageList = [{"id":4992945,"or":"landscape","pos":"center"},{"id":662994,"or":"landscape","pos":"center"},{"id":545313,"or":"landscape","pos":"center"},{"id":982673,"or":"portrait","pos":"center"},{"id":2764107,"or":"landscape","pos":"center"},{"id":1152359,"or":"landscape","pos":"center"},{"id":600114,"or":"portrait","pos":"center"},{"id":1300510,"or":"landscape","pos":"center"},{"id":"https://images.pexels.com/photos/34066/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","or":"landscape","pos":"center"},{"id":262713,"or":"landscape","pos":"center"},{"id":462023,"or":"landscape","pos":"center"},{"id":258136,"or":"landscape","pos":"center"},{"id":733174,"or":"landscape","pos":"center"},{"id":1423601,"or":"landscape","pos":"center"},{"id":1624255,"or":"landscape","pos":"center"},{"id":5245865,"or":"landscape","pos":"center"},{"id":552789,"or":"landscape","pos":"center"},{"id":257092,"or":"landscape","pos":"center"},{"id":"https://images.pexels.com/photos/46253/mt-fuji-sea-of-clouds-sunrise-46253.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260","or":"landscape","pos":"center"},{"id":38326,"or":"landscape","pos":"center"},{"id":296849,"or":"landscape","pos":"center"},{"id":1261728,"or":"landscape","pos":"center"},{"id":66997,"or":"landscape","pos":"center"},{"id":5111271,"or":"landscape","pos":"center"},{"id":3876394,"or":"landscape","pos":"center"},{"id":1335115,"or":"landscape","pos":"center"},{"id":1403550,"or":"landscape","pos":"center"},{"id":1420440,"or":"portrait","pos":"center"}];
var colorList = ["#f898a4","#fcda9c","#f7faa1","#b4f6a4","#9be0f1","#a2aceb"];
var fontList = ["Kalam","Cookie","Handlee","Bad Script","Shadows Into Light Two","Coming Soon","Delius","Grand Hotel","Sansita Swashed","Rouge Script","Euphoria Script","Margarine","Bellota Text"];
var imageNumber;

function generateSentence() {
	console.log(quoteList.length + " quotes, " + imageList.length + " images, " + "6 colors, " + fontList.length + " fonts. ORAYT!");
	imageNumber = randomize(0,imageList.length-1);
	quoteNumber = randomize(0,quoteList.length-1);
	fontNumber = randomize(0,fontList.length-1);
	colorNumber = randomize(0,5);
	document.getElementById("holder").style.backgroundColor = colorList[colorNumber];
	if (Number.isInteger(imageList[imageNumber].id)) { 
		source = 'https://images.pexels.com/photos/' + imageList[imageNumber].id + "/pexels-photo-" + imageList[imageNumber].id + ".jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
	}
	else {
		source = imageList[imageNumber].id;
	}
	document.getElementById("sentenceHolder").style.backgroundImage = "url('" + source + "')";
	if (imageList[imageNumber].or == "landscape") {
		document.getElementById("sentenceHolder").style.backgroundSize = "auto 640px";
	}
	else {
		document.getElementById("sentenceHolder").style.backgroundSize = "640px auto";
	}
	document.getElementById("sentenceHolder").style.backgroundPosition = imageList[imageNumber].pos;
	document.getElementById("sentence").style.fontFamily = fontList[fontNumber];
	document.getElementById("sentence").innerHTML = quoteList[quoteNumber];
}

function alerted() {
	document.getElementById("alertHolder").style.display = "block";
	document.getElementById("imgSrc").innerHTML = source;
	document.getElementById("fontSrc").innerHTML = fontList[fontNumber];
}

function isara() {
	document.getElementById("alertHolder").style.display = "none";
}

function randomize(a,b) {
	return Math.floor(Math.random() * (b-a+1)) + a;
}