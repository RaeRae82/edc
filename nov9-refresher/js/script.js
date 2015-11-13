/* js goes here */


var bodyObj = document.body;

var array = ['Rene', 'Rae', 'Jessica'];


bodyObj.innerHTML = ('<button id="btn">Click</button>');
//                      <ul id="list"></ul>');
var btnObj = document.getElementById('btn');
var listObj = document.getElementById('list');

btnObj.addEventListener('click', loops);



// bodyObj.style.position = 'absolute'
// bodyObj.style.top = '100px'
// bodyObj.style.left = '100px'
// bodyObj.style.transform = 'translate3d(-50%, -50%)';


bodyObj.addEventListener('mousemove', function(evt){
   var mouseX = evt.clientX;
   var mouseY = evt.clientY;
    console.log(mouseX + ':' + mouseY);
   btn.style.left = mouseX + 'px';
   btn.style.top = mouseY + 'px';
});



function loops(){
  array.sort();
  for(var i = 0; i < array.length; i++){
    console.log(array[i].length);
  }
};


// function vars(x, y){
//   var idx = y + 1;
//   switch(y){
//     case 0:
//       listObj.innerHTML = '<li>' + x + ' is the ' + idx + 'st in the index.</li>';
//       break;
//     case 1:
//       listObj.innerHTML +='<li>' + x + ' is the ' + idx + 'nd in the index.</li>';
//       break;
//     case 2:
//       listObj.innerHTML +='<li>' + x + ' is the ' + idx + 'rd in the index.</li>';
//       break;  
//     default: 
//       listObj.innerHTML +='<li>' + x + ' is the ' + idx + ' in the index.</li>';
//       break;  
//   }
// }







// var str = ('rachel');
// var inter = 40;
// var flt = 1.5;
// var boo = (true);
// var array = ['blue', 'red', 'purple', 'pink', 'coral'];
// var ray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// function math(x, y){
//   var total = (x * y);
//   var inter = 10;
//   if(inter > total){
//     console.log('is greater then');
//   }
//   else {
//     console.log('is less then');
//   }
// }
// math(ray[2], ray[6]);
// // console.log(array.length);





/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:24
*/
/*
Exception: SyntaxError: missing ) after argument list
@Scratchpad/1:24
*/