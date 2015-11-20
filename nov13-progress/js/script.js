/* js goes here */

var bodyObj = document.body;
var navObj = document.getElementsByTagName('nav')[0];
var mainObj = document.getElementsByTagName('main')[0];
var progressBar = document.getElementById('progressBar');
var animObjs = document.getElementsByClassName('animWrap');

console.log(animObjs);
var bodyH = 0;
var mainH = 0;

window.addEventListener('resize', checkDims);
window.addEventListener('scroll', checkScroll);

function checkDims(){
	bodyH = document.body.clientHeight;
	mainH = mainObj.clientHeight;
	// console.log(bodyH);
}
checkDims();

function checkScroll(){
	var scrollPos = window.scrollY;
	var dcoUnit = Math.ceil((100 / mainH) * 100)/100;
	var docPos = (scrollPos * dcoUnit);
	if(docPos <= 101){
		// console.log(docPos);
		progressBar.style.width = docPos + '%';
	}
	addAnim(scrollPos);
}

function addAnim(x){
console.log(x);
var animArr = [];
for(var i = 0; i < animObjs.length; i++){
	animArr.push(animObjs[i].offsetTop)
	console.log(animArr);
	}
	for(var i = 0; i = animArr.length; i++){
		if(x > animArr[0])[
			console.log('its grerater');
	}
}