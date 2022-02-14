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