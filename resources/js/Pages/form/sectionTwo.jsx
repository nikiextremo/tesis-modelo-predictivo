import React from "react";
import {
    FormGroup
} from "@mui/material";
import { useState } from "react";
import SubmitComponent from "../../components/submit/submitComponent";
import { save, checkCookie } from "../../components/helpers/helper"
import GenericFormControlLabel from "../../components/generic_form/genericForm";

const SectionTwoForm = ({ data = [] }) => {
    //
    const [checkBox, setCheckBox] = useState({
        'checkbox1': data?.formSectionTwo?.checkbox1 ?? false,
        'checkbox2': data?.formSectionTwo?.checkbox2 ?? false,
        'checkbox3': data?.formSectionTwo?.checkbox3 ?? false,
        'checkbox4': data?.formSectionTwo?.checkbox4 ?? false,
    });
    // handleSubmit enviará la informacion a la ruta especificada
    const handleSubmit = (event) => {
        if (checkCookie().status) {
            event.preventDefault();
            if (Object?.values?.(checkBox)?.length > 0) {
                const newData = {
                    'formSectionTwo': checkBox,
                    'cookie': checkCookie().cookie
                }
                return save(
                    'section.two.save',
                    'post',
                    newData,
                    '',
                    'section.three.index',
                ).then((response) => { });
            }
        }
    };
    return <div className="custom-padding-top-left-right">
        <SubmitComponent
            handleSubmit={handleSubmit}
            children={
                <form onSubmit={handleSubmit}>
                    <h2 className="pt-5 generic-section-padding-top"> Seccion 2</h2>
                    <div className="clearfix flex items-center">
                        <div className="w-1/2 pr-2">
                            <FormGroup style={{ textAlign: "center" }}>
                                <GenericFormControlLabel
                                    label={'Opcion 1'}
                                    checked={checkBox?.checkbox1}
                                    onChange={(e) => {
                                        setCheckBox({
                                            ...checkBox,
                                            "checkbox1": e?.target?.checked
                                        });
                                    }}
                                />
                                <GenericFormControlLabel
                                    label={'Opcion 2'}
                                    checked={checkBox?.checkbox2}
                                    onChange={(e) => {
                                        setCheckBox({
                                            ...checkBox,
                                            "checkbox2": e?.target?.checked
                                        });
                                    }}
                                />
                            </FormGroup>
                        </div>
                        <div className="w-1/2 pl-2">
                            <FormGroup style={{ textAlign: "center" }}>
                                <GenericFormControlLabel
                                    label={'Opcion 3'}
                                    checked={checkBox?.checkbox3}
                                    onChange={(e) => {
                                        setCheckBox({
                                            ...checkBox,
                                            "checkbox3": e?.target?.checked
                                        });
                                    }}
                                />
                                <GenericFormControlLabel
                                    label={'Opcion 4'}
                                    checked={checkBox?.checkbox4}
                                    onChange={(e) => {
                                        setCheckBox({
                                            ...checkBox,
                                            "checkbox4": e?.target?.checked
                                        });
                                    }}
                                />
                            </FormGroup>
                        </div>
                    </div>
                </form>
            }
            previousPage={true}
            previous={'section.one.index'}
        />
    </div>

}
export default SectionTwoForm;