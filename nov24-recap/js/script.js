/* js goes here */


var winObj = window;
var bodyObj = document.body;
var tog = document.getElementsByClassName('toggle')[0];
var mainObj = document.getElementsByTagName('main')[0];
var headerObj = document.getElementsByTagName('header')[0];
var navObj = document.getElementsByTagName('nav')[0];



tog.addEventListener('click', function(){
	console.log(mainObj);
	mainObj.classList.toggle('drkcolor');
	headerObj.classList.toggle('newImg');
	navObj.classList.toggle('newNav');
	
});

winObj.addEventListener('scroll', scrollDist);


function scrollDist(){
	var scrollHeight = winObj.scrollY;
	var headerHeight = headerObj.clientHeight;
	var navHeight = navObj.clientHeight;
	if(scrollHeight > headerHeight){
		navObj.classList.add('fixed');
		mainObj.style.paddingTop = navHeight +'px';
	}
	else {
		navObj.classList.remove('fixed');
		mainObj.style.paddingTop = '0px';
	}
}

