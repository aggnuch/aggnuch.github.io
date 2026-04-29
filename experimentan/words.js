var wordFormed = "";
var wordPoint = 0;
var score = 0;
var firstTime = "true";

var press = new Audio('press.wav'); press.volume = 1;
var correct = new Audio('correct.wav'); correct.volume = 1;
var wrong = new Audio('wrong.wav'); wrong.volume = 1;
var clap = new Audio('clap.wav'); clap.volume = 1;
var back = new Audio('back.wav'); back.volume = 1;
var time_ = new Audio('time.wav'); time_.volume = 1;
var highscore = new Audio('highscore.wav'); time_.volume = 0.7;

var time = 0;
var maxTime = 0;
var lives = 3;
var timeTaken = 0;
var timeCurrent = 0;
var overallTime = 0;
var overallGames = 0;
var overallWords = 0;

var lights = ["d66b67","de965d","f6e702","b5db7f","8ecdd2","8f97cf"];
var hovers = ["d874a6","dca26d","e2d709","8fc986","609bd8","9e59d9"];
var shadows = ["d5297f","ff7621","f3cf26","21c47b","2f7dd3","761cd4"];
var colorSeed = 0;
var limahanShadows = ["0px 3px #d5297f", "0px 6px #ff7621", "0px 9px #f3cf26", "0px 12px #21c47b", "0px 15px #2f7dd3", "0px 18px #761cd4", "0px 21px #d5297f", "0px 24px #ff7621", "0px 27px #f3cf26", "0px 30px #21c47b", "0px 33px #2f7dd3", "0px 36px #761cd4"];

var formed = [false,false,false,false,false];
var scale_a = [1,1,1,1,1];
var step_a = [1,1,1,1,1];
var answerAnim = new Array(5);
var screen_width = 0;
var inst = 0;

var eng_words = ["about","adult","basic"];
var tag_words = ["adobo","bibig","buhay"];

/* Experiment Variables */

var washed = false;
var treat_language = "Tagalog";
var treat_layout = "Circular";
var treat_time = "Zero";
var treat_circular = [
	{"l":310,"t":355},
	{"l":205,"t":455},
	{"l":415,"t":455},
	{"l":245,"t":580},
	{"l":375,"t":580}
]
var treat_linear = [
	{"l":100,"t":455},
	{"l":205,"t":455},
	{"l":310,"t":455},
	{"l":415,"t":455},
	{"l":520,"t":455},
]
var treat_words = {"English":0,"Tagalog":0};
var treat_duration = {"English":0,"Tagalog":0};

function hot() {
	screen_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if (localStorage.getItem("aggnuch-limahan-highScore") == null) {
		localStorage.setItem("aggnuch-limahan-highScore",0);
	}
	else {
		highScore = Number(localStorage.getItem("aggnuch-limahan-highScore"));
	}
	if (localStorage.getItem("aggnuch-limahan-firstTime") == null) {
		firstTime = "true";
		localStorage.setItem("aggnuch-limahan-firstTime","true");
	}
	else {
		firstTime = localStorage.getItem("aggnuch-limahan-firstTime");
	}
	if (localStorage.getItem("aggnuch-limahan-timeTaken") == null) {
		localStorage.setItem("aggnuch-limahan-timeTaken",0);
	}
	else {
		overallTime = Number(localStorage.getItem("aggnuch-limahan-timeTaken"));
	}
	if (localStorage.getItem("aggnuch-limahan-gamesTaken") == null) {
		localStorage.setItem("aggnuch-limahan-gamesTaken",0);
	}
	else {
		overallGames = Number(localStorage.getItem("aggnuch-limahan-gamesTaken"));
	}
	if (localStorage.getItem("aggnuch-limahan-wordsTaken") == null) {
		localStorage.setItem("aggnuch-limahan-wordsTaken",0);
	}
	else {
		overallWords = Number(localStorage.getItem("aggnuch-limahan-wordsTaken"));
	}
	xapol(eng_words,3000);
	xapol(tag_words,3000);
	/* startGame(); */
	show("menuField");
}

function menuHelp() {
	document.getElementById("menuField").style.display = "none";
	document.getElementById("instructionsField0").style.display = "block";
	if (treat_time == "Zero") {
		display("instructionTime","You are given three lives. You will lose one life if you do not guess the right word.");
	}
	else if (treat_time == "Twenty") {
		display("instructionTime","You are given 20 seconds. You get more time if you guess the right word, and you lose time otherwise.");
	}
	else if (treat_time == "Forty") {
		display("instructionTime","You are given 40 seconds. You get more time if you guess the right word, and you lose time otherwise.");
	}
	display("instructionLang",treat_language);
	press.play();
}

