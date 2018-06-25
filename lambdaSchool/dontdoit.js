// To see the color annotations you'll need VSCode and the
// Better Comments extension which is completely customizable

//* I was planning on attending but
//* The income agreement turned me off
//* Applied, did the algorithms
//* Looked at reviews
//* Decided against it
//! I wouldn't do it but YMMV
//? These were really damn easy. The last one was a bear
//? Because I was overthinking it.
//? YMMV

/*
Work through the problems in this file.  As you work through each problem periodically run: npm test
Your function name and the string must match the instructions exactly otherwise the tests will fail.
After writing your function uncomment the matching function reference at the bottom of the file.
*/

// 1. Write a function called helloWorld that returns the string 'Hello World!'.

function helloWorld() {
  return 'Hello World!';
}

/*
2. Write a function called lambdaSchool that has a single parameter called num.
     num will be a positive integer.
     If num is divisible by 3 return the string 'Lambda'
     If num is divisible by 5 return the string 'School'
     If num is divisible by 3 AND 5 return the string 'Lambda School' (notice the space)
     If num is NOT divisible by 3 or 5 then return num.

     Example:
             lambdaSchool(15); // returns 'Lambda School'
             lambdaSchool(8); // returns 8
*/

function lambdaSchool(num) {
  if (num % 15 === 0) {
    return 'Lambda School';
  }
  if (num % 3 === 0) {
    return 'Lambda';
  }
  if (num % 5 === 0) {
    return 'School';
  }
  return num;
}

/*
3. Write a function called longestString that has a single parameter called strs.
     strs will be an array of strings.
     Return the longest string that is in strs.
     If there is a tie for the longest string then return the one that occurs first.

     Example:
             longestString(['hi', 'hello', 'ni hao', 'guten tag']); // returns 'guten tag'
             longestString(['JavaScript', 'HTML', 'CSS']); // returns 'JavaScript'
*/

function longestString(strs) {
  // is x string length greater than y string length? If so
  // return x
  // if not return y
  // add an empty string as an accumulator
  // as a callback to the reduce function
  const longest = strs.reduce((x, y) => x.length >= y.length ? x : y, '' );
  return longest;
}

/*
4. Write a function called computeUserAverageAge that has a single parameter called users
     users is an array of user objects.
     Each user object has a property called age that is a number.
     Compute the average age of all user objects in the users array.
     Round off the decimals if needed and return the number.

     Example:
             const users = [{
               name: 'Brendan Eich',
               age: 56,
             }, {
               name: 'Linus Torvalds',
               age: 48,
             }, {
               name: 'Margaret Hamilton',
               age: 81,
             }];
             computeUserAverageAge(users); // returns 62 (This number is rounded up from 61.6666)
*/

function computeUserAverageAge(users) {
  let average = 0;
  for (let i = 0; i < users.length; i++) {
    average += users[i].age;
  }
  return Math.round(average / users.length)
}

module.exports = {
 helloWorld,
 lambdaSchool,
 longestString,
 computeUserAverageAge
};
