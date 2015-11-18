
var htmlObj = document.querySelector('html');
var inputBox= document.querySelector('input[type="text"]');
var dateBox= document.querySelector('input[type="date"]');
var colorBox= document.querySelector('input[type="color"]');
var submitBtn = document.getElementsByTagName('button')[0];

submitBtn.addEventListener('click', function(){
	var val = inputBox.value;
	var valColor = colorBox.value;
	var boxDate = dateBox.value;
	getName(val);
	getColor(valColor);
	myDate(boxDate);
});gulp

function getName(x){
	var resp = parseInt(x);
	if(!isNaN(resp)){
		console.log(true);
	}
	// console.log(parseInt(x) + 5);
	// console.log('hello');
	// return 'hello again';

}
function getColor(y){
	console.log(y);
	htmlObj.style.backgroundColor = y;
}
function myDate(a){
	console.log(a);

}

// inputBox.addEventListener('blur', inputGrab);
// function inputGrab(){
// 	var neuVal = inputBox.value;
// 	console.log(neuVal);
// }