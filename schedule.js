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
  ["1-FB", 9, 50],
  ["FB", 9, 55],
  ["FB-2", 10, 10],
  ["2", 10, 15],
  ["2-LA", 11, 35],
  ["LA", 11, 40],
  ["LA-3", 12, 10],
  ["3", 12, 15],
  ["3-4", 13, 35],
  ["4", 13, 40],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleB = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 50],
  ["FB", 9, 55],
  ["FB-2", 10, 10],
  ["2", 10, 15],
  ["2-3", 11, 35],
  ["3.1", 11, 40],
  ["3-LB", 12, 20],
  ["LB", 12, 22],
  ["LB-3", 12, 50],
  ["3.2", 12, 55],
  ["3-4", 13, 35],
  ["4", 13, 40],
  ["after", 15, 0],
  ["end", 23, 59]
];

var scheduleC = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["1", 8, 30],
  ["1-FB", 9, 50],
  ["FB", 9, 55],
  ["FB-2", 10, 10],
  ["2", 10, 15],
  ["2-3", 11, 35],
  ["3", 11, 40],
  ["3-LC", 13, 0],
  ["LC", 13, 5],
  ["LC-4", 13, 35],
  ["4", 13, 40],
  ["after", 15, 0],
  ["end", 23, 59]
];

// starting school year 26-27 Thu and Fri schedules are no longer different from the rest
// var scheduleA = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-2", 9, 55],
//   ["2", 10, 0],
//   ["2-LA", 11, 25],
//   ["LA", 11, 30],
//   ["LA-3", 12, 0],
//   ["3", 12, 5],
//   ["3-4", 13, 30],
//   ["4", 13, 35],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleB = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-2", 9, 55],
//   ["2", 10, 0],
//   ["2-3", 11, 25],
//   ["3.1", 11, 30],
//   ["3-LB", 12, 15],
//   ["LB", 12, 17],
//   ["LB-3", 12, 47],
//   ["3.2", 12, 50],
//   ["3-4", 13, 30],
//   ["4", 13, 35],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleC = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-2", 9, 55],
//   ["2", 10, 0],
//   ["2-3", 11, 25],
//   ["3", 11, 30],
//   ["3-LC", 12, 55],
//   ["LC", 13, 0],
//   ["LC-4", 13, 30],
//   ["4", 13, 35],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleThuA = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-FB", 9, 45],
//   ["Path", 9, 50],
//   ["FB-2", 10, 25],
//   ["2", 10, 30],
//   ["2-LA", 11, 45],
//   ["LA", 11, 50],
//   ["LA-3", 12, 20],
//   ["3", 12, 25],
//   ["3-4", 13, 40],
//   ["4", 13, 45],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleThuB = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-FB", 9, 45],
//   ["Path", 9, 50],
//   ["FB-2", 10, 25],
//   ["2", 10, 30],
//   ["2-3", 11, 45],
//   ["3.1", 11, 50],
//   ["3-LB", 12, 30],
//   ["LB", 12, 32],
//   ["LB-3", 13, 2],
//   ["3.2", 13, 5],
//   ["3-4", 13, 40],
//   ["4", 13, 45],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleThuC = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-FB", 9, 45],
//   ["Path", 9, 50],
//   ["FB-2", 10, 25],
//   ["2", 10, 30],
//   ["2-3", 11, 45],
//   ["3", 11, 50],
//   ["3-LC", 13, 5],
//   ["LC", 13, 10],
//   ["LC-4", 13, 40],
//   ["4", 13, 45],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleFriA = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-FB", 9, 45],
//   ["Bal", 9, 50],
//   ["FB-2", 10, 25],
//   ["2", 10, 30],
//   ["2-LA", 11, 45],
//   ["LA", 11, 50],
//   ["LA-3", 12, 20],
//   ["3", 12, 25],
//   ["3-4", 13, 40],
//   ["4", 13, 45],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleFriB = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-FB", 9, 45],
//   ["Bal", 9, 50],
//   ["FB-2", 10, 25],
//   ["2", 10, 30],
//   ["2-3", 11, 45],
//   ["3.1", 11, 50],
//   ["3-LB", 12, 30],
//   ["LB", 12, 32],
//   ["LB-3", 13, 2],
//   ["3.2", 13, 5],
//   ["3-4", 13, 40],
//   ["4", 13, 45],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleFriC = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-FB", 9, 45],
//   ["Bal", 9, 50],
//   ["FB-2", 10, 25],
//   ["2", 10, 30],
//   ["2-3", 11, 45],
//   ["3", 11, 50],
//   ["3-LC", 13, 5],
//   ["LC", 13, 10],
//   ["LC-4", 13, 40],
//   ["4", 13, 45],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

