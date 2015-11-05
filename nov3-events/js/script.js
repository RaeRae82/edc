/* js goes here */


	// PROJECT #2
var spanObj = document.getElementsByTagName('span')[0],
	divObj = document.getElementsByTagName('div'),
	mainObj = document.getElementsByTagName('main')[0],
	smallObj = document.getElementsByTagName('small')[0],
	timeleft = 25,
	timerId;


divObj[0].addEventListener('mouseenter', function(){
	console.log('start');
	smallObj.textContent = '';
});

divObj[divObj.length - 1].addEventListener('mouseleave', function(){
	console.log('end');
	smallObj.textContent = 'You won!! ' + timeleft + ' seconds left';
	clearTimeout(timerId);
	timeleft = 25;
});

spanObj.addEventListener('mouseenter', function(){
	console.log('game over');
	smallObj.textContent = 'You lost!! ' + timeleft + ' seconds left';
	clearTimeout(timerId);
	timeleft = 25;
});

mainObj.addEventListener('mouseenter', function(){
	timerId = setInterval(countdown, 1000);
})
mainObj.addEventListener('mouseleave', function(){
	clearTimeout(timerId);
})


function countdown(){
	if(timeleft === 0){
		clearTimeout(timerId);
		console.log('Times up!');
	}
	else{
		console.log(timeleft + ' seconds remains');
		timeleft--;
	}
}







// 	PROJECT #1

// var paraObj = document.getElementsByTagName('p')[0];
// var inputObj = document.getElementsByTagName('input')[0];


// paraObj.addEventListener('mousedown', function(){
// 	console.log('mouse buton is down');
// });

// paraObj.addEventListener('mouseup', function(){
// 	console.log('mouse buton is up');
// });

// paraObj.addEventListener('click', function(){
// 	console.log('paragraph has been clicked');
// });

// inputObj.addEventListener('select', function(){
// 	console.log('text has been selected');
// });

// inputObj.addEventListener('copy', function(){
// 	console.log('text has been copied');
// });

// inputObj.addEventListener('cut', function(){
// 	console.log('text has been cut');
// });

// inputObj.addEventListener('paste', function(){
// 	console.log('text has been pasted');
// });

// inputObj.addEventListener('focus', function(){
// 	console.log('input box is in focus');
// });

// inputObj.addEventListener('blur', function(){
// 	console.log('input box is blurred');
// });

// inputObj.addEventListener('ccontextmenu', function(){
// 	console.log('context menu is open');
// });

// inputObj.addEventListener('mouseenter', function(){
// 	console.log('entered the input box');
// });

// inputObj.addEventListener('mouseleave', function(){
// 	console.log('left the input box');
// });

// inputObj.addEventListener('mousemove', function(){
// 	console.log('mouse moved');
// });