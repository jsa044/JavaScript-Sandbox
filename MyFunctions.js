/*
//Event Listeners

//this is the imperative version of the program

//Create DIV element
var div = document.createElement('DIV');
//Set height of element
div.style.height = "100vh";
//Append Element to DOM
document.body.appendChild(div);
//Add Event listener to Element.  Moving the mouse sends an event to the callback function.
// Example of asynchronous programming because events are not at regular intervals.

div.addEventListener('mousemove', function(event)  {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ', ' + y;
  div.style.backgroundColor = 'rgb(' +x+ ','+y+ ', 50)';
});

*/


//This is the functional version of the program

//Event Listeners

//A funtion to create element to be passed to the event listener
function fullScreen(element) {
  var newElement = document.createElement(element);
  //Set height of element
  newElement.style.height = "100vh";
  //append element to the DOM
  document.body.appendChild(newElement);  
  return newElement;
}

function input(inputType,DOMElement,callback) {
  DOMElement.addEventListener(inputType, function(event)  {  
  var x = event.clientX;
  var y = event.clientY;
  callback(DOMElement, x, y);
});  
}

function output(element, x, y) {
  
  element.textContent = x + ', ' + y;
  element.style.backgroundColor = 'rgb(' +x+ ','+y+ ', 150)';  
}
//Connect parts together and instantiate(call)the input function.
input('mousemove', fullScreen('DIV'), output)