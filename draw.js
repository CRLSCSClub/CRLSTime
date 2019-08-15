var now = ServerDate;
var offset = 0;
// in case `now` needs to be manually changed for development purposes

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var smallerDimension = (window.innerWidth < window.innerHeight) ? window.innerWidth : window.innerHeight;
var radius = smallerDimension / 2 - 12;
window.addEventListener('resize', function(event) {
  clearTimeout(resizeTimeout);
  var resizeTimeout = setTimeout(function(){
    window.location.reload();
  }, 1500);
});
var imageObj = new Image();
imageObj.src = 'falcon_high_res2.png';
var delta = radius;
ctx.translate(delta, delta);
var radius = radius * 0.93
var smRadius = radius * 0.18;
// CRLSTime button
var upperLeftX = -radius * 0.88;
var upperLeftY = -radius * 0.88;
function drawCRLSTimeButton() {
  drawSmallCircle(upperLeftX, upperLeftY, smRadius, '#DDD');
  ctx.font = "bold " + radius*0.067 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.fillStyle = '#888';
  ctx.fillText("CRLSTime", upperLeftX, upperLeftY);
}
// Info/settings button
var upperRightX = radius * 0.88;
var upperRightY = -radius * 0.88;
function drawSettingsButton() {
  drawSmallCircle(upperRightX, upperRightY, smRadius, '#DDD');
  ctx.font = radius*0.2 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.fillStyle = '#999';
  ctx.fillText("", upperRightX, upperRightY);
}

var lowerLeftX = -radius * 0.88;
var lowerLeftY = radius * 0.88;
function drawLunchButton() {
  drawSmallCircle(lowerLeftX, lowerLeftY, smRadius * .95, '#DDD');
  ctx.font = radius*0.25 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.fillStyle = '#888';
  ctx.fillText(lunchMode, lowerLeftX, lowerLeftY);
}
function removeLunchButton() {
  drawSmallCircle(lowerLeftX, lowerLeftY, smRadius * .95, '#FFF');
}
function removeBSButton() {
  drawSmallCircle(lowerRightX, lowerRightY, smRadius * .98, '#FFF');
}
// Black/silver button
var lowerRightX = radius * 0.88;
var lowerRightY = radius * 0.88;
function drawBSButton() {
  drawSmallCircle(lowerRightX, lowerRightY, smRadius, '#DDD');
}
function drawSmallCircle(cx, cy, r, color) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, 2 * Math.PI, false);
  ctx.fillStyle = color; //'#DDD';
  ctx.fill();
  ctx.lineWidth = 0;
  ctx.strokeStyle = color; //'#DDD';
  ctx.stroke();
}
////////////////////// button logic //////////////////////
//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left - delta,
        y: event.clientY - rect.top - delta
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}
//The rectangle should have x,y,width,height properties
var rect = {
    x:lowerLeftX - smRadius,
    y:lowerLeftY - smRadius,
    width:smRadius * 2,
    height:smRadius * 2
};
//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    if (isInside(mousePos,rect)) {
        advanceLunchMode();
    }
}, false);

var upperRightX = radius * 0.88;
var upperRightY = -radius * 0.88;
function drawDateButton() {
 drawSmallCircle(upperRightX, upperRightY, smRadius, '#DDD');
 ctx.fillStyle = '#888';
 ctx.font = "bold " + radius*0.07 + "px arial";
 ctx.textBaseline="middle";
 ctx.textAlign= "center";
 ctx.fillText((now.getMonth() + 1) + "/" + now.getDate() + "/" + now.getFullYear(), upperRightX, upperRightY);
}

