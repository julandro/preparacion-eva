const url = '../DB/db.json'

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

export const agregarDatos = async () => {
    try {
        await fetch(url , {
            method: 'POST',
            headers: JSON.stringify(coger)
        })
    } catch (error) {
        
    }
}

