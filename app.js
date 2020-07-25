

var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item")
    // create li tag
    var li = document.createElement('li')
    li.setAttribute("class","li list-group-item list-group-item-action list-group-item-ligh")
    var liText = document.createTextNode(todo_item.value)
    

    if(todo_item.value === ""){
        alert("Please enter some value")
    }else{
        li.appendChild(liText)
    }

    // Delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class","btn javaBtn btn-outline-secondary btn-sm")  //Here is the class of button
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    //create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("EDIT")
    editBtn.setAttribute("class","btn javaBtn btn-outline-secondary btn-sm")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")
    
    li.appendChild(editBtn)
    li.appendChild(delBtn)

    list.appendChild(li)

    todo_item.value = "";
}

function deleteItem(e){

    e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML = ""
}

function editItem(e){
    
    var val = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
}

