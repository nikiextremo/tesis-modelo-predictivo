import React from "react";
import ReactDOM from "react-dom";
import Form from "./form/form";

function Index() {
    return <div className="container">
        <h3 className="text-center pt-10">Por favor rellena las siguientes opciones de acuerdo a tu criterio</h3>
        <Form />
    </div>
}

export default Index;

ReactDOM.render(<Index />, document.getElementById('index'));