var schoolHolidays = [
  [9, 7],
  [9, 21],
  [10, 12],
  [11, 3],
  [11, 11],
  [11, 26],
  [11, 27],
  [12, 24],
  [12, 25],
  [12, 28],
  [12, 29],
  [12, 30],
  [12, 31],
  [1, 1],
  [1, 4],
  [1, 18],
  [2, 15],
  [2, 16],
  [2, 17],
  [2, 18],
  [2, 19],
  [3, 10],
  [3, 25],
  [3, 26],
  [4, 19],
  [4, 20],
  [4, 21],
  [4, 22],
  [4, 23],
  [5, 31],
  [6, 18]
];

var blackDays = [
  [9, 2],
  [9, 4],
  [9, 9],
  [9, 11],
  [9, 15],
  [9, 17],
  [9, 22],
  [9, 24],
  [9, 28],
  [9, 30],
  [10, 2],
  [10, 6],
  [10, 8],
  [10, 9],
  [10, 14],
  [10, 16],
  [10, 20],
  [10, 22],
  [10, 26],
  [10, 28],
  [10, 30],
  [11, 4],
  [11, 6],
  [11, 10],
  [11, 13],
  [11, 17],
  [11, 19],
  [11, 23],
  [11, 25],
  [11, 30],
  [12, 2],
  [12, 4],
  [12, 8],
  [12, 10],
  [12, 14],
  [12, 16],
  [12, 18],
  [12, 22],
  [1, 5],
  [1, 7],
  [1, 11],
  [1, 13],
  [1, 14],
  [1, 19],
  [1, 21],
  [1, 25],
  [1, 27],
  [1, 29]
];

