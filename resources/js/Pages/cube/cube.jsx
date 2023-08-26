import React from "react";

const Cube = () => {
  const iframeStyles = {
    width: "100%",  // El iframe ocupará el 100% del ancho del contenedor
    height: "100%", // El iframe ocupará el 100% de la altura del contenedor
    border: "none", // Quitamos el borde del iframe para que se vea mejor
  };

  const containerStyles = {
    width: "100vw", // 100% del ancho de la ventana del navegador
    height: "100vh", // 100% de la altura de la ventana del navegador
    padding: "10px", // Ajusta el padding según necesites
  };
{/* <iframe title="FORMATO_VALIDO" width="1140" height="541.25" src="" frameborder="0" allowFullScreen="true"></iframe> */}
  return (
    <div style={containerStyles} className="custom-padding-top-left-right">
      <div className="container-white" style={{ width: "100%", height: "100%" }}>
        <iframe
          title="PB_TEST"
          src="https://app.powerbi.com/reportEmbed?reportId=5a7e00a9-4dce-4537-9b20-ed89849fca03&autoAuth=true&ctid=a6ba6586-401b-47f1-93af-d681c2ad04e7"
          frameBorder="0"
          allowFullScreen="true"
          style={iframeStyles}
        ></iframe>
      </div>
    </div>
  );
};
export default Cube;
