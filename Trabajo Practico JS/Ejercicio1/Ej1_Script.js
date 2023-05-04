
function ejercicio1(text){
    show(text)
    /*var n1 = Number(prompt("Ingrese el primer numero"));
    var n2 = Number(prompt("Ingrese el segundo numero"))
    */
}

function resolve(text){
    var inputs = document.getElementById(text);
    var inp = inputs.getElementsByTagName("input");
    var n1 = Number(inp[0].value)
    var n2 = Number(inp[1].value)
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

    clear(text)
}

function clear(text){
    var inputs = document.getElementById(text);
    var inp = inputs.getElementsByTagName("input");
    inp[0].value = ""
    inp[1].value = ""
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

function hide(text){
    document.getElementById(text).style.display = "none";
}

function show(text){
    document.getElementById(text).style.display = "grid";
}