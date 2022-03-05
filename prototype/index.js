// Prototypes allow you to easily define methods to all instances of a particular object. The beauty is that the method is applied to the prototype, so it is only stored in the memory once, but every instance of the object has access to it.

// JavaScript gives us access to three global functions: Object, Array, and Function. Yes, these are all functions. An object literal is an implicit call to Object. Same goes for arrays and functions.

// All JavaScript objects have a prototype. Browsers implement prototypes through the __proto__ property and this is how we’ll refer to it. Functions also have a prototype property. This is distinct from their __proto__ property.

// The __proto__ property is a pointer to another object that has several properties on it. Every object literal we create has this __proto__ property pointing to this same object. 

// Property Lookup: It’s similar to scopes. When we look for a property of an object, the JavaScript engine will first check the object itself for the existence of the property. If not found, it’ll go to the object’s prototype and check that object. If found, it’ll use that property. If not found, it’ll go to the prototype’s prototype, and on and on until it finds an object with a __proto__ property equal to null. This is called the prototype chain.

let person = {
    name: "Amin Taghipour",
    age: "28",
    email: "amin.taghipour27@gmail.com"
}

console.log('person: ', person.__proto__);

person.__proto__.testValue = "test";
console.log(person.testValue)