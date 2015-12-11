/* js goes here */
var blankNums = document.getElementsByClassName('num');
var colons = document.getElementsByClassName('colon');
var timerId = window.setInterval(runClock, 1000);

for(var i = 0; i < blankNums.length; i++){
	var imgNum = document.createElement('img');
	imgNum.src = 'img/num-0.png';
	blankNums[i].appendChild(imgNum);
}
for(var j = 0; j < colons.length; j++){
	var colNum = document.createElement('img');
	colNum.src = 'img/dots_on.png';
	colons[j].appendChild(colNum);
}

var secDouble = document.querySelector('#second-00 img');
var secSingle = document.querySelector('#second-0 img');

function runClock(){
	var thisTime = new Date();
	getSeconds(thisTime.getSeconds());
	getMinutes(thisTime.getMinutes());
	getHours(thisTime.getHours());
}

function getSeconds(x){
	var sec = x.toString();
	if(sec < 10){
		sec = '0' + sec;
	}
	console.log(sec.split(''));
	secDouble.src = 'img/num-'+ sec.split('')[0] + '.png';
	secSingle.src = 'img/num-'+ sec.split('')[1] + '.png';
}

var minDouble = document.querySelector('#minute-00 img');
var minSingle = document.querySelector('#minute-0 img');

function getMinutes(y){
	var min = y.toString();
	if(min < 10){
		min = '0' + min;
	}
	console.log(min.split(''));
	minDouble.src = 'img/num-'+ min.split('')[0] + '.png';
	minSingle.src = 'img/num-'+ min.split('')[1] + '.png';
}

var hrDouble = document.querySelector('#hour-00 img');
var hrSingle = document.querySelector('#hour-0 img');

function getHours(z){
	var hr = z.toString();
	if(hr < 10){
		hr = '0' + hr;
	}
	console.log(hr.split(''));
	hrDouble.src = 'img/num-'+ hr.split('')[0] + '.png';
	hrSingle.src = 'img/num-'+ hr.split('')[1] + '.png';
}