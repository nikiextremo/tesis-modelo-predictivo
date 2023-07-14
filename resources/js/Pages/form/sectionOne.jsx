import React, { useEffect } from "react";
import {
    FormGroup
} from "@mui/material";
import { useState } from "react";
import SubmitComponent from "../../components/submit/submitComponent";
import { save, checkCookie } from "../../components/helpers/helper"
import GenericFormControlLabel from "../../components/generic_form/genericForm";
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';

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
    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& [role="separator"]': {
            margin: theme.spacing(0, 2),
        },
    }));
    return <div className="custom-padding-top-left-right">
        <SubmitComponent
            handleSubmit={handleSubmit}
            children={
                <form onSubmit={handleSubmit}>
                    <h3 className="generic-title">Este formulario está creado para brindar una respuesta a tus habilidades, aptitudes y gustos</h3>
                    <h2 className="generic-section-padding-top"> Seccion 1</h2>
                    <p className="text-center generic-p">Ten en cuenta que esto es algo personal</p>
                    <Grid container>
                        <Grid item xs>
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
                        </Grid>
                        <Grid item xs>
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
                        </Grid>
                    </Grid>
                </form>
            }
            previousPage={true}
            previous={'info.index'}
        />
    </div>

}
export default SectionOneForm;