/* put your javascript here */

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.520618, lng: -73.552457},
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}


var $sizers = document.getElementsByTagName('button');
var $size = document.getElementsByTagName('body')[0];
var $default = '100%'

for(var $i = 0; $i < $sizers.length; $i++){
	$sizers[$i].addEventListener('click', function(){
		console.log(this.innerHTML);
		var $getBtn = this.innerHTML;
		if($getBtn == '+'){
			console.log('the plus key was clicked');
			$default = $default + 10;
			$size.style.fontSize = '$default';
		}
		else{
			console.log('the minus key was clicked');
			$size.style.fontSize = '100%';
		}
	});
}