/* 
1. Write a function that takes one integer argument, which may be positive, negative, or zero. 
This method returns true if the number's absolute value is odd. 
You may assume that the argument is a valid integer value.

Pseudocode: 
START 
# When given an integer, which is positive, negative or zero. 
IF the remnant of the integer divided by 2 is > 0 
PRINT 'odd'
ELSE do nothing 

END
*/

let isOdd = function(integer){
    if(integer % 2){
        return true;
    }
    else{
        return false;
    }
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

