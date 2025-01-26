// Bom hace referencia a los métodos de window

//alert("mensaje novo");   alert y prompt son parte de BOM

const comenzar = () => {
  console.log("primer mensaje");
};

setTimeout(comenzar, 5000); // cuando pasan 5000ms se ejecuta la función

setTimeout(() => {
  console.log("hola homero");
}, 1000); // tambien podemos poner la funcion adentro directamente

const intervalo = setInterval(() => {
  // Podemos agergar los intervalos a un const
  console.log("chinchecnji"); //setinterval repite la funcion cada el tiempo que se le indique
}, 1000);

clearInterval(intervalo); // Sirve para detener el intervalo



const hora = document.getElementById("Hora");

const actHora=()=>{
    const fechaactual = new Date();
    hora.innerHTML=`${fechaactual.getHours()}:${fechaactual.getMinutes()}:${fechaactual.getSeconds()}`
}

setInterval(actHora,1000);