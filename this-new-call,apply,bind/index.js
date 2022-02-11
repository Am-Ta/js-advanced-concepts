// The idea of this: In JavaScript, this inside a function is meant to reference the object that the function is a property of.
function fn0() {
    console.log(this) // window object
}
fn0()

/*
    New Keyword: To explain what new does, let’s start with just a normal function, called without new. Let’s create a function that does the same thing, but we want it to be invoked using new. 

    Common practice is to make functions that are meant to be invoked with new start with a capital letter. These functions are also referred to as constructors.

    The new keyword invokes a function in a special way. It adds some implicit code that we don’t see. Let’s expand the FnConstructor function to show everything that’s happening. Below, the commented lines are pseudo-code representing functionality that is implicitly added by the JS engine when using new. 

    When we see new being used, we should automatically see that the purpose of the function is to create an object and we should expect that object being returned to us. 

*/


function fnNormal(name, age) {
    let personObj = {}
    personObj.name = name;
    personObj.age = age;
    return personObj;
}
let alex = new fnNormal("Alex", 24);
console.log('alex: ', alex);

function FnConstructor(name, age) {
    // this = {}
    // this.__proto__ = FnConstructor.prototype;
    
    // if (there is a return statement in the function body that returns anything EXCEPT an object, array, or function) {
    //     return this instead of that item at the return statement;
    // }

    this.name = name;
    this.age = age;
    
    // return this;
}
let john = new FnConstructor("John", "34");
console.log('john: ', john);

/*
    call: Function.call allows us to set the this value of a function manually. call also allows us to pass in parameters to the function being called.
    apply: Function.apply works the same exact way as call, except instead of passing in arguments one by one, we pass in an array of arguments that gets spread into the function. 
    bind: Function.bind works differently than the other two. Similarly to call, it takes in a this value and as many more parameters as we’d like to give it. However, instead of calling the function immediately, bind returns a new function. This new function has the this value and the parameters already set and bound. 
*/

function fnCall(name) {
    console.log('this(call): ', this);
    console.log('name(call): ', name);
}
let objCall = {key: "call"};
fnCall.call(objCall, "amin");

function fnApply(name, age) {
    console.log('this(apply): ', this);
    console.log('name(apply): ', name);
    console.log('age(apply): ', age);
}
let objApply = {key: "apply"};
fnApply.apply(objApply, ["amin", 24]);

function fnBind(name) {
    console.log('this(bind): ', this);
    console.log('name(bind): ', name);
}
let objBind = {key: "bind"};
let fnReturned = fnBind.bind(objBind, "amin");
fnReturned()

/*
    The complete rules of this: 
        1- If the new keyword is used when calling the function, this inside the function is a brand new object created by the JavaScript engine.
        2- If apply, call or bind are used to call a function, this inside the function is the object that is passed in as the argument. 
        3- If a function is called as a method —that is, if dot notation is used to invoke the function — this is the object that the function is a property of.
        4- If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object.
        5- If multiple of the above rules apply, the rule that is higher wins and will set the this value
        6- If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it’s created. To determine what this is, go one line above the arrow function’s creation and see what the value of this is there. 
        Determining Which Rule Applies in the following examples
*/

let objThis = {
    key1: "hi",
    printThis: function() {
        console.log('this: ', this);
    },
    printThisArrow: function() {
        return () => console.log('this(Arrow): ', this);
        
    }
}

let print = objThis.printThis
let printArrow = objThis.printThisArrow()
printArrow() // rule 3, 6
print() // rule 4
objThis.printThis() // rule 3

let objTest = {key2: "Hello"}
objThis.printThis.call(objTest) // 5
new objThis.printThis() // 1, 3, 5
