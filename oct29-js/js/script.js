/* js goes here */

var loginBtn = document.getElementById('login');
var loginbox = document.getElementById('loginbox');
var username = document.getElementById('username');
var password = document.getElementById('password');
var hdrConfrim = document.getElementById('hdr');
var savedUsername = 'rachel';
var savedPassword = 'hell0';
loginBtn.addEventListener('click', toggleLoginBox);


function toggleLoginBox(){
	loginbox.classList.toggle('active');
	username.value = "";
	password.value = "";
	username.classList.remove('err');
	password.classList.remove('err');
}

function userLogin(){
	var unValue = username.value;
	var pwValue = password.value;
	if(unValue === savedUsername && pwValue === savedPassword){
		// hdrConfrim.textContent = "YOU'RE IN!!";
		toggleLoginBox();
		window.location = 'http://google.com';
	}
	if(!unValue || unValue !== savedUsername){
		username.classList.add('err');
	}
	else {
		username.classList.remove('err');
	}
	if(!pwValue || pwValue !== savedPassword){
		password.classList.add('err');
	}
	else {
		password.classList.remove('err');
	}
}







//

var nameLi = document.getElementById('name');
var addressLi = document.getElementById('address');
var cityStateZipLi = document.getElementById('cityStateZip');
var getterLi = document.getElementById('getter');

console.log(getterLi.innerHTML);


var myFirstName = '<h1>Rae</h1>';
var myLastName = 'Calderon'
var address = '1234 N First St';
var	state;
var	city;
var	zip;

nameLi.innerHTML = myFirstName + ' ' + myLastName;
addressLi.textContent = address;




var state;
var city;
var zip;
function getInfo(){
	state = prompt("What state you from?");
	city = prompt("What city you from?");
	zip = parseInt(prompt("Whats you zipcode?"));

	if(!state || !city || !zip){
		console.log("there was a problem");
		alert("please try again");
		getInfo();
	}
	else{
		var isCorrect = confirm("Is this correct?\n" + state + ", " + city + ", " + zip);
		if(!isCorrect){
			getInfo();
		}
		cityStateZip.textContent = (city + ' ' + state + ' '+ zip);
		// alert(state + ' '+ ' ' + city + ' '+ ' ' + zip);
	}

};



// var state = prompt("What state you from?");
// var city = prompt("What city you from?");
// var zip = parseInt(prompt("Whats you zipcode?"));
// alert(state + ' '+ ' ' + city + ' '+ ' ' + zip);
// console.log(typeof state);
// console.log(typeof city);
// console.log(typeof zip);

