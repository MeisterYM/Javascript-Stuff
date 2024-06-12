//If the given number is greater than 0, then the function will keep calling itself and decrease said number by 1.
//It seems that for JavaScript, a return statement is not necessary for every case in the function.
function countdown(number) {
    if(number < 0) {
        console.log("I can't do a countdown with this number!");
        //return 0;
    } else if(number > 0) {
        console.log(number);
        return countdown(number - 1);
    } else {
        console.log("Liftoff!");
        //return 0;
    }
}

//Calling the countdown function. Not sure how I can mix this up yet.
countdown(3);