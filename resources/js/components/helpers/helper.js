import axios from "axios"
import { Inertia } from "@inertiajs/inertia";
import route from "ziggy-js";
// La idea de este componente es reutilizarlo al maximo posible
// TODO: dejarlo parametrizado
const save = (
    Route,
    method,
    data,
    customParams = '',
    returnRoute = '',
) => {
    try {
        const customRoute = customParams !== '' ? `${Route}?${customParams}` : Route;
        return axios[method](route(customRoute), {
            data,
        }).then((response) => {
                if (!!returnRoute) {
                    Inertia.get(route(returnRoute));
                }
                return response
        })
    } catch (error) {
        console.error(error);
        // console.log(error);
    }
    
}

export default save;
