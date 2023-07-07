import {
    Checkbox,
    FormControlLabel,
    FormGroup
} from "@mui/material";
import { useState } from "react";
import SubmitComponent from "../submit/submitComponent";
import save from "../helpers/helper";

function Form() {
    const [data, setData] = useState({});
    // handleSubmit enviará la informacion a la ruta especificada
    const handleSubmit = (event) => {
        event.preventDefault();
        return save(
            '/api/formulario',
            'post',
            data
        );
    };

    return <div className="h-auto pt-9 px-52">
        <SubmitComponent
            handleSubmit={handleSubmit}
            children={
                <form onSubmit={handleSubmit}>
                    <div className="bg-red-400 h-auto">
                        <p className="text-center">Este formulario está creado para brindar una respuesta a tus habilidades, aptitudes y gustos</p>
                        <p className="ml-3 text-left">Ten en cuenta que esto es algo personal</p>
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
                                            />} label="Label"
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
        />
    </div>

}
export default Form;