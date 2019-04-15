// Lunch
function advanceLunchMode() {
  if (lunchMode === "A") {
    lunchMode = "B";
    schedule = scheduleB;
  }
  else if (lunchMode === "B") {
    lunchMode = "C";
    schedule = scheduleC;
    }
  else if (lunchMode === "C") {
    lunchMode = "A";
    schedule = scheduleA;
  }
  localStorage.setItem("lunch", lunchMode);
  drawLunchButton();
}

var today = new Date();
/////////////// schedule types //////////////////
// Table of period labels and start times

var scheduleA = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 25],
  ["CM", 9, 29],
  ["CM-2", 9, 44],
  ["2", 9, 48],
  ["2-LA", 11, 8],
  ["LA", 11, 12],
  ["LA-3", 11, 42],
  ["3", 11, 46],
  ["3-4", 13, 06],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleB = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 25],
  ["CM", 9, 29],
  ["CM-2", 9, 44],
  ["2", 9, 48],
  ["2-3", 11, 8],
  ["3", 11, 12],
  ["3-LB", 11, 52],
  ["LB", 11, 54],
  ["LB-3", 12, 24],
  ["3", 12, 26],
  ["3-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleC = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 25],
  ["CM", 9, 29],
  ["CM-2", 9, 44],
  ["2", 9, 48],
  ["2-3", 11, 8],
  ["3", 11, 12],
  ["3-LC", 12, 32],
  ["LC", 12, 36],
  ["LC-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleFinal12 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 45],
  ["CM", 9, 50],
  ["CM-2", 10, 20],
  ["2", 10, 25],
  ["2-L", 12, 5],
  ["Lunch", 12, 10],
  ["after", 12, 45],
  ["end", 23, 59]
];

var scheduleFinal34 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["3", 8, 5],
  ["3-CM", 9, 45],
  ["CM", 9, 50],
  ["CM-4", 10, 20],
  ["4", 10, 25],
  ["4-L", 12, 5],
  ["Lunch", 12, 10],
  ["after", 12, 45],
  ["end", 23, 59]
];

var scheduleFinal13 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 45],
  ["CM", 9, 50],
  ["CM-3", 10, 20],
  ["3", 10, 25],
  ["3-L", 12, 5],
  ["Lunch", 12, 10],
  ["after", 12, 45],
  ["end", 23, 59]
];

var scheduleFinal24 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["2", 8, 5],
  ["2-CM", 9, 45],
  ["CM", 9, 50],
  ["CM-4", 10, 20],
  ["4", 10, 25],
  ["4-L", 12, 5],
  ["Lunch", 12, 10],
  ["after", 12, 45],
  ["end", 23, 59]
];

// All start with lunch A
var scheduleDelay1 = [
  ["morning", 0, 0],
  ["before", 9, 32],
  ["Lunch", 11, 12],
  ["Lunch-3", 11, 42],
  ["3", 11, 46],
  ["3-4", 12, 24],
  ["4", 12, 28],
  ["4-1", 13, 6],
  ["1", 13, 10],
  ["1-2", 13, 48],
  ["2", 13, 52],
  ["after", 14, 30],
  ["end", 23, 59]
];

// these next three schedules have had additional sections added
// for Curriculum night (same day as x block Sept 20 2018)
var scheduleAX = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 14],
  ["CM X", 9, 18],
  ["CM X-2", 10, 16],
  ["2", 10, 20],
  ["2-LA", 11, 29],
  ["LA", 11, 33],
  ["LA-3", 12, 3],
  ["3", 12, 7],
  ["3-4", 13, 22],
  ["4", 13, 26],
  ["after", 14, 30],
  ["info", 17, 00], // Curriculum night
  ["info-1", 18, 30],
  ["1", 18, 35],
  ["1-2", 18, 50],
  ["2", 18, 55],
  ["2-3", 19, 10],
  ["3", 19, 15],
  ["3-4", 19, 30],
  ["4", 19, 35],
  ["after", 19, 50],
  ["end", 23, 59]
];

var scheduleBX = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 14],
  ["CM X", 9, 18],
  ["CM X-2", 10, 16],
  ["2", 10, 20],
  ["2-3", 11, 29],
  ["3", 11, 33],
  ["3-LB", 12, 12],
  ["LB", 12, 14],
  ["LB-3", 12, 44],
  ["3", 12, 46],
  ["3-4", 13, 22],
  ["4", 13, 26],
  ["after", 14, 30],
  ["info", 17, 00], // Curriculum night
  ["info-1", 18, 30],
  ["1", 18, 35],
  ["1-2", 18, 50],
  ["2", 18, 55],
  ["2-3", 19, 10],
  ["3", 19, 15],
  ["3-4", 19, 30],
  ["4", 19, 35],
  ["after", 19, 50],
  ["end", 23, 59]
];

