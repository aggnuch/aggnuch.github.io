/* Declaration of variables */
var mode = 1;
var hovered = false;
var names = [,,"Abra","Agusan Del Norte","Agusan del Sur","Aklan","Albay",,"Antique","Apayao","Aurora",,,"Basilan","Bataan","Batanes","Batangas","Benguet","Biliran","Bohol","Bukidnon","Bulacan",,"Cagayan",,"Lungsod ng Caloocan","Camarines Norte","Camarines Sur","Camiguin","Capiz","Catanduanes","Cavite","Cebu",,,"Lungsod ng Las Piñas","Lungsod ng Makati","Lungsod ng Malabon","Lungsod ng Mandaluyong","Lungsod ng Maynila","Lungsod ng Marikina","Lungsod ng Muntinlupa","Lungsod ng Navotas","Lungsod ng Parañaque","Lungsod ng Pasig","Lungsod ng San Juan",,"Lungsod ng Valenzuela",,"North Cotabato",,,"Davao de Oro","Davao del Norte","Davao del Sur","Davao Occidental","Davao Oriental","Dinagat Islands","Eastern Samar",,"Guimaras","Ifugao",,"Ilocos Norte","Ilocos Sur","Iloilo",,"Isabela","Kalinga","La Union","Laguna","Lanao del Norte","Lanao del Sur",,"Leyte",,"Maguindanao",,"Marinduque","Masbate","Misamis Occidental","Misamis Oriental","Mountain Province",,"Negros Occidental","Negros Oriental","Northern Samar","Nueva Ecija","Nueva Vizcaya","Occidetal Mindoro",,"Oriental Mindoro",,"Palawan","Pampanga","Pangasinan","Lungsod ng Pasay","Pateros",,"Quezon","Lungsod ng Quezon","Quirino","Rizal","Romblon","Samar","Sarangani","Siquijor","Sorsogon","South Cotabato","Southern Leyte","Sultan Kudarat","Sulu","Surigao del Norte","Surigao del Sur",,"Lungsod ng Taguig","Tarlac","Tawi-Tawi",,"Zambales",,"Zamboanga del Norte","Zamboanga del Sur","Zamboanga Sibugay","Unknown"];
var x;
var stats = new Array();
stats[0] = [,,123,1865,421,266,1018,,182,62,89,,,424,3197,3,11226,4574,137,836,896,11613,,1023,,13360,222,1619,56,1092,135,21838,23217,,,6387,12440,6292,7125,24247,6189,6150,5327,9765,11001,3509,,8820,,416,,,396,860,6048,118,388,39,366,,226,109,,262,200,7139,,1971,258,669,20426,1730,1035,,3685,,1601,,143,429,683,3181,37,,10668,643,1038,1856,666,271,,1087,,550,5699,2524,9161,1841,,5300,35266,26,16468,77,2503,351,30,481,2079,540,240,251,556,484,,12665,1011,151,,1775,,365,4087,148,32178];
stats[1] = [,,13,177,118,40,82,,16,15,14,,,44,263,0,931,1264,8,112,152,845,,200,,492,26,247,8,85,7,1429,810,,,354,612,180,267,1319,333,251,175,322,756,128,,241,,62,,,90,245,1801,5,57,7,185,,33,15,,60,43,686,,394,55,88,1117,96,60,,334,,321,,19,46,127,620,5,,967,169,184,254,31,18,,83,,31,952,381,452,76,,1008,1505,6,1313,9,185,66,6,101,403,12,39,62,102,36,,554,215,9,,149,,60,724,22,383];
stats[2] = [,,108,1627,293,218,891,,165,47,75,,,373,2888,3,10114,3264,127,712,734,10576,,814,,12604,192,1331,48,970,126,20205,21083,,,5935,11569,5966,6718,22421,5717,5822,5093,9318,9930,3309,,8358,,345,,,301,607,4064,110,328,32,178,,190,94,,201,156,6267,,1562,202,563,19143,1585,939,,3315,,1249,,121,282,548,2507,32,,9433,467,843,1571,615,246,,985,,515,4646,2066,8566,1743,,4211,33129,20,14835,67,2299,276,24,362,1627,526,193,180,429,421,,11959,777,137,,1606,,290,3237,124,31576];
stats[3] = [,,2,61,10,8,45,,1,0,0,,,7,46,0,181,46,2,12,10,192,,9,,264,4,41,0,37,2,204,1324,,,98,259,146,140,507,139,77,59,125,315,72,,221,,9,,,5,8,183,3,3,0,3,,3,0,,1,1,186,,15,1,18,166,49,36,,36,,31,,3,1,8,54,0,,268,7,11,31,20,7,,19,,4,101,77,143,22,,81,632,0,320,1,19,9,0,18,49,2,8,9,25,27,,152,19,5,,20,,15,126,2,219];
stats[4] = [,,2,14,6,3,5,,1,0,0,,,3,26,0,71,66,0,4,4,38,,7,,15,0,5,0,2,1,81,20,,,10,51,5,20,66,16,9,15,9,25,7,,9,,4,,,3,13,38,0,6,0,21,,6,2,,0,2,44,,11,2,10,74,10,2,,11,,13,,0,0,6,21,0,,52,2,0,12,0,3,,14,,2,17,12,16,1,,56,69,2,67,3,12,1,0,5,35,0,0,12,6,0,,10,13,0,,4,,2,34,0,6];
run = [2,3,4,5,6,8,9,10,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,35,36,37,38,39,40,41,42,43,44,45,47,49,52,53,54,55,56,57,58,60,61,63,64,65,67,68,69,70,71,72,74,76,78,79,80,81,82,84,85,86,87,88,89,91,93,94,95,96,97,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,115,116,117,119,121,122,123,124];
hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

