//Event Listeners

//Create DIV element
var div = document.createElement('DIV');
//Set height of element
div.style.height = "100vh";
//Append Element to DOM
document.body.appendChild(div);
//Add Event listener to Element
div.addEventListener('mousemove', function(event)  {
  console.log(event);
  var x = event.clientX;
  var y = event.clientY;
  div.textContent = x + ', ' + y;
  div.style.backgroundColor = 'rgb(' +x+ ','+y+ ', 50)';
});

