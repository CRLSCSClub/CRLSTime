const imageObj = new Image();
imageObj.src = 'falcon_high_res2.png';

var radius, delta, smRadius;
var upperLeftX, upperLeftY, upperRightX, upperRightY, lowerLeftX, lowerLeftY, lowerRightX, lowerRightY;
var switchLunchRect, canvas, ctx;

window.addEventListener('resize', redraw);

function redraw() {
  resetScale();
  drawClock();
  drawCRLSTimeButton();
  drawDateButton();
}

function resetScale() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  var smallerDimension = Math.min(window.innerWidth, window.innerHeight);
  radius = smallerDimension / 2 - 12;

  delta = radius;
  ctx.resetTransform();
  ctx.translate(delta, delta);
  radius *= 0.93;

  smRadius = radius * 0.18;

  upperLeftX = -radius * 0.88;
  upperLeftY = -radius * 0.88;
  upperRightX = radius * 0.88;
  upperRightY = -radius * 0.88;
  lowerLeftX = -radius * 0.88;
  lowerLeftY = radius * 0.88;
  lowerRightX = radius * 0.88;
  lowerRightY = radius * 0.88;

  //The rectangle should have x,y,width,height properties
  switchLunchRect = {
    x: lowerLeftX - smRadius,
    y: lowerLeftY - smRadius,
    width: smRadius * 2,
    height: smRadius * 2
  };
}

// CRLSTime button
function drawCRLSTimeButton() {
  drawSmallCircle(upperLeftX, upperLeftY, smRadius, '#DDD');
  ctx.font = "bold " + radius * 0.067 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = '#888';
  ctx.fillText("CRLSTime", upperLeftX, upperLeftY);
}

// Info/settings button
function drawSettingsButton() {
  drawSmallCircle(upperRightX, upperRightY, smRadius, '#DDD');
  ctx.font = radius * 0.2 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = '#999';
  ctx.fillText("", upperRightX, upperRightY);
}

function drawLunchButton() {
  drawSmallCircle(lowerLeftX, lowerLeftY, smRadius * .95, '#DDD');
  ctx.font = radius * 0.25 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = '#888';
  ctx.fillText(lunchMode, lowerLeftX, lowerLeftY);
}

function removeLunchButton() {
  drawSmallCircle(lowerLeftX, lowerLeftY, smRadius * .95, '#FFF');
}

function removeBSButton() {
  drawSmallCircle(lowerRightX, lowerRightY, smRadius * .98, '#FFF');
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
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left - delta,
    y: event.clientY - rect.top - delta
  };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect) {
  return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y;
}

function drawDateButton() {
  drawSmallCircle(upperRightX, upperRightY, smRadius, '#DDD');
  ctx.fillStyle = '#888';
  ctx.font = "bold " + radius * 0.07 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(todayMonth + "/" + todayDate + "/" + todayYear, upperRightX, upperRightY);
}

function drawClock() {
  drawFace(ctx, radius);
  ctx.drawImage(imageObj, -radius * 1.1 / 2, -1 / 2 * radius, radius, 1.27 * radius);
  const periodIndex = getPeriodIndex();
  const periodLabel = schedule[periodIndex].label;
  const periodLength = getPeriodLength(periodIndex);

  // when to display a normal clock
  if (periodLabel === "morning" || periodLabel === "after" || isWeekend() || isHoliday()) {
    drawNumbersNormal(ctx, radius, 1, 12);
    drawSpecialLabel(ctx, radius, "");
    drawNormalTime(ctx, radius);
    removeLunchButton();
    removeBSButton();
  }
  else // display school time
  {
    const interval = periodLength > 120 ? 15 :
      periodLength > 55 ? 10 :
      periodLength > 20 ? 5 : 1;

    drawNumbersCountDown(ctx, radius, interval, periodLength);
    drawPeriodLabel(ctx, radius, periodLabel);
    drawSpecialLabel(ctx, radius, "");
    drawSchoolTime(ctx, radius, periodIndex);
    drawLunchButton(); // comment out for  all school lunch
    drawBSButton();
  }
}

function drawFace(ctx, radius) {
  // bg of face
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = '#111111';
  ctx.fill();

  // outside ring
  const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, '#FFF');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();

  // inner hub
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
  ctx.fillStyle = '#666';
  ctx.fill();
}

