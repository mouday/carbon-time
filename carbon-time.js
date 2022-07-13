/**
 * 给moment.js添加类似Carbon.php的常见日期格式化功能
 * 
 */

const DATETIME_FORMAT='YYYY-MM-DD HH:mm:ss';
const DATE_FORMAT='YYYY-MM-DD';
const TIME_FORMAT='HH:mm:ss';

const carbonFunctions = {
    toDateTimeString(){
        return this.format(DATETIME_FORMAT)
    },
    toDateString(){
        return this.format(DATE_FORMAT)
    },
    toTimeString(){
        return this.format(TIME_FORMAT)
    }
}

function extendCarbon(obj){
    for(let functionName in carbonFunctions){
        obj.prototype[functionName] = carbonFunctions[functionName];
    }
}

module.exports = {
    extendCarbon,
    DATETIME_FORMAT,
    DATE_FORMAT,
    TIME_FORMAT
}