function gidle() {
	document.getElementById("instructionsField"+inst).style.display = "none";
	if (inst != "Wash") {
		if (inst < 2) {
			inst++;
			press.play();
			document.getElementById("instructionsField"+inst).style.display = "block";
		}
		else {
			document.getElementById("instructionsField2").style.display = "none";
			hide("instructionsField");
			show("playingField");
			startGame();
			press.play();
		}
	}
	else if (inst == "Wash") {
		hide("instructionsField");
		show("playingField");
		startGame();
	}
	
}

function startTutorial() {
	menuHelp();
}

function startGame() {
	press.play();
	timeTaken = 0;
	timeCurrent = 0;
	score = 0;
	hide("menuField");
	hide("gameOverField");
	if (treat_time == "Twenty") {
		maxTime = 20;
	}
	else if (treat_time == "Forty") {
		maxTime = 40;
	}
	else if (treat_time == "Zero") {
		lives = 3;
	}
	time = maxTime;
	show("life1");
	show("life2");
	show("life3");
	document.getElementById("life1").style.left = "240px";
	document.getElementById("life2").style.left = "320px";
	document.getElementById("life3").style.left = "400px";
	show("playingField");
	startTimer();
}

function startMenu() {
	press.play();
	timeTaken = 0;
	timeCurrent = 0;
	score = 0;
	hide("gameOverField");
	hide("statsField");
	show("menuField");
}

function startTimer() {
	makeTimer();
	if (treat_time != "Zero") {
		hide("life1");
		hide("life2");
		hide("life3");
		show("timeIcon");
		show("timeShape");
	}
	else if (treat_time == "Zero") {
		show("life1");
		show("life2");
		show("life3");
		hide("timeIcon");
		hide("timeShape");
	}
	randomWord();
}

function makeTimer() {
	timer = setInterval(minusOneFrame, 20);
}

function minusOneFrame() {
	if (treat_time != "Zero") {
		if (time > 0) {
			time = time - (1/50);
			timeCurrent = timeCurrent + (1/50);
			if (screen_width < 1281) {
				document.getElementById("timeShape").style.width = `${time/maxTime*50}em`;
			}
			else {
				document.getElementById("timeShape").style.width = `${time/maxTime*540}px`;
			}
		}
		else {
			clearInterval(timer);
			timesUp();
		}
		if (time <= maxTime / 4 && time > 0) {
			time_.play();
		}
		else {
			time_.pause();
			time_.currentTime = 0;
		}
		if (time > maxTime / 2) {
			document.getElementById("timeShape").style.backgroundColor = "#33cc33";
		}
		if (time <= maxTime / 2 && time > maxTime / 4) {
			document.getElementById("timeShape").style.backgroundColor = "#ff9933";
		}
		if (time <= maxTime / 4) {
			document.getElementById("timeShape").style.backgroundColor = "#ff3333";
		}
	}
	else {
		timeCurrent = timeCurrent + (1/50);
	}
}

function scoreAnimation() {
	scale = 1;
	step = 1;
	scoreAnim = setInterval(function() {
		if (step == 1) {
			scale = scale + 0.1;
			document.getElementById("score").style.scale = scale;
			if (scale >= 2) {
				step = 2;
			}
		}
		if (step == 2) {
			scale = scale - 0.1;
			document.getElementById("score").style.scale = scale;
			if (scale <= 1) {
				scale = 1;
				document.getElementById("score").style.scale = scale;
				clearInterval(scoreAnim);
			}
		}
	}, 10);
}

function answerAnimation(i) {
	scale_a[i] = 1;
	step_a[i] = 1;
	answerAnim[i] = setInterval(function() {
		if (step_a[i] == 1) {
			scale_a[i] = scale_a[i] + 0.02;
			document.getElementById("answerCircle"+i).style.scale = scale_a[i];
			if (scale_a[i] >= 1.2) {
				step_a[i] = 2;
			}
		}
		if (step_a[i] == 2) {
			scale_a[i] = scale_a[i] - 0.02;
			document.getElementById("answerCircle"+i).style.scale = scale_a[i];
			if (scale_a[i] <= 1) {
				scale_a[i] = 1;
				document.getElementById("answerCircle"+i).style.scale = scale_a[i];
				clearInterval(answerAnim[i]);
			}
		}
	}, 10);
}

function iskorAnimation() {
	scale_s = 1;
	step_s = 1;
	iskorAnim = setInterval(function() {
		if (step_s == 1) {
			scale_s = scale_s + 0.2;
			document.getElementById("iskor").style.scale = scale_s;
			if (scale_s >= 3) {
				step_s = 2;
			}
		}
		if (step_s == 2) {
			scale_s = scale_s - 0.2;
			document.getElementById("iskor").style.scale = scale_s;
			if (scale_s <= 1) {
				scale_s = 1;
				document.getElementById("iskor").style.scale = scale_s;
				clearInterval(iskorAnim);
			}
		}
	}, 10);
}

