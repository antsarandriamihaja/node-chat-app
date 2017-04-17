const moment = require('moment');

var createdAt = 6089705;
var date = moment(createdAt);
console.log(date.format('dddd MMM Do, YYYY h:mm a'));

//get milliseconds since Jan 1st 1970 (similar to new Date().getTime())
var someTimestamp = moment().valueOf();
console.log(someTimestamp);