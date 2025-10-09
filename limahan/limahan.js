var wordFormed = "";
var wordPoint = 0;
var score = 0;
var highScore = 0;
var firstTime = "true";

var press = new Audio('press.wav'); press.volume = 1;
var correct = new Audio('correct.wav'); correct.volume = 1;
var wrong = new Audio('wrong.wav'); wrong.volume = 1;
var clap = new Audio('clap.wav'); clap.volume = 1;
var back = new Audio('back.wav'); back.volume = 1;
var time_ = new Audio('time.wav'); time_.volume = 1;
var highscore_ = new Audio('highscore.wav'); highscore_.volume = 0.75;
var time = 20;

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

var worter = ["abaka","abako","abala","abiso","abono","abril","abuso","adlaw","adobo","agham","agila","agnas","agwat","akala","akbay","aklas","aklat","aktor","akuin","akyat","alaga","alala","album","alila","alpas","altar","alyas","amain","ambag","ambon","ambot","ampaw","ampon","andam","andap","andar","andon","anhin","anila","animo","anino","anito","aniya","antas","antay","antig","antok","anuba","anuna","apula","apyan","araro","ariba","ariin","arina","armas","arnis","aruga","aruro","asado","asawa","asero","asido","asiwa","asnan","asoge","aswax","atado","atake","ataul","atlas","atomo","atras","awtor","axhax","axhel","axhit","axkan","axkas","axkat","axkin","axkla","axkop","ayain","ayoko","ayuda","ayuno","aywan","babad","babae","babaw","baboy","badix","badya","bagal","bagax","bagay","bagix","bagok","bagon","bagot","bagyo","bahag","bahaw","bahay","bahid","bahin","bakal","bakas","bakat","bakaw","bakit","bakla","bakod","bakol","bakya","balae","balak","balat","balax","balay","balda","balde","balik","baliw","balix","balon","balor","balot","balsa","banag","banal","banas","banat","banda","bando","banig","banoy","bansa","banta","banwa","banyo","bapor","barat","baril","barko","barox","barya","baryo","basag","basal","basta","batak","batas","batay","batid","batik","batis","batix","batog","batok","bawal","bawas","bawat","bawax","baxag","baxaw","baxay","baxga","baxin","baxis","baxka","baxko","baxon","baxus","bayad","bayag","bayan","bayaw","bayle","bayok","bayox","belen","benta","bente","berde","berso","beses","bewax","bibig","bigas","bigat","bigay","bigla","bigti","bihag","bihis","bihon","bilad","bilao","bilax","bilin","bilis","bilog","bimpo","binat","binhi","binti","biray","birus","bisig","bisto","bisyo","bitag","bitak","bitaw","bitay","bitin","bitiw","bixit","biyak","bloke","blusa","bokal","bomba","bonus","boses","braso","bruha","bubog","bubox","buboy","budhi","bugaw","bugok","bugso","buhat","buhay","buhok","buhos","bukal","bukas","bukid","bukod","bukol","bulag","bulak","bulan","bulaw","bulbo","bulid","bulok","bulol","bulox","bulsa","bulto","bumuo","bunot","bunso","bunto","bunyi","burak","burda","burol","buslo","busog","butal","butas","butaw","butil","buton","buuin","buwag","buwal","buwan","buwis","buxad","buxaw","buxgo","buxot","dabog","dagan","dagat","dagit","dagli","dagok","dagsa","dagta","dahan","dahas","dahil","dahon","dakip","dakot","dalas","dalaw","dalax","dalit","dalix","daloy","dalub","dalwa","damit","damot","dampa","dampi","danaw","danum","dapat","dapit","darax","dasal","dasig","datix","datos","dawal","dawit","daxal","dayaw","dayax","digma","digri","dikit","dikta","dikya","dilag","dilat","dilaw","dilig","dilim","dilis","dinig","ditse","diyan","diyos","doble","drama","droga","duhat","dukal","dukha","dukot","dulas","dulay","dulix","dulog","dulos","dulot","dumal","dumog","dunox","dupok","durog","duwag","duwal","duxaw","duxis","duyan","enero","epiko","erehe","etika","gaano","gabay","gahol","galak","galas","galaw","galax","galis","galit","galix","galon","galos","gamay","gamit","gamot","ganap","ganda","ganid","ganti","ganto","gapax","gapos","garbo","gasul","gatas","gatax","gatol","gatos","gatox","gawad","gawan","gawin","gayak","gayon","gigil","gilas","gilid","giliw","gilix","ginaw","ginax","ginoo","ginto","gipit","gisix","gitix","gitna","globo","graba","grabe","grado","gramo","grano","grasa","gripo","groto","grupo","gubat","gugol","guhit","gulat","gulax","gulay","gulod","gulox","gulpi","gunaw","gupit","gusot","gusto","gutay","gutom","guyod","gwapo","habag","habax","habla","habol","hagip","hagis","hagod","hakot","halal","halaw","halax","halay","halik","halit","halix","halos","hamak","hamig","hamog","hamok","hamon","hanap","hanay","handa","hanip","hapag","hapaw","hapdi","hapit","hapon","harap","harax","harot","hasik","hatak","hataw","hatid","hatol","hawak","hawig","hawla","hawox","haxad","haxal","haxin","haxos","hayag","hayok","hayop","henyo","hesus","hibax","hibay","hibla","hidwa","higab","higad","higit","higix","higop","hikab","hikap","hikaw","hikbi","hilab","hilaw","hilig","hilik","hilix","hilod","hilom","hilot","himan","himas","himay","himig","himno","himod","himok","hinax","hinay","hindi","hinog","hinto","hipag","hipak","hipan","hipon","hiram","hirap","hirax","hitso","hixal","hixan","hixin","hiyas","hiyaw","hiyax","holen","hopya","hotel","hubad","hubog","hugas","hugis","hugot","hukay","hukbo","hukom","hulma","hulog","hulyo","hunos","hunyo","husay","husga","husto","huwad","huwag","iabot","iadya","iahon","iakma","ialay","ialis","ialok","ialsa","ianib","ianod","iatas","iatax","iaxat","iayon","iayos","ibaba","ibaon","ibasa","ibase","ibato","ibayo","ibida","ibili","iboto","ibsan","ibuga","ibuka","ibuxa","idaix","idako","idaos","idaox","idiin","idlip","idolo","idumi","idura","igaya","igiba","igiit","igisa","iglap","igtix","iguho","ihain","ihalo","ihasa","ihati","ihawa","ihian","ihiga","ihiwa","ihixa","ihixi","ihuli","iihaw","iihip","iilag","iilan","iinit","ikait","ikama","ikasa","ikuha","ilaan","ilaya","ilayo","iliko","iluha","iluto","iluwa","imbak","imbis","inano","inaya","indak","inday","indio","indyo","intay","inuna","ipako","ipara","ipasa","ipayo","ipila","ipili","iraos","iruta","isaad","isagi","isaix","isako","isali","isalo","isama","isapi","isara","isisi","iskor","isubo","isuka","isuko","isuot","isusi","itaan","itaas","itabi","itaga","itago","itahi","itala","itali","itama","itaob","itaon","itatu","itaxi","itaya","itayo","itira","itixi","itlog","itoka","itono","itupi","ituro","ituxo","iugma","iukit","iukol","iulam","iulat","iunan","iunat","iurox","iutos","iwala","ixgit","ixkox","iyuko","kabag","kaban","kabig","kabit","kable","kabog","kabuo","kagat","kahax","kahel","kahig","kahit","kahol","kahon","kahoy","kaiba","kaila","kaisa","kakak","kalan","kalap","kalas","kalat","kalaw","kalay","kalbo","kalma","kalog","kalye","kalyo","kamao","kamay","kamot","kampi","kampo","kanal","kanan","kanin","kanta","kanto","kanya","kapag","kapal","kapit","kapok","kapon","kapos","kapre","kapwa","karat","karga","kargo","karne","karta","kasal","kasim","kasix","kasta","kasuy","kasya","katao","katas","katay","katha","katok","kauri","kawal","kawax","kaway","kawil","kawit","kawix","kayat","kayod","kaysa","kendi","kibot","kilaw","kilay","kilig","kilix","kilos","kinax","kinig","kinis","kinse","kipot","kirot","kisap","kisay","kisig","kitid","kitil","klase","klima","kobra","kokak","komik","konde","kopya","korek","korte","kotse","krudo","kubaw","kubli","kulam","kulas","kulax","kulay","kulit","kulob","kulog","kulot","kulox","kulto","kumag","kumot","kunan","kunat","kundi","kunin","kupas","kupax","kupis","kupit","kupix","kurap","kurba","kurot","kurso","kusog","kutis","kutix","kutob","kutya","kuwit","kuyog","labag","laban","labas","labay","labis","labix","labog","laboy","lagak","lagay","lagda","lagim","lagom","lagos","lagot","lahad","lahat","lahaw","lahok","lakad","lakan","lakas","lakip","laksa","lalax","lalim","laman","lamas","lamat","lamax","lamay","lamig","lamok","lamon","lanaw","landi","lansa","lanta","lapad","lapag","lapat","lapis","lapit","lapok","lapot","larax","larga","lasap","lasix","lason","laswa","latag","latak","latik","lawak","laway","lawig","lawin","lawit","laxaw","laxis","laxit","laxka","laxoy","layag","layas","layaw","layon","legal","lemon","lente","letra","libag","liban","libax","libay","libis","libix","libog","libra","libre","libro","lider","ligas","ligaw","ligid","ligoy","ligta","liham","lihim","lihis","likas","likha","likod","likom","likot","liksi","lilim","liliw","limas","limit","limos","limot","linaw","linax","linis","linta","linya","lipad","lipas","lipat","lipon","liryo","lisan","lista","listo","litaw","litis","litro","liwas","lixap","lixgo","lixid","lixon","liyab","lokal","lubag","lubak","lubax","lubay","lubha","lubid","lubog","lubos","lugar","lugaw","lugay","lugod","luhod","lukot","luksa","lukso","lulan","lumat","lumot","lumpo","lunan","lunas","lunes","lunok","lunos","lunti","lupak","lupig","lupit","lupon","lusaw","lusob","lusog","lusot","lusox","lutas","lutax","lutay","lutox","luwag","luwal","luwas","luxga","maaga","maamo","maani","maano","maawa","mabuo","madla","madre","magix","mahal","maiba","malas","malay","mamon","mamuo","manax","mando","manok","manox","marka","marso","masid","matao","matay","mauga","mauna","maupo","mauwi","maxga","maxha","maxko","medyo","melon","menor","menos","meron","metal","metro","midya","milya","misis","mismo","miswa","mithi","mitsa","moral","motor","moxhe","mukha","mulat","multa","multo","mumog","mundo","munix","munti","mural","museo","mutya","muwax","muxgo","nagix","nakaw","naman","namin","nanay","nasan","natin","natix","nauna","naxka","nayon","nibel","nilad","nilax","nimpa","ninag","ninax","ninox","ninyo","nipis","nixas","niyan","niyog","nobya","nobyo","norte","nunal","nuwax","opera","ostya","oyayi","paaga","paano","pabor","pader","padre","pagix","pagod","pagox","paham","pahid","pakax","pakay","paksa","palad","palag","palay","palda","paldo","palit","palix","palma","palya","panay","panig","panis","panot","panyo","papak","papel","parak","paraw","parax","pares","parke","parol","parte","pasan","pasas","pasig","pasko","pasma","pasok","pasta","patag","patak","patao","patas","pataw","patay","patid","patis","patix","patok","patol","patox","paulo","pauna","pauwi","pawis","paxhi","paxil","paxit","paxos","payag","payak","payat","payox","pedal","penoy","perya","peste","petal","petsa","pigil","pigix","pigsa","pikit","pikon","pilak","pilay","pilik","pilit","pilix","pilok","pinak","pinal","pinid","pinoy","pinta","pinto","pinya","pirix","pirma","pirmi","pisan","pisat","pisil","pista","pisxi","pitak","pitas","pitik","pitso","pixga","pixki","pixol","piyok","plaka","plano","plata","plato","plema","pluma","pobre","poder","pondo","porma","posas","poste","preno","preso","prito","pugad","pugay","pugot","pugox","pukaw","puksa","pulag","pulbo","pulis","pulot","pulox","pulso","punan","punas","punda","pundi","punit","punla","punta","punto","purga","purok","purol","pusit","pusok","puson","pusta","putak","putik","putla","putok","putol","putot","puwax","puwit","puxay","puxol","puyat","radyo","raket","rampa","rason","raxgo","raxya","rebel","regla","rehas","renta","reyna","ribal","riles","rindi","ritmo","riyan","rolyo","ronda","rosas","rupok","rurok","sabak","sabat","sabaw","sabay","sabik","sabit","sabog","sabon","sabox","sadya","sagad","sagap","sagip","sagix","sagot","sagwa","sahig","sahod","sahog","sahol","sakal","sakax","sakay","sakim","sakit","sakop","sakox","saksi","salat","salax","salig","salik","salin","salit","salmo","salok","salon","salop","salot","salta","samba","samid","sampa","sampu","sanay","sando","sanhi","sanib","santo","sapak","sapat","sapaw","sapin","sapit","sapok","sapot","sapul","sarap","sarat","sarsa","satin","sauli","saway","saxag","saxap","saxat","saxay","saxga","saxko","saxla","sayad","sayaw","sayax","sekta","selan","selda","selos","serye","sibak","sibat","sibil","sibol","sidhi","sigaw","sigax","sigla","siglo","sikap","sikat","sikip","siklo","silag","silaw","silax","silay","silbi","silid","silip","silox","silya","simot","simoy","sinag","sinat","sindi","sinix","sinok","sinop","sinta","sipag","sipat","sipit","sipix","sipon","sipot","sirit","sisid","sisil","sisiw","sitaw","sityo","sixap","sixaw","sixil","sixit","sixko","siyam","sobra","sobre","sopas","sosyo","subok","sugal","sugat","sugod","sugpo","suhay","suhol","sukat","sukli","sulat","sulid","sulit","sulok","sulox","suman","sumpa","sundo","sunod","sunog","supil","supot","suray","surot","sutil","suway","suxay","suxit","suxka","tabak","tabas","tabax","tabix","tabla","tabon","taboy","tagal","tagas","tagay","tagos","tagpi","tagpo","tahak","tahan","tahol","tahox","taixa","takal","takas","takaw","takay","takbo","takda","takip","takot","takox","talab","talak","talas","talik","talim","talon","talox","tamad","tambo","tamis","tampo","tanan","tanaw","tanda","tanim","tanix","tanod","tanox","tanso","tanto","tapak","tapat","tapax","tapay","tapik","tapon","tapos","tarik","tatag","tatak","tatas","tatax","tatay","tatlo","tawad","tawag","tawas","tawid","taxad","taxay","taxgi","taxka","taxke","taxos","tayog","tayox","telon","terno","tibag","tibak","tibay","tibok","tigas","tigax","tigil","tigre","tikas","tiket","tikim","tikom","tikoy","tilao","timax","timba","timog","timpi","tinag","tinda","tindi","tinig","tinik","tinta","tipan","tipid","tipon","tirik","titig","titik","tixga","tixin","tiyak","tiyan","tokwa","tolda","torpe","torta","totoo","trapo","trato","trese","tribo","trigo","trono","tropa","troso","tsart","tseke","tubig","tudla","tugma","tugon","tuhod","tuhog","tukax","tukol","tukoy","tukso","tulad","tulak","tulay","tulig","tulin","tulis","tulog","tulot","tulox","tuloy","tumae","tumal","tumao","tumba","tunaw","tunay","tunod","tunog","tupad","tupok","turix","turok","turon","tusok","tutal","tutok","tutol","tutox","tuwad","tuwax","tuwid","tuxga","tuxko","tuyot","udlot","udyok","ugaga","ugali","ugnay","ulila","umaga","umako","umano","umapi","umasa","umbok","umbox","umiba","umihi","umire","umpog","umubo","umuga","umuna","umupa","umupo","umuwi","unawa","undot","untog","unyon","upuan","uriin","usbox","usisa","utuin","uubra","uwian","uxgoy","uxkat","wagas","wakas","walax","walis","wasak","wasto","waxis","welga","xalan","xalay","xamba","xawit","xayon","xinig","xipin","xunit","yabax","yabox","yagit","yakal","yakap","yunit","yurak"];

