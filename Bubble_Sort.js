//Code can be improved later.

//Creating an array to test algorithm.
const thing = [5, 4, 3, 2, 1];

//Assigning size of array to a variable.
var size = thing.length;

//First loop keeps track of iteration.
for(var i = 0; i < size-1; i++) {

    //Second loop helps with comparing.
    for(var j = 0; j < size-i-1; j++) {

        //If current value in array is greater than next value, swap. Otherwise do nothing.
        if(thing[j] > thing[j+1]) {
            var placeholder = thing[j];
            thing[j] = thing[j+1];
            thing[j+1] = placeholder;
        }

    }

}

//Printing the newly sorted array.
console.log(thing);