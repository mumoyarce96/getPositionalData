canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
c = document.getElementById('canvas2');
ctx = canvas2.getContext('2d');

canvas.width = 650;
canvas.height = 600
c.width = 650;
var selectedTeam = "Team 1"
var eventType = "Shot";
var src = 'https://i.imgur.com/tRl1Xux.png';
var src2 = 'Sample.png'
var h = 0;
var w = 0;
var frame = 0;
var frameList = [];
var tableHead = '<thead><tr><th>Frame</th><th>Team</th><th>Player</th><th>X</th><th>Y</th><th></th></tr></thead><tbody id="data-body"></tbody>';

let img = new Image();
img.onload = function(){
  w = canvas.width;
	nw = img.naturalWidth;
	nh = img.naturalHeight;
	aspect = nw/nh;
	h = canvas.width/aspect;
	canvas.height = h;
	context.drawImage(img, 0, 0, w, h);
  update();
 }

let img2 = new Image();
img2.onload = function(){
  let w = c.width;
  let nw = img2.naturalWidth;
  let nh = img2.naturalHeight;
  let aspect = nw/nh;
  let h = c.width/aspect;
  c.height = h;
  ctx.drawImage(img2, 0, 0, w, h);
 }
img.src = src;
img2.src = src2;

ctx.beginPath();
ctx.lineWidth = "6";
ctx.strokeStyle = "red";
ctx.rect(5, 5, 290, 140);
ctx.stroke();

function loadImage() {
        var input, file, fr;
        if (typeof window.FileReader !== 'function') {
            write("The file API isn't supported on this browser yet.");
            return;
        }
        input = document.getElementById('imgfile');
        if (!input) {
            write("Um, couldn't find the imgfile element.");
        }
        else if (!input.files) {
            write("This browser doesn't seem to support the `files` property of file inputs.");
        }
        else if (!input.files[0]) {
            write("Please select a file before clicking 'Load'");
        }
        else {
            file = input.files[0];
            fr = new FileReader();
            fr.onload = createImage;
            fr.readAsDataURL(file);
        }
        function createImage() {
            img2 = new Image();
            img2.onload = imageLoaded;
            source = fr.result;
            img2.src = source;
        }
        function imageLoaded() {
           let w = c.width
           let nw = img2.width;
           let nh = img2.height;
           let aspect = nw/nh;
           let h = c.width/aspect;
           c.height = h;
           ctx.drawImage(img2,0,0, w, h);
        }

        function write(msg) {
            var p = document.createElement('p');
            p.innerHTML = msg;
            document.body.appendChild(p);
        }
    }

class Circle {
  constructor(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.fill();
    context.closePath();
  }
}

circles = [];
function createPlayer(team, number, x, y){
  circles.push({
  x: x, y: y, r:8, 
  team: team, number: number, selected: 0
  });
} 

function update(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(img, 0, 0,w, h);
  for(var i=0; i<circles.length; i++){
    if (circles[i].team != "Ball"){
      context.fillStyle = "black";
      if (circles[i].team == document.getElementById("team2Btn").innerText){
        context.fillStyle = "red";
      }   
      if (circles[i].selected == 1){
        context.fillStyle = "Indigo";
      }  
      let myCircle = new Circle(circles[i].x, circles[i].y, circles[i].r); 
      myCircle.draw(context);
      context.fillStyle = "white";
      context.font = "11px Arial";
      if (circles[i].number < 10) {
        context.fillText(circles[i].number, circles[i].x-3, circles[i].y+5);
      } else{
        context.fillText(circles[i].number, circles[i].x-6.5, circles[i].y+5);
      }
    }
  }
  for (var i=0; i<circles.length; i++){
    if (circles[i].team =="Ball"){
      ball = circles[i];
      ball.r = 4;
      context.fillStyle = "white";
      let canvasBall = new Circle(ball.x, ball.y, ball.r); 
      canvasBall.draw(context);
      break;
    }
  }
};
 
createPlayer("Ball", "-", 150, 150);
var teamBtns = document.getElementsByClassName("teamBtns");
var actionBtns = document.getElementsByClassName("actionBtns");
var addPlayerBtn = document.getElementById("addPlayerBtn");
var moveBtn = document.getElementById("moveBtn");
var positionsBtn = document.getElementById("positionsBtn");
var numberBtn = document.getElementById("numberBtn");
var undoBtn = document.getElementById("undoBtn");
var clearBtn = document.getElementById("clearBtn");
var deleteBtn = document.getElementById("deleteBtn");
var table = document.getElementById("data");
var getFrameNumber = document.getElementById("getFrameNumber");
var showFrame = document.getElementById("showFrame");
var editFrame = document.getElementById("editFrame");

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

