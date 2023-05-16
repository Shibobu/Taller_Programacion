function get_input_text(){
    var doc = document.querySelector("#input-contenido");
    add_div(doc.value);
    doc.value = ''
}


function add_div(txt){
    if(txt != ""){
        document.querySelector("form").addEventListener("submit",function(event){
            event.preventDefault();
            var div = document.createElement("p");
            div.textContent = txt;
            var cont = document.getElementById("contenido");
            cont.appendChild(div)
            txt = ""
        })
    }
    
}
