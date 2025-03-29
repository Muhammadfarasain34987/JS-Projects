// Creating an array
let fruits = ["Apple", "Banana", "Mango", "Orange"];

// Printing the length of the array
console.log("Length of array:", fruits.length);

// Finding index of an element
let index = fruits.indexOf("Mango");
console.log("Index of 'Mango':", index);

// Changing value at a specific index
fruits[1] = "Grapes";
console.log("Updated array:", fruits);

        //   LOOPING OVER AN ARRAY
        let arrr = [ "ali" , "hamaun " , "faraz" , "ahmed" , "saeed" , "atif"];
        for( let i=0 ; i<arrr.length ; i++ )
           {
               console.log(arrr[i]);
           }

let arr = [1, 2, 3];
arr.push(4);
console.log(arr);           

let arr1 = [1, 2, 3];
arr1.pop();
console.log(arr1);

let arr2 = [1, 2, 3];
console.log(arr2.toString());

let arr3 = ["Muhammad"];
let arr4 = ["Farasain"];
let result = arr3.concat(arr4);
console.log(result);

let arr5 = [2, 3, 4];
arr.unshift(1);
console.log(arr5);

let arr6 = [1, 2, 3];
arr6.shift();
console.log(arr6);

let arr7 = [1, 2, 3, 4, 5];
let slicedArr = arr7.slice(1, 4);
console.log(slicedArr);

let arr8 = [1, 2, 3, 4, 5];
arr8.splice(2, 2, 6, 7); // Removes 2 elements from index 2 and adds 6, 7
console.log(arr8);

let arr9 = [1, 2, 3];
arr9.reverse();
console.log(arr9);

let arr10 = [1, 2, 3, 4, 5];
console.log(arr10.includes(3)); // Output: true
console.log(arr10.includes(6)); // Output: false