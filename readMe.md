Create & Modifying an Array

Fork and rename the starter code(opens in a new tab).
Create an array called hobbies with 6 hobbies as elements.
Use the length property to log out the length of the hobbies array.
Add a new hobby at the end of the array using push().
Log out the element at index 2: console.log(hobbies[2]);.
Remove the last element using pop().
After the 2nd element, add two new elements using splice(). Then, log out the array see the modified elements.
Remove the first element using shift().
Add a new element at the beginning of the array using unshift().
Log out the hobbies array to see what it looks like now!
Create a New Array & Combine Arrays

Create a second array called goals and add 3 personal goals as elements.
Write a variable called allTheThings to join the hobbies and goals arrays. You can use concat() or the spread operator to combine the arrays.
Log out your new combined array.
Choose an element in the middle of your allTheThings array and use indexOf() to log out its index. Log it out so that you can see the result (e.g., 4).
Using the index of the element you just discovered, remove the element using splice() and the index position. 
Log out allTheThings to check your work.
Map Over an Array

Create a new variable called plans.
In the value of the plans variable, use map() to map over the allTheThings array: var plans = allTheThings.map(function(){});.
Pass a parameter called item to the map() callback function. 
Inside the body of the callback function, modify each item to return something like: I can't wait to start ${item}.
Outside the function, log out the value of the plans variable so that you can see the new array built from mapping another array (see screenshot above).