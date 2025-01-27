const validarform = () => {
    let mail = document.getElementById("inputmail").value;
    let nombre = document.getElementById("inputnombre").value;
    let edad = document.getElementById("inputedad").value;

    if (mail == "" || !mail.includes("@")) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese un Mail valido",
        });
        return false;
    }
    if (nombre == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese un nombre valido",
        });
        return false;
    }
    if (edad == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ingrese una edad valida",
        });
        return false;
    }
    return true;
}

// Función para agregar datos a la tabla
const agregar = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    if (validarform()) {
        let mail = document.getElementById("inputmail").value;
        let nombre = document.getElementById("inputnombre").value;
        let edad = document.getElementById("inputedad").value;

        // Agregar la nueva fila al cuerpo de la tabla
        const tabla = document.getElementById("tabla").getElementsByTagName('tbody')[0];
        tabla.innerHTML += `
            <tr>
                <td>${mail}</td>
                <td>${nombre}</td>
                <td>${edad}</td>
                <td>
                    <button class="btn btn-danger" onclick="eliminar(this)">Eliminar</button>
                </td>
            </tr>
        `;
; // Usar innerHTML para agregar la nueva fila

        // Limpiar los campos del formulario
        document.getElementById("inputmail").value = "";
        document.getElementById("inputnombre").value = "";
        document.getElementById("inputedad").value = "";
    }
}

// Función para eliminar una fila
const eliminar = (btn) => {
    const fila = btn.parentNode.parentNode; // Obtener la fila del botón
    fila.parentNode.removeChild(fila); // Eliminar la fila de la tabla
}