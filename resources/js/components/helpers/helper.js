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
    queryParams = {},
) => {
    try {
        const customRoute = customParams !== '' ? `${Route}?${customParams}` : Route;
        return axios[method](route(customRoute), {
            data,
        }).then((response) => {
            if (!!returnRoute) {
                const urlWithQueryParams = new URL(route(returnRoute), window.location.origin);
                Object.keys(queryParams).forEach((key) =>
                    urlWithQueryParams.searchParams.append(key, queryParams[key])
                );
                Inertia.get(urlWithQueryParams.toString());
            }
            return response;
        });
    } catch (error) {
        console.error(error);
    }
};

export const checkCookie = (userId) => {
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

export const getValidSelectFormat = (
    items,
    label = '',
    value = '',
    id = ''
) => {
    const items_formated = items?.map((item) => {
        return {
            label: item?.[label],
            value: item?.[value],
            id: item?.[id]
        }
    })
    return items_formated;
}

export const getValidValueSelect = (
    province_id,
    validProvinces
) => {
    const foundProvince = validProvinces?.find(item => province_id === item?.id);
    return foundProvince ? { label: foundProvince?.label, value: foundProvince?.value } : { label: "", value: "" };
};

