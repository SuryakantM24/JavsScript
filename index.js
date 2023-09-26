

//Variables in Javascript

console.log('JS Fundamentals!!');


//variables in JS


//let 

let age=10;
console.log(age);


age="Surya";

console.log(age);


// Varibes do not have type , its dyamicaaly typed


//const let var




//naming varibles
//camelCase

let firstChildAge=40;
console.log(firstChildAge);


/* Data Types
    1. Object
    2. Primitive Datatypes
*/

/* *********************************** *
***        Primitive DataTypes       ***
/* *********************************** */

// Number (64 bit)

let num = 10;
console.log(typeof num);

// String
const firstName = "falak's book";
const lastname = 'Chandni';
const nickName = `Tom`;

console.log(typeof firstName);
console.log(typeof lastname);
console.log(typeof nickName);

// Boolean
let bool = false;
console.log(typeof bool);

// Undefined
let a;
console.log(typeof a);
console.log(a);

// Null
let b = null;
console.log(b);
console.log(typeof b);

// Symbol(ES6/2015)
//Discuss later


// BigInt(ES2020)
let num1 = 10n;
console.log(typeof num1);




// Interesting Things

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE*10);

let num3 = Infinity;

console.log(12/0);
console.log(188/Infinity);

console.log(Infinity/Infinity);


/** Operators in JavaScript */
/* 1. Arithemetic 
      (+, -, *, /, %, **, ++, --) 
*/

let x = 10;
x++; //x=x+1
x--;
x--;

// these increment operators work on strings also !!!

console.log(x);

/* 2. Assignment 
      (=, +=, -=, *=, /=, %=, **=) 
*/

let e = 2;

let f = 5;
f += 2; // b = b+2

console.log(f);


/* 3. Comparison 
      (<, > ,<=, >=, ==, !=, ===, !==)
*/ 

console.log( 5 == '5');  // loose equality
console.log( 5 === '5'); // strict equality ,check equality of data type also

//strict equality is mostly used to avoid bugs
console.log( 5 !== '5'); 

/* 4. Logical 
      (&&, ||, !)
*/

console.log(5 && 1);
console.log(0 || 7 || '' || null);
console.log(!1);

console.log(undefined==null);



/* 5. Bitwise 
      (>>, <<, &, |, ^, ~)
*/


/** Type Coercion */

console.log(5 + 5);

let n = '5' + 5;
console.log(typeof n);

let fullName = 'falak' + ' ' + 'Chandni';
console.log(fullName);

let sub = '55' - 10;
console.log(sub);


console.log('4' * 2);

console.log('4'/2);

let c = 55 - '10';
console.log(c);



