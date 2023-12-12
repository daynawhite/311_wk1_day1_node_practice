// import moment here; use this package in each function
const moment = require('moment')

const today = () => {
  // write code for dates.today
// 'Return today\'s day - ex. Monday'
const dates = new Date()
// console.log(dates)
const day = dates.getDay()-1
// console.log(d)
const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];
  console.log(weekdays[day])
  return weekdays[day]
}

const calendar = () => {
  // write code for dates.calendar
//   // 'Return today\'s date in the format: May 29, 2019'
// }
return moment().format('ll')
}
console.log(calendar())

const currentTime = () => {
  // write code for dates.currentTime
//   // 'Return the current time in the format: 03:21:51 PM'
// }
return moment().format('hh:mm:ss A')
}
console.log(currentTime())

module.exports = {
  today,
  calendar,
  currentTime
}