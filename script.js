// Create array called 'hobbies' of at least 6 elements
// var hobbies = [
//   "Reading",
//   "Writing",
//   "Painting",
//   "Photography",
//   "Gardening",
//   "Cooking",
//   "Playing an Instrument",
//   "Hiking",
//   "Cycling",
//   "Drawing",
//   "Dancing",
//   "Singing",
//   "Traveling",
//   "Knitting",
//   "Woodworking",
//   "Chess",
//   "Fishing",
//   "Collecting stamps",
//   "Bird watching",
//   "Yoga",
//   "Meditation",
//   "Board Games",
//   "Video Gaming",
//   "Scrapbooking",
//   "Model Building",
//   "Volunteering",
//   "Skiing",
//   "Surfing",
//   "Camping",
//   "Rock Climbing",
//   "Astrophotography",
//   "Archery",
//   "Calligraphy",
//   "Cycling",
//   "Pottery",
//   "Metalworking",
//   "Programming",
//   "Blogging",
//   "Graphic Design",
//   "DIY Projects",
//   "Robotics",
  
// ];
// // Log out the length of your hobbies array
// console.log(hobbies.length);

// // Add a new hobby to the end of the array
// hobbies.push("fishing")

// // Log out 3rd element
// console.log(hobbies[4]);

// // Remove of the last element
// console.log(hobbies.pop())

// // Add 2 new elements after the 3 element
// hobbies.splice(3,0, "Whittling", "Candle Making", "laughing");
// // Log out the array
// console.log(hobbies);

// // Remove first element
// hobbies.shift();
// // Log out the array
// console.log(hobbies);

// // Use 'unshift' to add a hobbie to the beginning of the array
// hobbies.unshift("Loving");
// // Log out the array
// console.log(hobbies);

// // Create another array called goals with at least three elements
// var personalGoals = ["Learn a new language", "Run a half marathon", "Start a personal blog"];


// // Create a variable called allTheThings and combine arrays using the concat() or the spread operator.
//     //  var allTheThings = hobbies.concat(goals);
// var allThings = [...hobbies, ...goals];

// // Console out the array
// console.log(allThings);

// // Choose an element in the middle of your 'allTheThings' array and find its index using 'indexOf'
// var middleElement = allThings.indexOf("Camping");

// // Using the index you discovered, remove that element
// var removeMiddleElement = allThings.splice(middleElement,1);

// // Log out 'allTheThings' to confirm that it is gone
// console.log(allThings);

// // Use map() to add 'I can't wait to start' to the beginning of each array element
// var plans = allThings.map(function(item){
//  return `I can't wait to start ${item}`
// })

// console.log(plans);


var programmingLanguages = [
  "Scala",
  "Java",
  "Go",
  "Swift",
  "Cobol",
  "JavaScript",
  "Python",
  "Ruby",
  "Elm",
  "Rust",
  "C#"
];

// // Log out the array
// console.log(programmingLanguages);

// for (var language of programmingLanguages) {
//   console.log(`I want to learn ${language}!`);
// }

// // use forEach for array, make all items upper case
// // log out index starting at '1' with the uppercase element
// // i.e.: 1. JAVASCRIPT
// programmingLanguages.forEach(function (item, index) {
//   console.log(`${index + 1}. ${item.toUpperCase()}`);
// });

// // User .filter() to return a new array called updatedLangages that
// // returns languages without the letter "y"
// var updatedLanguages = programmingLanguages.filter(function (language) {
//   return language.includes("y");
// });

// console.log(updatedLanguages);

// forEach function
var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard",
];

console.log(groceries);


  var deleteDuplicates = function (list) {
    var cleanList = [];
  
    for (var item of list) {
      if (!cleanList.includes(item)) {
        cleanList.push(item);
      }
    } 
    return cleanList; 
};

var newGroceries = deleteDuplicates(groceries)
console.log(newGroceries)

newGroceries.forEach(function (groceries, index) {
    console.log(`${index + 1}. ${groceries.toUpperCase()}`);
 });