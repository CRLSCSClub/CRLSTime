// Lunch
function advanceLunchMode() {
  if (lunchMode === "A") {
    lunchMode = "B";
  }
  else if (lunchMode === "B") {
    lunchMode = "C";
    }
  else if (lunchMode === "C") {
    lunchMode = "A";
  }
  schedule = getSchedule(lunchMode);
  localStorage.setItem("lunch", lunchMode);
  drawLunchButton();
}
// Lunch for 2021 May 10 - June 23, just two lunches
// function advanceLunchMode() {
//   if (lunchMode === "A") {
//     lunchMode = "B";
//    // schedule = end2021scheduleB;
//   }
//   else if (lunchMode === "B") {
//     lunchMode = "A";
//    // schedule = end2021scheduleA;
//   }
//   schedule = getSchedule(lunchMode);
//   localStorage.setItem("lunch", lunchMode);
//   drawLunchButton();
// }
var today = new Date();
/////////////// schedule types //////////////////
// Table of period labels and start times

var scheduleA = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 55],
  ["2", 10, 0],
  ["2-LA", 11, 25],
  ["LA", 11, 30],
  ["LA-3", 12, 0],
  ["3", 12, 5],
  ["3-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleB = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 55],
  ["2", 10, 0],
  ["2-3", 11, 25],
  ["3.1", 11, 30],
  ["3-LB", 12, 15],
  ["LB", 12, 17],
  ["LB-3", 12, 47],
  ["3.2", 12, 50],
  ["3-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleC = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 55],
  ["2", 10, 0],
  ["2-3", 11, 25],
  ["3", 11, 30],
  ["3-LC", 12, 55],
  ["LC", 13, 0],
  ["LC-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleThuA = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 45],
  ["Path", 9, 50],
  ["FB-2", 10, 25],
  ["2", 10, 30],
  ["2-LA", 11, 45],
  ["LA", 11, 50],
  ["LA-3", 12, 20],
  ["3", 12, 25],
  ["3-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleThuB = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 45],
  ["Path", 9, 50],
  ["FB-2", 10, 25],
  ["2", 10, 30],
  ["2-3", 11, 45],
  ["3.1", 11, 50],
  ["3-LB", 12, 30],
  ["LB", 12, 32],
  ["LB-3", 13, 2],
  ["3.2", 13, 5],
  ["3-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleThuC = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 45],
  ["Path", 9, 50],
  ["FB-2", 10, 25],
  ["2", 10, 30],
  ["2-3", 11, 45],
  ["3", 11, 50],
  ["3-LC", 13, 5],
  ["LC", 13, 10],
  ["LC-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleFriA = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 45],
  ["Bal", 9, 50],
  ["FB-2", 10, 25],
  ["2", 10, 30],
  ["2-LA", 11, 45],
  ["LA", 11, 50],
  ["LA-3", 12, 20],
  ["3", 12, 25],
  ["3-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleFriB = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 45],
  ["Bal", 9, 50],
  ["FB-2", 10, 25],
  ["2", 10, 30],
  ["2-3", 11, 45],
  ["3.1", 11, 50],
  ["3-LB", 12, 30],
  ["LB", 12, 32],
  ["LB-3", 13, 2],
  ["3.2", 13, 5],
  ["3-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleFriC = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 45],
  ["Bal", 9, 50],
  ["FB-2", 10, 25],
  ["2", 10, 30],
  ["2-3", 11, 45],
  ["3", 11, 50],
  ["3-LC", 13, 5],
  ["LC", 13, 10],
  ["LC-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schoolHolidays = [
  [11, 27],
  [11, 28],
  [11, 29],
  [12, 24],
  [12, 25],
  [12, 26],
  [12, 27],
  [12, 30],
  [12, 29],
  [12, 31],
  [1, 1],
  [1, 2],
  [6, 19]
];

var blackDays = [
  [5, 2],
  [5, 6],
  [5, 8],
  [5, 12],
  [5, 14],
  [5, 16],
  [5, 20],
  [5, 21],
  [5, 23],
  [5, 28],
  [5, 30],
  [6, 3],
  [6, 4],
  [6, 6],
  [6, 10],
  [6, 12],
  [6, 16],
  [6, 18],
  [6, 20],
  [6, 24]
];

// Exams -- start sem 1 and 2
var schedule011625A = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1 Exam", 8, 30],
  ["1-2", 10, 10],
  ["2", 10, 15],
  ["2-LA", 11, 25],
  ["LA", 11, 30],
  ["LA-3", 12, 0],
  ["3 Exam", 12, 5],
  ["3-4", 13, 45],
  ["4", 13, 50],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule011625B = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1 Exam", 8, 30],
  ["1-2", 10, 10],
  ["2", 10, 15],
  ["2-3", 11, 25],
  ["3.1 Ex", 11, 30],
  ["3-LB", 12, 20],
  ["LB", 12, 22],
  ["LB-3", 12, 52],
  ["3.2 Ex", 12, 55],
  ["3-4", 13, 45],
  ["4", 13, 50],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule011625C = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1 Exam", 8, 30],
  ["1-2", 10, 10],
  ["2", 10, 15],
  ["2-3", 11, 25],
  ["3 Exam", 11, 30],
  ["3-LC", 13, 10],
  ["LC", 13, 15],
  ["LC-4", 13, 45],
  ["4", 13, 50],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule061725A = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1 Exam", 8, 30],
  ["1-2", 10, 10],
  ["2", 10, 15],
  ["2-LA", 11, 25],
  ["LA", 11, 30],
  ["LA-3", 12, 0],
  ["3 Exam", 12, 5],
  ["3-4", 13, 45],
  ["4", 13, 50],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule061725B = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1 Exam", 8, 30],
  ["1-2", 10, 10],
  ["2", 10, 15],
  ["2-3", 11, 25],
  ["3.1", 11, 30],
  ["3-LB", 12, 20],
  ["LB", 12, 22],
  ["LB-3", 12, 52],
  ["3.2", 12, 55],
  ["3-4", 13, 45],
  ["4", 13, 50],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule061725C = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1 Exam", 8, 30],
  ["1-2", 10, 10],
  ["2", 10, 15],
  ["2-3", 11, 25],
  ["3 Exam", 11, 30],
  ["3-LC", 13, 10],
  ["LC", 13, 15],
  ["LC-4", 13, 45],
  ["4", 13, 50],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule011725A = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 40],
  ["2 Exam", 9, 45],
  ["2-LA", 11, 25],
  ["LA", 11, 30],
  ["LA-3", 12, 0],
  ["3", 12, 5],
  ["3-4", 13, 15],
  ["4 Exam", 13, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule011725B = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 40],
  ["2 Exam", 9, 45],
  ["2-3", 11, 25],
  ["3.1", 11, 30],
  ["3-LB", 12, 5],
  ["LB", 12, 7],
  ["LB-3", 12, 37],
  ["3.2", 12, 40],
  ["3-4", 13, 15],
  ["4 Exam", 13, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule011725C = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 40],
  ["2 Exam", 9, 45],
  ["2-3", 11, 25],
  ["3", 11, 30],
  ["3-LC", 12, 40],
  ["LC", 12, 45],
  ["LC-4", 13, 15],
  ["4 Exam", 13, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule061825A = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 40],
  ["2 Exam", 9, 45],
  ["2-LA", 11, 25],
  ["LA", 11, 30],
  ["LA-3", 12, 0],
  ["3", 12, 5],
  ["3-4", 13, 15],
  ["4 Exam", 13, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule061825B = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 40],
  ["2 Exam", 9, 45],
  ["2-3", 11, 25],
  ["3.1", 11, 30],
  ["3-LB", 12, 5],
  ["LB", 12, 7],
  ["LB-3", 12, 37],
  ["3.2", 12, 40],
  ["3-4", 13, 15],
  ["4 Exam", 13, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule061825C = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 40],
  ["2 Exam", 9, 45],
  ["2-3", 11, 25],
  ["3", 11, 30],
  ["3-LC", 12, 40],
  ["LC", 12, 45],
  ["LC-4", 13, 15],
  ["4 Exam", 13, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];
// End Exams

var schedule012225 = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["delayed", 8, 30],
  ["Lunch", 11, 10],
  ["1", 11, 45],
  ["1-2", 12, 30],
  ["2", 12, 35],
  ["2-3", 13, 20],
  ["3", 13, 25],
  ["3-4", 14, 10],
  ["4", 14, 15],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule962022Frosh = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["FBlock", 8, 35],
  ["-> LC", 10, 25],
  ["LC", 10, 35],
  ["-> Aud", 10, 55],
  ["Aud", 11, 05],
  ["Lunch", 11, 30],
  ["-> 1", 12, 0],
  ["1", 12, 5],
  ["1-2", 12, 45],
  ["2", 12, 50],
  ["2-3", 13, 30],
  ["3", 13, 35],
  ["3-4", 14, 15],
  ["4", 14, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule962022Soph = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["FBlock", 10, 35],
  ["-> Guid", 10, 55],
  ["Guid", 11, 5],
  ["Lunch", 11, 30],
  ["-> 1", 12, 0],
  ["1", 12, 5],
  ["1-2", 12, 45],
  ["2", 12, 50],
  ["2-3", 13, 30],
  ["3", 13, 35],
  ["3-4", 14, 15],
  ["4", 14, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule962022Upper = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["Lunch", 11, 5],
  ["FBlock", 11, 30],
  ["-> 1", 12, 0],
  ["1", 12, 5],
  ["1-2", 12, 45],
  ["2", 12, 50],
  ["2-3", 13, 30],
  ["3", 13, 35],
  ["3-4", 14, 15],
  ["4", 14, 20],
  ["after", 15, 0],
  ["end", 23, 59]
];

var lastday = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-2", 9, 15],
  ["2", 9, 20],
  ["2-3", 10, 0],
  ["3", 10, 5],
  ["3-4", 10, 45],
  ["4", 10, 50],
  ["after", 11, 30],
  ["end", 23, 59]
];

var schedule031125 = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-2", 9, 55],
  ["2", 10, 0],
  ["2-L", 11, 25],
  ["Lunch", 11, 30],
  ["after", 12, 0],
  ["end", 23, 59]
];

var schedule031225 = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["delayed", 8, 30],
  ["Lunch", 11, 30],
  ["L-3", 12, 0],
  ["3", 12, 05],
  ["3-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule052025 = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["MCAS", 8, 35],
  ["-> L", 11, 30],
  ["Lunch", 11, 40],
  ["L-1", 12, 10],
  ["1", 12, 15],
  ["1-2", 13, 35],
  ["2", 13, 40],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule052125 = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["MCAS", 8, 35],
  ["-> L", 11, 30],
  ["Lunch", 11, 40],
  ["L-3", 12, 10],
  ["3", 12, 15],
  ["3-4", 13, 35],
  ["4", 13, 40],
  ["after", 15, 0],
  ["end", 23, 59]
];
  
var specialSchedules = [
  [9, 6, schedule962022Frosh, schedule962022Soph, schedule962022Upper],
  [1, 16, schedule011625A, schedule011625B, schedule011625C],
  [1, 17, schedule011725A, schedule011725B, schedule011725C],
  [1, 22, schedule012225, schedule012225, schedule012225],
  [3, 11, schedule031125, schedule031125, schedule031125],
  [3, 12, schedule031225, schedule031225, schedule031225],
  [5, 20, schedule052025, schedule052025, schedule052025],
  [5, 21, schedule052125, schedule052125, schedule052125],
  [6, 17, schedule061725A, schedule061725B, schedule061725C],
  [6, 18, schedule061825C, schedule061825C, schedule061825C],
  // [10, 19, schedule10192022A, schedule10192022B, schedule10192022C],
  // [10, 25, schedule10252022, schedule10252022, schedule10252022],
  // [11, 23, schedule11232022, schedule11232022, schedule11232022],
  // [1, 18, schedule11823, schedule11823, schedule11823],
  // [1, 19, schedule11923, schedule11923, schedule11923],
  // [1, 23, schedule12323, schedule12323, schedule12323],
  // [2, 1, schedule020123, schedule020123, schedule020123],
  // [2, 2, schedule020223, schedule020223, schedule020223],
  // [3, 21, schedule10182022, schedule10182022, schedule10182022], // same as Oct conf schedule
  // [3, 22, schedule10192022A, schedule10192022B, schedule10192022C], // same as Oct conf schedule
  // [3, 28, schedule032823, schedule032823, schedule032823],
  // [3, 29, schedule032923, schedule032923, schedule032923],
  // [4, 13, schedule041323, schedule041323, schedule041323],
  // [5, 16, schedule020123, schedule020123, schedule020123], // same as MCAS on Feb 1
  // [5, 17, schedule020223, schedule020223, schedule020223], // same as MCAS on Feb 2
  // [6, 6, schedule020123, schedule020123, schedule020123], // same as MCAS on Feb 1
  // [6, 7, schedule020223, schedule020223, schedule020223], // same as MCAS on Feb 2
  // [6, 15, schedule06152023, schedule06152023, schedule06152023],
  // [6, 16, schedule06162023, schedule06162023, schedule06162023],
  [6, 24, lastday, lastday, lastday]
];

// var regularSchedules = [
//   scheduleSpring21Mon,
//   scheduleSpring21Tue,
//   scheduleSpring21Mon, // there was a comment here
//   scheduleSpring21Thu,
//   scheduleSpring21Fri,
//   ];

// var regularSchedules = [
//   [scheduleA, scheduleB, scheduleC],
//   [scheduleA, scheduleB, scheduleC],
//   [scheduleWedA, scheduleWedB, scheduleWedC],
//   [scheduleA, scheduleB, scheduleC],
//   [scheduleA, scheduleB, scheduleC]
// ];

var regularSchedules = [
  [scheduleA, scheduleB, scheduleC],
  [scheduleA, scheduleB, scheduleC],
  [scheduleA, scheduleB, scheduleC],
  [scheduleThuA, scheduleThuB, scheduleThuC],
  [scheduleFriA, scheduleFriB, scheduleFriC]
];

// first check for a special schedule, otherwise return a regular schedule
// offset: 2 for A lunch, 3 for B lunch, 4 for lunch C (index in special schedule table)
function scheduleLookup(offset) {
  for (i = 0; i < specialSchedules.length; i++) {
    if (specialSchedules[i][0] === today.getMonth() + 1 && specialSchedules[i][1] === today.getDate()) {
       return specialSchedules[i][offset];
     }
   }
   return regularSchedules[today.getDay() - 1][offset - 2]; // Mon will be 0
}

function getStart(block) {
  return today.setHours(block[1], block[2], 0, 0);
}

// DisplayDate
  var todayDate = today.getDate();
  var todayMonth = today.getMonth() + 1;
  var todayYear = today.getFullYear();

var lunchMode = "A";
if(localStorage.lunch) {
  lunchMode = localStorage.lunch;
}

function getSchedule(key) {
  if (key === "A")
    return scheduleLookup(2);
//     return scheduleA;
  if (key === "B")
    return scheduleLookup(3);
//     return scheduleB;
  if (key === "C")
    return scheduleLookup(4);
}

schedule = getSchedule(lunchMode);

function isHoliday() {
  // for summer just return true
//   return true;
  // code below this line will be unreachable during summertime
  for (i = 0; i < schoolHolidays.length; i++) {
    if (schoolHolidays[i][0] === today.getMonth() + 1 && schoolHolidays[i][1] === today.getDate()) {
      return true;
    }
  }
//   if (today.getMonth() + 1 === 7 || today.getMonth() + 1 === 8) { // July or August
//     return true;
//   }
  return false;
}

function isWeekend() {
  return today.getDay() === 0 || today.getDay() === 6;  // Sunday & Saturday
}

function getPeriodIndex() {
  var now = ServerDate;
//   for (i = 0; true; i++) {
  for (i = 0; i < schedule.length - 1; i++) { 
    if (now > getStart(schedule[i]) && now < getStart(schedule[i + 1])) {
      return i;
    }
  }
  return 0;
}

function getPeriodLength(i) {
  return (getStart(schedule[i + 1]) - getStart(schedule[i])) / 60000; // in minutes
}

// for 2021-2022: Tuesdays, Fridays, and alternate Wednesdays (Wed black days are in a table)
function isBlackDay() { 
  for (i = 0; i < blackDays.length; i++) {
    if (blackDays[i][0] === today.getMonth() + 1 && blackDays[i][1] === today.getDate()) {
      return true;
    }
  }
  // if not found in the table return true if Tue or Fri
  // return today.getDay() === 2 || today.getDay() === 5; // Tue or Fri
  // commented out obsolete line above
  return false;
}
