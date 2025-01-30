const Informacion = (props) => {//un props es un dato inmutable
    return (
        <main>
            <h2>concepto de React</h2>
            <p>React es una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario (UI) de manera eficiente y declarativa <br />comision:{props.comision}</p>
        </main>
    );
};

export default Informacion;