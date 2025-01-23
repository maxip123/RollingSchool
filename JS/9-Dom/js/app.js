
const modificar = ()=>{// esta funcion la utilizamos con onclick en el boton del html 
    console.log("hola homero")
    //obtenemos el titulo del h1 con su id 
    const titulo= document.getElementById("titulo");// tambien podemos usar getelementbyclass/tagname con getelementby , por otro lado podemos usar querySelector(me gusta mas getelement)
    //titulo.innertext="Este titulo se cambio con innertext" innertext se usa para cambiar texto pero no te deja poner clases y html, innerhtml te deja crear html 
    titulo.classList.add("my-5")//podemos agregar tambien clases, con classlist.add
    //titulo.classList.remove para eliminar una clase
    titulo.innerHTML="Este titulo se cambio con innerHTML"
    console.log(titulo.className);// classname, muestra un string con las clases 

}

const botonagregar = document.getElementById("boton");
const nuevocontenido = document.getElementById("agregar");
//aca hacemos en evento en js , es click, a diferencia de onclick en html
botonagregar.addEventListener("click",()=>{

    nuevocontenido.innerHTML='<h2 class="mt-5">HOLA HOMERO</h2> '// con innerhtml creamos esta etiqueta, con clase y su contenido, se crea en la id del div tomado

})

const input = document.getElementById("input")// .value nos trae el valor, y no el boton entero 
const botoncopia = document.getElementById("botoncopia");
const formulario = document.getElementById("formulario");
const copia = document.getElementById("copia");

formulario.addEventListener("submit", (e)=>{
e.preventDefault();//en evento submit hace que se reinicie la pagina, esto lo previene 
const copiaUsar= input.value
console.log(copiaUsar)

copia.innerHTML+=`<h3>${copiaUsar}</h3>`// con ${} hacemos que se tome los valores en el innerhtml
// += para que se vaya sumando
})