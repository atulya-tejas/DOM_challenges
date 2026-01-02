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

//example 5

document.getElementById("removeLastTask").addEventListener("click",function(){
    let toRemove =document.getElementById("taskList");
    toRemove.lastElementChild.remove();
})

//exapmle 6 
document.getElementById("clickMeButton").addEventListener("dblclick",function(){
    alert("Hello i am atulya");
})

// example 7 
document.getElementById("teaList").addEventListener("click",function(event){
    if(event.target && event.target.matches(".teaItem")){
        alert("You selected " + event.target.textContent);

    }

})

// example 8 

document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    let display = document.getElementById("feedbackDisplay");
    display.textContent = `Your feedback is : ${feedback} `
    display.classList.add("highlight");
})

// example 9

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById("domStatus").textContent = "DOM fully loaded!"
})

//exaple 10 
document.getElementById("toggleHighlight").addEventListener('click',function(){
    let discrtiptonText = document.getElementById("descriptionText");
    discrtiptonText.classList.toggle("highlight")

})