// special schedules
var firstDayFrosh = [
  ["morning", 0, 0],
  ["before", 7, 0],
  ["Path", 8, 30],
  ["> LC Mtg", 10, 30],
  ["LC Mtg", 10, 35],
  ["> AS Mtg", 10, 55],
  ["AS Mtg", 11, 5],
  ["> Lunch", 11, 25],
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

var firstDayUpper = [
  ["morning", 0, 0],
  ["before", 8, 0],
  ["Lunch", 11, 5],
  ["L-FB", 11, 27],
  ["FB", 11, 30],
  ["FB-1", 12, 0],
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


// Exams -- start sem 1 and 2
// var schedule011426 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1 Exam", 8, 30],
//   ["1-P", 10, 10],
//   ["Path", 10, 15],
//   ["P-2", 10, 45],
//   ["2 Exam", 10, 50],
//   ["Lunch", 12, 30],
//   ["after", 13, 30],
//   ["end", 23, 59]
// ];

// var schedule011526 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["3 Exam", 8, 30],
//   ["3-P", 10, 10],
//   ["Path", 10, 15],
//   ["P-4", 10, 45],
//   ["4 Exam", 10, 50],
//   ["Lunch", 12, 30],
//   ["after", 13, 30],
//   ["end", 23, 59]
// ];

// var schedule012026 = [  // start of sem 2 2026
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["Lunch", 11, 30],
//   ["L-1", 12, 0],
//   ["1", 12, 5],
//   ["1-2", 12, 45],
//   ["2", 12, 50],
//   ["2-3", 13, 30],
//   ["3", 13, 35],
//   ["3-4", 14, 15],
//   ["4", 14, 20],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleExam13A = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1 Exam", 8, 30],
//   ["1-2", 10, 10],
//   ["2", 10, 15],
//   ["2-LA", 11, 25],
//   ["LA", 11, 30],
//   ["LA-3", 12, 0],
//   ["3 Exam", 12, 5],
//   ["3-4", 13, 45],
//   ["4", 13, 50],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleExam13B = [ // Period 3 exam goes to either Lunch A or C
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1 Exam", 8, 30],
//   ["1-2", 10, 10],
//   ["2", 10, 15],
//   ["2-3", 11, 25],
//   ["3.1", 11, 30],
//   ["3-LB", 12, 20],
//   ["LB", 12, 22],
//   ["LB-3", 12, 52],
//   ["3.2", 12, 55],
//   ["3-4", 13, 45],
//   ["4", 13, 50],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleExam13C = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1 Exam", 8, 30],
//   ["1-2", 10, 10],
//   ["2", 10, 15],
//   ["2-3", 11, 25],
//   ["3 Exam", 11, 30],
//   ["3-LC", 13, 10],
//   ["LC", 13, 15],
//   ["LC-4", 13, 45],
//   ["4", 13, 50],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleExam24A = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-2", 9, 40],
//   ["2 Exam", 9, 45],
//   ["2-LA", 11, 25],
//   ["LA", 11, 30],
//   ["LA-3", 12, 0],
//   ["3", 12, 5],
//   ["3-4", 13, 15],
//   ["4 Exam", 13, 20],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleExam24B = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-2", 9, 40],
//   ["2 Exam", 9, 45],
//   ["2-3", 11, 25],
//   ["3.1", 11, 30],
//   ["3-LB", 12, 5],
//   ["LB", 12, 7],
//   ["LB-3", 12, 37],
//   ["3.2", 12, 40],
//   ["3-4", 13, 15],
//   ["4 Exam", 13, 20],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleExam24C = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-2", 9, 40],
//   ["2 Exam", 9, 45],
//   ["2-3", 11, 25],
//   ["3", 11, 30],
//   ["3-LC", 12, 40],
//   ["LC", 12, 45],
//   ["LC-4", 13, 15],
//   ["4 Exam", 13, 20],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// // End Exams

// var schedule012225 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["delayed", 8, 30],
//   ["Lunch", 11, 10],
//   ["1", 11, 45],
//   ["1-2", 12, 30],
//   ["2", 12, 35],
//   ["2-3", 13, 20],
//   ["3", 13, 25],
//   ["3-4", 14, 10],
//   ["4", 14, 15],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var schedule962022Frosh = [
//   ["morning", 0, 0],
//   ["before", 7, 30],
//   ["FBlock", 8, 35],
//   ["-> LC", 10, 25],
//   ["LC", 10, 35],
//   ["-> Aud", 10, 55],
//   ["Aud", 11, 05],
//   ["Lunch", 11, 30],
//   ["-> 1", 12, 0],
//   ["1", 12, 5],
//   ["1-2", 12, 45],
//   ["2", 12, 50],
//   ["2-3", 13, 30],
//   ["3", 13, 35],
//   ["3-4", 14, 15],
//   ["4", 14, 20],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var schedule962022Soph = [
//   ["morning", 0, 0],
//   ["before", 7, 30],
//   ["FBlock", 10, 35],
//   ["-> Guid", 10, 55],
//   ["Guid", 11, 5],
//   ["Lunch", 11, 30],
//   ["-> 1", 12, 0],
//   ["1", 12, 5],
//   ["1-2", 12, 45],
//   ["2", 12, 50],
//   ["2-3", 13, 30],
//   ["3", 13, 35],
//   ["3-4", 14, 15],
//   ["4", 14, 20],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var schedule962022Upper = [
//   ["morning", 0, 0],
//   ["before", 7, 30],
//   ["Lunch", 11, 5],
//   ["FBlock", 11, 30],
//   ["-> 1", 12, 0],
//   ["1", 12, 5],
//   ["1-2", 12, 45],
//   ["2", 12, 50],
//   ["2-3", 13, 30],
//   ["3", 13, 35],
//   ["3-4", 14, 15],
//   ["4", 14, 20],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var lastday = [
//   ["morning", 0, 0],
//   ["before", 6, 55],
//   ["1", 8, 30],
//   ["1-2", 9, 10],
//   ["2", 9, 15],
//   ["2-3", 9, 55],
//   ["3", 10, 0],
//   ["3-4", 10, 40],
//   ["4", 10, 45],
//   ["after", 11, 25],
//   ["end", 23, 59]
// ];

// // afternoon conf
// var schedule031326 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["1", 8, 30],
//   ["1-2", 9, 55],
//   ["2", 10, 0],
//   ["2-L", 11, 25],
//   ["Lunch", 11, 30],
//   ["after", 12, 0],
//   ["end", 23, 59]
// ];

// // morning conf
// var schedule031226 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["Conf", 8, 30],
//   ["Lunch", 11, 30],
//   ["L-3", 12, 0],
//   ["3", 12, 05],
//   ["3-4", 13, 30],
//   ["4", 13, 35],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// // ELA MCAS Sess 1
// var schedule032426 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["MCAS", 8, 30],
//   ["-> L", 12, 15],
//   ["Lunch", 12, 20],
//   ["L-1", 12, 50],
//   ["1", 12, 55],
//   ["1-2", 13, 55],
//   ["2", 14, 0],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// // ELA MCAS Sess 2
// var schedule032526 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["MCAS", 8, 30],
//   ["-> L", 12, 15],
//   ["Lunch", 12, 20],
//   ["L-3", 12, 50],
//   ["3", 12, 55],
//   ["3-4", 13, 55],
//   ["4", 14, 0],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleMCAS12 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["MCAS", 8, 30],
//   ["-> L", 11, 30],
//   ["Lunch", 11, 40],
//   ["L-1", 12, 10],
//   ["1", 12, 15],
//   ["1-2", 13, 35],
//   ["2", 13, 40],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// var scheduleMCAS34 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["MCAS", 8, 30],
//   ["-> L", 11, 30],
//   ["Lunch", 11, 40],
//   ["L-3", 12, 10],
//   ["3", 12, 15],
//   ["3-4", 13, 35],
//   ["4", 13, 40],
//   ["after", 15, 0],
//   ["end", 23, 59]
// ];

// //thanksgiving falcon day
// var schedule112625 = [
//   ["morning", 0, 0],
//   ["before", 7, 0],
//   ["FB", 8, 30],
//   ["→ 1", 9, 5],
//   ["Rot 1", 9, 10],
//   ["1→2", 9, 45],
//   ["Rot 2", 9, 50],
//   ["2→3", 10, 25],
//   ["Rot 3", 10, 30],
//   ["3→4", 11, 5],
//   ["Rot 4", 11, 10],
//   ["after", 11, 45],
//   ["end", 23, 59]
// ];
  
var specialSchedules = [
  [9, 1, firstDayFrosh, firstDayUpper, firstDayUpper],
  // [10, 9, schedule031225, schedule031225, schedule031225], // morning conferences
  // [10, 10, schedule031125, schedule031125, schedule031125], // afternoon conferences
  // [11, 26, schedule112625, schedule112625, schedule112625], // thanksgiving eve
  // [1, 14, schedule011426, schedule011426, schedule011426], // sem 1 exams
  // [1, 15, schedule011526, schedule011526, schedule011526], // sem 1 exams
  // [1, 20, schedule012026, schedule012026, schedule012026], // start of sem 2
  // [10, 19, schedule10192022A, schedule10192022B, schedule10192022C],
  // [10, 25, schedule10252022, schedule10252022, schedule10252022],
  // [11, 23, schedule11232022, schedule11232022, schedule11232022],
  // [1, 18, schedule11823, schedule11823, schedule11823],
  // [1, 19, schedule11923, schedule11923, schedule11923],
  // [1, 23, schedule12323, schedule12323, schedule12323],
  // [2, 1, schedule020123, schedule020123, schedule020123],
  // [2, 2, schedule020223, schedule020223, schedule020223],
  // [3, 12, schedule031226, schedule031226, schedule031226], // Spring Family Conferences morning
  // [3, 13, schedule031326, schedule031326, schedule031326], // Spring Family Conferences afternoon
  // [3, 24, schedule032426, schedule032426, schedule032426], // ELA MCAS Session 1
  // [3, 25, schedule032526, schedule032526, schedule032526], // ELA MCAS Session 2
  // [3, 28, schedule032823, schedule032823, schedule032823],
  // [3, 29, schedule032923, schedule032923, schedule032923],
  // [4, 13, schedule041323, schedule041323, schedule041323],
  // [5, 19, scheduleMCAS12, scheduleMCAS12, scheduleMCAS12], // Math
  // [5, 20, scheduleMCAS34, scheduleMCAS34, scheduleMCAS34], 
  // [6, 8, scheduleMCAS12, scheduleMCAS12, scheduleMCAS12], // Science
  // [6, 9, scheduleMCAS34, scheduleMCAS34, scheduleMCAS34], 
  // [6, 23, scheduleExam13A, scheduleExam13B, scheduleExam13C], // Finals
  // [6, 24, scheduleExam24A, scheduleExam24B, scheduleExam24B],
  // [6, 26, lastday, lastday, lastday]
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
  [scheduleA, scheduleB, scheduleC],
  [scheduleA, scheduleB, scheduleC],
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
  // return true;
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
