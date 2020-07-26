var list = document.getElementById("ul")


function addclick (){
   var item = document.getElementById("item")
    if(item.value === "" || item.value == " "){ 
       alert("Enter Your Todo value")
   }
   else{
    var li = document.createElement("li")
    var text =  document.createTextNode(item.value)


    // delete button 

    var delbtn = document.createElement("button")
    var b = document.createTextNode("Delete Todo")
    delbtn.appendChild(b)
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","delete_item(this)")

    // Edit Button
    
    var editbtn = document.createElement("Button")
    var c = document.createTextNode("Edit Todo")
    editbtn.setAttribute("onclick","edit_item(this)")
    editbtn.appendChild(c)
    li.appendChild(text)

    list.appendChild(li)

    li.appendChild(delbtn)
    li.appendChild(editbtn)

    item.value = ""
}
}
function delete_item(shayan){
shayan.parentNode.remove()

}

function deleteall(){
    document.getElementById("ul").innerHTML = "";
}
function edit_item(a){
    var b = prompt("enter edit value")
    a.parentNode.firstChild.nodeValue = b;
}