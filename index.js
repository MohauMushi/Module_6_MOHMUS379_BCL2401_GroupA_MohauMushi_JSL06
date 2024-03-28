// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// myButton.setAttribute("style", "border: 0; outline: none; font-family: inherit; font-size: inherit; cursor: pointer;");

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuContainerElement = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    for (let [category, items] of Object.entries(menu)){
        // Create an element to represent the category
            let categoryElement = document.createElement('h3');
        // Set the text content of the category element to the category name
            categoryElement.textContent = category;
        // Append the category element to the menu container
            menuContainerElement.appendChild(categoryElement);


        // Create an element to represent a list of items
            let itemList = document.createElement('ul');
        // Append a list of items element to the menu container
            menuContainerElement.appendChild(itemList);
        // Loop through the items in the category and create list items
        items.forEach(item => {
            // Create a list item element
            let itemsElement = document.createElement('li');
            // Set the text content of the list item element to the item name
            itemsElement.textContent = item;
            // Attach a click event listener to the list item to add it to the order
            itemsElement.addEventListener("click", () => addToOrder(item));
            // Append the list item to the list of items
            itemList.appendChild(itemsElement);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    let orderItemListElem = document.getElementById('order-items');
    let orderTotalElem = document.getElementById('order-total');
    let clearOrderElem = document.getElementById("clear-order");
    // Create a list item for the order
    let orderItemList =  document.createElement('li');
    // Set the text content of the list item to the item name
    orderItemList.textContent = itemName;
    // Append the list item to the order items list
    orderItemListElem.appendChild(orderItemList);
    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElem.textContent);
    const itemPrice = 60; // Assuming each item costs R90 (you can customize this)
    const newTotal = currentTotal + itemPrice;
    orderTotalElem.textContent = newTotal.toFixed(2);
    
    // Attach a click event listener to the list item to delete it from the order
    orderItemList.onclick = () => deleteFromOrder(orderItemList);
    
    clearOrderElem.onclick = () => clearOrder();

}

//Function for deleting an item from the order
function deleteFromOrder(orderItemList) {
    // Get the order items list and the order total element from the HTML
    let orderItemListElem = document.getElementById('order-items');
    let orderTotalElem = document.getElementById('order-total');
    
            // Remove the selected item from the order items list
            orderItemListElem.removeChild(orderItemList);
    
            // Calculate and update the total price
            const currentTotal = parseFloat(orderTotalElem.textContent);
            const itemPrice = 60; 
            const newTotal = currentTotal - itemPrice;
            orderTotalElem.textContent = newTotal.toFixed(2);
            
            
            
    }
    /*
    This function is responsible for clearing the entire order by removing all items from 
    the order list and resetting the total price to zero. It begins by obtaining references 
    to the order items list and the order total element using document.getElementById(). 
    A while loop is used to remove each child element from the order items list until no child elements remain. 
    Once the list is empty, the total price is set to zero, and the updated value is displayed in the order total 
    element using orderTotalElem.textContent. 
     */
    function clearOrder() {
        let orderItemListElem = document.getElementById('order-items');
        let orderTotalElem = document.getElementById('order-total');
        
        while(orderItemListElem.firstChild){
            orderItemListElem.removeChild(orderItemListElem.firstChild);
        };
        
        const newTotal = 0;
        orderTotalElem.textContent = newTotal.toFixed(2);
    }

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
