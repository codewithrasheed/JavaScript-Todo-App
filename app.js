var main = document.getElementById("main");
var inp = document.getElementById("inp");

function add(){
    // console.log(inp.value)
    if(inp.value == ""){
        alert("Please Enter Todo");
    }
    else{
        // Creating List
        var li = document.createElement("li");
        var liText = document.createTextNode(inp.value);
        li.appendChild(liText);
        li.setAttribute("class", "list")
        // List End

        // Creating Edit Button
        var editBtn = document.createElement("BUTTON");
        var editBtnText = document.createTextNode("EDIT");
        editBtn.appendChild(editBtnText);
        editBtn.setAttribute("onclick", "edittodo(this)");
        editBtn.setAttribute("class", "btn my-4 text-white edi")
        li.appendChild(editBtn);
        // Edit Button End 


        // Creating Delete Button
        var delBtn = document.createElement("BUTTON");
        var delBtnText = document.createTextNode("Delete");
        delBtn.appendChild(delBtnText);
        delBtn.setAttribute("onclick", "deltodo(this)");
        delBtn.setAttribute("class", "btn my-4 text-white remo")
        li.appendChild(delBtn);
        main.appendChild(li);
        inp.value = "";

    }
}

function edittodo(element){
    var newvalue = prompt("Enter Updated Value", element.parentNode.firstChild.nodeValue);
    console.log(element.parentNode.firstChild.nodeValue);
    element.parentNode.firstChild.nodeValue = newvalue;
}

function deltodo(element){
    element.parentNode.remove();
    console.log();

}
function deltAll(){
    main.innerHTML = "";
}
