function ejercicio(text){
    show(text);
}
/*Ejercicio 9 */
function inter_tu(){
    var aux = splitting("Search_cant",' ');
    alert(aux);
    var a = document.getElementById("text_busc").value;
    var count = 0
    for(i in aux){
        if(a === aux[i]){
            count ++
        }
    }
    alert("Cantidad de repeticiones = " + count)
    
}
/*Ejercicio 8*/
function pow_tencia(){
    var inp =in_greso("Ej8_Containers");
    var n1 = Number(inp[0].value);
    var n2 = Number(inp[1].value);
    alert(Math.pow(n1,n2))
}
/*Ejercicio 7*/
function reverse_string(){
    var a = document.getElementById("Reverse_text").value
    a= a.split("").reverse().join("")
    document.getElementById("Reverse_text").value = a
}
/*Ejercicio 6*/
function give_ranges(){
    var a = Number(document.getElementById("rangeA").value);
    var b = Number(document.getElementById("rangeB").value);
    
    if (a > b){
        document.getElementById("WritingEj6").value = generatenumb(b,a)
        return;
    }
    document.getElementById("WritingEj6").value = generatenumb(a,b)
}

function generatenumb(min,may){
    txt ="Listado de numeros: \n"
    for(i = min ; i<= may; i++){
        txt += String(i)+ " ";
    }
    return txt;
}
/*Ejercicio 5*/
function may_men(){
    var aux = splitting("May_MenorArea",',').map(Number);
   
    document.getElementById("Mayor_Ej5").value = Math.max(...aux)
    document.getElementById("Menor_Ej5").value = Math.min(...aux)
}
/*Ejercicio 4*/
function promedio(){
    var aux = splitting("Text_numbers",',').map(Number);
    var suma = 0;
    var cant = 0;
    
    for(i in aux){
        if(!isNaN(aux[i])){
            suma += aux[i];
            cant ++;
        }
    }
    document.getElementById("Promedio_response").value = suma/cant;
}
/*Ejercicio 3 */
function exercise3(){
    var aux = splitting("Text_areanames",',');

    for(i in aux){
        alert(aux[i]);
    }
}
function splitting(text,simbol) {
   var TXT_Area = document.getElementById(text);
   return TXT_Area.value.split(simbol);
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
    
   /* var inputs = document.getElementById("Ej1_Containers");
    var inp = inputs.getElementsByTagName("input"); */
    var inp = in_greso("Ej1_Containers");
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

/*Navigation Conviniencies */
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
function in_greso(text){
    var inputs = document.getElementById(text);
    return inputs.getElementsByTagName("input");
}