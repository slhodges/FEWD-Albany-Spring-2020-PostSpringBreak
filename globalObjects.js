let today = new Date();

console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())

let hours = today.getHours()
let minutes = today.getMinutes()
let seconds = today.getSeconds()

let am = "AM"
    
console.log(hours + ":" + minutes + ":" + seconds)

if (hours > 12) {
    hours = (hours-12)
    am = "PM"
}
 console.log(hours + ":" + minutes + " " + am)

 if (hours < 10) {
     hours = "0" + hours
 }

//  if (minutes < 10) {
//     minutes = "0" + minutes
// }

minutes < 10 ? minutes = "0" + minutes : minutes

// if (seconds < 10) {
//     seconds = "0" + seconds
// }

seconds < 10 ? seconds = "0" + seconds : seconds

time = hours + ":" + minutes + ":" + seconds + " " + am

console.log(time)

console.log(Math.round(3.8))