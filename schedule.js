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

function block(lbl,srt,ed) {
  return {label:lbl,start:srt};
}
function myDate(m, d) {
  return {month:m, day:d};
}
var today = new Date();
/////////////// schedule types //////////////////
// Table of period labels and start times
var scheduleA = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM",today.setHours(9,25,0,0)),
block("CM",today.setHours(9,29,0,0)),
block("CM-2",today.setHours(9,44,0,0)),
block("2",today.setHours(9,48,0,0)),
block("2-LA",today.setHours(11,8,0,0)),
block("LA",today.setHours(11,12,0,0)),
block("LA-3",today.setHours(11,42,0,0)),
block("3",today.setHours(11,46,0,0)),
block("3-4",today.setHours(13,06,0,0)),
block("4",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleB = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM",today.setHours(9,25,0,0)),
block("CM",today.setHours(9,29,0,0)),
block("CM-2",today.setHours(9,44,0,0)),
block("2",today.setHours(9,48,0,0)),
block("2-3",today.setHours(11,8,0,0)),
block("3",today.setHours(11,12,0,0)),
block("3-LB",today.setHours(11,52,0,0)),
block("LB",today.setHours(11,54,0,0)),
block("LB-3",today.setHours(12,24,0,0)),
block("3",today.setHours(12,26,0,0)),
block("3-4",today.setHours(13,6,0,0)),
block("4",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleC = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM",today.setHours(9,25,0,0)),
block("CM",today.setHours(9,29,0,0)),
block("CM-2",today.setHours(9,44,0,0)),
block("2",today.setHours(9,48,0,0)),
block("2-3",today.setHours(11,8,0,0)),
block("3",today.setHours(11,12,0,0)),
block("3-LC",today.setHours(12,32,0,0)),
block("LC",today.setHours(12,36,0,0)),
block("LC-4",today.setHours(13,6,0,0)),
block("4",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleFinal12 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM",today.setHours(9,45,0,0)),
block("CM",today.setHours(9,50,0,0)),
block("CM-2",today.setHours(10,20,0,0)),
block("2",today.setHours(10,25,0,0)),
block("2-L",today.setHours(12,5,0,0)),
block("Lunch",today.setHours(12,10,0,0)),
block("after",today.setHours(12,45,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleFinal34 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("3",today.setHours(8,5,0,0)),
block("3-CM",today.setHours(9,45,0,0)),
block("CM",today.setHours(9,50,0,0)),
block("CM-4",today.setHours(10,20,0,0)),
block("4",today.setHours(10,25,0,0)),
block("4-L",today.setHours(12,5,0,0)),
block("Lunch",today.setHours(12,10,0,0)),
block("after",today.setHours(12,45,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleFinal13 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM",today.setHours(9,45,0,0)),
block("CM",today.setHours(9,50,0,0)),
block("CM-3",today.setHours(10,20,0,0)),
block("3",today.setHours(10,25,0,0)),
block("3-L",today.setHours(12,5,0,0)),
block("Lunch",today.setHours(12,10,0,0)),
block("after",today.setHours(12,45,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleFinal24 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("2",today.setHours(8,5,0,0)),
block("2-CM",today.setHours(9,45,0,0)),
block("CM",today.setHours(9,50,0,0)),
block("CM-4",today.setHours(10,20,0,0)),
block("4",today.setHours(10,25,0,0)),
block("4-L",today.setHours(12,5,0,0)),
block("Lunch",today.setHours(12,10,0,0)),
block("after",today.setHours(12,45,0,0)),
block("end",today.setHours(23,59,59,0))
];
// All start with lunch A
var scheduleDelay1 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(9,32,0,0)),
block("Lunch",today.setHours(11,12,0,0)),
block("Lunch-3",today.setHours(11,42,0,0)),
block("3",today.setHours(11,46,0,0)),
block("3-4",today.setHours(12,24,0,0)),
block("4",today.setHours(12,28,0,0)),
block("4-1",today.setHours(13,6,0,0)),
block("1",today.setHours(13,10,0,0)),
block("1-2",today.setHours(13,48,0,0)),
block("2",today.setHours(13,52,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
// these next three schedules have had additional sections added
// for Curriculum night (same day as x block Sept 20 2018)
var scheduleAX = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,14,0,0)),
block("CM X",today.setHours(9,18,0,0)),
block("CM X-2",today.setHours(10,16,0,0)),
block("2",today.setHours(10,20,0,0)),
block("2-LA",today.setHours(11,29,0,0)),
block("LA",today.setHours(11,33,0,0)),
block("LA-3",today.setHours(12,3,0,0)),
block("3",today.setHours(12,7,0,0)),
block("3-4",today.setHours(13,22,0,0)),
block("4",today.setHours(13,26,0,0)),
block("after",today.setHours(14,30,0,0)),
block("info",today.setHours(17,00,0,0)), // Curriculum night
block("info-1",today.setHours(18,30,0,0)),
block("1",today.setHours(18,35,0,0)),
block("1-2",today.setHours(18,50,0,0)),
block("2",today.setHours(18,55,0,0)),
block("2-3",today.setHours(19,10,0,0)),
block("3",today.setHours(19,15,0,0)),
block("3-4",today.setHours(19,30,0,0)),
block("4",today.setHours(19,35,0,0)),
block("after",today.setHours(19,50,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleBX = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,14,0,0)),
block("CM X",today.setHours(9,18,0,0)),
block("CM X-2",today.setHours(10,16,0,0)),
block("2",today.setHours(10,20,0,0)),
block("2-3",today.setHours(11,29,0,0)),
block("3",today.setHours(11,33,0,0)),
block("3-LB",today.setHours(12,12,0,0)),
block("LB",today.setHours(12,14,0,0)),
block("LB-3",today.setHours(12,44,0,0)),
block("3",today.setHours(12,46,0,0)),
block("3-4",today.setHours(13,22,0,0)),
block("4",today.setHours(13,26,0,0)),
block("after",today.setHours(14,30,0,0)),
block("info",today.setHours(17,00,0,0)), // Curriculum night
block("info-1",today.setHours(18,30,0,0)),
block("1",today.setHours(18,35,0,0)),
block("1-2",today.setHours(18,50,0,0)),
block("2",today.setHours(18,55,0,0)),
block("2-3",today.setHours(19,10,0,0)),
block("3",today.setHours(19,15,0,0)),
block("3-4",today.setHours(19,30,0,0)),
block("4",today.setHours(19,35,0,0)),
block("after",today.setHours(19,50,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleCX = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,14,0,0)),
block("CM X",today.setHours(9,18,0,0)),
block("CM X-2",today.setHours(10,16,0,0)),
block("2",today.setHours(10,20,0,0)),
block("2-3",today.setHours(11,29,0,0)),
block("3",today.setHours(11,33,0,0)),
block("3-LC",today.setHours(12,50,0,0)),
block("LC",today.setHours(12,52,0,0)),
block("LC-4",today.setHours(13,22,0,0)),
block("4",today.setHours(13,26,0,0)),
block("after",today.setHours(14,30,0,0)),
block("info",today.setHours(17,00,0,0)), // Curriculum night
block("info-1",today.setHours(18,30,0,0)),
block("1",today.setHours(18,35,0,0)),
block("1-2",today.setHours(18,50,0,0)),
block("2",today.setHours(18,55,0,0)),
block("2-3",today.setHours(19,10,0,0)),
block("3",today.setHours(19,15,0,0)),
block("3-4",today.setHours(19,30,0,0)),
block("4",today.setHours(19,35,0,0)),
block("after",today.setHours(19,50,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleAX2 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,10,0,0)),
block("CM X",today.setHours(9,14,0,0)),
block("CM X-2",today.setHours(10,20,0,0)),
block("2",today.setHours(10,24,0,0)),
block("2-LA",today.setHours(11,29,0,0)),
block("LA",today.setHours(11,33,0,0)),
block("LA-3",today.setHours(12,3,0,0)),
block("3",today.setHours(12,7,0,0)),
block("3-4",today.setHours(13,17,0,0)),
block("4",today.setHours(13,22,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleBX2 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,10,0,0)),
block("CM X",today.setHours(9,14,0,0)),
block("CM X-2",today.setHours(10,20,0,0)),
block("2",today.setHours(10,24,0,0)),
block("2-3",today.setHours(11,29,0,0)),
block("3",today.setHours(11,33,0,0)),
block("3-LB",today.setHours(12,6,0,0)),
block("LB",today.setHours(12,10,0,0)),
block("LB-3",today.setHours(12,40,0,0)),
block("3",today.setHours(12,44,0,0)),
block("3-4",today.setHours(13,17,0,0)),
block("4",today.setHours(13,22,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleCX2 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,10,0,0)),
block("CM X",today.setHours(9,14,0,0)),
block("CM X-2",today.setHours(10,20,0,0)),
block("2",today.setHours(10,24,0,0)),
block("2-3",today.setHours(11,29,0,0)),
block("3",today.setHours(11,33,0,0)),
block("3-LC",today.setHours(12,44,0,0)),
block("LC",today.setHours(12,48,0,0)),
block("LC-4",today.setHours(13,18,0,0)),
block("4",today.setHours(13,22,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleAX3 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,16,0,0)),
block("CM X",today.setHours(9,20,0,0)),
block("CM X-2",today.setHours(10,10,0,0)),
block("2",today.setHours(10,14,0,0)),
block("2-LA",today.setHours(11,25,0,0)),
block("LA",today.setHours(11,29,0,0)),
block("LA-3",today.setHours(11,59,0,0)),
block("3",today.setHours(12,3,0,0)),
block("3-4",today.setHours(13,14,0,0)),
block("4",today.setHours(13,19,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleBX3 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,16,0,0)),
block("CM X",today.setHours(9,20,0,0)),
block("CM X-2",today.setHours(10,10,0,0)),
block("2",today.setHours(10,14,0,0)),
block("2-3",today.setHours(11,25,0,0)),
block("3",today.setHours(11,29,0,0)),
block("3-LB",today.setHours(12,5,0,0)),
block("LB",today.setHours(12,7,0,0)),
block("LB-3",today.setHours(12,37,0,0)),
block("3",today.setHours(12,39,0,0)),
block("3-4",today.setHours(13,14,0,0)),
block("4",today.setHours(13,19,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleCX3 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM X",today.setHours(9,16,0,0)),
block("CM X",today.setHours(9,20,0,0)),
block("CM X-2",today.setHours(10,10,0,0)),
block("2",today.setHours(10,14,0,0)),
block("2-3",today.setHours(11,25,0,0)),
block("3",today.setHours(11,29,0,0)),
block("3-LC",today.setHours(12,40,0,0)),
block("LC",today.setHours(12,44,0,0)),
block("LC-4",today.setHours(13,14,0,0)),
block("4",today.setHours(13,19,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleAMCAS12 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("MCAS",today.setHours(8,5,0,0)),
block("MCAS-LA",today.setHours(11,8,0,0)),
block("LA",today.setHours(11,12,0,0)),
block("LA-1",today.setHours(11,42,0,0)),
block("1",today.setHours(11,46,0,0)),
block("1-2",today.setHours(13,06,0,0)),
block("2",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleBMCAS12 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("MCAS",today.setHours(8,5,0,0)),
block("MCAS-1",today.setHours(11,8,0,0)),
block("1",today.setHours(11,12,0,0)),
block("1-LB",today.setHours(11,52,0,0)),
block("LB",today.setHours(11,54,0,0)),
block("LB-1",today.setHours(12,24,0,0)),
block("1",today.setHours(12,26,0,0)),
block("1-2",today.setHours(13,6,0,0)),
block("2",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleCMCAS12 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("MCAS",today.setHours(8,5,0,0)),
block("MCAS-1",today.setHours(11,8,0,0)),
block("1",today.setHours(11,12,0,0)),
block("1-LC",today.setHours(12,32,0,0)),
block("LC",today.setHours(12,36,0,0)),
block("LC-2",today.setHours(13,6,0,0)),
block("2",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleAMCAS34 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("MCAS",today.setHours(8,5,0,0)),
block("MCAS-LA",today.setHours(11,8,0,0)),
block("LA",today.setHours(11,12,0,0)),
block("LA-3",today.setHours(11,42,0,0)),
block("3",today.setHours(11,46,0,0)),
block("3-4",today.setHours(13,06,0,0)),
block("4",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleBMCAS34 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("MCAS",today.setHours(8,5,0,0)),
block("MCAS-3",today.setHours(11,8,0,0)),
block("3",today.setHours(11,12,0,0)),
block("3-LB",today.setHours(11,52,0,0)),
block("LB",today.setHours(11,54,0,0)),
block("LB-3",today.setHours(12,24,0,0)),
block("3",today.setHours(12,26,0,0)),
block("3-4",today.setHours(13,6,0,0)),
block("4",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleCMCAS34 = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("MCAS",today.setHours(8,5,0,0)),
block("MCAS-3",today.setHours(11,8,0,0)),
block("3",today.setHours(11,12,0,0)),
block("3-LC",today.setHours(12,32,0,0)),
block("LC",today.setHours(12,36,0,0)),
block("LC-4",today.setHours(13,6,0,0)),
block("4",today.setHours(13,10,0,0)),
block("after",today.setHours(14,30,0,0)),
block("end",today.setHours(23,59,59,0))
];
var scheduleAMCASShort = [
  block("morning",today.setHours(0,0,0,0)),
  block("before",today.setHours(6,25,0,0)),
  block("MCAS",today.setHours(8,5,0,0)),
  block("MCAS-1",today.setHours(10,30,0,0)),
  block("1",today.setHours(10,34,0,0)),
  block("1-LA",today.setHours(11,16,0,0)),
  block("LA",today.setHours(11,20,0,0)),
  block("LA-3",today.setHours(11,50,0,0)),
  block("3",today.setHours(11,54,0,0)),
  block("3-4",today.setHours(13,00,0,0)),
  block("4",today.setHours(13,04,0,0)),
  block("4-2",today.setHours(13,45,0,0)),
  block("2",today.setHours(13,49,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
var scheduleBMCASShort = [
  block("morning",today.setHours(0,0,0,0)),
  block("before",today.setHours(6,25,0,0)),
  block("MCAS",today.setHours(8,5,0,0)),
  block("MCAS-1",today.setHours(10,30,0,0)),
  block("1",today.setHours(10,34,0,0)),
  block("1-3",today.setHours(11,16,0,0)),
  block("3",today.setHours(11,20,0,0)),
  block("3-LB",today.setHours(11,53,0,0)),
  block("LB",today.setHours(11,55,0,0)),
  block("LB-3",today.setHours(12,25,0,0)),
  block("3",today.setHours(12,27,0,0)),
  block("3-4",today.setHours(13,00,0,0)),
  block("4",today.setHours(13,04,0,0)),
  block("4-2",today.setHours(13,45,0,0)),
  block("2",today.setHours(13,49,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
var scheduleCMCASShort = [
  block("morning",today.setHours(0,0,0,0)),
  block("before",today.setHours(6,25,0,0)),
  block("MCAS",today.setHours(8,5,0,0)),
  block("MCAS-1",today.setHours(10,30,0,0)),
  block("1",today.setHours(10,34,0,0)),
  block("1-3",today.setHours(11,16,0,0)),
  block("3",today.setHours(11,20,0,0)),
  block("3-LC",today.setHours(12,26,0,0)),
  block("LC",today.setHours(12,30,0,0)),
  block("3-4",today.setHours(13,00,0,0)),
  block("4",today.setHours(13,04,0,0)),
  block("4-2",today.setHours(13,45,0,0)),
  block("2",today.setHours(13,49,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
  var scheduleEarlyRelease = [
  block("morning",today.setHours(0,0,0,0)),
  block("before",today.setHours(6,25,0,0)),
  block("1",today.setHours(8,5,0,0)),
  block("1-CM",today.setHours(9,25,0,0)),
  block("CM",today.setHours(9,29,0,0)),
  block("CM-2",today.setHours(9,44,0,0)),
  block("2",today.setHours(9,48,0,0)),
  block("after",today.setHours(11,8,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
   var scheduleCurrNight = [
  block("morning",today.setHours(0,0,0,0)),
  block("info",today.setHours(17,0,0,0)),
  block("info-1",today.setHours(18,30,0,0)),
  block("1",today.setHours(18,35,0,0)),
  block("1-2",today.setHours(18,50,0,0)),
  block("2",today.setHours(18,55,0,0)),
  block("2-3",today.setHours(19,10,0,0)),
  block("3",today.setHours(19,15,0,0)),
  block("3-4",today.setHours(19,30,0,0)),
  block("4",today.setHours(19,35,0,0)),
  block("after",today.setHours(19,50,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
  var scheduleALateStart = [
  block("morning",today.setHours(0,0,0,0)),
  block("before",today.setHours(9,32,0,0)),
  block("LA",today.setHours(11,12,0,0)),
  block("LA-3",today.setHours(11,42,0,0)),
  block("3",today.setHours(11,46,0,0)),
  block("3-4",today.setHours(13,06,0,0)),
  block("4",today.setHours(13,10,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
  var scheduleBLateStart = [
  block("morning",today.setHours(0,0,0,0)),
  block("before",today.setHours(9,32,0,0)),
  block("3",today.setHours(11,12,0,0)),
  block("3-LB",today.setHours(11,52,0,0)),
  block("LB",today.setHours(11,54,0,0)),
  block("LB-3",today.setHours(12,24,0,0)),
  block("3",today.setHours(12,26,0,0)),
  block("3-4",today.setHours(13,6,0,0)),
  block("4",today.setHours(13,10,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
  var scheduleCLateStart = [
  block("morning",today.setHours(0,0,0,0)),
  block("before",today.setHours(9,32,0,0)),
  block("3",today.setHours(11,12,0,0)),
  block("3-LC",today.setHours(12,32,0,0)),
  block("LC",today.setHours(12,36,0,0)),
  block("LC-4",today.setHours(13,6,0,0)),
  block("4",today.setHours(13,10,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
  var scheduleALateStartWithConferences = [
  block("morning",today.setHours(0,0,0,0)),
  block("8:10",today.setHours(8,10,0,0)),
  block("8:20",today.setHours(8,20,0,0)),
  block("8:30",today.setHours(8,30,0,0)),
  block("8:40",today.setHours(8,40,0,0)),
  block("8:50",today.setHours(8,50,0,0)),
  block("9:00",today.setHours(9,00,0,0)),
  block("9:10",today.setHours(9,10,0,0)),
  block("9:20",today.setHours(9,20,0,0)),
  block("9:30",today.setHours(9,30,0,0)),
  block("9:40",today.setHours(9,40,0,0)),
  block("9:50",today.setHours(9,50,0,0)),
  block("10:00",today.setHours(10,00,0,0)),
  block("10:10",today.setHours(10,10,0,0)),
  block("10:20",today.setHours(10,20,0,0)),
  block("10:30",today.setHours(10,30,0,0)),
  block("10:40",today.setHours(10,40,0,0)),
  block("10:50",today.setHours(10,50,0,0)),
  block("before",today.setHours(11,00,0,0)),
  block("LA",today.setHours(11,12,0,0)),
  block("LA-3",today.setHours(11,42,0,0)),
  block("3",today.setHours(11,46,0,0)),
  block("3-4",today.setHours(13,06,0,0)),
  block("4",today.setHours(13,10,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
  var scheduleBLateStartWithConferences = [
  block("morning",today.setHours(0,0,0,0)),
  block("8:10",today.setHours(8,10,0,0)),
  block("8:20",today.setHours(8,20,0,0)),
  block("8:30",today.setHours(8,30,0,0)),
  block("8:40",today.setHours(8,40,0,0)),
  block("8:50",today.setHours(8,50,0,0)),
  block("9:00",today.setHours(9,00,0,0)),
  block("9:10",today.setHours(9,10,0,0)),
  block("9:20",today.setHours(9,20,0,0)),
  block("9:30",today.setHours(9,30,0,0)),
  block("9:40",today.setHours(9,40,0,0)),
  block("9:50",today.setHours(9,50,0,0)),
  block("10:00",today.setHours(10,00,0,0)),
  block("10:10",today.setHours(10,10,0,0)),
  block("10:20",today.setHours(10,20,0,0)),
  block("10:30",today.setHours(10,30,0,0)),
  block("10:40",today.setHours(10,40,0,0)),
  block("10:50",today.setHours(10,50,0,0)),
  block("before",today.setHours(11,00,0,0)),
  block("3",today.setHours(11,12,0,0)),
  block("3-LB",today.setHours(11,52,0,0)),
  block("LB",today.setHours(11,54,0,0)),
  block("LB-3",today.setHours(12,24,0,0)),
  block("3",today.setHours(12,26,0,0)),
  block("3-4",today.setHours(13,6,0,0)),
  block("4",today.setHours(13,10,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];
  var scheduleCLateStartWithConferences = [
  block("morning",today.setHours(0,0,0,0)),
  block("8:10",today.setHours(8,10,0,0)),
  block("8:20",today.setHours(8,20,0,0)),
  block("8:30",today.setHours(8,30,0,0)),
  block("8:40",today.setHours(8,40,0,0)),
  block("8:50",today.setHours(8,50,0,0)),
  block("9:00",today.setHours(9,00,0,0)),
  block("9:10",today.setHours(9,10,0,0)),
  block("9:20",today.setHours(9,20,0,0)),
  block("9:30",today.setHours(9,30,0,0)),
  block("9:40",today.setHours(9,40,0,0)),
  block("9:50",today.setHours(9,50,0,0)),
  block("10:00",today.setHours(10,00,0,0)),
  block("10:10",today.setHours(10,10,0,0)),
  block("10:20",today.setHours(10,20,0,0)),
  block("10:30",today.setHours(10,30,0,0)),
  block("10:40",today.setHours(10,40,0,0)),
  block("10:50",today.setHours(10,50,0,0)),
  block("before",today.setHours(11,00,0,0)),
  block("3",today.setHours(11,12,0,0)),
  block("3-LC",today.setHours(12,32,0,0)),
  block("LC",today.setHours(12,36,0,0)),
  block("LC-4",today.setHours(13,6,0,0)),
  block("4",today.setHours(13,10,0,0)),
  block("after",today.setHours(14,30,0,0)),
  block("end",today.setHours(23,59,59,0))
  ];

var scheduleAfternoonConferences = [
block("morning",today.setHours(0,0,0,0)),
block("before",today.setHours(6,25,0,0)),
block("1",today.setHours(8,5,0,0)),
block("1-CM",today.setHours(9,25,0,0)),
block("CM",today.setHours(9,29,0,0)),
block("CM-2",today.setHours(9,44,0,0)),
block("2",today.setHours(9,48,0,0)),
block("Lunch",today.setHours(11,8,0,0)),
block("12:00",today.setHours(12,00,0,0)),
block("12:10",today.setHours(12,10,0,0)),
block("12:20",today.setHours(12,20,0,0)),
block("12:30",today.setHours(12,30,0,0)),
block("12:40",today.setHours(12,40,0,0)),
block("12:50",today.setHours(12,50,0,0)),
block("1:00",today.setHours(13,00,0,0)),
block("1:10",today.setHours(13,10,0,0)),
block("1:20",today.setHours(13,20,0,0)),
block("1:30",today.setHours(13,30,0,0)),
block("1:40",today.setHours(13,40,0,0)),
block("1:50",today.setHours(13,50,0,0)),
block("2:00",today.setHours(14,00,0,0)),
block("2:10",today.setHours(14,10,0,0)),
block("2:20",today.setHours(14,20,0,0)),
block("2:30",today.setHours(14,30,0,0)),
block("2:40",today.setHours(14,40,0,0)),
block("2:50",today.setHours(14,50,0,0)),
block("after",today.setHours(15,00,0,0)),
block("end",today.setHours(23,59,59,0))
];
  var scheduleLastDay = [
    block("morning",today.setHours(0,0,0,0)),
    block("before",today.setHours(6,25,0,0)),
    block("1",today.setHours(8,5,0,0)),
    block("1-2",today.setHours(9,2,0,0)),
    block("2",today.setHours(9,6,0,0)),
    block("2-3",today.setHours(10,4,0,0)),
    block("3",today.setHours(10,8,0,0)),
    block("3-4",today.setHours(11,06,0,0)),
    block("4",today.setHours(11,10,0,0)),
    block("after",today.setHours(12,08,0,0)),
    block("end",today.setHours(23,59,59,0))
  ];
  var scheduleFirstDay2ndSemester = [
    block("morning",today.setHours(0,0,0,0)),
    block("before",today.setHours(6,25,0,0)),
    block("prep",today.setHours(8,5,0,0)),
    block("lunch",today.setHours(11,12,0,0)),
    block("lunch-1",today.setHours(11,42,0,0)),
    block("1",today.setHours(11,46,0,0)),
    block("1-2",today.setHours(12,24,0,0)),
    block("2",today.setHours(12,28,0,0)),
    block("2-3",today.setHours(13,6,0,0)),
    block("3",today.setHours(13,10,0,0)),
    block("3-4",today.setHours(13,48,0,0)),
    block("4",today.setHours(13,52,0,0)),
    block("after",today.setHours(14,30,0,0)),
    block("end",today.setHours(23,59,59,0))
  ];
  var scheduleFirstDay = [
    block("morning",today.setHours(0,0,0,0)),
    block("before",today.setHours(6,25,0,0)),
    block("meetings",today.setHours(8,5,0,0)),
    block("lunch",today.setHours(11,0,0,0)),
    block("lunch-3",today.setHours(11,42,0,0)),
    block("3",today.setHours(11,46,0,0)),
    block("3-4",today.setHours(13,6,0,0)),
    block("4",today.setHours(13,10,0,0)),
    block("after",today.setHours(14,30,0,0)),
    block("end",today.setHours(23,59,59,0))
  ];
  var scheduleSecondDay = [
    block("morning",today.setHours(0,0,0,0)),
    block("before",today.setHours(6,25,0,0)),
    block("1",today.setHours(8,5,0,0)),
    block("1-CM",today.setHours(9,25,0,0)),
    block("CM",today.setHours(9,29,0,0)),
    block("CM-2",today.setHours(9,44,0,0)),
    block("2",today.setHours(9,48,0,0)),
    block("2-lunch",today.setHours(11,8,0,0)),
    block("lunch",today.setHours(11,12,0,0)),
    block("passing",today.setHours(11,42,0,0)),
    block("CM 2022",today.setHours(11,46,0,0)),
    block("after",today.setHours(14,30,0,0)),
    block("end",today.setHours(23,59,59,0))
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
if(localStorage.lunch)
{
  lunchMode = localStorage.lunch;
}
function getSchedule(key) {
  if(key === "A")
    return scheduleA;
  if(key === "B")
    return scheduleB;
  if(key === "C")
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
    for(index = 0; true; index++){
      if (now > schedule[index].start && now < schedule[index + 1].start) {
        return index;
      }
    }
}
function getPeriodLength(i) {
  return (schedule[i + 1].start - schedule[i].start) / 60000;  // in minutes
}

function isBlackDay() {
  for (i = 0; i < blackDays.length; i++) {
    if (blackDays[i].month === today.getMonth() + 1 && blackDays[i].day === today.getDate()) {
      return true;
    }
  }
  return false;
}