import React, { useEffect } from "react";
import {
    FormGroup
} from "@mui/material";
import { useState } from "react";
import SubmitComponent from "../../components/submit/submitComponent";
import { save, checkCookie } from "../../components/helpers/helper"
import GenericFormControlLabel from "../../components/generic_form/genericForm";


const SectionOneForm = ({ data = [] }) => {
    //
    const [checkBox, setCheckBox] = useState({
        'checkbox1': data?.formSectionOne?.checkbox1 ?? false,
        'checkbox2': data?.formSectionOne?.checkbox2 ?? false,
        'checkbox3': data?.formSectionOne?.checkbox3 ?? false,
        'checkbox4': data?.formSectionOne?.checkbox4 ?? false,
    });
    // handleSubmit enviará la informacion a la ruta especificada
    const handleSubmit = (event) => {
        if (checkCookie().status) {
            event.preventDefault();
            if (Object?.values?.(checkBox)?.length > 0) {
                const newData = {
                    'formSectionOne': checkBox,
                    'cookie': checkCookie().cookie
                }
                return save(
                    'section.one.save',
                    'post',
                    newData,
                    '',
                    'section.two.index',
                ).then((response) => { });
            }
        }
    };

    return <div className="h-auto pt-0 px-52">
        <SubmitComponent
            handleSubmit={handleSubmit}
            children={
                <form onSubmit={handleSubmit}>
                    <div className="bg-white h-auto">
                        <h3 className="generic-h3 text-center pt-5">Este formulario está creado para brindar una respuesta a tus habilidades, aptitudes y gustos</h3>
                        <h2 className="text-center"> Seccion 1</h2>
                        <p className="ml-3 text-left generic-p">Ten en cuenta que esto es algo personal</p>
                        <div className="clearfix">
                            <div className="float-left ml-32">
                                <FormGroup>
                                    <GenericFormControlLabel
                                        label={'checkbox1'}
                                        checked={checkBox?.checkbox1}
                                        onChange={(e) => {
                                            setCheckBox({
                                                ...checkBox,
                                                "checkbox1": e?.target?.checked
                                            })
                                        }}
                                    />
                                    <GenericFormControlLabel
                                        label={'checkbox2'}
                                        checked={checkBox?.checkbox2}
                                        onChange={(e) => {
                                            setCheckBox({
                                                ...checkBox,
                                                "checkbox2": e?.target?.checked
                                            })
                                        }}
                                    />
                                </FormGroup>
                            </div>
                            <div className="float-right mr-32">
                                <FormGroup>
                                    <GenericFormControlLabel
                                        label={'checkbox3'}
                                        checked={checkBox?.checkbox3}
                                        onChange={(e) => {
                                            setCheckBox({
                                                ...checkBox,
                                                "checkbox3": e?.target?.checked
                                            })
                                        }}
                                    />
                                    <GenericFormControlLabel
                                        label={'checkbox4'}
                                        checked={checkBox?.checkbox4}
                                        onChange={(e) => {
                                            setCheckBox({
                                                ...checkBox,
                                                "checkbox4": e?.target?.checked
                                            })
                                        }}
                                    />
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                </form>
            }
        // previous = ''
        />
    </div>

}
export default SectionOneForm;