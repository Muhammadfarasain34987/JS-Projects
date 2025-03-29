// Creating a student object with properties
const student = {
    name: "MUHAMMAD FARASAIN", // Student's name
    age: 21, // Student's age
    cgpa: 3.00, // Student's CGPA
    isPass: true // Boolean value indicating if the student has passed
};

// Printing the entire student object
console.log(student);  

// Accessing and printing the 'name' property using bracket notation
console.log(student["name"]);  

// Updating the 'age' property by adding 1
student["age"] = student["age"] + 1;

// Printing the updated 'age' property
console.log(student["age"]);  

// Taking user input and converting to numbers
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
// Arithmetic Operators
let sum = num1 + num2; // Addition
let difference = num1 - num2; // Subtraction
let product = num1 * num2; // Multiplication
let quotient = num1 / num2; // Division
let remainder = num1 % num2; // Modulus (remainder of division)

// Printing arithmetic results
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// power
let a = 2;
let b = 3;
console.log(a**b);

// Taking user input and converting it to a number
let num = Number(prompt("Enter a number:"));

// Performing assignment operations and logging the results
console.log("Original Value:", num);

num += 5; // num = num + 5
console.log("After += 5:", num);

num -= 2; // num = num - 2
console.log("After -= 2:", num);

num *= 3; // num = num * 3
console.log("After *= 3:", num);

num /= 2; // num = num / 2
console.log("After /= 2:", num);

num %= 4; // num = num % 4
console.log("After %= 4:", num);

// Taking two numbers from the user and converting them to numbers
let number1 = Number(prompt("Enter first number:"));
let number2 = Number(prompt("Enter second number:"));

// Using comparison operators and logging the results
console.log("First Number:", number1);
console.log("Second Number:", number2);

console.log("num1 > num2:", number1 > number2);   // Greater than
console.log("num1 < num2:", number1 < number2);   // Less than
console.log("num1 >= num2:", number1 >= number2); // Greater than or equal to
console.log("num1 <= num2:", number1 <= number2); // Less than or equal to
console.log("num1 == num2:", number1 == number2); // Equality (checks value)
console.log("num1 === num2:", number1 === number2); // Strict Equality (checks value & type)
console.log("num1 != num2:", number1 != number2); // Not Equal
console.log("num1 !== num2:", number1 !== number2); // Strict Not Equal

// Taking user input and converting it to boolean values
let isRaining = confirm("Is it raining? Click OK for Yes, Cancel for No.");
let isCold = confirm("Is it cold? Click OK for Yes, Cancel for No.");

// Logging user inputs
console.log("Is it raining?", isRaining);
console.log("Is it cold?", isCold);

// Logical AND (&&) → True if both conditions are true
console.log("Is it raining AND cold?", isRaining && isCold);

// Logical OR (||) → True if at least one condition is true
console.log("Is it raining OR cold?", isRaining || isCold);

// Logical NOT (!) → Reverses the boolean value
console.log("Is it NOT raining?", !isRaining);
console.log("Is it NOT cold?", !isCold);
