// Define an array of student objects
const students = [
    { name: "Ali", marks: 85 },
    { name: "Sara", marks: 42 },
    { name: "John", marks: 76 },
    { name: "Ayesha", marks: 90 },
    { name: "Mike", marks: 33 }
];

// Loop through each student and check their result
for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let status = student.marks >= 50 ? "Passed" : "Failed"; // Proper wording

    console.log(`${student.name} scored ${student.marks} and has ${status}.`);
}

let balance = 5000; // Users initial account balance
const withdrawalRequests = [1000, 2000, 3000, 1500]; // Requested withdrawal amounts

let i = 0; // Counter for withdrawals

console.log("Welcome to the ATM!\n");

while (i < withdrawalRequests.length) {
    let amount = withdrawalRequests[i];

    if (amount <= balance) {
        balance -= amount; // Deduct the amount
        console.log(` Withdrawal of $${amount} successful! Remaining balance: $${balance}`);
    } else {
        console.log(` Insufficient funds for withdrawal of $${amount}. Current balance: $${balance}`);
    }

    i++; // Move to the next request
}

console.log("Transaction session ended.");


const correctPassword = "12345"; //  correct password
let attempts = 0; // Attempt counter
let userInput; // Variable to store user input

do {
    userInput = prompt("Enter your password:"); // Get input from user
    attempts++; // Increase attempt count

    if (userInput === correctPassword) {
        console.log(" Login successful Welcome.");
        break; // Exit loop if password is correct
    } else {
        console.log(` Incorrect password! Attempts left: ${3 - attempts}`);
    }
} while (attempts < 3); // Loop continues until 3 attempts

if (attempts === 3 && userInput !== correctPassword) {
    console.log(" Too many failed attempts! Account locked.");
}

