/** TYPE DEFINITIONS ARE BELOW:
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// Complete the functions written below ------------------------------ //

//NUMBER ONE
/** COMPLETED -- .forEach() METHOD EXAMPLE
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */
function logNames(items) {
  items.forEach(item => console.log(item.name));
  }; // KH note about specified method: .forEach() loops through each item in the array and executes a callback function, logging the name property specified above

  //NUMBER TWO
/** COMPLETED -- .map() METHOD EXAMPLE
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  return items.map(item => item.name.toUpperCase());
}; //KH note about specified method: .map() creates a new array by applying a transformation (of uppercase in this instance) to each item in the original array. 

//NUMBER THREE
/** COMPLETED -- .find() METHOD EXAMPLE
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  function getItemById (items, id) {
    return items.find(item => item.id === id);
  }
}; //KH note about specified method: .find() loops through the array and finds the first item in the array that meets the condition (in this instance: id).

//NUMBER FOUR
/** COMPLETED -- LOOP EXAMPLE
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
function getItemPriceByName(items, name) {
  for (const item of items) {
    if (item.name === name) {
      return item.price;
    }
  }
  return null; // KH note: optional, but if no item is found, the function returns "null"
} //KH note about loop: This "for...of" loop moves across each item in the array by name, finds the corresponding price, and returns each item's aassociated price.

//NUMBER FIVE
/** COMPLETED -- .filter() METHOD EXAMPLE
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  return items.filter(item => item.category === category);
} //KH note about .filter() method: In this instance, the .filter() method displays only items in which the corresponding property (in this instance: category) is met. 

//NUMBER SIX
/** COMPLETED -- .reduce() METHOD EXAMPLE
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  return items.reduce((total, item) => total + item.quantity, 0);
} //KH note about .reduce() method: Starting from zero, the method applied here takes the total count (quantity) of each item and sums it into a single value (total count of items).

//NUMBER SEVEN
/** COMPLETED -- .reduce() METHOD EXAMPLE
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
} //KH note about .reduce() method: Starting from zero, the method applied here takes the product of the total quantity and associated price of each item together to arrive at the cost to purchase everything in stock. Total serves as the accumulator that stores the running total (initially set to zero) and item represents the current item in the array. Zero is chosen as the starting value for total to ensure an accurate count. After the price of each item is multiplied by its quantity to get the total cost of each item, this cost is added to the overall total, which gives us the final price. 

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

console.log("Welcome! We carry the following items:");
logNames(INVENTORY);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));
