function ejercicio(text){
    show(text)
}
/*Ejercicio 3 */
function exercise3(text){
    aux = splitting(text)

    for(i in aux){
        alert(aux[i])
    }
}
function splitting(text){
   var textArea = document.getElementById("Text_areanames")
   return textArea.value.split(',')
}
/*Ejercicio 4*/
function exercise4(text){
    
}
/* Ejercicio 2*/
function conv_minusculas(text){

    var inp = document.getElementById("in_input");
    var out = document.getElementById("out_input");

    out.value = minusculas(inp.value)

}

function minusculas(text){
    return text.toLowerCase()
}

/*Ejercicio 1*/
function resolver(){
    var inputs = document.getElementById("Ej1_Containers");
    var inp = inputs.getElementsByTagName("input");
    var n1 = Number(inp[0].value);
    var n2 = Number(inp[1].value);
    /*var values = [];
    for(var i = 0; i < inp.length;i++){
        values.push(Number(inp[i].value));
    }*/
    
    alert("Suma " + suma(n1,n2))
    alert("Resta: " + resta(n1,n2))
    alert("Multiplicacion: " + multp(n1,n2))
    var res = div(n1,n2)
    if (!isNaN(res)){
        alert("Division: " + res)
    }
    else alert("Todo mal capo, ingresaste un 0 no se puede dividir por eso ")
    clear_container("Ej1_Containers")
}

function suma(n1,n2){
    return n1 + n2
}

function resta(n1,n2){
    return suma(n1,-n2)
}

function multp(n1,n2){
    return n1*n2
}

function div(n1,n2){
    if (n2 === 0 || isNaN(n2)){
        return NaN
    }
    return n1/n2
}

/*Ej */
function hide(text){
    clear_container(text)
    document.getElementById(text).style.display = "none";
}

function show(text){
    document.getElementById(text).style.display = "grid";
}

function clear_values(item){
    item.value = ""
}
function clear_all(){
   var values  = document.getElementsByClassName("InputText")
   for(i in values){
        clear_values(values[i])
   }
}

function hide_all(){
    var values  = document.getElementsByClassName("Exercises")
   for(i in values){
        values[i].style.display = "none"
   }
}

function clear_container(text) {
    var inputs = document.getElementById(text);
    var cls = inputs.getElementsByClassName("InputText");
    for(i in cls){
        clear_values(cls[i])
    }
}


