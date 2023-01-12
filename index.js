// commonJS ==> it was not fully adopted and was used by Node.js
// ECMA script ===> came with ESM

// commonJS syntax
// const multiply = require('./math.js');

// ESM syntax

import multiply, { add } from './math.js';

console.log(multiply(2, 2));
console.log(add(2, 5));
