// Bom hace referencia a los métodos de window

//alert("mensaje novo");   alert y prompt son parte de BOM

const comenzar = () => {
    console.log("primer mensaje");
};

setTimeout(comenzar, 5000); // cuando pasan 5000ms se ejecuta la función

setTimeout(() => {
    console.log("hola homero")
}, 1000);// tambien podemos poner la funcion adentro directamente 

setInterval(() => {
    console.log("chinchecnji")//setinterval repite la funcion cada el tiempo que se le indique 
}, 1000);