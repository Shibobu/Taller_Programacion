function ejercicio1(){
    
    document.getElementById("Text_containers").hidden = false
    var n1 = Number(prompt("Ingrese el primer numero"));
    var n2 = Number(prompt("Ingrese el segundo numero"))

    alert("Suma " + suma(n1,n2))
    alert("Resta: " + resta(n1,n2))
    alert("Multiplicacion: " + multp(n1,n2))
    var res = div(n1,n2)
    if (!isNaN(res)){
        alert("Division: " + res)
    }
    else alert("Todo mal capo, ingresaste un 0 no se puede dividir por eso ")
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