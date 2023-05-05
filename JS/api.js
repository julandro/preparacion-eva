const url = 'http://localhost:4003/Veterinaria'

export const getApi = async () => {
    try {
        const response = await fetch(url);
        const datos = await response.json();
        console.log(datos);
        return datos;
    } catch (error) {
        console.log(error);
    }
}

export const agregarDatos = async (cogerDatos) => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cogerDatos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}

export const borrarDatos = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
}
