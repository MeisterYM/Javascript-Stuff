console.log("Is this thing on?");

//Calling the confirm function to answer above question.
confirm();

console.log("What is 11 times 11?");

//Calling multiply function.
multiply(11, 11);

console.log("...well played.");

//Function that prints a string. Basically hello world.
function confirm() {
    console.log("Indeed.");
}

//Multiply function.
function multiply(x,y) {
    var result = x * y;

    console.log(result);
}