const body = document.body;
var button = document.createElement("button");
button.append(document.createTextNode("Change Name!"));
button.addEventListener("click",changeName);
body.appendChild(button);

function changeName(){
    var h1 = document.getElementById("Titulo");
    h1.textContent = "YES! It worked!";
}