for (var i = 0; i < actionBtns.length; i++) {
  actionBtns[i].addEventListener("click", function() {
  var clickedActiveBtn = 0; 
  var current = document.getElementsByClassName("actionBtns active");
    if (current[0] != undefined){
      if (current[0].className == this.className){
        clickedActiveBtn = 1; 
      };
    current[0].className = current[0].className.replace("actionBtns active", "actionBtns"); 
    };
 
  if (clickedActiveBtn == 0){  
  this.className = "actionBtns active";  
  }});
}

var changeTeam = function () {
  selectedTeam = this.innerHTML;
};

var changeTeamName = function () {
  var team1Name = document.getElementById("add-team1-name").value;
  var team2Name = document.getElementById("add-team2-name").value;
  if (team1Name){
    for(var i=0; i<circles.length; i++){
      if (circles[i].team == document.getElementById("team1Btn").innerText){
        circles[i].team = team1Name;
      }   
    }

    for (var row = 0; row < table.rows.length; row++) {
      if (table.rows[row].cells[1].innerHTML == document.getElementById("team1Btn").innerText){
        table.rows[row].cells[1].innerHTML = team1Name;
      } 
    }
    document.getElementById("team1Btn").innerText = team1Name;
    selectedTeam = team1Name;
  } 
  
  if (team2Name){
    for(var i=0; i<circles.length; i++){
      if (circles[i].team == document.getElementById("team2Btn").innerText){
        circles[i].team = team2Name;
      }   
    }

    for (var row = 0; row < table.rows.length; row++) {
      if (table.rows[row].cells[1].innerHTML == document.getElementById("team2Btn").innerText){
        table.rows[row].cells[1].innerHTML = team2Name;
      } 
    }

    document.getElementById("team2Btn").innerText = team2Name;
    selectedTeam = team2Name;
  } 
};

var teamNameChanger = function (e) {
  var key = e.keyCode;

  if (key == 13) {
    changeTeamName();
  }
};


for (var i = 0; i < teamBtns.length; i++) {
  teamBtns[i].onclick = changeTeam;
}


deleteBtn.onclick = function () {
  for (var i = 0; i < circles.length; i++){
    if (circles[i].selected == 1){
      circles.splice(i,1);
      update();
      break;
    }
  }
};

undoBtn.onclick = function () {
  if (circles.length>1){
    circles.pop();
    update();
  }
};

clearBtn.onclick = function () {
  ball = circles[0];
  circles = [];
  createPlayer("Ball", "-", ball.x, ball.y);
  update();
};


