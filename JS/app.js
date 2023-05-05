import { getApi } from "./api.js"

(function () {
    document.addEventListener('DOMContentLoaded', imprimirTabla);

    async function imprimirTabla() {
        const datos = await getApi();
        console.log(datos);
        datos.Veterinaria.forEach((val, id) => {
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
                    <button type="button" class="btn btn-danger">X</button>
                </td>
              </tr>
            `)
        });
    }

})()

function datosFormulario() {
    const formulario = document.querySelector('#formulario-datos');
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const cogerDatosFormulario = Object.fromEntries(new FormData(e.target));
        
        console.log(cogerDatosFormulario);
    })
}

datosFormulario()