function hot() {
	screen_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
	if (localStorage.getItem("aggnuch-limahan-highScore") == null) {
		localStorage.setItem("aggnuch-limahan-highScore",0);
	}
	else {
		highScore = Number(localStorage.getItem("aggnuch-limahan-highScore"));
	}
	if (localStorage.getItem("aggnuch-limahan-firstTime") == "true") {
		firstTime = "true";
		localStorage.setItem("aggnuch-limahan-firstTime","true");
	}
	else {
		firstTime = localStorage.getItem("aggnuch-limahan-firstTime");
	}
	startMenu();
}

function menuHelp() {
	document.getElementById("menuField").style.display = "none";
	document.getElementById("instructionsField0").style.display = "block";
	press.play();
}

function gidle() {
	document.getElementById("instructionsField"+inst).style.display = "none";
	if (inst < 3) {
		inst++;
		press.play();
		document.getElementById("instructionsField"+inst).style.display = "block";
	}
	else {
		document.getElementById("instructionsField3").style.display = "none";
		if (firstTime == "true") {
			show("playingField");
			startTimer();
		}
		else {
			document.getElementById("menuField").style.display = "block";
		}
		press.play();
		inst = 0;
	}
}

function startTutorial() {
	menuHelp();
}

function startGame() {
	press.play();
	hide("menuField");
	if (firstTime == "true") {
		startTutorial();
	}
	else {
		show("playingField");
		startTimer();
	}
}

