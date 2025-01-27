
// usamos parseint o parsefloat por ejemplo, para asegurar que el valor que se ingrese sea pasado a numero 
//(prompt es para mostrar una ventana con un recuadro para escribir
// alert muestra una alerta

const edad = parseInt(prompt('ingrese su edad'))

if(edad===18){
    alert("tiene 18")
}else{
    alert("no tiene 18")
}

// si queremos usar muchas condicionales, podemos usar else if 