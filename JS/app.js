import { getApi, agregarDatos, borrarDatos } from "./api.js"

(function () {
    document.addEventListener('DOMContentLoaded', imprimirTabla);

    async function imprimirTabla() {
        const datos = await getApi();
        console.log(datos);
        datos.forEach((val, id) => {
            const tablaDatos = document.querySelector('#tabla-datos');
            tablaDatos.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${val.id}</td>
                <td>${val.especie}</td>
                <td>${val.nombreMascota}</td>
                <td>${val.edad} años</td>
                <td>${val.enfermedad}</td>
                <td>${val.propietario}</td>
                <td>
                    <button type="button" class="btn btn-danger delete" data-mascotas="${val.id}">X</button>
                </td>
              </tr>
            `)
        });
    }
    borrar()

    datosFormulario()

})()



function juan(e) {
    e.preventDefault();
    
    const especie = document.querySelector('#especie').value;
    const nombreMascota = document.querySelector('#nombre').value;
    const edad = Number(document.querySelector('#edad').value);
    const enfermedad = document.querySelector('#enfermedad').value;
    const propietario = document.querySelector('#propietario').value;
    const formularioDatos = {
        especie,
        nombreMascota,
        edad,
        enfermedad,
        propietario
    }
    
    console.log(formularioDatos);
    agregarDatos(formularioDatos)

}

function datosFormulario() {
    const formulario = document.querySelector('#formulario-datos');
    formulario.addEventListener('submit', juan)
}

function borrar() {
    addEventListener('click', e => {
        if (e.target.classList.contains('delete')) {
            const id = e.target.dataset.mascotas;
            console.log(id);
            borrarDatos(id)
        }
    })
}