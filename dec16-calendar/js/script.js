/* js goes here */

var mainObj = document.getElementsByTagName('main');
var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var month =['January'];
var year = 2015;
// var date = new Date();
var box = document.getElementsByTagName('div')[0];

for(var m = 0; m<month.length; m++){
	var header = document.createElement('h1');
	header.textContent = month[m] +' ' + year;
	box.appendChild(header);

}
for(var d = 0; d<day.length; d++){
	var list = document.createElement('li');
	list.textContent = day[d];
	box.appendChild(list);
	console.log(day[d]);
	
}








