//objeto con notacion literal, un objeto es algo que adentro tiene muchos elementos, por ejemplo una pelicula tiene nombres,genero año, etc

const pelicula = {
    //propiedades
    nombre:"peliculon chat",
    genero:"ñamñam",
    anio:2024,
    disponible:true,
    //metodos
    reproducir:function(){
        console.log(this) 
        //this hace referencia a donde esta reprodociendo el metodo, es decir EN ESTE CASO al objeto, por ejemplo aca no usamos pelicula.nombre, usariamos this.nombre
        //pero this solo funciona en los objetos cuando se usa fuction, la funcion normal, en cambio en una funcion flecha no funciona 
        console.log(reproduciendo)
    },
    pausar:()=>{
        console.log(pausa)
    }
}
console.log(pelicula)

//acceder a las propiedades y metodos
pelicula.reproducir()
console.log(pelicula.nombre)

//agregar  propiedad

pelicula.hola = "hola"

//eliminar propiedad

delete pelicula.hola