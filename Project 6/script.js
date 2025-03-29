//Currency exchange Dollor into Pakistani Rupees

function currency(amount , rate){

    return amount * rate ;
 
}
console.log(currency(100 , 283));

        //  CALCULATOR
function calculator(firstNum , secondNum , operator){
    if (operator == "+"){
        return firstNum + secondNum ;
    }
    else if (operator == "-"){
        return firstNum - secondNum;
    }
    else if (operator == "*"){
        return firstNum * secondNum ;
    }
    else if(operator == "/"){
        return firstNum / secondNum
    }
    else if(operator == "%"){
        return firstNum % secondNum
    }
    else {
        console.log("You entered invalid number try again");
    }
}
let firstNum = Number(prompt("Enter the first number"));
let operator = prompt("Enter the operator(+ , - , * , / , %)");
let secondNum = Number(prompt("Enter the second number"));
console.log("Result" , calculator(firstNum , secondNum, operator));


function rand(userguessNum) {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    console.log("Random Number:", randomNum);

    return randomNum === userguessNum 
        ? "You won!" 
        : randomNum > userguessNum 
        ? "Too high!" 
        : "Too low!";
}

let userInput = parseInt(prompt("Enter a number between 1 and 10"));
console.log(rand(userInput));
