//clases, las clases sirven parar crear objetos , asi no crear varios objetos literales repetidamente
//abtraccion: este concepto hace referencia la creacion de la clase en si, es enfocarse en lo importante de la clase y definirlo, con sus propiedades y metodos,
// es decir cuando creamos una clase persona, abstraemos sus propiedades y metodos necesarios

class Persona{
    #dni// esta es una declaracion de una propiedad privada (encapsulacion) sirve para que no se pueda modificar de forma externa a la clase, ni tampoco leer, a no ser  que sea 
    //con un metodo interno de la clase 

    //el construcor sirve para pasar los valores
    constructor(nombre,apellido,dni){
        this.nombre=nombre;
        this.apellido=apellido;
        this.#dni=dni;// esta es la propiedad privada

    }
    //metodos
    saludar(){
        console.log("hola soy " + this.nombre);//this hace referencia a los valores de este objeto clase
    }
    mostrardni(){// Podemos mostrar la propiedad privada con este metodo O Con un getter
        console.log(this.#dni)
    }
    //Este es un get, que creo una propiedad computada de la propiedad privada, asi simplificar la sintaxis
    //GETTER Y SETTER
    //GETTER: es decir con esto, podemos conseguir  el valor de la propiedad programa fuera de la clase, por ejemplo con un console.log(persona1.apellido)
    get dni(){
        return this.#dni
        
    }
    //Setter sirve para modificar la propiedad privada 
    set dni(nuevodni){
        this.#dni=nuevodni
    }
}

const persona1 = new Persona("sorane","PRIETO","44603232");
persona1.saludar();
persona1.mostrardni();
const persona2 = new Persona("albornoz","Pquepasa","44633242");
persona2.saludar();
console.log()

//USAMOS EL GETTER
console.log(persona1.dni)
//USAMOS EL SETTER
persona1.dni="111111"
console.log(persona1.dni)

//Herencia, la herencia es cuando una clase hereda las propiedades y metodos de la clase padre
// hacemos el construtor, y super con lo que contiene el constructor anterior, eso hereda todo lo que incluye Persona

class estudiante extends Persona{
    constructor(nombre,apellido,dni,curso,colegio){
        super(nombre,apellido,dni)
        this.curso=curso
        this.colegio=colegio

        
    }

    //Polimorfismo hace refencia a cambiar algo, en este caso cambiamos el metodo saludarar que heredamos anteriormente
    saludar(){
        console.log("yo sel estudiante" + this.nombre)
    }

}

const maxi = new estudiante("maxi","hola","323232","1A","casa jam");

console.log(maxi.nombre);
maxi.saludar();

//Como se puede ver podemos usar los metodos y propiedades de la clase persona  

