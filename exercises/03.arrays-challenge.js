/////////////////////////
///// More Arrays ///////
/////////////////////////

/**
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

/**
 * @description
 * create and array with 5 names
 */

/**
 * @description
 * use a for loop to create a copy of the names array
 */

/**
 * @description
 * add a sixth name to the second index position of the names array.
 * store your results in a new array
 * /

/**
 * @description
 * use a for loop to title case each state in the array below
 *  * ie: 'alabama' becomes 'Alabama', 'new hampshire' becomes 'New Hampshire'
 *
 * save your results to a new array
 */

let states = [
  "alabama",
  "alaska",
  "arizona",
  "arkansas", 
  "california",
  "colorado",
  "connecticut",
  "delaware",
  "florida",
  "georgia",
  "hawaii",
  "idaho",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "maryland",
  "massachusetts",
  "michigan",
  "minnesota",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "nevada",
  "new hampshire",
  "new jersey",
  "new mexico",
  "new york",
  "north carolina",
  "north dakota",
  "ohio",
  "oklahoma",
  "oregon",
  "pennsylvania",
  "rhode island",
  "south carolina",
  "south dakota",
  "tennessee",
  "texas",
  "utah",
  "vermont",
  "virginia",
  "washington",
  "west virginia",
  "wisconsin",
  "wyoming"
<<<<<<< HEAD
];

let statesTitleCased = []

for (var i = 0; i < states.length; i++) {
  let titleCased = states[i][0].toUpperCase() + states[i].slice(1)
  statesTitleCased.push(titleCased)

  if (states[i].split(" ").length === 2) {
    console.log(states[i][1].toUpperCase())
  }
}

console.log(statesTitleCased)

=======
];
>>>>>>> 52b63f3104ffe3be8ca7c98c8ceb500784fdb444
