/* js goes here */



var textObj = document.getElementsByTagName('textarea')[0];
var keyOutput = document.querySelector('main div p:first-child');
var delOutput = document.querySelector('main div p:last-child');
var timeOutput = document.querySelector('main p:first-child');
var compareText = document.getElementById('compare').textContent;
var characterNum = 0;
var deleteNum = 0;
var keyTimer;
var timeStart = 5;
var timeLeft = timeStart;

var page2Btn = document.getElementById('page2');
var mainObj = document.getElementsByTagName('main')[0];
var pageTwo = 
	'<h1>This is page two</h1>'+
	'<div class="cta"><p>This is my call to action</p></div>'+
	'<footer>copy right 2015</footer>';

page2Btn.addEventListener('click', function(){
	mainObj.innerHTML = pageTwo;
})


textObj.addEventListener('keypress', getCharacter);
textObj.addEventListener('keydown', checkDelete);
textObj.addEventListener('focus', keyTimer);

function checkDelete(evt){
	if(evt.which == 8 || evt.which == 46){
		deleteNum = deleteNum + 1;
		delOutput.textContent = deleteNum;
	}
}

function getCharacter(evt){
	var character;
	if(evt.which == null){
		character = String.fromCharCode(evt.keyCode);
	}
	else if(evt.which != 0 && evt.keyCode != 0){
		character = String.fromCharCode(evt.which);
	}
	else {
		console.log('special key');
	}
	countCharacters();
}

function countCharacters(){
	characterNum = characterNum + 1;
	keyOutput.textContent = characterNum;
}

function keyTimer(){
	keyTimer = setInterval(countDown, 1000);
}

function countDown(){
	if(timeLeft === 0){
		clearTimeout(keyTimer);
		timeOutput.textContent = "Times Up!";
		wrapUp();
	}
	else {
		timeOutput.textContent = timeLeft;
		timeLeft--;
	}
}

function wrapUp(){
	textObj.readOnly = true;
	var userText = textObj.value;
	console.log( compareText.localCompare(userText) );
}