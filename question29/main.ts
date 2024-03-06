// Question # 29
// 29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array. • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits: string[] = ['Mango','Banana','Lichi'];

if (favorite_fruits.includes('Banana')) {
  console.log("You really like Bananas!");
}

if (favorite_fruits.includes('Apple')) {
  console.log("You really like Apples!");
}
else {
    console.log("Apple are not in your list of favorite fruits.");
  }

if (favorite_fruits.includes('Orange')) {
  console.log("You really like Oranges!");
} else {
  console.log("Oranges are not in your list of favorite fruits.");
}

if (favorite_fruits.includes('Grape')) {
  console.log("You really like Grapes!");
} else {
  console.log("Grapes are not in your list of favorite fruits.");
}
