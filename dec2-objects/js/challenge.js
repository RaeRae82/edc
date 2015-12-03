
function Person(name, age, job){
	this.name = name;
	this.age = age;
	this.job = job;

}

var person1 = new Person('Angela', 30, 'clerk');
var person2 = new Person('Marina', 35, 'postal');
var person3 = new Person('Anthony', 25, 'insurance');
var person4 = new Person('Jim', 20, 'casino');
var person5 = new Person('Rene', 11, 'student');

var person = function(){
for(var i = 0; i < arguments.length; i++){
	console.log(arguments[i]);
	}

}(person1, person2, person3, person4, person5);