function getMousePos(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

function countPlayers(team){
  players = 0;
  for (var i = 0; i<circles.length; i++){
    if (circles[i].team == team){
      players = players+1;
    }
  }
  return players;
}

function getUsedNumbers(team){
  var numbers = [];
   for (var i = 0; i<circles.length; i++){
    if (circles[i].team == team){
      numbers.push(circles[i].number);
    }
  }  
  numbers.sort((function(a, b){return a-b}));
  return numbers
}

function getLowerAvailableNumber(team){
  var availableNumber
  var candidates = Array.from({length: 11}, (_, i) => i + 1);
  var usedNumbers = getUsedNumbers(team);
  for (var i = 0; i < candidates.length; i++){
    candidate = candidates[i];
    if (usedNumbers.includes(candidate) == false){
      availableNumber = candidate;
      break;
    }
  }
  return availableNumber;
}

canvas.addEventListener("click", function (evt) {
  var mousePos = getMousePos(canvas, evt);
  if (addPlayerBtn.className == "actionBtns active"){
    if (countPlayers(selectedTeam) < 11){  
      number = getLowerAvailableNumber(selectedTeam);
      createPlayer(selectedTeam, number, mousePos.x, mousePos.y);
      update();
    }
  };

var rect = canvas.getBoundingClientRect();
var selectedCircle = null;
canvas.onmousedown = function(evt){
    for (var i=0; i<circles.length; i++){
      if (circles[i].x-circles[i].r < evt.clientX - rect.left && (circles[i].x+circles[i].r > evt.clientX - rect.left) && (circles[i].y-circles[i].r < evt.clientY - rect.top) && (circles[i].y+circles[i].r > evt.clientY - rect.top) && (addPlayerBtn.className == "actionBtns")){
        if (circles[i].selected == 0){
          selectedCircle = circles[i];
          selectedCircle.selected = 1;
          for(var j=0; j<circles.length;j++){
            if(i != j){
              circles[j].selected = 0;
            }
          }
        } else {
          circles[i].selected = 0;
        } 
        update();
        break;
      }
    }  
  }

canvas.onmousemove = function (evt){
  if (selectedCircle != null && (moveBtn.className == "actionBtns active")){
    selectedCircle.x = evt.clientX-rect.left;
    selectedCircle.y = evt.clientY-rect.top;
    update();
  }
};  

canvas.onmouseup = function(evt){
  if (selectedCircle != null && moveBtn.className == "actionBtns active"){
    selectedCircle.selected = 0;
    selectedCircle = null;
    update();
    }  
};

function reScale(coord, value){
  if (coord == 'x'|| (coord == 'X')){
    const pitchLengthX = 120;
    return (value-20)*pitchLengthX/607;
  }
  if (coord == 'y'|| (coord == 'Y')){
    const pitchHeightY = 80;
    return (value-21.36)*pitchHeightY/404.91;
  }
}; 


function createTable(circles){
   for (var i=0; i<circles.length; i++){
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = circles[i].frame;
    cell2.innerHTML = circles[i].team;
    cell3.innerHTML = circles[i].number;
    cell4.innerHTML = Math.round(reScale("x",circles[i].x)*10)/10;
    cell5.innerHTML = Math.round(reScale("y",circles[i].y)*10)/10;
  }
}

function createFullTable(){
  table.innerHTML = tableHead;
  for (var i=0; i<frameList.length;i++){
      createTable(JSON.parse(JSON.stringify(frameList[i])));
  }
};

positionsBtn.onclick = function(){
  if (editFrame.className == "editFrame active"){
    frame = circles[0].frame;
    for (var i = 0; i<circles.length; i++){
      circles[i].frame = frame;
    }
    frameList[frame-1] = JSON.parse(JSON.stringify(circles));
    table.innerHTML = tableHead;
    createTable(circles);
  } else {
    frame = frame + 1;
    getFrameNumber.max = frame;
    for (var i=0; i<circles.length; i++){
      circles[i].frame = frame;
    }
    var deepClone = JSON.parse(JSON.stringify(circles));
    frameList.push(deepClone);
    createTable(circles);    
  }
}

showFrame.onclick = function() {
  if (this.className == "showFrame active"){
    this.className = "showFrame";
    if(getFrameNumber.value == activationFrame){
      createFullTable();
      let index = frameList.length-1;
      circles = JSON.parse(JSON.stringify(frameList[index]));
      update();
    }

  }else{
    this.className = "showFrame active";
    table.innerHTML = tableHead;
    if (getFrameNumber.value != ""){
        let index = getFrameNumber.value-1;
        circles = JSON.parse(JSON.stringify(frameList[index]));
        update();
        createTable(circles);
        activationFrame = circles[0].frame;
    }else{
        createFullTable();
      }
      } 
}   

editFrame.onclick = function(){
  if (this.className == "editFrame active"){
    this.className = "editFrame";
  }else{
    this.className = "editFrame active"
  }
}
document.getElementById(
    "table-container"
  ).scrollTop = document.getElementById("table-container").scrollHeight;
});

function onDeleteRow(e){
  if (!e.target.classList.contains('deleteRowBtn')){
  return;
  }
  const btn = e.target;
  btn.closest('tr').remove();
}

table.addEventListener('click',onDeleteRow)

document.getElementById("clearTable").onclick = function () {
  table.innerHTML = tableHead;
  frame = 0;
  getFrameNumber.max = 1;
  getFrameNumber.value = "";
  frameList = [];
};

function downloadCSV(csv, filename) {
  var csvFile;
  var downloadLink;

  // CSV file
  csvFile = new Blob([csv], { type: "text/csv" });

  // Download link
  downloadLink = document.createElement("a");

  // File name
  downloadLink.download = filename;

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile);

  // Hide download link
  downloadLink.style.display = "none";

  // Add the link to DOM
  document.body.appendChild(downloadLink);

  // Click download link
  downloadLink.click();
}

function exportTableToCSV(filename) {
  var csv = [];
  var rows = document.querySelectorAll("table tr");

  for (var i = 0; i < rows.length; i++) {
    var row = [],
      cols = rows[i].querySelectorAll("td, th");

    for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText);

    csv.push(row.join(","));
  }

filename = "positionalData.csv"
  // Download CSV file
  downloadCSV(csv.join("\n"), filename);
}


