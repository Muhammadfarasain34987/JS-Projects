var name = "Muhammad";
console.log("Name using var:", name);
name = "Farasain"; // Reassigning is allowed
console.log("Updated name using var:", name);

// Using let
let age = 21;
console.log("Age using let:", age);
age = 15; // Reassigning is allowed
console.log("Updated age using let:", age);

// Using const
const country = "Pakistan";
console.log("Country using const:", country);
// country = "Canada"; //  This will cause an error: Assignment to constant variable

// Example showing block scope
if (true) {
    var city = "Peshawar";  // Accessible outside the block
    let state = "KPK"; //  not accessible outside
    console.log("Inside block - State:", state);
}

console.log("City outside block:", city); //  Works because var is function-scoped
// console.log("State outside block:", state); //  Error because let is block-scoped

let userName = prompt("Enter your name:");
alert("Hello, " + userName + "!");
console.log("User entered:", userName);