// ctx : canvas context
// radius of writable clock face
// incr : increment for numbering
// max : largest number on face (12 oclock position)
function drawNumbersNormal(ctx, radius, incr, max) {
  ctx.font = radius * 0.20 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (var num = incr; num <= max; num += incr) {
    var ang = num * 2 * Math.PI / max;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.84);
    ctx.rotate(-ang);
    ctx.fillStyle = '#BBB';
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.84);
    ctx.rotate(-ang);
  }
}

// ctx : canvas context
// radius of writable clock face
// incr : increment for numbering
// max : largest number on face (12 oclock position)
function drawNumbersCountDown(ctx, radius, incr, max) {
  var ang;
  ctx.font = radius * 0.20 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  // next line assures numbering is done as multiple of incr
  var start = (max % incr === 0) ? max - incr : max - max % incr;
  // this checks if first angle is very small (crowding of 1st number)
  if (2 * Math.PI - (start * 2 * Math.PI / max) < .2) {
    start -= incr;
  }
  for (var num = start; num >= 0; num -= incr) {
    ang = 2 * Math.PI - (num * 2 * Math.PI / max);
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.82);
    ctx.rotate(-ang);
    ctx.fillStyle = '#BBB';
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.82);
    ctx.rotate(-ang);
  }
}

function drawSpecialLabel(ctx, radius, label) {
  ctx.font = radius * 0.25 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  const ang = Math.PI;
  ctx.rotate(ang);
  ctx.translate(0, radius * 0.35);
  ctx.rotate(-ang);
  ctx.fillStyle = "#499";
  ctx.fillText(label, 0, 0);
  ctx.rotate(ang);
  ctx.translate(0, -radius * 0.35);
  ctx.rotate(-ang);
}

function drawPeriodLabel(ctx, radius, label) {
  ctx.font = radius * 0.40 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";

  const ang = Math.PI;
  ctx.rotate(ang);
  ctx.translate(0, -radius * 0.32);
  ctx.rotate(-ang);
  ctx.fillStyle = "#999";
  ctx.fillText(label, 0, 0);
  ctx.rotate(ang);
  ctx.translate(0, radius * 0.32);
  ctx.rotate(-ang);
}

function drawNormalTime(ctx, radius) {
  const now = ServerDate;
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  //hour
  hour = hour % 12;
  hour = (hour * Math.PI / 6) +
    (minute * Math.PI / (6 * 60)) +
    (second * Math.PI / (360 * 60));
  drawHand(ctx, hour, radius * 0.55, radius * 0.06, '#999');
  //minute
  minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
  drawHand(ctx, minute, radius * 0.83, radius * 0.06, 'silver');
  // second
  second = (second * Math.PI / 30);
  drawHand(ctx, second, radius * 0.9, radius * 0.02, 'red');
}

function drawSchoolTime(ctx, radius, index) {
  const now = ServerDate;
  var second = now.getSeconds();

  // minute
  var minute = (now - schedule[index].start) / 60000;
  minute /= getPeriodLength(index);
  minute *= 2 * Math.PI;
  drawHand(ctx, minute, radius * 0.83, radius * 0.05, 'silver');

  // second
  second *= Math.PI / 30;
  drawHand(ctx, second, radius * 0.9, radius * 0.02, 'red');
}

// ctx : canvas context
// pos : angle out of 360, 90 is east
// length, width : self explanatory
// color : CSS color ('#FF0000' is red)
function drawHand(ctx, pos, length, width, color) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.rotate(-pos);
}

// Black/silver button
function drawBSButton() {
  var blackOrSilverText;
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
  ctx.font = "bold " + radius * 0.07 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillText(blackOrSilverText, lowerRightX, lowerRightY);
}

document.addEventListener('DOMContentLoaded', function() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  redraw();
  setInterval(drawClock, 100);

  //Binding the click event on the canvas
  canvas.addEventListener('click', function(evt) {
    const mousePos = getMousePos(canvas, evt);
    if (isInside(mousePos, switchLunchRect)) {
      advanceLunchMode();
      drawLunchButton();
    }
  }, false);
});
