/*unit test example*/

// object to be tested-----------
// Define a rooster
Rooster = {};

// Return a morning rooster call
Rooster.announceDawn = () => {
  return 'cock-a-doodle-doo!';
}

// Return hour as string
// Throws Error if hour is not between 0 and 23 inclusive
Rooster.timeAtDawn = (hour) => {
  if (hour < 0 || hour > 23) {
    throw new RangeError;
  } else {
    return hour.toString();
  };
}

module.exports = Rooster;

// unit test----------------------
// import assert method and Rooster object
const assert = require('assert')
const Rooster = require('../index')

// describe Rooster object to be test and nest methods to be tested
describe('Rooster', () => {
  describe('.announceDawn', () => {
    // it('description of test', () => {test})
    it('returns a rooster call', () => {
      // create variables for comparison
      const expected = 'cock-a-doodle-doo!';
      const actual = Rooster.announceDawn()
      // compare for test results
      assert.strictEqual(actual, expected);
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      const expected = '4'
      const actual = Rooster.timeAtDawn(4);
      assert.strictEqual(actual, expected);
    })
    it('throws an error if passed a number less than 0', () => {
      const hour = -1;
      // assert.throws(anonymous function that calls method, expected Error)
      assert.throws( () => {Rooster.timeAtDawn(hour);}, RangeError)
    })
    it('throws an error if passed a number greater than 23', () => {
      const hour = 24;
      assert.throws( () => {Rooster.timeAtDawn(hour);}, RangeError)
    })
  })
})

/*Complete the solution so that it returns true if the first argument(string)
 passed in ends with the 2nd argument (also a string).*/
 function solution(str, ending) {
     return str.endsWith(ending);
 }

 /*Write a function that will return the count of distinct case-insensitive alphabetic 
 characters and numeric digits that occur more than once in the input string. 
 The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
 and numeric digits.*/
 function duplicateCount(text) {
     const word = text.toLowerCase();
     let count = 0;
     const arr = [];
     for (i = 0; i < word.length; i++) {
         if (word.includes(word[i], i + 1)) {
             if (arr.includes(word[i]) === false) {
                 arr.push(word[i]);
                 count++;
             }
         }
     }
     return count;
 }

 //compare two arrays of strings and return an array of matching words
function justCoolStuff(arr1, arr2) {
    return arr1.filter(word => {
      return arr2.includes(word);
    })
  }

  // replace every letter in a string with its position in the alphabet
  function alphabetPosition(text) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const userText = text.toLowerCase();
    const strArray = userText.split('');
    const numArray = [];
      for (i = 0; i < strArray.length; i++) {
        for (j = 0; j < alphabet.length; j++) {
          if (strArray[i] === alphabet[j]) {
            numArray.push(j + 1);
          }
        }
      }
    
    
    const finalString = numArray.join(' ').toString();
    return finalString;
    
    }

    /* a function that takes a number as input and prints fizz for numbers that 
    are multiples of 3, buzz for 5, and fizzbuzz for both, otherwise prints 1 to num */

    function fizzBuzz(num) {
      if (num % 3 === 0 && num % 5 === 0) {
        console.log('Fizzbuzz');
      } else if (num % 3 === 0) {
        console.log('Fizz');
      } else if (num % 5 === 0) {
        console.log('Buzz');
      } else {
        for (let i = 1; i <= num; i++) {
          console.log(i);
        }
      }
    }

    /* You are provided with a list (or array) of integer pairs. Elements of each pair represent number
     of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
     Your task is to return number of people who are still in the bus after the last bus station (after the last
       array). */
    function busStops(arr){
      let people = 0;
      for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
          if (j === 0) {
            people += arr[i][j];
            
          } else if (j === 1) {
            people -= arr[i][j];
            
          }
        }
        j = 0
      }
      return people;
    }

    // a function that filters out non-numbers from an array and returns a new array with the remaining numbers
    function filterList(arr) {
      return arr.filter((element) => {
        if (typeof element === 'number') {
          return element;
        }
     })
        
    }

// calculate a persons age in a given year
function howOld(age, year) {
  const currentYear = 2022;
  if (year > currentYear) {
    return `You will be ${age + (year - currentYear)} in the year ${year}`;
  } else if (year < currentYear) {
      if ((currentYear - year) > age) {
        return `The year ${year} was ${(currentYear - year) - age} years before you were born`;
  } else if (currentYear - year === age) {
    return `You were born in ${year}`;
  } else {
     return `You were ${age - (currentYear - year)} in the year ${year}`;
   }
  } else if (currentYear === year) {
    return `You are ${age}`;
  }
}

/* Complete a function that takes a boolean value and returns 'Yes' string for true 
   or a 'No' string for false */
function boolToWord( bool ){
  if (bool) {
    return 'Yes'
  } else {
    return 'No'
  }
}

//sort an array in descending order (.sort((a, b) => a - b) ascending)
function sortYears(arr) {
  return arr.sort((a, b) => b - a)
}

//adds baby to an array of words
function convertToBaby(arr) {
  const baby = 'baby';
  const babyArray = [];
  for (i = 0; i < arr.length; i++) {
    babyArray.push(baby.concat(' ', arr[i]));  
  }
  return babyArray;
}

//capitalize and add exclamation point 
function shoutGreetings(arr) {
  const newArray = arr.map(element => {
    return element.toUpperCase().concat('','!');
    
  })
  return newArray;
}