function startMenu() {
	press.play();
	time = 20;
	score = 0;
	hide("gameOverField");
	show("menuField");
	document.getElementById("menuHSText").innerHTML = highScore;
}

function startTimer() {
	makeTimer();
	randomWord();
}

function makeTimer() {
	timer = setInterval(minusOneFrame, 20);
}

function minusOneFrame() {
	if (time > 0) {
		time = time - (1/50);
		if (screen_width < 1281) {
			document.getElementById("timeShape").style.width = `${time/20*50}em`;
		}
		else {
			document.getElementById("timeShape").style.width = `${time/20*540}px`;
		}
	}
	else {
		clearInterval(timer);
		timesUp();
	}
	if (time <= 5 && time > 0) {
		time_.play();
	}
	else {
		time_.pause();
		time_.currentTime = 0;
	}
	if (time > 10) {
		document.getElementById("timeShape").style.backgroundColor = "#33cc33";
	}
	if (time <= 10 && time > 5) {
		document.getElementById("timeShape").style.backgroundColor = "#ff9933";
	}
	if (time <= 5) {
		document.getElementById("timeShape").style.backgroundColor = "#ff3333";
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

function nhsAnimation() {
	scale_n = 1;
	step_n = 1;
	nhsAnim = setInterval(function() {
		if (step_n == 1) {
			scale_n = scale_n + 0.2;
			document.getElementById("nhs").style.scale = scale_n;
			if (scale_n >= 3) {
				step_n = 2;
			}
		}
		if (step_n == 2) {
			scale_n = scale_n - 0.2;
			document.getElementById("nhs").style.scale = scale_n;
			if (scale_n <= 1) {
				scale_n = 1;
				document.getElementById("nhs").style.scale = scale_n;
				clearInterval(nhsAnim);
			}
		}
	}, 10);
}

function timesUp() {
	if (firstTime == "true") {
		firstTime = "false";
		localStorage.setItem("aggnuch-limahan-firstTime",firstTime);
	}
	newHighScore = false;
	time_.currentTime = 0;
	time_.pause();
	if (score > highScore) {
		highScore = score;
		localStorage.setItem("aggnuch-limahan-highScore",highScore);
		newHighScore = true;
	}
	hide("playingField");
	hide("nhs");
	hide("gameOverBack");
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
		if (newHighScore) {
			highscore_.play();
			show("nhs");
			nhsAnimation();
		}
	}, 3000);
	setTimeout(function() {
		show("gameOverBack");
	}, 4000);
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
	wordNeeded = worter[randomize(0,worter.length-1)];
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
	validWord = worter.includes(wordFormed);
	if (validWord) {
		time = time + Math.min(5, 20 - time);
		correct.play();
		score++;
		scoreAnimation();
		setTimeout(randomWord, 300);
	}
	else {
		time = time - 3;
		wrong.play();
		initCircles();
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