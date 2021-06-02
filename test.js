canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
canvas.width = 650;
canvas.height = 600;

var teamBtns = document.getElementsByClassName("teamBtns");
var actionBtns = document.getElementsByClassName("actionBtns");
var addPlayerBtn = document.getElementById("addPlayerBtn");
var moveBtn = document.getElementById("moveBtn");
var positionsBtn = document.getElementById("positionsBtn");
var numberBtn = document.getElementById("numberBtn");
var table = document.getElementById("data");

for (var i = 0; i < teamBtns.length; i++) {
  teamBtns[i].addEventListener("click", function() {
  var clickedActiveBtn = 0; 
  var current = document.getElementsByClassName("teamBtns active");
    if (current[0] != undefined){
      if (current[0].className == this.className){
        clickedActiveBtn = 1; 
      };
    current[0].className = current[0].className.replace("teamBtns active", "teamBtns"); 
    };
 
  if (clickedActiveBtn == 0){  
  this.className = "teamBtns active";  
  }});
}