function timesUp() {
	if (firstTime == "true") {
		firstTime = "false";
		localStorage.setItem("aggnuch-limahan-firstTime",firstTime);
	}
	overallTime = overallTime + timeTaken;
	timeTaken = Math.round(timeTaken * 100) / 100
	overallGames++;
	overallWords = overallWords + score;
	localStorage.setItem("aggnuch-limahan-timeTaken",overallTime);
	localStorage.setItem("aggnuch-limahan-gamesTaken",overallGames);
	localStorage.setItem("aggnuch-limahan-wordsTaken",overallWords);
	treat_words[treat_language] = score;
	treat_duration[treat_language] = timeTaken;
	time_.currentTime = 0;
	time_.pause();
	hide("playingField");
	hide("gameOverSayang");
	hide("gameOverAccomplish");
	hide("gameOverWash");
	show("gameOverField");
	tago("siritCircle1");
	tago("siritCircle2");
	tago("siritCircle3");
	tago("siritCircle4");
	tago("siritCircle5");
	tago("iskorHr");
	tago("iskorText");
	tago("iskor");
	clap.play();
	if (score < eng_words.length) {
		show("gameOverSayang");
		setTimeout(function() {
			kita("siritCircle1");
			kita("siritCircle2");
			kita("siritCircle3");
			kita("siritCircle4");
			kita("siritCircle5");
		}, 1000);
		for (i = 1; i <= 5; i++) {
			document.getElementById("siritCircle"+i).style.backgroundColor = `#${lights[colorSeed]}`;
			if (screen_width < 1281) {
				document.getElementById("siritCircle"+i).style.boxShadow = `0.05em 0.2em #${shadows[colorSeed]}`;
			}
			else {
				document.getElementById("siritCircle"+i).style.boxShadow = `1px 10px #${shadows[colorSeed]}`;
			}
			document.getElementById("sc"+i).innerHTML = wordNeeded[i-1].toUpperCase().replace("X","NG");
		}
		setTimeout(function() {
			kita("iskorHr");
			kita("iskorText");
		}, 2000);
		setTimeout(function() {
			document.getElementById("iskor").innerHTML = score;
			kita("iskor");
			iskorAnimation();
		}, 3000);
		setTimeout(function() {
			show("gameOverWash");
		}, 4000);
	}
	else {
		show("gameOverAccomplish");
		highscore.play();
		show("gameOverWash");
	}
}

function initCircles() {
	formed = [false, false, false, false, false];
	wordPoint = 0;
	wordFormed = "";
	for (let i = 1; i <= 5; i++) {
		document.getElementById("answerCircle"+i).style.backgroundColor = "black";
		document.getElementById("answerCircle"+i).style.boxShadow = "0px 0px";
		document.getElementById("ac"+i).innerHTML = "";
		show("inputCircle"+i);
		document.getElementById("inputCircle"+i).style.backgroundColor = `#${lights[colorSeed]}`;
		if (treat_layout == "Circular") {
			document.getElementById("inputCircle"+i).style.left = `${treat_circular[i-1].l}px`;
			document.getElementById("inputCircle"+i).style.top = `${treat_circular[i-1].t}px`;
		}
		else if (treat_layout == "Linear") {
			document.getElementById("inputCircle"+i).style.left = `${treat_linear[i-1].l}px`;
			document.getElementById("inputCircle"+i).style.top = `${treat_linear[i-1].t}px`;
		}
		if (screen_width < 1281) {
			document.getElementById("inputCircle"+i).style.boxShadow = `0.05em 0.15em #${shadows[colorSeed]}`;
		}
		else {
			document.getElementById("inputCircle"+i).style.boxShadow = `1px 8px #${shadows[colorSeed]}`;
		}
		document.getElementById("inputCircle"+i).addEventListener("mouseover",function() { hovering(i); });
		document.getElementById("inputCircle"+i).addEventListener("mouseout",function() { hoverout(i); });
		if (positionen[i-1] == "x") {
			document.getElementById("il"+i).innerHTML = "NG";
		}
		else {
			document.getElementById("il"+i).innerHTML = positionen[i-1].toUpperCase();
		}
	}
}

function hovering(a) {
	document.getElementById("inputCircle"+a).style.backgroundColor = `#${hovers[colorSeed]}`;
	document.getElementById("inputCircle"+a).style.boxShadow = `1px 8px #${shadows[colorSeed]}`;
	if (screen_width < 1281) {
		document.getElementById("inputCircle"+a).style.boxShadow = `0.05em 0.15em #${shadows[colorSeed]}`;
	}
	else {
		document.getElementById("inputCircle"+a).style.boxShadow = `1px 8px #${shadows[colorSeed]}`;
	}
}

