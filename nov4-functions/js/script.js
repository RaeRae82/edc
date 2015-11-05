/* js goes here */

	// PROJECT #1
// var bodyObj = document.getElementsByTagName('body')[0];
// var divObj = document.querySelector('main div');
// var shipObj = document.querySelector('main div:last-child');




// bodyObj.addEventListener('keydown', function(evt){
// 	var shipX = parseInt(shipObj.style.left);
// 	var shipY = parseInt(shipObj.style.top);
// 	if(evt.keyCode === 37){
// 		shipX = shipX - 5;
// 		shipObj.style.left = shipX+'%';
// 	}
// 	else if(evt.keyCode === 39){
// 		shipX = shipX + 5;
// 		shipObj.style.left = shipX+'%';
// 	}
// 	else if(evt.keyCode === 38){
// 		shipY = shipY - 5;
// 		shipObj.style.top = shipY+'%';
// 	}
// 	else if(evt.keyCode === 40){
// 		shipY = shipY + 5;
// 		shipObj.style.top = shipY+'%';
// 	}
// });
// bodyObj.addEventListener('click', function(evt){
// 	console.log(evt);
// 	var mouseX = evt.x,
// 		mouseY = evt.y;
// 	// console.log(mouseX+', '+mouseY);
// 	moveBall(mouseX, mouseY);
// });

// function moveBall(x, y){
// 	divObj.style.left = x+'px';
// 	divObj.style.top = y+'px';
// 	divObj.style.backgroundColor = 'hsla('+y+', 30%, 60%, 1)';
// }

// function makeShip(){
// 	var shipW = '100px',
// 	 	shipH = '25px',
// 	 	shipClor = 'darkblue',
// 	 	shipX = '50%',	
// 	 	shipY = '75%',
// 	 	shipPos = 'absolute',
// 	 	shipTrans = 'translate3d(-50%, -50%, 0)',
// 	 	shipSlide = 'all 1000ms ease-in-out';

// 	shipObj.style.width = shipW;
// 	shipObj.style.height = shipH;
// 	shipObj.style.backgroundColor = shipClor;
// 	shipObj.style.left = shipX;
// 	shipObj.style.top = shipY;
// 	shipObj.style.position = shipPos;
// 	shipObj.style.transform = shipTrans;
// 	shipObj.style.transition = shipSlide;
// }

// function makeBall(){
// 	var ballW = '20px',
// 	 	ballH = '20px',
// 		ballColr = 'dodgerblue',
// 		ballRadi = '100%',
// 	 	ballX = '100px',
// 	 	ballY = '100px',
// 		ballPos = 'absolute',
// 		ballTrans = 'translate3d(-50%, -50%, 0)',
// 		ballSlide = 'all 200ms ease-in-out'
// 	divObj.style.width = ballW;
// 	divObj.style.height = ballH;
// 	divObj.style.backgroundColor = ballColr;
// 	divObj.style.borderRadius = ballRadi;
// 	divObj.style.left = ballX;
// 	divObj.style.top = ballY;
// 	divObj.style.position = ballPos;
// 	divObj.style.transform = ballTrans;
// 	divObj.style.transition = ballSlide;
// }

// makeBall();
// makeShip();


	// PROJECT #2
var payBtn = document.getElementById('pay');
var	mainObj = document.getElementsByTagName('main')[0];

payBtn.addEventListener('click', showForm);

function showForm(){
	var formStuff = 
		'<form>'+
		'<div>'+
		'<input type="text" name="First Name" placeholder="First Name">'+
		'<input type="text" name="Last Name" placeholder="Last Name">'+
		'</div>'+
		'<div>'+
		'<input type="text" name="Adress" placeholder="Address">'+
		'</div>'+
		'<div>'+
		'<input type="text" name="city" placeholder="City">'+
		'<input type="text" name="State" placeholder="State">'+
		'<input type="text" name="Zip" placeholder="Zip Code">'+
		'</div>'+
		'<div>'+
		'<label for="CC">'+
		'<input type="text" name="CC" placeholder="0000" >'+
		'<input type="text" name="CC" placeholder="0000">'+
		'<input type="text" name="CC" placeholder="0000">'+
		'<input type="text" name="CC" placeholder="0000">'+
		'</label>'+
		'</div>'+
		'<div>'+
		'<input type="text" name="amount" placeholder="$ Amount of Payment">'+
		'</div>'+
		'<div>'+
		'<input type="submit" name="btn">'+
		'</div>'+
		'</form>';
	mainObj.innerHTML = formStuff;

	var formObj = document.getElementsByTagName('form')[0];
	var formEls = formObj.length;
	var submitBtn = formObj.querySelector('input[type="submit"]');

	submitBtn.addEventListener('click', function(evt){
		evt.preventDefault();
		getInfo();
	});

	// var formStuff = 
	// 	'<form>'+
	// 	'<div>'+
	// 	'<input type="text" name="First Name" placeholder="First Name">'+
	// 	'<input type="text" name="Last Name" placeholder="Last Name">'+
	// 	'</div>'+
	// 	'<div>'+
	// 	'<input type="text" name="Adress" placeholder="Address">'+
	// 	'</div>'+
	// 	'<div>'+
	// 	'<input type="text" name="city" placeholder="City">'+
	// 	'<input type="text" name="State" placeholder="State">'+
	// 	'<input type="text" name="Zip" placeholder="Zip Code">'+
	// 	'</div>'+
	// 	'<div>'+
	// 	'<label for="CC">'+
	// 	'<input type="text" name="CC" placeholder="0000" >'+
	// 	'<input type="text" name="CC" placeholder="0000">'+
	// 	'<input type="text" name="CC" placeholder="0000">'+
	// 	'<input type="text" name="CC" placeholder="0000">'+
	// 	'</label>'+
	// 	'</div>'+
	// 	'<div>'+
	// 	'<input type="text" name="amount" placeholder="$ Amount of Payment">'+
	// 	'</div>'+
	// 	'<div>'+
	// 	'<input type="submit" name="btn">'+
	// 	'</div>'+
	// 	'</form>';

	function getInfo(){
		var formInfo,
			formArr = [];
		for(var i = 0; i < formEls; i++){
			formInfo = formObj.elements[i].value;
			if(!!formInfo){
				formArr.push(formInfo);
			}
			console.log(formArr);
		}
		function thankyou(){
			alert('Thank you ' + formArr[0] + ' ' + formArr[1]);
		}
		thankyou();
	}
}