import axios from "axios"

// La idea de este componente es reutilizarlo al maximo posible
// TODO: dejarlo parametrizado
const save = (
    route,
    method,
    data,
) => {
    return axios[method](route, {
        data
    })
}

export default save;
