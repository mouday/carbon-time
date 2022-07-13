const dayjs = require('dayjs')
const { extendCarbon } = require('../carbon-time.js')

// 给moment添加扩展功能
extendCarbon(dayjs);

console.log(dayjs().toDateTimeString());
// 2022-07-13 13:47:55

console.log(dayjs().toDateString());
// 2022-07-13

console.log(dayjs().toTimeString());
// 13:47:55
