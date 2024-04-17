//Create a grocery list application where users can add and remove items from a list. The list should be displayed as a bulleted unordered list

//declare vars
numItems = 0;
shoppingList = [];
newItem = "";

//clear list
function clearList(){
    document.getElementById("list").innerHTML = "";
}


//populate shopping list.
function fillList(){

    for(i=0;i<numItems;i++){
        shoppingList[i] = prompt("Enter item number "+(i+1)+" for the list.");
    }
    listIngredients();
}

//Create index for shopping list.
function createList(){
    numItems = prompt("How many items do you want to add?");
    alert("You are adding "+numItems+" items.");
    return numItems;
 }

//add option to add more items to the list.
function addToList(){
    clearList();
    newItem = prompt("Enter another item:");
    shoppingList.push(newItem);
    numItems++;
    listIngredients();
  
}

//add option to remove items from the list.
function removeFromList(){
    clearList();
    shoppingList.pop();
    numItems--;
    listIngredients();
}


//display list
function listIngredients(){
    let list = document.getElementById("list");
    for(i=0;i<numItems;i++){
        let li = document.createElement('li');
        li.innerText = shoppingList[i];
        list.appendChild(li);
    }
}

