console.log("Computer! What day of the month is it?");

//Using the Math method and assigning a value that is between 1 and 30 to a variable.
//We add 1 because 0 is inclusive when using Math.random, but there is no such thing as a "0th" day in a month.
//Normally this range would go from 0 to 29, but since we added one it will go from 1 to 30, which is why we do not use 31.
var day_of_month = Math.floor(Math.random() * 30) + 1

//Showing the number that was generated.
console.log(day_of_month);