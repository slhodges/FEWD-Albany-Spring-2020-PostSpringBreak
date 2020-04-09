///////////////////////////////////////////////
////// Equality Operations and Booleans ///////
///////////////////////////////////////////////

// Create a function for each of the following statements
//  for equality

/**
 * x is greater than y
 * @returns {Boolean}
 *
    ie: 
    const xGreaterThanY = function (x, y) {
      if (x > y) {  // if this is a true condition
        return x;   // return x
      } else {
        return "x is not greater than y";
      }
    };
};

*/

const xGreaterThanY = function (x, y) {
  if (x > y) {  // if this is a true condition
    return x;   // return x
  } else {
    return "x is not greater than y";
  }
}

  console.log(xGreaterThanY(96, 100))

/**
 * x divided by y is less than or equal to y divided by x
 * @returns {Boolean}
 */

 const xDividedByY = function (x,y) {
   return x / y <= y / x
 }

 console.log(xDividedByY(18,9))

/**
 * not zero is not equal to zero divided by zero
 * @returns {Boolean}
 */

 const zero = function() {
   return !0 !== 0 / 0
 }
 console.log(zero())

/**
 * Create a variable named fullName.
 * Set the value of fullName to your full name.
 * Check if x minus y is equal to the length of "length of fullName"
 * @returns {Boolean}
 */

 var fullName="Sarah Lynn Hodges"
 
 
 /**
 * Create a variable named fullName.
 * Set the value of fullName to your full name.
 * chceck if x is less than or equal than fullName.length
 * @returns {Boolean}
 */

 const xFullName = function (x) {
   return x <= fullName.length
 }

 console.log(xFullName(18))

/**
 * thirteen plus six is not equal to twentythree minus 5
 * @returns {Boolean}
 */

/**
 * seventyfive or seventyfive and twentyfour times three
 * @returns {Number}
 */

/**
 * "my first name" is not equal to "My first name"
 * @returns {Boolean}
 */

/**
 * four plus three and six times eight
 * @returns {Number}
 */

/**
 * "four" is equal to 4
 * @returns {Boolean}
 */