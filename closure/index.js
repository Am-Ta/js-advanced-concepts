/* 
    Benefit: Dynamically Generating Functions, avoid to code duplication 
    Scope Persistence: When a function is created, it retains access to the scope that it was created in. even after that outer function returns.
    Encapsulation: With this idea of scope persistence, we can write functions that hide data from someone who uses the function. This is called encapsulation.

    Lexical Scope: This is often confused with closure, but lexical scope on only an important part of closure.
*/

// example to code duplication
function add10NoClosure(num) { return num + 10 }
function add20NoClosure(num) { return num + 20 }
function add30NoClosure(num) { return num + 30 }

function addFactoryWithClosure(storedNum) {
    return function (num2) {
        return storedNum + num2;
    }
}
let add10 = addFactoryWithClosure(10)
let add20 = addFactoryWithClosure(20)
let add30 = addFactoryWithClosure(30)

console.log(add10(4))
console.log(add20(4))
console.log(add30(4))

// example to encapsulation
function counterGenerator() {
    let counter = 1;

    return () => counter++
}

let incrementCounter = counterGenerator()
console.log(incrementCounter())
console.log(incrementCounter())

