// example 1 

document.getElementById("changeTextButton").addEventListener("click",function(){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "This is the changed the paragraph";
})

//example 2 

document.getElementById("highlightFirstCity").addEventListener("click",function(){
    let cities = document.getElementById("citiesList");
    cities.firstElementChild.classList.add("highlight");
    
})

//example 3

document.getElementById("changeOrder").addEventListener("click",function(){
    let order = document.getElementById("coffeeType") ;
    order.textContent = "Espresso";
    order.style.color = "pink";
    order.style.backgroundColor = "red";
    order.style.padding = "5px";
})

//example 4

document.getElementById("addNewItem").addEventListener("click",function(){
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
})