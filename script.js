const inputbox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

var input = document.getElementById("input-box");
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("button").click();
  }
});

function task() {
    if (inputbox.value === '') {
        alert("Error");
    }else{
        let li= document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let cross=document.createElement("cross");
        cross.innerHTML="\u00d7"
        li.appendChild(cross);
    }
    inputbox.value="";
    storedata();
}

listcontainer.addEventListener("click", function(e){
    if (e.target.tagName ==="LI") {
        e.target.classList.toggle("checked");
        storedata();
    }else if(e.target.tagName==="CROSS"){
        e.target.parentElement.remove();
        storedata();
    }
},false);

function storedata(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function display() {
    listcontainer.innerHTML= localStorage.getItem("data");
}
display();