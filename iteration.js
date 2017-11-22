const strings = ['1','2','3','4','5'];
const numbers = strings.map(string => parseInt(string, 10));
console.log(numbers);

//capitalized all words
const fruits = ['apple', 'pear', 'cherry'];
const capitalizedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(capitalizedFruits);

//convert array values into decimal dollar amounts
const prices = [5, 4.23, 6.4, 8.09, 3.20];
const priceToDollars = price => `$${price.toFixed(2)}`;
const newPrices = prices.map(priceToDollars);
console.log(newPrices);

//Print the first 3 letters using map() and slice() method
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let abbreviatedDays = daysOfWeek.map(days => days.slice(0, 3));
console.log(abbreviatedDays);