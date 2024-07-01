
//Exercise 1: Define an empty array
let foods = [];
//Create an empty array and assign it to a variable called `foods`.

//Exercise 1 has been completed for you:
console.log('Exercise 1 result:', foods);

foods = ['pizza', 'cheeseburger'];
console.log('Exercise 2 results:', foods);

foods.unshift('taco');
console.log('Exercise 3 results:', foods);

let favFood=foods[1];
console.log('Excersie 4 results:', favFood);

foods.splice(2,0, 'tofu');
console.log('Exercise 5 results:', foods);

foods.splice(1,1, 'sushi', 'cupcake');
console.log('Exercise 6 results:', foods);

const yummy = foods.slice(1,3);
console.log('Exercise 7 result:', yummy);

soyIdx = foods.indexOf('tofu');
console.log('Exercise 8 result:', soyIdx);

let allFoods = foods.join('->');
console.log('Exercise 9 results:', allFoods);
/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

let foods = ['salad', 'fruit', 'soup', 'cookies'];  // Example array
let hasSoup = foods.includes('soup');

console.log(hasSoup);  // Output: true


console.log('Exercise 10 result:', hasSoup);
