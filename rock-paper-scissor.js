var imgNumber = Math.floor(3*Math.random());
var img2Number = Math.floor(3*Math.random());
var imgSrc = null, usrSrc = null, resultSrc = null;
var win = 0, lose = 0, tie = 0;
var stop = false, stopCount = 0;

function showImage(){
	if (!stop){
		imgNumber = (imgNumber+1)%3;	
		if (imgNumber == 0) imgSrc = "icon/blScissor.png";
		else if (imgNumber == 1) imgSrc = "icon/blRock.png";
		else imgSrc = "icon/blPaper.png";
		document.getElementById("PC_result").setAttribute("src", imgSrc);
		img2Number = (img2Number+1)%3;	
		if (img2Number == 0) imgSrc = "icon/brScissor.png";
		else if (img2Number == 1) imgSrc = "icon/brPaper.png";
		else imgSrc = "icon/brRock.png";
		document.getElementById("user_result").setAttribute("src", imgSrc);
	}
	else{ //暫停10次以顯示結果
		stopCount = (stopCount+1)%10;	
		if (stopCount==0) {
			stop = !stop;
			document.getElementById("game_result").setAttribute("src", "icon/vs.png");
			document.getElementById("scissor").removeAttribute("disabled"); 
			document.getElementById("rock").removeAttribute("disabled"); 
			document.getElementById("paper").removeAttribute("disabled");
		}
	}
}

function results(userItem){
	if (userItem == 0) usrSrc = "icon/brScissor.png";
	else if (userItem == 1) usrSrc = "icon/brRock.png";
	else usrSrc = "icon/brPaper.png";
	document.getElementById("user_result").setAttribute("src", usrSrc);
	compare(userItem); 
}

function compare(userItem){
	var tmp = (imgNumber-userItem+3)%3;	
	if (tmp == 0) { tie++; window.localStorage["rpsTIE"] = tie; resultSrc = "icon/tie.png";}
	else if (tmp == 1) { lose++; window.localStorage["rpsLOSE"] = lose; resultSrc = "icon/lose.png";}
	else { win++; window.localStorage["rpsWIN"] = win; resultSrc = "icon/win.png";}
	document.getElementById("game_result").setAttribute("src", resultSrc);
	stop = !stop;
	document.getElementById("scissor").setAttribute("disabled","disabled"); 
	document.getElementById("rock").setAttribute("disabled","disabled"); 
	document.getElementById("paper").setAttribute("disabled","disabled");
	record();
}

function record(){
	if (typeof window.localStorage["rpsTIE"] != "undefined") tie = parseInt(window.localStorage["rpsTIE"],10);
	if (typeof window.localStorage["rpsLOSE"] != "undefined") lose = parseInt(window.localStorage["rpsLOSE"],10);
	if (typeof window.localStorage["rpsWIN"] != "undefined") win = parseInt(window.localStorage["rpsWIN"],10);
	
	document.getElementById("recordtxt").innerHTML = win.toString() + "W/" + tie.toString() + "T/" + lose.toString() + "L";
}

