import { useState } from "react";// sirve para poder crear un State
const Contador = () => {//otro componente que usaremos
    // aca agregamos logica del componente
    //aca creamos el state, que sirve para que cambie lo que se vea, DOM
    const [numero, setNumero ]= useState(1);
    // estas son las funciones que usamos 
    const sumar = ()=>{
        setNumero(numero+1)
        // esta es la forma correcta de actualizar un State
    }
    
    return (
        
        <section className="text-center">
            <h2 >Contador</h2>
            <p>{numero}</p>
            <button className="btn btn-primary m-2" onClick={sumar}>+1</button>
            <button className="btn btn-danger m-2" onClick={()=>{setNumero(numero-1)}}>-1</button>
            {/* Tambien directamente podemos hacer la funcion adentro del onclick como una funcion anonima, es li mosmo que la de arriba de sumar solo que con restar */}
        </section>
    );
};

export default Contador;