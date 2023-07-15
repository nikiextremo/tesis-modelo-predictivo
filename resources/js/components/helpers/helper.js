import { useEffect } from "react";
import axios from "axios"
import { Inertia } from "@inertiajs/inertia";
import route from "ziggy-js";
import Cookies from "js-cookie";

// La idea de este componente es reutilizarlo al maximo posible
// TODO: dejarlo parametrizado
export const save = (
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

export const checkCookie = () => {
    if (!Cookies.get('cookie')) {
        Inertia.get(route('/'))
        return {
            'status': false
        };
    }
    return {
        'status': true,
        'cookie': Cookies.get('cookie')
    };
}

export const getValidSelectFormat = (provinces) => {
    const provinces_formated = provinces?.map((province) => {
        return {
            label: province?.province_name,
            value: province?.province_code,
            id: province?.id
        }
    })
    return provinces_formated;
}

export const getValidValueSelect = (province_id, validProvinces) => {
    const foundProvince = validProvinces?.find(item => province_id === item?.id);
    return foundProvince ? { label: foundProvince?.label, value: foundProvince?.value } : { label: "", value: "" };
};