var scheduleCX = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 14],
  ["CM X", 9, 18],
  ["CM X-2", 10, 16],
  ["2", 10, 20],
  ["2-3", 11, 29],
  ["3", 11, 33],
  ["3-LC", 12, 50],
  ["LC", 12, 52],
  ["LC-4", 13, 22],
  ["4", 13, 26],
  ["after", 14, 30],
  ["info", 17, 00], // Curriculum night
  ["info-1", 18, 30],
  ["1", 18, 35],
  ["1-2", 18, 50],
  ["2", 18, 55],
  ["2-3", 19, 10],
  ["3", 19, 15],
  ["3-4", 19, 30],
  ["4", 19, 35],
  ["after", 19, 50],
  ["end", 23, 59]
];

var scheduleAX2 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 10],
  ["CM X", 9, 14],
  ["CM X-2", 10, 20],
  ["2", 10, 24],
  ["2-LA", 11, 29],
  ["LA", 11, 33],
  ["LA-3", 12, 3],
  ["3", 12, 7],
  ["3-4", 13, 17],
  ["4", 13, 22],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleBX2 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 10],
  ["CM X", 9, 14],
  ["CM X-2", 10, 20],
  ["2", 10, 24],
  ["2-3", 11, 29],
  ["3", 11, 33],
  ["3-LB", 12, 6],
  ["LB", 12, 10],
  ["LB-3", 12, 40],
  ["3", 12, 44],
  ["3-4", 13, 17],
  ["4", 13, 22],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleCX2 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 10],
  ["CM X", 9, 14],
  ["CM X-2", 10, 20],
  ["2", 10, 24],
  ["2-3", 11, 29],
  ["3", 11, 33],
  ["3-LC", 12, 44],
  ["LC", 12, 48],
  ["LC-4", 13, 18],
  ["4", 13, 22],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleAX3 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 16],
  ["CM X", 9, 20],
  ["CM X-2", 10, 10],
  ["2", 10, 14],
  ["2-LA", 11, 25],
  ["LA", 11, 29],
  ["LA-3", 11, 59],
  ["3", 12, 3],
  ["3-4", 13, 14],
  ["4", 13, 19],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleBX3 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 16],
  ["CM X", 9, 20],
  ["CM X-2", 10, 10],
  ["2", 10, 14],
  ["2-3", 11, 25],
  ["3", 11, 29],
  ["3-LB", 12, 5],
  ["LB", 12, 7],
  ["LB-3", 12, 37],
  ["3", 12, 39],
  ["3-4", 13, 14],
  ["4", 13, 19],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleCX3 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM X", 9, 16],
  ["CM X", 9, 20],
  ["CM X-2", 10, 10],
  ["2", 10, 14],
  ["2-3", 11, 25],
  ["3", 11, 29],
  ["3-LC", 12, 40],
  ["LC", 12, 44],
  ["LC-4", 13, 14],
  ["4", 13, 19],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleAMCAS12 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-LA", 11, 8],
  ["LA", 11, 12],
  ["LA-1", 11, 42],
  ["1", 11, 46],
  ["1-2", 13, 06],
  ["2", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleBMCAS12 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-1", 11, 8],
  ["1", 11, 12],
  ["1-LB", 11, 52],
  ["LB", 11, 54],
  ["LB-1", 12, 24],
  ["1", 12, 26],
  ["1-2", 13, 6],
  ["2", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleCMCAS12 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-1", 11, 8],
  ["1", 11, 12],
  ["1-LC", 12, 32],
  ["LC", 12, 36],
  ["LC-2", 13, 6],
  ["2", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleAMCAS34 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-LA", 11, 8],
  ["LA", 11, 12],
  ["LA-3", 11, 42],
  ["3", 11, 46],
  ["3-4", 13, 06],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleBMCAS34 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-3", 11, 8],
  ["3", 11, 12],
  ["3-LB", 11, 52],
  ["LB", 11, 54],
  ["LB-3", 12, 24],
  ["3", 12, 26],
  ["3-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleCMCAS34 = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-3", 11, 8],
  ["3", 11, 12],
  ["3-LC", 12, 32],
  ["LC", 12, 36],
  ["LC-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleAMCASShort = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-1", 10, 30],
  ["1", 10, 34],
  ["1-LA", 11, 16],
  ["LA", 11, 20],
  ["LA-3", 11, 50],
  ["3", 11, 54],
  ["3-4", 13, 00],
  ["4", 13, 04],
  ["4-2", 13, 45],
  ["2", 13, 49],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleBMCASShort = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-1", 10, 30],
  ["1", 10, 34],
  ["1-3", 11, 16],
  ["3", 11, 20],
  ["3-LB", 11, 53],
  ["LB", 11, 55],
  ["LB-3", 12, 25],
  ["3", 12, 27],
  ["3-4", 13, 00],
  ["4", 13, 04],
  ["4-2", 13, 45],
  ["2", 13, 49],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleCMCASShort = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["MCAS", 8, 5],
  ["MCAS-1", 10, 30],
  ["1", 10, 34],
  ["1-3", 11, 16],
  ["3", 11, 20],
  ["3-LC", 12, 26],
  ["LC", 12, 30],
  ["3-4", 13, 00],
  ["4", 13, 04],
  ["4-2", 13, 45],
  ["2", 13, 49],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleEarlyRelease = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 25],
  ["CM", 9, 29],
  ["CM-2", 9, 44],
  ["2", 9, 48],
  ["after", 11, 8],
  ["end", 23, 59]
];

var scheduleCurrNight = [
  ["morning", 0, 0],
  ["info", 17, 0],
  ["info-1", 18, 30],
  ["1", 18, 35],
  ["1-2", 18, 50],
  ["2", 18, 55],
  ["2-3", 19, 10],
  ["3", 19, 15],
  ["3-4", 19, 30],
  ["4", 19, 35],
  ["after", 19, 50],
  ["end", 23, 59]
];

var scheduleALateStart = [
  ["morning", 0, 0],
  ["before", 9, 32],
  ["LA", 11, 12],
  ["LA-3", 11, 42],
  ["3", 11, 46],
  ["3-4", 13, 06],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleBLateStart = [
  ["morning", 0, 0],
  ["before", 9, 32],
  ["3", 11, 12],
  ["3-LB", 11, 52],
  ["LB", 11, 54],
  ["LB-3", 12, 24],
  ["3", 12, 26],
  ["3-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleCLateStart = [
  ["morning", 0, 0],
  ["before", 9, 32],
  ["3", 11, 12],
  ["3-LC", 12, 32],
  ["LC", 12, 36],
  ["LC-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleALateStartWithConferences = [
  ["morning", 0, 0],
  ["8:10", 8, 10],
  ["8:20", 8, 20],
  ["8:30", 8, 30],
  ["8:40", 8, 40],
  ["8:50", 8, 50],
  ["9:00", 9, 00],
  ["9:10", 9, 10],
  ["9:20", 9, 20],
  ["9:30", 9, 30],
  ["9:40", 9, 40],
  ["9:50", 9, 50],
  ["10:00", 10, 00],
  ["10:10", 10, 10],
  ["10:20", 10, 20],
  ["10:30", 10, 30],
  ["10:40", 10, 40],
  ["10:50", 10, 50],
  ["before", 11, 00],
  ["LA", 11, 12],
  ["LA-3", 11, 42],
  ["3", 11, 46],
  ["3-4", 13, 06],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleBLateStartWithConferences = [
  ["morning", 0, 0],
  ["8:10", 8, 10],
  ["8:20", 8, 20],
  ["8:30", 8, 30],
  ["8:40", 8, 40],
  ["8:50", 8, 50],
  ["9:00", 9, 00],
  ["9:10", 9, 10],
  ["9:20", 9, 20],
  ["9:30", 9, 30],
  ["9:40", 9, 40],
  ["9:50", 9, 50],
  ["10:00", 10, 00],
  ["10:10", 10, 10],
  ["10:20", 10, 20],
  ["10:30", 10, 30],
  ["10:40", 10, 40],
  ["10:50", 10, 50],
  ["before", 11, 00],
  ["3", 11, 12],
  ["3-LB", 11, 52],
  ["LB", 11, 54],
  ["LB-3", 12, 24],
  ["3", 12, 26],
  ["3-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleCLateStartWithConferences = [
  ["morning", 0, 0],
  ["8:10", 8, 10],
  ["8:20", 8, 20],
  ["8:30", 8, 30],
  ["8:40", 8, 40],
  ["8:50", 8, 50],
  ["9:00", 9, 00],
  ["9:10", 9, 10],
  ["9:20", 9, 20],
  ["9:30", 9, 30],
  ["9:40", 9, 40],
  ["9:50", 9, 50],
  ["10:00", 10, 00],
  ["10:10", 10, 10],
  ["10:20", 10, 20],
  ["10:30", 10, 30],
  ["10:40", 10, 40],
  ["10:50", 10, 50],
  ["before", 11, 00],
  ["3", 11, 12],
  ["3-LC", 12, 32],
  ["LC", 12, 36],
  ["LC-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleAfternoonConferences = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 25],
  ["CM", 9, 29],
  ["CM-2", 9, 44],
  ["2", 9, 48],
  ["Lunch", 11, 8],
  ["12:00", 12, 00],
  ["12:10", 12, 10],
  ["12:20", 12, 20],
  ["12:30", 12, 30],
  ["12:40", 12, 40],
  ["12:50", 12, 50],
  ["1:00", 13, 00],
  ["1:10", 13, 10],
  ["1:20", 13, 20],
  ["1:30", 13, 30],
  ["1:40", 13, 40],
  ["1:50", 13, 50],
  ["2:00", 14, 00],
  ["2:10", 14, 10],
  ["2:20", 14, 20],
  ["2:30", 14, 30],
  ["2:40", 14, 40],
  ["2:50", 14, 50],
  ["after", 15, 00],
  ["end", 23, 59]
];

var scheduleLastDay = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-2", 9, 2],
  ["2", 9, 6],
  ["2-3", 10, 4],
  ["3", 10, 8],
  ["3-4", 11, 06],
  ["4", 11, 10],
  ["after", 12, 08],
  ["end", 23, 59]
];

var scheduleFirstDay2ndSemester = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["prep", 8, 5],
  ["lunch", 11, 12],
  ["lunch-1", 11, 42],
  ["1", 11, 46],
  ["1-2", 12, 24],
  ["2", 12, 28],
  ["2-3", 13, 6],
  ["3", 13, 10],
  ["3-4", 13, 48],
  ["4", 13, 52],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleFirstDay = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["meetings", 8, 5],
  ["lunch", 11, 0],
  ["lunch-3", 11, 42],
  ["3", 11, 46],
  ["3-4", 13, 6],
  ["4", 13, 10],
  ["after", 14, 30],
  ["end", 23, 59]
];

var scheduleSecondDay = [
  ["morning", 0, 0],
  ["before", 6, 25],
  ["1", 8, 5],
  ["1-CM", 9, 25],
  ["CM", 9, 29],
  ["CM-2", 9, 44],
  ["2", 9, 48],
  ["2-lunch", 11, 8],
  ["lunch", 11, 12],
  ["passing", 11, 42],
  ["CM 2022", 11, 46],
  ["after", 14, 30],
  ["end", 23, 59]
];

var schoolHolidays = [
  myDate(2, 18),
  myDate(2, 19),
  myDate(2, 20),
  myDate(2, 21),
  myDate(2, 22)
];
var blackDays = [
  myDate(3, 8),
  myDate(3, 12),
  myDate(3, 13),
  myDate(3, 15),
  myDate(3, 19),
  myDate(3, 21),
  myDate(3, 25),
  myDate(3, 28),
  myDate(4, 1),
  myDate(4, 3),
  myDate(4, 5),
  myDate(4, 9),
  myDate(4, 11) 
];

function getStart(block) {
  return today.setHours(block[1], block[2], 0, 0);
}

// DisplayDate
  var todayDate = today.getDate();
  var todayMonth = today.getMonth() + 1;
  var todayYear = today.getFullYear();

// next three lines for special schedules, comment out for normal days
// issue: need to automate this
//     scheduleA = scheduleALateStartWithConferences;
//     scheduleB = scheduleBLateStartWithConferences;
//     scheduleC = scheduleCLateStartWithConferences;
var lunchMode = "A";
if(localStorage.lunch) {
  lunchMode = localStorage.lunch;
}
function getSchedule(key) {
  if (key === "A")
    return scheduleA;
  if (key === "B")
    return scheduleB;
  if (key === "C")
    return scheduleC;
}
schedule = getSchedule(lunchMode);
function isHoliday() {
  for (i = 0; i < schoolHolidays.length; i++) {
    if (schoolHolidays[i].month === today.getMonth() + 1 && schoolHolidays[i].day === today.getDate()) {
      return true;
    }
  }
  return false;
}
function isWeekend() {
  return today.getDay() === 0 || today.getDay() === 6;
}
function getPeriodIndex() {
  var now = ServerDate;
  for (i = 0; true; i++) {
    if (now > getStart(schedule[i]) && now < getStart(schedule[i + 1])) {
      return i;
    }
  }
}
function getPeriodLength(i) {
  return (getStart(schedule[i + 1]) - getStart(schedule[i])) / 60000; // in minutes
}

function isBlackDay() {
  for (i = 0; i < blackDays.length; i++) {
    if (blackDays[i].month === today.getMonth() + 1 && blackDays[i].day === today.getDate()) {
      return true;
    }
  }
  return false;
}
