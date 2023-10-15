
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



 /** Type Conversion */

/*  *** Convert to String ***  */
// String();

console.log(String(100));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

// toString();

console.log((123).toString());
// console.log(null.toString());

/** Convert to Number */
// Number();

console.log('***NUMBER***');

console.log(Number('25'));
console.log(Number('Value'));
console.log(Number(false));

// Unary + Operator --- works on Variables

let l = '123falak';
console.log(+l);

// parseFloat();
console.log(parseFloat('123.45f'));

// parseInt();
console.log(parseInt('123.45f'));

/** Convert to Boolean */
// Boolean();

console.log(Boolean(undefined));

console.log(Boolean(undefined));



const arr=['sury','mudke','hi','gourav']


for(let i in arr){
    console.log(arr[i]);
}


console.log(arr.push('dev'));



const aprilBatch = ['Tina', 'Madhur'];
const mayBatch = ['Ritik', 'Deepak', 'Shalini'];
const juneBatch = ['Saba', 'Shivani'];
const julyBatch = [];

// function addStudent(batch, student) {
//   batch.push(student);
//   console.log(batch);
// }
// addStudent(aprilBatch, 'Ritu');
// addStudent(mayBatch, 'Sunny');

//Rest ...

function addStudents(batch, ...students) {
  for (let i of students) {
    batch.push(i);
  }
  console.log(batch);
}

addStudents(
  aprilBatch,
  'Sunny',
  'Ritu',
  'Sheena'
);

// Spread ...

const newBatch = [...mayBatch];
// const newBatch = ['Ritik', 'Deepak', 'Shalini']
console.log(newBatch);

mayBatch.push('newStudent');
console.log(mayBatch);
console.log(newBatch);



const studentMarks = {
    John: [85, 90, 92, 88, 87],
    Jane: [92, 95, 89, 91, 94],
    David: [78, 85, 90, 92, 84],
    Emily: [90, 88, 92, 87, 91],
    Michael: [86, 92, 90, 89, 94]
    };
    function findClassTopper(studentMarks){
        //Implement your function here
        
        let name="";
        let maxAvg=Number.MIN_VALUE;
        
        for(let [key,value] of Object.entries(studentMarks)){
            let tempName=key;
            let temparr=value;
            let tempsum=0;
            for(let i of temparr){
                tempsum+=i;
                  
            }
            if(tempsum>maxAvg){
                maxAvg=tempsum;
                name=tempName;
            }
            
        }
        return name;
    }

    console.log(findClassTopper(studentMarks));    



    //CLOSURES


    let ab = 'Global';

function outerPrint() {
  let b = 'OuterPrint';

  return function innerPrint() {
    let c = 'innerPrint';
    return `${a} -> ${ab} -> ${c}`;
  };
}
const show = outerPrint();
console.log(show);
const printInner = show();
console.log(printInner);


{
function print(){
    console.log(this);
}

print();
}




console.log("=================================");


console.log("INHERITANCE IN CONSTRUCTOR FUNCTION")

function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicle.prototype.getVehDetails = function () {
  console.log(
    `Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
  );

function Car(color, brand, seats) {
  Vehicle.call(this, 'car', 'Blue', 4);
  this.brand = brand;
  this.seats = seats;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.getDetails = function () {
  console.log(`
      The ${this.color} ${this.name} is of ${this.brand} company.
      It has seating for ${this.seats} people`);
};

const car1 = new Car('Black', 'Audi', 5);
car1.getDetails();
console.log(car1);
console.log(car1.__proto__);
car1.getVehDetails();