imageObj.addEventListener('load', function() {
  drawCRLSTimeButton();
  drawClock();
  setInterval(drawClock, 1000);
});
function drawClock() {
  now = new Date(+ServerDate + offset);
  drawDateButton();
  drawFace(ctx, radius);
  ctx.drawImage(imageObj, -radius*1.1/2, -1/2 * radius, radius, 1.27 * radius);
  var periodIndex = getPeriodIndex();
  var periodLabel = schedule[periodIndex][0];
  var periodLength = getPeriodLength(periodIndex);
  // when to display a normal clock
  if (periodLabel === "morning" || periodLabel === "after" || isWeekend() || isHoliday()){
      drawNumbersNormal(ctx, radius, 1, 12);
      drawSpecialLabel(ctx, radius, "");
      drawNormalTime(ctx, radius);
      removeLunchButton();
      removeBSButton();
  } else // display school time
  {
      var interval = 1;
      if (periodLength > 20) interval = 5;
      if (periodLength > 55) interval = 10;
      if (periodLength > 120) interval = 15;
      drawNumbersCountDown(ctx, radius, interval, periodLength);
      drawPeriodLabel(ctx, radius, periodLabel);
      drawSpecialLabel(ctx, radius, "");
      drawSchoolTime(ctx, radius, periodIndex);
      drawLunchButton(); // comment out for  all school lunch
      drawBSButton();
  }
}
function drawFace(ctx, radius) {
  var grad;
  // bg of face
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = '#111111';
    ctx.fill();
  // outside ring
  grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, '#FFF');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius*0.1;
  ctx.stroke();
  // inner hub
  ctx.beginPath();
  ctx.arc(0, 0, radius*0.07, 0, 2*Math.PI);
  ctx.fillStyle = '#666';
  ctx.fill();
}
// ctx : canvas context
// radius of writable clock face
// incr : increment for numbering
// max : largest number on face (12 oclock position)
function drawNumbersNormal(ctx, radius, incr, max) {
  var ang;
  var num;
  ctx.font = radius*0.20 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  for(num = incr; num <= max; num += incr){
    ang = num * 2 * Math.PI / max;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.84);
    ctx.rotate(-ang);
    ctx.fillStyle = '#BBB';
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.84);
    ctx.rotate(-ang);
  }
}
// ctx : canvas context
// radius of writable clock face
// incr : increment for numbering
// max : largest number on face (12 oclock position)
function drawNumbersCountDown(ctx, radius, incr, max) {
  var ang;
  var num;
  ctx.font = radius*0.20 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  // next line assures numbering is done as multiple of incr
  var start = (max % incr === 0) ? max - incr : max - max % incr;
  // this checks if first angle is very small (crowding of 1st number)
  if (2 * Math.PI - (start * 2 * Math.PI / max) < .2){
    start -= incr;
  }
  for(num = start; num >= 0; num -= incr){
    ang = 2 * Math.PI - (num * 2 * Math.PI / max);
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.82);
    ctx.rotate(-ang);
    ctx.fillStyle = '#BBB';
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.82);
    ctx.rotate(-ang);
  }
}
function drawSpecialLabel(ctx, radius, label) {
  var ang;
  ctx.font = radius*0.25 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
    ang = Math.PI;
    ctx.rotate(ang);
    ctx.translate(0, radius*0.35);
    ctx.rotate(-ang);
    ctx.fillStyle = "#499";
    ctx.fillText(label, 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.35);
    ctx.rotate(-ang);
}
function drawPeriodLabel(ctx, radius, label) {
  var ang;
  ctx.font = radius*0.40 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
    ang = Math.PI;
    ctx.rotate(ang);
    ctx.translate(0, -radius*0.32);
    ctx.rotate(-ang);
    ctx.fillStyle = "#999";
    ctx.fillText(label, 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius*0.32);
    ctx.rotate(-ang);
}
function drawNormalTime(ctx, radius){
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.55, radius*0.06, '#999');
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.83, radius*0.06, 'silver');
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02, 'red');
}
function drawSchoolTime(ctx, radius, index){
    var second = now.getSeconds();
    // minute
    var minute = (now - getStart(schedule[index]))/60000;
    minute = minute/getPeriodLength(index);
    minute = minute * 2 * Math.PI;
    drawHand(ctx, minute, radius*0.83, radius*0.05, 'silver');
    // second
    second=(second*Math.PI/30);
    drawHand(ctx, second, radius*0.9, radius*0.02, 'red');
}
// ctx : canvas context
// pos : angle out of 360, 90 is east
// length, width : self explanatory
// color : CSS color ('#FF0000' is red)
function drawHand(ctx, pos, length, width, color) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.rotate(-pos);
}
// Black/silver button
var lowerRightX = radius * 0.88;
var lowerRightY = radius * 0.88;
var blackOrSilverText = "Black Day";
function drawBSButton() {
  if (isBlackDay()) {
    drawSmallCircle(lowerRightX, lowerRightY, smRadius * 0.98, '#333');
    drawSmallCircle(lowerRightX, lowerRightY, smRadius * 0.95, '#DDD');
    blackOrSilverText = "Black Day";
    ctx.fillStyle = '#555';
  }
  else {
    drawSmallCircle(lowerRightX, lowerRightY, smRadius * 0.98, '#BBB');
    drawSmallCircle(lowerRightX, lowerRightY, smRadius * 0.95, '#DDD');
    blackOrSilverText = "Silver Day";
    ctx.fillStyle = '#999';
  }
  ctx.font = "bold " + radius*0.07 + "px arial";
  ctx.textBaseline="middle";
  ctx.textAlign="center";
  ctx.fillText(blackOrSilverText, lowerRightX, lowerRightY);
}

function devOverrideDate(date) {
  date = new Date(date)
  if (Object.prototype.toString.call(date) === "[object Date]"
   && !isNaN(date.getTime())) // https://stackoverflow.com/a/1353711/
      offset = +date - +now;
  else console.log("Invalid Date");
  drawClock();
}
