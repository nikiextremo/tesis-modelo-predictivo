import React from 'react';

const PageNotFound = () => {
  return <div>
    <style>
      {`
            body {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh;
              font-family: Arial, sans-serif;
              background-color: #f2f2f2;
            }

            .container {
              text-align: center;
            }

            h1 {
              font-size: 4rem;
              color: #333;
            }

            p {
              font-size: 1.2rem;
              color: #666;
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
              background-color: #555;
            }
          `}
    </style>
    <div className="container">
      <h1>¡Oops!</h1>
      <p>La página que buscas no ha sido encontrada.</p>
      <a href="/" className="button">Volver a la página de inicio</a>
    </div>
  </div>
};

export default PageNotFound;
