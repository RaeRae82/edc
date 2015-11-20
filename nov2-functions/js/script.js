/* js goes here */

var clickbtn = document.getElementsByTagName('button')[0];
var inputEl = document.getElementsByTagName('input');
var resultEl = document.getElementById('results');

clickbtn.addEventListener('click', disableMe);
inputEl[1].addEventListener('click', getInfo);

function getUserName(){
	var firstname = prompt("What is your name?");
	console.log(firstname);
	var newEl = document.createElement('h1');
	var parentEl = clickbtn.parentNode;
	newEl.textContent = "Welcome " + firstname + " please click button.";
	if(isNaN(firstname)){
		parentEl.insertBefore(newEl, clickbtn);
	}
}
getUserName()

function disableMe(){
	// console.log('It works');
	for(var i = 0; i < inputEl.length; i++){
		// console.log(inputEl[i]);
		if(inputEl[i].disabled){
			inputEl[i].disabled = false;
		}
		else{
			inputEl[i].disabled = true;
		}
		inputEl[0].value = "";
	}
}

function getInfo(){
	var infoVal = inputEl[0].value
	if(!!inputEl[0].value && !isNaN(inputEl[0].value)){
		// var infoVal = inputEl[0].value
		// console.log(infoVal);
		// resultEl.textContent = infoVal;
		resultEl.textContent = getRand(infoVal);
		disableMe();
	}
	else {
		resultEl.textContent = (infoVal + ' is not a number, please put a number');
	}
}
function getRand(x){
	var y = Math.floor(Math.random() * 100) + 1;
	return x*y;
}


