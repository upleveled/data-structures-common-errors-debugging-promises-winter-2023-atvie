// string

// single quotes by default
const name = 'John Doe';

// double quotes when necessary
const name2 = "John's Doe";

// Template string
const name3 = `John Doe`;

// multiline srting

const paragraph = 'title \n asdasd';
const paragraph2 = `title
asdasd`;

// string concatenation
const dynamicPhrase = 'hello ' + name;
// template string
const dynamicPhrase2 = `hello  ${name}`;

// number

const a = 0.1;
const b = 0.2;

const c = a + b; // NOT WHAT YOU EXPECT => 0.30000000000000004

const notANumberType = typeof NaN; // NOT WHAT YOU EXPECT => is a number!!!

const maxNumber = 9007199254740991; // Don't do operations whit numbers bigger than this

// bigint

/**
 *
 * BigInt is a primitive wrapper object used to represent and manipulate
 * primitive bigint values — which are too large to be represented by the
 * number primitive.
 *
 * BigInt values are similar to Number values in some ways, but also differ
 * in a few key matters: A BigInt value cannot be used with methods in the
 * built-in Math object and cannot be mixed with a Number value in operations;
 *
 * This is probably not going to be needed for completion of the bootcamp
 *
 * If you still have time. You can find more info here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

// we don't use this very
const bigNumber = 9007199254740991n;

// boolean

const isOpen = false; // true or false are the only option here

// undefined
let z; // This is undefined
const x = undefined; // This is undefined
// console.log(y); // this is not defined

// symbol

/**
 * Symbols were added to the lineup of primitive data types in
 * JavaScript in 2015. It was part of ES6 specification and its sole
 * purpose is to act as a unique identifier of object properties, i.e.
 * it can be used as a key in objects.
 *
 * This is not going to be needed for completion of the bootcamp
 *
 * If you still have time. You can find more info here:
 * https://levelup.gitconnected.com/everything-you-need-to-know-about-javascript-symbols-24650a163038
 * */

// null

const nullValue = null; // This is null
const typeOfNull = typeof null; // NOT WHAT YOU EXPECT This is object

// ## Non primitive data types

// OBJECTS

// array

const array1 = new Array(1, 2, 3, 4, 5);
const array2 = [1, 2, 3, 4, 5];

const number3 = array2[2];

const array4 = [...array2, { a: 'a' }]; // non destructive process

array2.push({ a: 'a' }); //  destructive process. This mutates array2

// objects

const object1 = new Object();

object1.a = 'a';

const object2 = {
  a: 'a',
};

const object3 = object1;

// object1 === object2  => false objects are compared by reference
// object1 === object3  => true

// object1.a === object2.a  => true // property a is a string and primitives are compared by value

const person = { name: 'Karl', lastName: 'Horky', job: 'master of coding' };

const personName = person.name;
const personLastName = person['lastName'];

const property = 'job';

const personProperty = person[property];

// FUNCTIONS

// piece of code that i can reuse

function multiplyBy2(number /* Parameter */) {
  // Function Body
  // everything here is going to be encapsulated inside of the function scope

  // this variable is function scoped
  const multipliedNumber = number * 2;

  return multipliedNumber;
}

// function call
const value = multiplyBy2(2 /* argument */);

// arrow function with body. Must have the keyword return for the output
const greet = (name) => {
  return `hello ${name}`;
};

// arrow function with no body. Use implicit return pattern
// it only allow to have a single expression
const greet2 = (greetName) => `hello ${greetName}`;

console.log(greet('jose'));
console.log(greet2('manuel'));
