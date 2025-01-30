const Contador = () => {//otro componente que usaremos
    return (
        <section className="text-center">
            <h2 >Contador</h2>
            <p>1</p>
            <button className="btn btn-primary m-2">+1</button>
            <button className="btn btn-danger m-2">-1</button>
        </section>
    );
};

export default Contador;