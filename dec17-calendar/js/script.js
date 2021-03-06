/* js goes here */

var cal = document.querySelector('#cal .content');
var d = new Date();
var modM = d.getMonth();

var prevBtn = document.getElementById('prev').addEventListener('click', function(evt){
	modM --;
	modD(evt, modM);
	// console.log(modM);
});

var nextBtn = document.getElementById('next').addEventListener('click', function(evt){
	modM ++;
	modD(evt, modM);
});

var modD = function(){
	arguments[0].preventDefault();
	calcCal(new Date(d.getFullYear(), arguments[1], d.getDate()));
}

var calcCal = function(){
	var $date = arguments[0];

	var thisWD = $date.getDay();
	var thisD = $date.getDate();
	var thisM = $date.getMonth();
	var thisY = $date.getFullYear();

	// cal.innerHTML = strWeekday(thisWD) + ' '+ strMonth(thisM) + ' '+ thisD + ' ' + thisY;
	cal.innerHTML = printCal(thisY, strMonth(thisM), dayOfWeek(thisY, thisM), daysInMonth(thisY, thisM), thisD);
	// daysInMonth(thisY, thisM);
};

var today = function(year, month){
	return new Date(year, month).getDate();
}

var dayOfWeek = function(year, month){
	return new Date(year, month).getDay();
};

var daysInMonth = function(year, month){
	// console.log(new Date(11, 2015, 32).getDate());
	return 32 - new Date(year, month, 32).getDate();
};


var strWeekday = function(wd){
	switch(wd){
		case 0:
			wd = 'Sunday';
			break;
		case 1:
			wd = 'Monday';
			break;
		case 2:
			wd = 'Tuesday';
			break;
		case 3:
			wd = 'Wednesday';
			break;
		case 4:
			wd = 'Thursday';
			break;
		case 5:
			wd = 'Friday';
			break;
		case 6:
			wd = 'Saturday';
			break;
	}
	return wd;		
}

var strMonth = function(m){
	switch(m){
		case 0:
			m = 'January';
			break;
		case 1:
			m = 'February';
			break;
		case 2:
			m = 'March';
			break;
		case 3:
			m = 'April';
			break;
		case 4:
			m = 'May';
			break;
		case 5:
			m = 'June';
			break;
		case 6:
			m = 'July';
			break;
		case 7:
			m = 'August';
			break;
		case 8:
			m = 'September';
			break;
		case 9:
			m = 'October';
			break;
		case 10:
			m = 'November';
			break;
		case 11:
			m = 'December';
			break;
	}
	return m;
};

var printCal = function(year, month, dayOfWeek, days, today){
	console.log(today);
	var output = 
		'<div class="header">'+
			'<h1>'+month+' '+ year+'</h1>'+
		'</div>';
	output +=
		'<div class="daysofweek">'+
			'<span>Sun</span>'+
			'<span>Mon</span>'+
			'<span>Tues</span>'+
			'<span>Wed</span>'+
			'<span>Thur</span>'+
			'<span>Fri</span>'+
			'<span>Sat</span>'+
		'</div>';

	output += '<div class="days">';

	for(var h = 0; h < dayOfWeek; h++){
		output +=
			'<div></div>';
	}

	for(var i = 0; i < days; i++){
		if(i+1 === today && d.getMonth() === modM){
			output += '<div class="today">'+(i+1)+'</div>'
		}
		else {
			output +=
			'<div>'+(i+1)+'</div>';
		}
	}
	output += '</div>';
	return output;
};

var initCal = function(){
	calcCal(d);
}(d);