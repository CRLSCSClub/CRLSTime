function block(lbl, srt, ed) {
  return { label: lbl, start: srt };
}

function myDate(m, d) {
  return { month: m, day: d };
}

const today = new Date();

/////////////// schedule types //////////////////

// Table of period labels and start times
const scheduleA = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM", today.setHours(9, 25, 0, 0)),
  block("CM", today.setHours(9, 29, 0, 0)),
  block("CM-2", today.setHours(9, 44, 0, 0)),
  block("2", today.setHours(9, 48, 0, 0)),
  block("2-LA", today.setHours(11, 8, 0, 0)),
  block("LA", today.setHours(11, 12, 0, 0)),
  block("LA-3", today.setHours(11, 42, 0, 0)),
  block("3", today.setHours(11, 46, 0, 0)),
  block("3-4", today.setHours(13, 06, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleB = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM", today.setHours(9, 25, 0, 0)),
  block("CM", today.setHours(9, 29, 0, 0)),
  block("CM-2", today.setHours(9, 44, 0, 0)),
  block("2", today.setHours(9, 48, 0, 0)),
  block("2-3", today.setHours(11, 8, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LB", today.setHours(11, 52, 0, 0)),
  block("LB", today.setHours(11, 54, 0, 0)),
  block("LB-3", today.setHours(12, 24, 0, 0)),
  block("3", today.setHours(12, 26, 0, 0)),
  block("3-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleC = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM", today.setHours(9, 25, 0, 0)),
  block("CM", today.setHours(9, 29, 0, 0)),
  block("CM-2", today.setHours(9, 44, 0, 0)),
  block("2", today.setHours(9, 48, 0, 0)),
  block("2-3", today.setHours(11, 8, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LC", today.setHours(12, 32, 0, 0)),
  block("LC", today.setHours(12, 36, 0, 0)),
  block("LC-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleFinal12 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM", today.setHours(9, 45, 0, 0)),
  block("CM", today.setHours(9, 50, 0, 0)),
  block("CM-2", today.setHours(10, 20, 0, 0)),
  block("2", today.setHours(10, 25, 0, 0)),
  block("2-L", today.setHours(12, 5, 0, 0)),
  block("Lunch", today.setHours(12, 10, 0, 0)),
  block("after", today.setHours(12, 45, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleFinal34 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("3", today.setHours(8, 5, 0, 0)),
  block("3-CM", today.setHours(9, 45, 0, 0)),
  block("CM", today.setHours(9, 50, 0, 0)),
  block("CM-4", today.setHours(10, 20, 0, 0)),
  block("4", today.setHours(10, 25, 0, 0)),
  block("4-L", today.setHours(12, 5, 0, 0)),
  block("Lunch", today.setHours(12, 10, 0, 0)),
  block("after", today.setHours(12, 45, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

// All start with lunch A
const scheduleDelay1 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(9, 32, 0, 0)),
  block("Lunch", today.setHours(11, 12, 0, 0)),
  block("Lunch-3", today.setHours(11, 42, 0, 0)),
  block("3", today.setHours(11, 46, 0, 0)),
  block("3-4", today.setHours(12, 24, 0, 0)),
  block("4", today.setHours(12, 28, 0, 0)),
  block("4-1", today.setHours(13, 6, 0, 0)),
  block("1", today.setHours(13, 10, 0, 0)),
  block("1-2", today.setHours(13, 48, 0, 0)),
  block("2", today.setHours(13, 52, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

// these next three schedules have had additional sections added
// for Curriculum night (same day as x block Sept 20 2018)
const scheduleAX = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM X", today.setHours(9, 14, 0, 0)),
  block("CM X", today.setHours(9, 18, 0, 0)),
  block("CM X-2", today.setHours(10, 16, 0, 0)),
  block("2", today.setHours(10, 20, 0, 0)),
  block("2-LA", today.setHours(11, 29, 0, 0)),
  block("LA", today.setHours(11, 33, 0, 0)),
  block("LA-3", today.setHours(12, 3, 0, 0)),
  block("3", today.setHours(12, 7, 0, 0)),
  block("3-4", today.setHours(13, 22, 0, 0)),
  block("4", today.setHours(13, 26, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("info", today.setHours(17, 00, 0, 0)), // Curriculum night
  block("info-1", today.setHours(18, 30, 0, 0)),
  block("1", today.setHours(18, 35, 0, 0)),
  block("1-2", today.setHours(18, 50, 0, 0)),
  block("2", today.setHours(18, 55, 0, 0)),
  block("2-3", today.setHours(19, 10, 0, 0)),
  block("3", today.setHours(19, 15, 0, 0)),
  block("3-4", today.setHours(19, 30, 0, 0)),
  block("4", today.setHours(19, 35, 0, 0)),
  block("after", today.setHours(19, 50, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleBX = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM X", today.setHours(9, 14, 0, 0)),
  block("CM X", today.setHours(9, 18, 0, 0)),
  block("CM X-2", today.setHours(10, 16, 0, 0)),
  block("2", today.setHours(10, 20, 0, 0)),
  block("2-3", today.setHours(11, 29, 0, 0)),
  block("3", today.setHours(11, 33, 0, 0)),
  block("3-LB", today.setHours(12, 12, 0, 0)),
  block("LB", today.setHours(12, 14, 0, 0)),
  block("LB-3", today.setHours(12, 44, 0, 0)),
  block("3", today.setHours(12, 46, 0, 0)),
  block("3-4", today.setHours(13, 22, 0, 0)),
  block("4", today.setHours(13, 26, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("info", today.setHours(17, 00, 0, 0)), // Curriculum night
  block("info-1", today.setHours(18, 30, 0, 0)),
  block("1", today.setHours(18, 35, 0, 0)),
  block("1-2", today.setHours(18, 50, 0, 0)),
  block("2", today.setHours(18, 55, 0, 0)),
  block("2-3", today.setHours(19, 10, 0, 0)),
  block("3", today.setHours(19, 15, 0, 0)),
  block("3-4", today.setHours(19, 30, 0, 0)),
  block("4", today.setHours(19, 35, 0, 0)),
  block("after", today.setHours(19, 50, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleCX = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM X", today.setHours(9, 14, 0, 0)),
  block("CM X", today.setHours(9, 18, 0, 0)),
  block("CM X-2", today.setHours(10, 16, 0, 0)),
  block("2", today.setHours(10, 20, 0, 0)),
  block("2-3", today.setHours(11, 29, 0, 0)),
  block("3", today.setHours(11, 33, 0, 0)),
  block("3-LC", today.setHours(12, 50, 0, 0)),
  block("LC", today.setHours(12, 52, 0, 0)),
  block("LC-4", today.setHours(13, 22, 0, 0)),
  block("4", today.setHours(13, 26, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("info", today.setHours(17, 00, 0, 0)), // Curriculum night
  block("info-1", today.setHours(18, 30, 0, 0)),
  block("1", today.setHours(18, 35, 0, 0)),
  block("1-2", today.setHours(18, 50, 0, 0)),
  block("2", today.setHours(18, 55, 0, 0)),
  block("2-3", today.setHours(19, 10, 0, 0)),
  block("3", today.setHours(19, 15, 0, 0)),
  block("3-4", today.setHours(19, 30, 0, 0)),
  block("4", today.setHours(19, 35, 0, 0)),
  block("after", today.setHours(19, 50, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleAX2 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM X", today.setHours(9, 10, 0, 0)),
  block("CM X", today.setHours(9, 14, 0, 0)),
  block("CM X-2", today.setHours(10, 20, 0, 0)),
  block("2", today.setHours(10, 24, 0, 0)),
  block("2-LA", today.setHours(11, 29, 0, 0)),
  block("LA", today.setHours(11, 33, 0, 0)),
  block("LA-3", today.setHours(12, 3, 0, 0)),
  block("3", today.setHours(12, 7, 0, 0)),
  block("3-4", today.setHours(13, 17, 0, 0)),
  block("4", today.setHours(13, 22, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleBX2 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM X", today.setHours(9, 10, 0, 0)),
  block("CM X", today.setHours(9, 14, 0, 0)),
  block("CM X-2", today.setHours(10, 20, 0, 0)),
  block("2", today.setHours(10, 24, 0, 0)),
  block("2-3", today.setHours(11, 29, 0, 0)),
  block("3", today.setHours(11, 33, 0, 0)),
  block("3-LB", today.setHours(12, 6, 0, 0)),
  block("LB", today.setHours(12, 10, 0, 0)),
  block("LB-3", today.setHours(12, 40, 0, 0)),
  block("3", today.setHours(12, 44, 0, 0)),
  block("3-4", today.setHours(13, 17, 0, 0)),
  block("4", today.setHours(13, 22, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleCX2 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM X", today.setHours(9, 10, 0, 0)),
  block("CM X", today.setHours(9, 14, 0, 0)),
  block("CM X-2", today.setHours(10, 20, 0, 0)),
  block("2", today.setHours(10, 24, 0, 0)),
  block("2-3", today.setHours(11, 29, 0, 0)),
  block("3", today.setHours(11, 33, 0, 0)),
  block("3-LC", today.setHours(12, 44, 0, 0)),
  block("LC", today.setHours(12, 48, 0, 0)),
  block("LC-4", today.setHours(13, 18, 0, 0)),
  block("4", today.setHours(13, 22, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleAMCAS12 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-LA", today.setHours(11, 8, 0, 0)),
  block("LA", today.setHours(11, 12, 0, 0)),
  block("LA-1", today.setHours(11, 42, 0, 0)),
  block("1", today.setHours(11, 46, 0, 0)),
  block("1-2", today.setHours(13, 06, 0, 0)),
  block("2", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleBMCAS12 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-1", today.setHours(11, 8, 0, 0)),
  block("1", today.setHours(11, 12, 0, 0)),
  block("1-LB", today.setHours(11, 52, 0, 0)),
  block("LB", today.setHours(11, 54, 0, 0)),
  block("LB-1", today.setHours(12, 24, 0, 0)),
  block("1", today.setHours(12, 26, 0, 0)),
  block("1-2", today.setHours(13, 6, 0, 0)),
  block("2", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleCMCAS12 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-1", today.setHours(11, 8, 0, 0)),
  block("1", today.setHours(11, 12, 0, 0)),
  block("1-LC", today.setHours(12, 32, 0, 0)),
  block("LC", today.setHours(12, 36, 0, 0)),
  block("LC-2", today.setHours(13, 6, 0, 0)),
  block("2", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleAMCAS34 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-LA", today.setHours(11, 8, 0, 0)),
  block("LA", today.setHours(11, 12, 0, 0)),
  block("LA-3", today.setHours(11, 42, 0, 0)),
  block("3", today.setHours(11, 46, 0, 0)),
  block("3-4", today.setHours(13, 06, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleBMCAS34 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-3", today.setHours(11, 8, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LB", today.setHours(11, 52, 0, 0)),
  block("LB", today.setHours(11, 54, 0, 0)),
  block("LB-3", today.setHours(12, 24, 0, 0)),
  block("3", today.setHours(12, 26, 0, 0)),
  block("3-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleCMCAS34 = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-3", today.setHours(11, 8, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LC", today.setHours(12, 32, 0, 0)),
  block("LC", today.setHours(12, 36, 0, 0)),
  block("LC-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleAMCASShort = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-1", today.setHours(10, 30, 0, 0)),
  block("1", today.setHours(10, 34, 0, 0)),
  block("1-LA", today.setHours(11, 16, 0, 0)),
  block("LA", today.setHours(11, 20, 0, 0)),
  block("LA-3", today.setHours(11, 50, 0, 0)),
  block("3", today.setHours(11, 54, 0, 0)),
  block("3-4", today.setHours(13, 00, 0, 0)),
  block("4", today.setHours(13, 04, 0, 0)),
  block("4-2", today.setHours(13, 45, 0, 0)),
  block("2", today.setHours(13, 49, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleBMCASShort = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-1", today.setHours(10, 30, 0, 0)),
  block("1", today.setHours(10, 34, 0, 0)),
  block("1-3", today.setHours(11, 16, 0, 0)),
  block("3", today.setHours(11, 20, 0, 0)),
  block("3-LB", today.setHours(11, 53, 0, 0)),
  block("LB", today.setHours(11, 55, 0, 0)),
  block("LB-3", today.setHours(12, 25, 0, 0)),
  block("3", today.setHours(12, 27, 0, 0)),
  block("3-4", today.setHours(13, 00, 0, 0)),
  block("4", today.setHours(13, 04, 0, 0)),
  block("4-2", today.setHours(13, 45, 0, 0)),
  block("2", today.setHours(13, 49, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleCMCASShort = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("MCAS", today.setHours(8, 5, 0, 0)),
  block("MCAS-1", today.setHours(10, 30, 0, 0)),
  block("1", today.setHours(10, 34, 0, 0)),
  block("1-3", today.setHours(11, 16, 0, 0)),
  block("3", today.setHours(11, 20, 0, 0)),
  block("3-LC", today.setHours(12, 26, 0, 0)),
  block("LC", today.setHours(12, 30, 0, 0)),
  block("3-4", today.setHours(13, 00, 0, 0)),
  block("4", today.setHours(13, 04, 0, 0)),
  block("4-2", today.setHours(13, 45, 0, 0)),
  block("2", today.setHours(13, 49, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleEarlyRelease = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM", today.setHours(9, 25, 0, 0)),
  block("CM", today.setHours(9, 29, 0, 0)),
  block("CM-2", today.setHours(9, 44, 0, 0)),
  block("2", today.setHours(9, 48, 0, 0)),
  block("after", today.setHours(11, 8, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleALateStart = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(9, 32, 0, 0)),
  block("LA", today.setHours(11, 12, 0, 0)),
  block("LA-3", today.setHours(11, 42, 0, 0)),
  block("3", today.setHours(11, 46, 0, 0)),
  block("3-4", today.setHours(13, 06, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleBLateStart = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(9, 32, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LB", today.setHours(11, 52, 0, 0)),
  block("LB", today.setHours(11, 54, 0, 0)),
  block("LB-3", today.setHours(12, 24, 0, 0)),
  block("3", today.setHours(12, 26, 0, 0)),
  block("3-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleCLateStart = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(9, 32, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LC", today.setHours(12, 32, 0, 0)),
  block("LC", today.setHours(12, 36, 0, 0)),
  block("LC-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleALateStartWithConferences = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("8:10", today.setHours(8, 10, 0, 0)),
  block("8:20", today.setHours(8, 20, 0, 0)),
  block("8:30", today.setHours(8, 30, 0, 0)),
  block("8:40", today.setHours(8, 40, 0, 0)),
  block("8:50", today.setHours(8, 50, 0, 0)),
  block("9:00", today.setHours(9, 00, 0, 0)),
  block("9:10", today.setHours(9, 10, 0, 0)),
  block("9:20", today.setHours(9, 20, 0, 0)),
  block("9:30", today.setHours(9, 30, 0, 0)),
  block("9:40", today.setHours(9, 40, 0, 0)),
  block("9:50", today.setHours(9, 50, 0, 0)),
  block("10:00", today.setHours(10, 00, 0, 0)),
  block("10:10", today.setHours(10, 10, 0, 0)),
  block("10:20", today.setHours(10, 20, 0, 0)),
  block("10:30", today.setHours(10, 30, 0, 0)),
  block("10:40", today.setHours(10, 40, 0, 0)),
  block("10:50", today.setHours(10, 50, 0, 0)),
  block("before", today.setHours(11, 00, 0, 0)),
  block("LA", today.setHours(11, 12, 0, 0)),
  block("LA-3", today.setHours(11, 42, 0, 0)),
  block("3", today.setHours(11, 46, 0, 0)),
  block("3-4", today.setHours(13, 06, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleBLateStartWithConferences = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("8:10", today.setHours(8, 10, 0, 0)),
  block("8:20", today.setHours(8, 20, 0, 0)),
  block("8:30", today.setHours(8, 30, 0, 0)),
  block("8:40", today.setHours(8, 40, 0, 0)),
  block("8:50", today.setHours(8, 50, 0, 0)),
  block("9:00", today.setHours(9, 00, 0, 0)),
  block("9:10", today.setHours(9, 10, 0, 0)),
  block("9:20", today.setHours(9, 20, 0, 0)),
  block("9:30", today.setHours(9, 30, 0, 0)),
  block("9:40", today.setHours(9, 40, 0, 0)),
  block("9:50", today.setHours(9, 50, 0, 0)),
  block("10:00", today.setHours(10, 00, 0, 0)),
  block("10:10", today.setHours(10, 10, 0, 0)),
  block("10:20", today.setHours(10, 20, 0, 0)),
  block("10:30", today.setHours(10, 30, 0, 0)),
  block("10:40", today.setHours(10, 40, 0, 0)),
  block("10:50", today.setHours(10, 50, 0, 0)),
  block("before", today.setHours(11, 00, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LB", today.setHours(11, 52, 0, 0)),
  block("LB", today.setHours(11, 54, 0, 0)),
  block("LB-3", today.setHours(12, 24, 0, 0)),
  block("3", today.setHours(12, 26, 0, 0)),
  block("3-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleCLateStartWithConferences = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("8:10", today.setHours(8, 10, 0, 0)),
  block("8:20", today.setHours(8, 20, 0, 0)),
  block("8:30", today.setHours(8, 30, 0, 0)),
  block("8:40", today.setHours(8, 40, 0, 0)),
  block("8:50", today.setHours(8, 50, 0, 0)),
  block("9:00", today.setHours(9, 00, 0, 0)),
  block("9:10", today.setHours(9, 10, 0, 0)),
  block("9:20", today.setHours(9, 20, 0, 0)),
  block("9:30", today.setHours(9, 30, 0, 0)),
  block("9:40", today.setHours(9, 40, 0, 0)),
  block("9:50", today.setHours(9, 50, 0, 0)),
  block("10:00", today.setHours(10, 00, 0, 0)),
  block("10:10", today.setHours(10, 10, 0, 0)),
  block("10:20", today.setHours(10, 20, 0, 0)),
  block("10:30", today.setHours(10, 30, 0, 0)),
  block("10:40", today.setHours(10, 40, 0, 0)),
  block("10:50", today.setHours(10, 50, 0, 0)),
  block("before", today.setHours(11, 00, 0, 0)),
  block("3", today.setHours(11, 12, 0, 0)),
  block("3-LC", today.setHours(12, 32, 0, 0)),
  block("LC", today.setHours(12, 36, 0, 0)),
  block("LC-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleLastDay = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-2", today.setHours(9, 2, 0, 0)),
  block("2", today.setHours(9, 6, 0, 0)),
  block("2-3", today.setHours(10, 4, 0, 0)),
  block("3", today.setHours(10, 8, 0, 0)),
  block("3-4", today.setHours(11, 06, 0, 0)),
  block("4", today.setHours(11, 10, 0, 0)),
  block("after", today.setHours(12, 08, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleOldFirstDay = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("hello", today.setHours(8, 5, 0, 0)),
  block("1", today.setHours(11, 46, 0, 0)),
  block("1-2", today.setHours(12, 24, 0, 0)),
  block("2", today.setHours(12, 28, 0, 0)),
  block("2-3", today.setHours(13, 6, 0, 0)),
  block("3", today.setHours(13, 10, 0, 0)),
  block("3-4", today.setHours(13, 48, 0, 0)),
  block("4", today.setHours(13, 52, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleFirstDay = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("meetings", today.setHours(8, 5, 0, 0)),
  block("lunch", today.setHours(11, 0, 0, 0)),
  block("lunch-3", today.setHours(11, 42, 0, 0)),
  block("3", today.setHours(11, 46, 0, 0)),
  block("3-4", today.setHours(13, 6, 0, 0)),
  block("4", today.setHours(13, 10, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const scheduleSecondDay = [
  block("morning", today.setHours(0, 0, 0, 0)),
  block("before", today.setHours(6, 25, 0, 0)),
  block("1", today.setHours(8, 5, 0, 0)),
  block("1-CM", today.setHours(9, 25, 0, 0)),
  block("CM", today.setHours(9, 29, 0, 0)),
  block("CM-2", today.setHours(9, 44, 0, 0)),
  block("2", today.setHours(9, 48, 0, 0)),
  block("2-lunch", today.setHours(11, 8, 0, 0)),
  block("lunch", today.setHours(11, 12, 0, 0)),
  block("passing", today.setHours(11, 42, 0, 0)),
  block("CM 2022", today.setHours(11, 46, 0, 0)),
  block("after", today.setHours(14, 30, 0, 0)),
  block("end", today.setHours(23, 59, 59, 0))
];

const schoolHolidays = [
  myDate(12, 24),
  myDate(12, 25),
  myDate(12, 26),
  myDate(12, 27),
  myDate(12, 28),
  myDate(12, 31),
  myDate(1, 1)
];

const blackDays = [
  myDate(11, 28),
  myDate(11, 30),
  myDate(12, 4),
  myDate(12, 6),
  myDate(12, 10),
  myDate(12, 12),
  myDate(12, 14),
  myDate(12, 18),
  myDate(12, 20),
  myDate(1, 2),
  myDate(1, 4),
  myDate(1, 8),
  myDate(1, 10),
  myDate(1, 14),
  myDate(1, 16),
  myDate(1, 17)
];

// DisplayDate
const todayDate = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();


// next three lines for special schedules, comment out for normal days
// issue: need to automate this
   scheduleA = scheduleAX2;
   scheduleB = scheduleBX2;
   scheduleC = scheduleCX2;

let lunchMode = localStorage.lunch ? localStorage.lunch : "A";

schedule = getSchedule(lunchMode);

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
}

function getSchedule(key) {
  if (key === "A")
    return scheduleA;
  if (key === "B")
    return scheduleB;
  if (key === "C")
    return scheduleC;
}

function isHoliday() {
  return schoolHolidays.some(day => day.month === today.getMonth() + 1 && day.day === today.getDate());
}

function isBlackDay() {
  return blackDays.some(day => day.month === today.getMonth() + 1 && day.day === today.getDate());
}

function isWeekend() {
  return today.getDay() === 0 || today.getDay() === 6;
}

function getPeriodIndex() {
  const now = ServerDate;
  return schedule.findIndex((element, index, array) => now > element.start && now < array[index + 1].start);
}

function getPeriodLength(i) {
  return (schedule[i + 1].start - schedule[i].start) / 60000; // in minutes
}
