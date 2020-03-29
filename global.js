
// Welcome! Here's an example of a console logged response
console.log(4 + 5)

/***********************/
/* Part 1: Expressions */
/***********************/

//1.) Log an expression that evaluates to the sum of two integers

let answer1 = 3 + 4;
console.log("answer 1:", answer1);

// 2.) log an expression that evaluates to the difference of two integers
let answer2 = 8 - 1;
console.log('answer 2:', answer2);

// 3.) Log an expression that concatenates the two strings "I'm writing" and "my first JavaScript code"
let answer3 = "I'm writing " + "my first JavaScript code";
console.log('answer 3:', answer3);

// 4.) Log an expression that evaluates to true or false using two numbers that are greater or less than eachother
let answer4 = 5 > 3;
console.log('answer 4:', answer4);

// 5.) Log an expression that uses modulo, with a result of 4
let answer5 = 104%10;
console.log('answer 5:', answer5);

/**********************/
/* Part 2: Statements */
/**********************/

// 6.) Assign a variable and console log the declaration
let x = 2;
console.log('answer 6:', x);

// 7.) Console log a variable assigned to the sum of two numbers
let a = 3;
let y = 5;
console.log('answer 7:', a + y);

// 8.) Uncomment this if else statement and add a logical expression as the condition
if (a < y) {
    console.log('It was!')
} else {
    console.log('It was not../')
}

// 9.) Add parenthesis to the following statement, the result should be 1
let answer = (3 * 3 + 1) / ((8 + 12) / 2);
console.log(answer == 1); // This should log true