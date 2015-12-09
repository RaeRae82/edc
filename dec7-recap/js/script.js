/* js goes here */

// var userObj = document.getElementById('user');

// localStorage.setItem('firstName', 'Rachel');
// var userName = localStorage.getItem('firstName');

// userObj.textContent = userName;

// localStorage.removeItem('firstName');

// if(localStorage.addName){
// 	addName();
// }

// function addName(){

// }










// var promptBox1 = prompt('what is your name');
var userName = '';
var span = document.getElementById('user');

userName += prompt('What is your first name') + ' ';
userName +=	prompt('what is your middle name') + ' ';
userName +=	prompt('what is your last name');
var greeting = 'hello ' + userName + ' Welcome here';

function numb(){
var num = prompt('what is your number?');
	if(num < 10){
		alert('please try again');
		numb();
	}
	else{
		alert('thank you');
	}
	console.log(num);
}
numb();

span.textContent = userName;

var isItGreater = function(num){
	num = parseInt(num);
	console.log(num);
	if(num >= 10){
		span.textContent('you choose a number greater then 10');
		alert('thank you');
	}
	else{
		console.log('it is less');
		userNum = prompt('please select again');
		isItGreater(userNum);
	}

}
isItGreater();

// var foods = ['apples', 'oranges', 'grapes', 'strawbarries', 'bananas'];
// foods.splice(2, 1, 'peanut butter');

// 	for(var i = 0; i < foods.length; i++){
// 	console.log(foods[i]);
// 	}

// var randomNum;
// randomNum = Math.floor(Math.random() * 11);
// console.log(randomNum);



