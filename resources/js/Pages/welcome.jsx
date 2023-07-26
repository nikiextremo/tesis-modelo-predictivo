import React, { useEffect } from "react";
import Cookies from 'js-cookie';
import { Button } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Welcome = () => {
    useEffect(() => {
        if (!Cookies.get('cookie')) {
            // Generar una cookie aleatoria
            const customCookie = Math.random().toString(30).substring(2);
            window.alert('La cookie aun no se ha generado o fue borrada. Generando nueva coookie para poder realizar peticiones');
            // Establecer la cookie con el valor aleatorio
            Cookies.set('cookie', customCookie + "_" + Date.now());
        }
    })

    return <div className="custom-padding-top-left-right">
        <div className="container-white">
            <h1 className="generic-title">Bienvenido/a a nuestra página de orientación vocacional</h1>
            <p className="ml-3 text-justify text-center generic-p">En esta página, te ayudaremos a encontrar la mejor opción de carrera para ti en base a tus intereses, habilidades y aptitudes. Completa nuestro formulario y procesaremos tus respuestas para brindarte recomendaciones personalizadas.</p>
            <p className="ml-3 text-justify text-center generic-p">No te preocupes, toda la información que proporciones será tratada de forma confidencial y solo se utilizará con el propósito de ofrecerte una orientación vocacional adecuada.</p>
            <div className="text-center">
                <Button
                    variant="outlined"
                    href={route('info.index')}
                    endIcon={<ArrowForwardIosIcon />}
                    style={{
                        'color': 'rgb(88 61 175)', // Color de texto
                        'borderColor': 'rgb(47 196 74)', // Color del borde
                        'marginBottom': "10px"
                    }}
                >
                    Comenzar Formulario
                </Button>
            </div>
        </div>
    </div>
}

export default Welcome;

