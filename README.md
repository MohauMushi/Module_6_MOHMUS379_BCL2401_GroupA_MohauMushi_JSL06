# [JSL06]: CodeCuisine Menu Display System Challenge

## Project Overview
In this coding challenge, I was tasked to build a simple menu display system for a fictional UberEats restaurant called "CodeCuisine." The goal was to display different categories of food items and allow users to add items to their order with a click and apply various JavaScript concepts, including functions, closures, and event handling, to create an interactive menu.

![alt text](JSL06-solution.gif)

## Objectives:
- Create and use functions to dynamically populate the menu items on the page.
- Implement a callback function to handle adding items to the order.
- Use closures to maintain the state of the order.
- Utilize function expressions and anonymous functions.
- Call built-in functions and create custom functions to manage the menu and order system.

## Added Improvement
The functionality of deleting items from the order and clearing the entire order.


**Attached Click Event Listener:**

Attached a click event listener to the list item to delete it from the order in the Callback function for adding an item to the order

**Function for Deleting an Item from the Order:**

Added The deleteFromOrder function which is responsible for removing a selected item from the order items list and updating the total price. When you have added many or more item to your orders, you can simply click on the item in your orders to delete from the order.

**Function for Clearing the Whole Order:**

The clearOrder function was designed to clear the entire order and reset the total price to zero, when you are done with your order or when you want to start the order for the beggining.


Incorporating the code improvements, the functionality for deleting items from the order and clearing the entire order was effectively implemented.

## Challenges
The use of parseFloat() to parse the current total from the order total element's text content, as i didn't name `orderTotalElem` correctly until i asked help from my desk mate and he showed me the one problem that i did, Cause it didn't allow me to see the total of the order, as it was displaying NaN. But at the end, managed to make it work the calculation correctly.



## 📚 What I learned
In creating this project, I gained valuable insights into dynamically manipulating the DOM, handling user interactions through event listeners, and calculating and updating total prices based on user actions. Through iterating through objects and arrays, I learned to effectively display menu items and facilitate item addition