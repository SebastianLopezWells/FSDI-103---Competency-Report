//Declaration for the variables
let id =0;
let productArray = new Array();

//function to registrate
function registrate(){
    if(document.getElementById("toDoItem").value === ""){
        alert("Please add a name");
    }
    else{
        
        productArray.push(document.getElementById("toDoItem").value);
        document.getElementById("toDo-list").innerHTML += `<li id="${id}">${productArray[id]} <button onclick="deleteItem(${id})" class= "btn-erase" > Delete</button></li>`;
        console.log("After adding an item to the list.");
        consoleDisplay();
        id++;
    }
}

function deleteItem(idN){
        productArray.splice(idN, 1);
        document.getElementById(idN).remove();

        console.log("After deletting a item from the list.");
        consoleDisplay();
        id--;
}

function consoleDisplay(){
    for(let i=0; i<productArray.length; i++)
    {
        console.log(productArray[i]);
    }
}

