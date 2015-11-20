/* js goes here */


var bodyObj = document.body;
var mainObj = document.getElementsByTagName('main')[0];
var timerId = window.setTimeout(displayLogin, 5000);
// var submitBtn = document.querySelector('#loginBox input[type="submit"]');

	// ONE WAY TO GET INFO INTO CONSOLE
	// from username and password on form

// var usernameInput = document.getElementById('username');
// var passwordInput = document.getElementById('passwrod');

var formMarkup =
	'<div id="loginBox">'+
		'<form>'+
			'<label for="username">'+
				'<span>username</span>'+
				'<input id="username" type="text" placeholder= "username">'+
				'<small></small>'+
			'</label>'+
			'<label for="password">'+
				'<span>password</span>'+
				'<input id="password" type="password" placeholder= "password">'+
				'<small></small>'+
			'</label>'+
			'<label for="email">'+
				'<span>email</span>'+
				'<input id="email" type="text" placeholder= "email">'+
				'<small></small>'+
			'</label>'+
			'<label for="number">'+
				'<span>phone number</span>'+
				'<input id="number" type="text" placeholder= "number">'+
				'<small></small>'+
			'</label>'+
			'<input class="button"type="submit" value="Submit">'+
		'</form>'+
	'</div>';

// submitBtn.addEventListener('click', function(evt){
//     evt.preventDefault();
//     var unVal = usernameInput.value;
//     var pwVal = passwordInput.value;
    
//     console.log(unVal + ', ' + pwVal);
// })


	// ANOTHER WAY TO GET INFO INTO CONSOLE
	// from username and password on form

// var formObj = document.querySelector('#loginBox form');

// submitBtn.addEventListener('click', function(evt){
// 	evt.preventDefault();
// 	var els = formObj.elements;
// 	var len = els.length - 1;
// 	var arr = [];

// 	for(var i = 0; i < len; i++){
// 		if(!els[i].value){
// 			els[i].nextElementSibling.innerHTML = 'Please fill the input';
// 			// console.log('field is empty');
// 		}
// 		else {
// 			els[i].nextElementSibling.innerHTML = '';
// 			arr.push(els[i].value);	
// 		}
// 	}
// 	// console.log(arr);
// })

function displayLogin(){
	clearTimeout(timerId);
	mainObj.innerHTML = formMarkup;
	var submitBtn = document.querySelector('#loginBox input[type="submit"]');
	var formObj = document.querySelector('#loginBox form');

	submitBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		var els = formObj.elements;
		var len = els.length - 1;
		var arr = [];

		for(var i = 0; i < len; i++){
			if(!els[i].value){
				els[i].nextElementSibling.innerHTML = 'Please fill the input';
			}
			else {
				// els[i].nextElementSibling.innerHTML = '';
				arr.push(els[i].value);	
			}
		}
		console.log(arr);
	});
}


bodyObj.addEventListener('mousemove', checkDim);
function checkDim(evt){
	var winW = window.innerWidth;
	var winH = window.innerHeight;
	var mouseX = evt.clientX;
	var mouseY = evt.clientY;

	var hue = (mouseY / winH) * 360;
	var lum = (mouseX / winW) * 100;

	bodyObj.style.backgroundColor = 'hsla('+ hue +', '+ lum +'%, ' + lum + '%, 1)'
}



