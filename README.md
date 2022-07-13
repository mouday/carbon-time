# carbon-time.js

给moment.js添加类似Carbon.php的常见日期格式化功能

目前支持moment和dayjs（有format方法）

- npm: https://www.npmjs.com/package/carbon-time
- github: https://github.com/mouday/carbon-time

安装

```bash
npm i carbon-time
```

使用示例

```js
const moment = require('moment')
const { extendCarbon } = require('./carbon-time.js')

// 给moment添加扩展功能
extendCarbon(moment);


console.log(moment().toDateTimeString());
// 2022-07-13 13:47:55

console.log(moment().toDateString());
// 2022-07-13

console.log(moment().toTimeString());
// 13:47:55
```