function hoverout(a) {
	document.getElementById("inputCircle"+a).style.backgroundColor = `#${lights[colorSeed]}`;
	if (screen_width < 1281) {
		document.getElementById("inputCircle"+a).style.boxShadow = `0.05em 0.15em #${shadows[colorSeed]}`;
	}
	else {
		document.getElementById("inputCircle"+a).style.boxShadow = `1px 8px #${shadows[colorSeed]}`;
	}
}

function randomWord() {
	colorSeed = randomize(0,5);
	document.getElementById("score").innerHTML = score;
	if (treat_language == "English") {
		wordNeeded = eng_words[score];
	}
	else if (treat_language == "Tagalog") {
		wordNeeded = tag_words[score];
	}
	positionen = [];
	for (i = 0; i < 5; i++) {
		addChar = wordNeeded.charAt(i);
		positionen.push(addChar);
	}
	xapol(positionen,500);
	initCircles();
}

function resetAnswer() {
	formed = [false, false, false, false, false];
	if (wordPoint > 0) {
		back.play();
		for (i = 1; i <= wordPoint; i++) {
			document.getElementById("answerCircle"+i).style.boxShadow = `0px 0px`;
		}
		initCircles();
	}
}

function forma(a) {
	if (!formed[a-1]) {
	circleClicked = a;
	formed[a-1] = true;
	wordFormed = wordFormed + positionen[circleClicked-1];
	press.play();
	wordPoint++;
	answerAnimation(wordPoint);
	hide("inputCircle"+a);
	document.getElementById("answerCircle"+wordPoint).style.backgroundColor = `#${lights[colorSeed]}`;
	if (screen_width < 1281) {
		document.getElementById("answerCircle"+wordPoint).style.boxShadow = `0.05em 0.2em #${shadows[colorSeed]}`;
	}
	else {
		document.getElementById("answerCircle"+wordPoint).style.boxShadow = `1px 10px #${shadows[colorSeed]}`;
	}
	if (positionen[a-1] == "x") {
		document.getElementById("ac"+wordPoint).innerHTML = "NG";
	}
	else {
		document.getElementById("ac"+wordPoint).innerHTML = positionen[a-1].toUpperCase();
	}
	if (wordPoint == 5) {
		verification();
	}
	}
}

function verification() {
	if (treat_language == "English") {
		validWord = eng_words.includes(wordFormed);
	}
	else if (treat_language == "Tagalog") {
		validWord = tag_words.includes(wordFormed);
	}
	if (validWord) {
		if (treat_time != "Zero") {
			time = time + Math.min(5, maxTime - time);
		}
		correct.play();
		score++;
		console.log(timeCurrent);
		timeTaken += timeCurrent;
		timeCurrent = 0;
		scoreAnimation();
		if (score < eng_words.length) {
			setTimeout(randomWord, 300);
		}
		else {
			clearInterval(timer);
			timesUp();
		}
	}
	else {
		if (treat_time != "Zero") {
			time = time - 3;
		}
		else if (treat_time == "Zero") {
			lives = lives - 1;
			if (lives == 2) {
				hide("life3");
				document.getElementById("life1").style.left = "272.5px";
				document.getElementById("life2").style.left = "357.5px";
			}
			if (lives == 1) {
				hide("life2");
				document.getElementById("life1").style.left = "315px";
			}
			if (lives == 0) {
				timesUp();
			}
		}
		wrong.play();
		initCircles();
	}
}

function wash() {
	if (!washed) {
		washed = true;
		if (treat_language == "English") {
			treat_language = "Tagalog";
		}
		else if (treat_language == "Tagalog") {
			treat_language = "English";
		}
		hide("gameOverField");
		show("instructionsField");
		show("instructionsFieldWash");
		inst = "Wash";
		for (i = 1; i <= 2; i++) {
			display("instructionWashLang"+i,treat_language);
		}
	}
	else if (washed) {
		hide("gameOverField");
		show("statsField");
		display("wordsEng",treat_words.English);
		display("wordsTag",treat_words.Tagalog);
		display("timeEng",treat_duration.English);
		display("timeTag",treat_duration.Tagalog);
	}
}

function randomize(a,b) { return Math.floor(Math.random() * (b-a+1)) + a; }

function xapol(a,b) {
	for (i = 0; i < b; i++) {
		rngA = randomize(0,a.length-1);
		rngB = randomize(0,a.length-1);
		tempA = a[rngA];
		tempB = a[rngB];
		a[rngA] = tempB;
		a[rngB] = tempA;
	}
}

function display(a,b) {
	document.getElementById(a).innerHTML = b;
}

function show(a) {
	document.getElementById(a).style.display = "block";
}

function hide(a) {
	document.getElementById(a).style.display = "none";
}

function tago(a) {
	document.getElementById(a).style.visibility = "hidden";
}

function kita(a) {
	document.getElementById(a).style.visibility = "visible";
}