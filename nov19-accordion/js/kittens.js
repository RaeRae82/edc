/* js goes here */

var htmlObj = document.getElementsByTagName('html')[0];
var divObj = document.getElementsByTagName('div')[0];
var submitBtn = document.querySelector('button[type="submit"]');
var guessBox = document.querySelector('input[type="text"]');
var math = Math.floor(Math.random() * 100) + 1;
var img = '<img src="img/kitten.png" width="50" height="auto"/>';
var resetBtn = document.getElementById('reset');
var badges = document.querySelectorAll('main > img');

var strayCats = 0;

// divObj.innerHTML = img;
submitBtn.addEventListener('click', submitGuess);
resetBtn.addEventListener('click', clearGame);

function startGame(){
	divObj.innerHTML = '';
	strayCats = randomNum(34);
	// console.log(strayCats);
	for(var i = 0; i < strayCats; i++){
		divObj.innerHTML += img;
	}
}
startGame();

function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;
	guessBox.disabled = true;
	checkGame(guess);
}



function randomNum(max){
	return  Math.floor(Math.random() * (max - 1 + 1)) + 1;
}
randomNum();


function checkGame(guess){
	if(!isNaN(parseInt(guess)) && guess == strayCats){
		getAward(true);
	}
	else {
		getAward(false);
	}
}

function getAward(x){
	badges[+x].style.display = 'block';
	if(x){
		htmlObj.style.backgroundColor = 'hsla(100, 20%, 40%,1)';
	}
	else {
		htmlObj.style.backgroundColor = 'hsla(0, 20%, 50%,1)';
	}
}

function clearGame(){
	divObj.innerHTML = '';
	guessBox.value = '';
	guessBox.disabled = false;
	htmlObj.style.backgroundColor = 'white';
	startGame();
	for(var i = 0; i < badges.length; i++){
		badges[i].style.display = 'none';
	}
}

// false 0
// true 1


// function submitGuess(evt){
// 	evt.preventDefault();
// 	var guess = guessBox.value;
	

// 	checkGuess(guess);
// }








