/* Question 1
Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

Answer: 
This code will not throw an error. The variable number is an array
that contains 3 elements. On line 5, the index 6 of the array number
is initialized to the number 5. Even though the original array only 
has elements until index 2, JavaScript will create the remaining elements,
initialize index 6 to 5 and index 3 until 5 will be created but not initialized. 

Bonus: 

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

Answer: 
The above code will return undefine. Since the array numbers only 
has 3 elements, when a new element is initialized on the 6th index, 
javascript will create 4 more elements and initialized the last, the 6th
index to 5. The other elements, index 3 till 5 will be created but not initialized
which leads to strange behavior. If the element is called, it will return undefined
but when filtering for elements that equal undefined, it will return an empty array. 

Question 2

How can you determine whether a given string ends with an exclamation mark (!)?
 */
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

//Answer: 
console.log(str1.endsWith("!"))
console.log(str2.endsWith("!"))

//Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

//Answer: 
for (let prop in ages) {
  console.log(prop === 'Spot');
}

/* Question 4
Using the following string, create a new string that contains all lowercase letters except for the first character, which should be capitalized. (See the example output.) */

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let lowerCaseString =  munstersDescription.slice(0,1).toUpperCase() + munstersDescription.slice(1).toLowerCase();
// Correction 
lowerCaseString = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

console.log(lowerCaseString);

/* Question 5
What will the following code output?

console.log(false == '0');
console.log(false === '0');

Answer: 
This code will output true and then false. 
In the first expression, we are using the non-strict equality operator to compare a boolean
with a string. It will convert the string into a boolean and since it's value is the number 0,
it will convert it to false and therefore the expression will return true. 
The second expression will return false, since we are using the strict equality operator and 
none of the two values will be coerced. Since we are comparing a boolean with a string it will
return false. 
Correction:
The code will output true and then false. In the first expression the non-strict equality operator
is used to compare a boolean value with a string value. The non-strict equality operator first coerces the values for better comparison. In this case, the boolean false is coerced to its number equivalent, which is 0. Then the expression compares the number zero to the string '0' and since it's ignoring the type comparison, it will evaluate to true. 
The second expression however, uses the strict equality operator, which compares both type and value and doesn't coerce the values before comparing them. Hence, it will return false, since 
boolean and string are different values. 
 */

//Add entries for Marilyn and Spot to the object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

console.log(ages)
console.log(additionalAges)

/* Question 7
Determine whether the name Dino appears in the strings below -- check each string separately: */

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino'))
console.log(str2.includes('Dino'))

//How can we add multiple items to our array? ('Dino' and 'Hoppy')

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
//Answer
flintstones.push("Dino", "Hoppy");
console.log(flintstones)

/* Question 10
Return a new version of this sentence that ends just before the word house. Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence. */

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newVersion = advice.substring(0, advice.indexOf('house'))
console.log(newVersion)
// Expected return value:
// => 'Few things in life are as important as '






