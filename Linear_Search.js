//Commented code to test variables and methods.
//console.log("Hello world! This is a test!");

//The number that the algorithm will search for.
var lookup = 9;

//The array that the algorithm will use. Intentionally excluded 5.
const numbers = [1, 2, 3, 4, 6, 7, 8, 9, 10];

//Look through every index in the array. If you find the target value, say so and where it was found. Otherwise say nothing.
for(var i = 0; i < numbers.length; i++) {
    if(lookup == numbers[i]) {
        console.log("Found it! It's at index " + i);
    }
}