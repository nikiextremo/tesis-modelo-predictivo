import React from "react";

const Welcome = () => {
    return <div className="container">
        <style>
            {`
            body {
                font - family: Arial, sans-serif;
            background-color: #f2f2f2;
            }

            .container {
                max - width: 800px;
            margin: 0 auto;
            padding: 40px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }

            h1 {
                font - size: 2.5rem;
            color: #333;
            text-align: center;
            margin-bottom: 20px;
            }

            p {
                font - size: 1.2rem;
                color: #666;
                line-height: 1.5;
            }

            .button {
                display: inline-block;
            padding: 10px 20px;
            background-color: #333;
            color: #fff;
            text-decoration: none;
            border-radius: 4px;
            font-weight: bold;
            transition: background-color 0.3s ease;
            }

            .button:hover {
                background - color: #555;
            }
            `}
        </style>
        <h1>Bienvenido/a a nuestra página de orientación vocacional</h1>
        <p>En esta página, te ayudaremos a encontrar la mejor opción de carrera para ti en base a tus intereses, habilidades y aptitudes. Completa nuestro formulario y procesaremos tus respuestas para brindarte recomendaciones personalizadas.</p>
        <p>No te preocupes, toda la información que proporciones será tratada de forma confidencial y solo se utilizará con el propósito de ofrecerte una orientación vocacional adecuada.</p>
        <div className="text-center">
            <a href="/form/section/one" className="button">Comenzar el formulario</a>
        </div>
    </div>
}

export default Welcome;