function start() {
	tulong();
	document.getElementById("display").style.display = "block";
	document.getElementById("whatinfo").innerHTML = " kumpirmadong kaso";
	resetSettings();
	press1();
	m(2);m(3);m(4);m(5);m(6);m(8);m(9);m(10);m(13);m(14);m(15);m(16);m(17);m(18);m(19);m(20);m(21);m(23);m(25);m(26);m(27);m(28);m(29);m(30);m(31);m(32);m(35);m(36);m(37);m(38);m(39);m(40);m(41);m(42);m(43);m(44);m(45);m(47);m(49);m(52);m(53);m(54);m(55);m(56);m(57);m(58);m(60);m(61);m(63);m(64);m(65);m(67);m(68);m(69);m(70);m(71);m(72);m(74);m(76);m(78);m(79);m(80);m(81);m(82);m(84);m(85);m(86);m(87);m(88);m(89);m(91);m(93);m(94);m(95);m(96);m(97);m(99);m(100);m(101);m(102);m(103);m(104);m(105);m(106);m(107);m(108);m(109);m(110);m(111);m(112);m(113);m(115);m(116);m(117);m(119);m(121);m(122);m(123);m(124);m(251);m(1221);
}

function makinig(a) {
	document.getElementById("aftermode").style.display = "none";
	document.getElementById("umbrella").style.display = "block";
	if (mode != 6) {
		if (a == 251 || a == 1221) {
			document.getElementById("provname").innerHTML = names[(a-1)/10];
			document.getElementById("casenum").innerHTML = stats[mode-1][(a-1)/10];
		}
		else {
			document.getElementById("provname").innerHTML = names[a];
			document.getElementById("casenum").innerHTML = stats[mode-1][a];
		}
	}
	else {
		if (a == 251 || a == 1221) {
			document.getElementById("provname").innerHTML = names[(a-1)/10];
			document.getElementById("casenum").innerHTML = Math.floor(stats[1][(a-1)/10]/stats[0][(a-1)/10]*10000)/100;
		}
		else {
			document.getElementById("provname").innerHTML = names[a];
			document.getElementById("casenum").innerHTML = Math.floor(stats[1][a]/stats[0][a]*10000)/100;
		}
	}
}

function susi(event) {
	x = event.keyCode;
	if (x == 49 || x == 97) { press1(); }
	if (x == 50 || x == 98) { press2(); }
	if (x == 51 || x == 99) { press3(); }
	if (x == 52 || x == 100) { press4(); }
	if (x == 53 || x == 101) { press5(); }
	if (x == 54 || x == 102) { press6(); }
	if (x == 72) { tulong(); }
	if (x == 83) { sang(); }
}

function press1() {
	mode = 1;
	resetSettings();
	document.getElementById("whatinfo").innerHTML = " kumpirmadong kaso";
	document.getElementById("ano").innerHTML = " kumpirmadong kaso";
	for (i = 0; i < run.length; i++) {
		h = run[i];
		if (stats[0][h] == 0) {
			color = 256;
		}
		else {
			color = 256 - Math.floor((Math.log(stats[0][h])/Math.log(35266)*256));
		}
		if (color < 16) {
			color = String("0" + hex[color]);
		}
		if (h == 124) {
			document.getElementById("p124").style.backgroundColor = "#ff"+color.toString(16)+color.toString(16);
		}
		fill("p"+h,"#ff"+color.toString(16)+color.toString(16));
	}
		fill("p251",document.getElementById("p25").style.fill);
		fill("p1221",document.getElementById("p122").style.fill);
}

function press2() {
	mode = 2;
	resetSettings();
	document.getElementById("whatinfo").innerHTML = " aktibong kaso";
	document.getElementById("ano").innerHTML = " aktibong kaso";
	for (i = 0; i < run.length; i++) {
		h = run[i];
		if (stats[1][h] == 0) {
			fill("p"+h,"#b9b9b9");
		}
		else {
			color = 256 - Math.floor((Math.log(stats[1][h])/Math.log(1801)*256));
			if (color < 16) {
				color = String("0" + hex[color]);
			}
			if (h == 124) {
			document.getElementById("p124").style.backgroundColor = "#"+color.toString(16)+color.toString(16)+"ff";
			}
			fill("p"+h,"#"+color.toString(16)+color.toString(16)+"ff");
		}
	}
		fill("p251",document.getElementById("p25").style.fill);
		fill("p1221",document.getElementById("p122").style.fill);
}

