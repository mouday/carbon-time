const moment = require('moment')
const { extendCarbon } = require('../carbon-time.js')

// 给moment添加扩展功能
extendCarbon(moment);


console.log(moment().toDateTimeString());
// 2022-07-13 13:47:55

console.log(moment().toDateString());
// 2022-07-13

console.log(moment().toTimeString());
// 13:47:55
