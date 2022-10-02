// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make variable called name and set it as Dane which is a string 
// We make a conditional that says if the name is equal value and equal type to the string "Mary" then the console log will display "Hi, Mary"
// if it's anything other than the name Mary then it will display "how do you do?" in the console log
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We are creating a variable called secret but assigning no value
// We are then creating a variable called code and giving it the numerical value of 123
// We make a conditional that states if code is equal value & type with number 123 then, 
// we are giving the value of secret the string of "super", and changing the value of code to the code value multiplied by 2
// We then check if the code value is now greater than 250, if it is greater then the secret value changes to the string "duper"
// Finally we console log the secret value, which in this case is "super" becuase it met the first conditionals parameters.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We created a variable called student and set the value to true, it's a boolean
// We created a variable called age and set it with a number value of 34
// We created a variable called zip and set it with a number value of 55407
// Next we created a conditional if both isStudent is true and the zip value is greater than 80,000 then the console log will display "you're a student on the west coast"
// We then said if the isStudent is false OR the age value is less then 30 then the console log will display "what are your hobbies"
// We then said if the isStudent is true then it will display "Welcome to prime" in the console log
// We finally said that if none of the prior conditions are met then display in the console log "how about the weather"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
FIX - colorOne and colorTwo's values have been mixed up and should be switched
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

FIX - colorOne and colorTwo should both be purple now, colorOne && colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
FIX - we should start with two variables, time is set as a constant. should be "let time = 4;"
let temp = 40;
const time = 4;
FIX - Temp AND Time, it's written as temp OR time, if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
FIX - we start with variables, minAge is set as a constant. should say let minAge = 21;
let age = 21;
const minAge = 21;

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

