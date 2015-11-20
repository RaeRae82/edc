var $btn = document.getElementsByTagName('button')[0],
	$img = document.getElementById('bg-img'),
	$num = 1;

$btn.addEventListener('click', addClassName);

function addClassName(){
	console.log($num);
	$num = Math.floor((Math.random() * 8)+ 1);
	console.log($num)
	$img.className = "";
	$img.classList.add("img-" + $num);
};