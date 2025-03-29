// Taking marks input from the user
let marks = Number(prompt("Enter your marks (out of 100):"));

// Checking the grade using conditional statements
if (marks >= 90) {
    console.log("Grade: A+ (Excellent)");
} else if (marks >= 80) {
    console.log("Grade: A (Very Good)");
} else if (marks >= 70) {
    console.log("Grade: B (Good)");
} else if (marks >= 60) {
    console.log("Grade: C (Satisfactory)");
} else if (marks >= 50) {
    console.log("Grade: D (Pass)");
} else {
    console.log("Grade: F (Fail) - Better luck next time!");
}

// Taking age input from the user
let age = Number(prompt("Enter your age:"));

// Using ternary operator to check voting eligibility
let result = (age >= 18) ? "You are eligible to vote!" : "You are not eligible to vote.";

// Displaying the result
console.log(result);

// Taking fruit name input from the user
const expr = prompt("Enter a fruit name:");

// Switch statement to check fruit prices
switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

