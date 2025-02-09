let marks = 65; // Assign a valid number

if (marks < 0) {
    console.log("Number is invalid");
} else if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("A-");
} else if (marks >= 50) {
    console.log("B");
} else if (marks >= 40) {
    console.log("C");
} else if (marks >= 33) {
    console.log("D");
} else {
    console.log("F");
}


let number1 = 10;
let number2 = 25;
let number3 = 15;

if (number1 >= number2 && number1 >= number3) {
    console.log("The maximum number is:", number1);
} else if (number2 >= number1 && number2 >= number3) {
    console.log("The maximum number is:", number2);
} else {
    console.log("The maximum number is:", number3);
}
