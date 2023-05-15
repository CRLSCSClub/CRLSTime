// Lunch
function advanceLunchMode() {
  if (lunchMode === "A") {
    lunchMode = "B";
//     schedule = scheduleB;
  }
  else if (lunchMode === "B") {
    lunchMode = "C";
//     schedule = scheduleC;
    }
  else if (lunchMode === "C") {
    lunchMode = "A";
//     schedule = scheduleA;
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
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-2", 10, 0],
  ["2", 10, 5],
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
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-2", 10, 0],
  ["2", 10, 5],
  ["2-3", 11, 30],
  ["3", 11, 32],
  ["LB", 12, 17],
  ["LB-3", 12, 47],
  ["3", 12, 50],
  ["3-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleC = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-2", 10, 0],
  ["2", 10, 5],
  ["2-3", 11, 30],
  ["3", 11, 35],
  ["LC", 13, 0],
  ["LC-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleThuA = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-FPB", 9, 50],
  ["FPB", 9, 55],
  ["FPB-2", 10, 30],
  ["2", 10, 35],
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
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-FPB", 9, 50],
  ["FPB", 9, 55],
  ["FPB-2", 10, 30],
  ["2", 10, 35],
  ["2-3", 11, 50],
  ["3", 11, 52],
  ["LB", 12, 32],
  ["LB-3", 13, 2],
  ["3", 13, 5],
  ["3-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleThuC = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-FPB", 9, 50],
  ["FPB", 9, 55],
  ["FPB-2", 10, 30],
  ["2", 10, 35],
  ["2-3", 11, 50],
  ["3", 11, 55],
  ["LC", 13, 10],
  ["LC-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleFriA = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-FBB", 9, 50],
  ["FBB", 9, 55],
  ["FBB-2", 10, 30],
  ["2", 10, 35],
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
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-FBB", 9, 50],
  ["FBB", 9, 55],
  ["FBB-2", 10, 30],
  ["2", 10, 35],
  ["2-3", 11, 50],
  ["3", 11, 52],
  ["LB", 12, 32],
  ["LB-3", 13, 2],
  ["3", 13, 5],
  ["3-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleFriC = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-FBB", 9, 50],
  ["FBB", 9, 55],
  ["FBB-2", 10, 30],
  ["2", 10, 35],
  ["2-3", 11, 50],
  ["3", 11, 55],
  ["LC", 13, 10],
  ["LC-4", 13, 40],
  ["4", 13, 45],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schoolHolidays = [
  [10, 5],
  [10, 10],
  [11, 8],
  [11, 11],
  [11, 24],
  [11, 25],
  [12, 26],
  [12, 27],
  [12, 28],
  [12, 29],
  [12, 30],
  [1, 2],
  [1, 3],
  [1, 16],
  [2, 20],
  [2, 21],
  [2, 22],
  [2, 23],
  [2, 24],
  [3, 20],
  [4, 7],
  [4, 17],
  [4, 18],
  [4, 19],
  [4, 20],
  [4, 21],
  [5, 29],
  [6, 19]
];

// This table only contains blacks days on Wed, otherwise all Tues and Fri are black days
var blackDays = [
  [9, 14],
  [9, 28],
  [10, 19],
  [10, 26],
  [11, 2],
  [11, 9],
  [11, 30],
  [12, 14],
  [1, 4],
  [2, 1],
  [2, 15],
  [3, 8],
  [3, 22],
  [3, 29],
  [4, 5],
  [4, 26],
  [5, 10],
  [5, 24],
  [6, 7],
  [6, 21]
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

var schedule10252022 = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["PSAT", 8, 35],
  ["Lunch", 12, 5],
  ["-> 1", 12, 40],
  ["1", 12, 45],
  ["1-2", 13, 15],
  ["2", 13, 20],
  ["2-3", 13, 50],
  ["3", 13, 55],
  ["3-4", 14, 25],
  ["4", 14, 30],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule10142022A = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["OSOS", 8, 35],
  ["-> 4", 10, 45],
  ["4", 10, 50],
  ["4-LA", 11, 40],
  ["LA", 11, 45],
  ["LA-3", 12, 15],
  ["3", 12, 20],
  ["3-2", 13, 10],
  ["2", 13, 15],
  ["2-1", 14, 5],
  ["1", 14, 10],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule10142022B = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["OSOS", 8, 35],
  ["-> 4", 10, 45],
  ["4", 10, 50],
  ["4-3", 11, 40],
  ["3", 11, 45],
  ["3-LB", 12, 12],
  ["LB", 12, 15],
  ["LA-3", 12, 45],
  ["3", 12, 47],
  ["3-2", 13, 10],
  ["2", 13, 15],
  ["2-1", 14, 5],
  ["1", 14, 10],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule10142022C = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["OSOS", 8, 35],
  ["-> 4", 10, 45],
  ["4", 10, 50],
  ["4-3", 11, 40],
  ["3", 11, 45],
  ["3-LC", 12, 35],
  ["LC", 12, 40],
  ["LC-2", 13, 10],
  ["2", 13, 15],
  ["2-1", 14, 5],
  ["1", 14, 10],
  ["after", 15, 0],
  ["end", 23, 59]
];

var schedule10182022 = [
  ["morning", 0, 0],
  ["before", 7, 30],
  ["1", 8, 35],
  ["1-2", 10, 0],
  ["2", 10, 5],
  ["Lunch", 11, 30],
  ["Conf", 12, 0],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule10192022A = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["Conf", 8, 35],
  ["LA", 11, 30],
  ["LA-3", 12, 0],
  ["3", 12, 5],
  ["3-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule10192022B = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["Conf", 8, 35],
  ["to 3", 11, 30],
  ["3", 11, 32],
  ["LB", 12, 17],
  ["LB-3", 12, 47],
  ["3", 12, 50],
  ["3-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule10192022C = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["Conf", 8, 35],
  ["to 3", 11, 30],
  ["3", 11, 35],
  ["LC", 13, 0],
  ["LC-4", 13, 30],
  ["4", 13, 35],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule11232022 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["FB", 8, 30],
  ["to S1", 8, 40],
  ["S1", 8, 45],
  ["to S2", 9, 20],
  ["S2", 9, 25],
  ["to S3", 10, 0],
  ["S3", 10, 5],
  ["to S4", 10, 40],
  ["S4", 10, 45],
  ["to PR", 11, 15],
  ["PR", 11, 25],
  ["after", 12, 0],
  ["end", 23, 59]
  ];

var schedule11823 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-FB", 10, 15],
  ["FB", 10, 20],
  ["FB-2", 10, 45],
  ["2", 10, 50],
  ["Lunch", 12, 30],
  ["after", 13, 0],
  ["end", 23, 59]
  ];

var schedule11923 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["3", 8, 35],
  ["3-FB", 10, 15],
  ["FB", 10, 20],
  ["FB-4", 10, 45],
  ["4", 10, 50],
  ["Lunch", 12, 30],
  ["after", 13, 0],
  ["end", 23, 59]
  ];

var schedule12323 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["Lunch", 11, 30],
  ["L-1", 12, 0],
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

var schedule020123 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["MCAS", 8, 35],
  ["Lunch", 11, 35],
  ["L-1", 12, 10],
  ["1", 12, 15],
  ["1-2", 13, 35],
  ["2", 13, 40],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule020223 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["MCAS", 8, 35],
  ["Lunch", 11, 35],
  ["L-3", 12, 10],
  ["3", 12, 15],
  ["3-4", 13, 35],
  ["4", 13, 40],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule032823 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["MCAS", 8, 35],
  ["Lunch", 12, 15],
  ["L-1", 12, 50],
  ["1", 12, 55],
  ["1-2", 13, 55],
  ["2", 14, 0],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule032923 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["MCAS", 8, 35],
  ["Lunch", 12, 15],
  ["L-3", 12, 50],
  ["3", 12, 55],
  ["3-4", 13, 55],
  ["4", 14, 0],
  ["after", 15, 0],
  ["end", 23, 59]
  ];

var schedule041323 = [
  ["morning", 0, 0],
  ["before", 6, 55],
  ["1", 8, 35],
  ["1-2", 9, 15],
  ["2", 9, 20],
  ["2-3", 10, 0],
  ["3", 10, 5],
  ["3-4", 10, 45],
  ["4", 10, 50],
  ["Pass", 11, 30],
  ["9-10L", 11, 35],
  ["Pass", 12, 5],
  ["11-12L", 12, 10],
  ["Pass", 12, 40],
  ["ES 1", 12, ,45],
  ["Pass", 13, 35],
  ["ES 2", 13, 40],
  ["Pass", 14, 30],
  ["FB", 14, 35],
  ["after", 15, 0],
  ["end", 23, 59]
];
  
var specialSchedules = [
  [9, 6, schedule962022Frosh, schedule962022Soph, schedule962022Upper],
  [10, 14, schedule10142022A, schedule10142022B, schedule10142022C],
  [10, 18, schedule10182022, schedule10182022, schedule10182022],
  [10, 19, schedule10192022A, schedule10192022B, schedule10192022C],
  [10, 25, schedule10252022, schedule10252022, schedule10252022],
  [11, 23, schedule11232022, schedule11232022, schedule11232022],
  [1, 18, schedule11823, schedule11823, schedule11823],
  [1, 19, schedule11923, schedule11923, schedule11923],
  [1, 23, schedule12323, schedule12323, schedule12323],
  [2, 1, schedule020123, schedule020123, schedule020123],
  [2, 2, schedule020223, schedule020223, schedule020223],
  [3, 21, schedule10182022, schedule10182022, schedule10182022], // same as Oct conf schedule
  [3, 22, schedule10192022A, schedule10192022B, schedule10192022C], // same as Oct conf schedule
  [3, 28, schedule032823, schedule032823, schedule032823],
  [3, 29, schedule032923, schedule032923, schedule032923],
  [4, 13, schedule041323, schedule041323, schedule041323],
  [5, 16, schedule020123, schedule020123, schedule020123], // same as MCAS on Feb 1
  [5, 17, schedule020223, schedule020223, schedule020223] // same as MCAS on Feb 2
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
  // if not found in the table (Wednesdays) return true if Tue or Fri
  return today.getDay() === 2 || today.getDay() === 5; // Tue or Fri
}