function press3() {
	mode = 3;
	resetSettings();
	document.getElementById("whatinfo").innerHTML = " nakarekober";
	document.getElementById("ano").innerHTML = " nakarekober";
	for (i = 0; i < run.length; i++) {
		h = run[i];
		if (stats[2][h] == 0) {
			fill("p"+h,"#b9b9b9");
		}
		else {
			color = 256 - Math.floor((Math.log(stats[2][h])/Math.log(33129)*256));
			if (color < 16) {
				color = String("0" + hex[color]);
			}
			if (h == 124) {
				document.getElementById("p124").style.backgroundColor = "#"+color.toString(16)+"ff"+color.toString(16);
			}
			fill("p"+h,"#"+color.toString(16)+"ff"+color.toString(16));
		}
	}
		fill("p251",document.getElementById("p25").style.fill);
		fill("p1221",document.getElementById("p122").style.fill);
}

function press4() {
	mode = 4;
	resetSettings();
	document.getElementById("whatinfo").innerHTML = " namatay";
	document.getElementById("ano").innerHTML = " namatay";
	for (i = 0; i < run.length; i++) {
		h = run[i];
		if (stats[3][h] == 0) {
			fill("p"+h,"#ffffff");
		}
		else {
			color = 256 - Math.floor((Math.log(stats[3][h]+1)/Math.log(1325)*256));
			if (color < 16) {
				color = String("0" + hex[color]);
			}
			if (h == 124) {
				document.getElementById("p124").style.backgroundColor = "#"+color.toString(16)+color.toString(16)+color.toString(16);
			}
			fill("p"+h,"#"+color.toString(16)+color.toString(16)+color.toString(16));
		}
	}
		fill("p251",document.getElementById("p25").style.fill);
		fill("p1221",document.getElementById("p122").style.fill);
}

function press5() {
	mode = 5;
	resetSettings();
	document.getElementById("whatinfo").innerHTML = " bagong kaso noong ika-18 ng Nobyembre, 2020";
	document.getElementById("ano").innerHTML = " bagong kaso noong ika-18 ng Nobyembre, 2020";
	for (i = 0; i < run.length; i++) {
		h = run[i];
		if (stats[4][h] == 0) {
			fill("p"+h,"#b9b9b9");
		}
		else {
			color = Math.floor((Math.log(stats[4][h]+1)/Math.log(81)*100));
			if (h == 124) {
				document.getElementById("p124").style.backgroundColor = "rgba(255,128,0,"+(color/100);
			}
			fill("p"+h,"rgba(255,128,0,"+(color/100));
		}
	}
		fill("p251",document.getElementById("p25").style.fill);
		fill("p1221",document.getElementById("p122").style.fill);
}

function press6() {
	mode = 6;
	resetSettings();
	document.getElementById("whatinfo").innerHTML = "% ng mga kumpirmadong kaso ay aktibo";
	document.getElementById("ano").innerHTML = "porsyento ng kumpirmadong kaso na aktibo";
	for (i = 0; i < run.length; i++) {
		h = run[i];
		if (stats[1][h] == 0) {
			fill("p"+h,"#b9b9b9");
		}
		else {
			color = Math.floor(Math.log((stats[1][h]+1)/stats[0][h]*100)/Math.log(36600/185)*100);
			if (h == 124) {
				document.getElementById("p124").style.backgroundColor = "rgba(204,0,255,"+(color/100);
			}
			fill("p"+h,"rgba(204,0,255,"+(color/100));
		}
	}
		fill("p251",document.getElementById("p25").style.fill);
		fill("p1221",document.getElementById("p122").style.fill);
}

function tulong() {
	alert("Magandang araw po!\n\nAng webpage na ito ay nagpapakita kung ilan ang kaso ng Coronavirus sa Pilipinas noong ika-18 ng Nobyembre, taong 2020. Ngunit hindi lang kaso ang makikita mo rito! Para makita ang ibang mga datos,\n\nPindutin ang 1 para makita ang mga kumpirmadong kaso,\n2 para makita ang mga aktibong kaso,\n3 para makita ang mga nakarekober,\n4 para makita ang mga namatay,\n5 para makita ang mga bagong kaso, at\n6 para makita kung ilang % ang mga aktibong kaso sa kumpirmadong kaso.\n\nKung kailangan niyo pong makita ito ulit, pindutin ang \'Tulong\' o ang \'h\' key.\n\nPara makita ang aking mga sanggunian, pindutin ang \'s\' key.");
}

function sang() {
	alert("Mapa: https://commons.wikimedia.org/wiki/File:Blank_map_of_the_Philippines_(Provinces).svg\nDatos: http://ncovtracker.doh.gov.ph/ (ikinuha noong ika-18 ng Nobyembre, 2020)\nFavicon: https://cdn.countryflags.com/thumbs/philippines/flag-button-square-250.png")
}

function resetSettings() {
	document.getElementById("aftermode").style.display = "block";
	document.getElementById("umbrella").style.display = "none";
}

/* Templates */

function m(a) {
	document.getElementById("p"+a).addEventListener("mouseover",function() { makinig(a); },false);
}

function fill(a,b) {
	document.getElementById(a).style.fill = b;
}