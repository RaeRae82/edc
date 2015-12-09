/* js goes here */
var divObj = document.getElementsByTagName('div')[0];
var submitBtn = document.querySelector('button[type="submit"]');
var guessBox = document.querySelector('input[type="text"]');
var math = Math.floor(Math.random() * 100) + 1;
// var img = '<img/photo-1421747839823-baf55e319e87.jpg"height="auto" width="50"/>';
var img = '<img/kitten.png" height="auto" width="50">';

// divObj.innerHTML = img;
submitBtn.addEventListener('click', submitGuess);

function submitGuess(evt){
	evt.preventDefault();
	var guess = guessBox.value;
	

	checkGuess(guess);
}

function checkGuess(num){
	if(num == 5){
		console.log(true);
	}
	else {
		console.log(false);
	}
}





