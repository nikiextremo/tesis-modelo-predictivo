import React from "react";
import {
    Checkbox,
    FormControlLabel,
    FormGroup
} from "@mui/material";
import { useState } from "react";
import SubmitComponent from "../../components/submit/submitComponent";
import save from "../../components/helpers/helper"

const Form = () => {
    const [data, setData] = useState({});
    // handleSubmit enviará la informacion a la ruta especificada
    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(data)?.length > 0) {
            return save(
                '/send/form',
                'post',
                data,
                
            );
        }
    };

    return <div className="h-auto pt-0 px-52">
        <SubmitComponent
            handleSubmit={handleSubmit}
            children={
                <form onSubmit={handleSubmit}>
                    <div className="bg-white h-auto">
                        <h3 className="generic-h3 text-center pt-5">Este formulario está creado para brindar una respuesta a tus habilidades, aptitudes y gustos</h3>
                        <h2 className="text-center"> Seccion 2</h2>
                        {/* <p className="ml-3 text-left generic-p">Ten en cuenta que esto es algo personal</p> */}
                        <div className="clearfix">
                            <div className="float-left ml-32">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={(e) => {
                                                    setData({
                                                        ...data,
                                                        "checkbox1": e?.target?.checked
                                                    })
                                                }}
                                            />
                                        } label="Label"
                                    />
                                    <FormControlLabel
                                        required
                                        control={
                                            <Checkbox
                                                onChange={(e) => {
                                                    setData({
                                                        ...data,
                                                        "checkbox2": e?.target?.checked
                                                    })
                                                }}
                                            />}
                                        label="Required"
                                    />
                                </FormGroup>
                            </div>
                            <div className="float-right mr-32">
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                onChange={(e) => {
                                                    setData({
                                                        ...data,
                                                        "checkbox3": e?.target?.checked
                                                    })
                                                }}
                                            />}
                                        label="Label 2" />
                                    <FormControlLabel
                                        required
                                        control={
                                            <Checkbox
                                                onChange={(e) => {
                                                    setData({
                                                        ...data,
                                                        "checkbox4": e?.target?.checked
                                                    })
                                                }}
                                            />}
                                        label="Required 2"
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </form>
            }
            previousPage = {true}
            previous = {('section.one.index')}
        />
    </div>

}
export default Form;