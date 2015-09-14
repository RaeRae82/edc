/* put your javascript here */

/* VANILLA JAVASCRIPT */
var $divs = document.getElementsByClassName('album-wrap')[0].children,
	$scrollUl = document.getElementsByClassName('stats-deets')[0].children[0],
	$scrollLi = document.getElementsByClassName('stats-deets')[0].children[0].children,
	$offset = 0,
	$idx = 0;


function thisEl(el){
	$divs[el].addEventListener('click', function(){
		$idx = el;
		$offset = window.getComputedStyle($scrollLi[el]).width;
		console.log(parseInt($offset, 10));
		$scrollUl.scrollLeft = (parseInt($offset, 10) * $idx) + (40 * $idx);
	});
}

for(var $i = 0; $i < $divs.length; $i++){
	thisEl($i);
}


/* JQUERY */
// $(document).ready(function(){

// 	var $divs = $('.album-wrap div'),
// 		$scrollUl = $('.stats-deets ul'),
// 		$scrollLi = $('.stats-deets li'),
// 		$offset = 0,
// 		$idx = 0;

// 	$('.album-wrap div').on('click', function(){
// 		$idx = $divs.index(this);

// 		$offset =  $scrollLi.eq($idx).width();
// 		$scrollUl.stop().animate({
// 			scrollLeft: ($offset * $idx) + ( 40 * $idx)
// 		},
// 		{
// 			duration: 1000
// 		});
// 	});
// });