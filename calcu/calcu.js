var num1 = [];
var num2 = [];
var one;
var two;
var res = [];
var expAnswer;
var nobe = 0;
var tinsime = false;
var elem;
var op;
var id;

function vamonos() {
	one = document.getElementById("cand").value;
	two = document.getElementById("lier").value;
	display("result",multiply(one,two));
}

function power() {
	tinsime = false;
	one = document.getElementById("cand").value;
	two = document.getElementById("lier").value;
	if (Number(two) < 100 && (Number(two) % 1) == 0) {
		show("show");
		display("result",exponent(one,two));
	}
	else {
		show("show");
		display("result","Please choose a whole number between 1 and 99");
	}
}

function verification() {
	hide("show");
	nobe = 0;
	for (g = 0; g < data.length; g++) {
		if (String(one) == data[g].one) {
			tinsime = true;
			nobe = g;
		}
	}
	if (tinsime) {
		if (Number(two) < 100 && (Number(two) % 1) == 0) {
			surpriz();
		}
	}
}

function surpriz() {
	document.body.style.backgroundColor = "#" + data[nobe].bgcolor;
	document.body.style.color = data[nobe].color;
	document.getElementById("lujzaise").style.color = "black";
	hide("calcu");
	show("notes");
	display("placeName",data[nobe].name);
	display("lujzaise",data[nobe].message);
	fadeIn("lujzaise1");
	setTimeout(function(){fadeIn("lujzaise2");},4000);
	setTimeout(function(){fadeIn("noteHolder");},7000);
}

function fadeIn(a) {
	elem = document.getElementById(a);
	op = 0;
	id = setInterval(frame,10);
	function frame() {
		if (op == 100) {
			clearInterval(id);
		}
		else {
			op++;
			elem.style.opacity = (op / 100);
		}
	}
}

function multiply(a,b) {
	num1 = [];
	num2 = [];
	res = [];
	var diff = a.length - b.length;
	if (diff > 0) { for (i = 0; i < diff; i++) { num2.push(0); }} // add zeros if length ain't equal
	if (diff < 0) { for (i = 0; i < Math.abs(diff); i++) { num1.push(0); }}
	for (i = 0; i < a.length; i++) { num1.push(a[i]); }
	for (i = 0; i < b.length; i++) { num2.push(b[i]); }
	
	for (i = 1; i < num1.length * 2; i++) {
		res.push(0);
	}
	for (i = 0; i < num1.length; i++) {
		for (j = 0; j < num2.length; j++) {
			res[i+j] += parseInt(num1[i]) * parseInt(num2[j]);
		}
	}
	for (i = 1; i < res.length; i++) {
		if (parseInt(res[res.length - i]) >= 10) {
			res[res.length - i - 1] += (res[res.length - i] - (res[res.length - i] % 10)) / 10;
			res[res.length - i] = res[res.length - i] % 10;
		}
	}
	answer = new String([res]);
	answer = answer.split(',').join('');
	answer = answer.replace(/^[0]+/g,"");
	return answer;
}

function exponent(c,d) {
	base = c;
	times = Number(d);
	expAnswer = base;
	for (h = 1; h < times; h++) {
		expAnswer = multiply(expAnswer,base);
	}
	return expAnswer;
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