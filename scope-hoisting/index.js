// Global scope: When we start writing code in a file, we are automatically placed in the global scope of that file. 
var x0 = 5;
var y0 = 'abc';
function fn0() { };


/* 
    Local Scope: Functions have their own local scope available to them. Inner scopes have access to their outer scopes. The opposite is not true. 
    There’s a mechanism behind variable lookup in JavaScript. When we try to access a variable, the JavasScript engine first looks at the current scope level. If the variable isn’t found, it will jump upwards into the parent scope and look there, and keep going upwards and out until it either finds the variable or reaches the global scope. If it’s not in the global scope, we get a reference error. 
*/

var x1 = 5;
var y1 = 'abc';
function fn1() {
    var insideFnScope = true;
    var y1 = 'abcd';
    console.log('x1: ', x1);
    console.log('y1: ', y1);
}
fn1()
console.log('y1: ', y1);
// console.log('insideFnScope: ', insideFnScope);  // Reference error

// Variable Hoisting: Variable declarations are hoisted, or moved, to the top of their available scope. Note that only the variable declaration, not the assignment, is hoisted.
console.log('x2: ', x2);
var x2 = 5;
console.log('x2: ', x2);

// Function Hoisting: A function expression gets hoisted just like a normal variable. A function declaration, on the other hand, gets hoisted in its entirety.
fn3_1()
// fn3_2() // TypeError
function fn3_1() {
    console.log("function declaration")
}
var fn3_2 = function() {
    console.log("function expression")
}

/* 
    let and const: not hoisted, block-scoped(var is function-scoped), Duplicate declaration also fails.
    const: No reassignment, No empty initializations .
*/

for(var x4_1 =0; x4_1 < 3; x4_1++) {}
for(let x4_2 = 0; x4_2 < 3; x4_2++) {}

console.log('x4_1: ', x4_1);
console.log('x4_2: ', x4_2); // Reference Error
