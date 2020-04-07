//

// for (var i = 0 ; i < 10; i ++) {
//     if(i % 3 === 0) {
//         console.log (i + ": is divisible by three evenly")
//     }
// }

// FizzBuzz //
// for each number from 1 through 100
// if the number is divisible by 3 console.log Fizz
// if the number is divisible by 5 console.log Buzz
// if the number is divisible by both console.log FizzBuzz

// for (var i = 0 ; i < 100; i ++) {
//     if(i % 15 === 0) {
//         console.log (i + " FizzBuzz")
//     }
//     else if(i % 5 === 0) {
//         console.log (i + " Buzz")
//     }
//     else if (i % 3 === 0) {
//         console.log (i + " Fizz")
//     }
// }

for (var i = 0 ; i < 100; i ++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log (i + " FizzBuzz")
    }
    else if(i % 5 === 0) {
        console.log (i + " Buzz")
    }
    else if (i % 3 === 0) {
        console.log (i + " Fizz")
    }
}