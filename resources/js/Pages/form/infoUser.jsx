import React, { useState } from 'react';
import SubmitComponent from "../../components/submit/submitComponent";
import { save, checkCookie, getValidSelectFormat, getValidValueSelect } from "../../components/helpers/helper"
import TextField from '@mui/material/TextField';
import { Autocomplete, FormControl } from '@mui/material';
import { Grid, CustomGrid } from '../../components/custom_components/customGrid';

const infoUser = ({
    data,
    provinces
}) => {
    const validProvinces = getValidSelectFormat(provinces);
    const formRef = React.useRef();
    const [infoUser, setInfoUser] = useState({
        'fullname': data?.fullname ?? '',
        'dateBorn': data?.dateBorn ?? '',
        'phone': data?.phone ?? '',
        'email': data?.email ?? '',
        'educationalUnit': data?.educationalUnit ?? '',
        'studyPreference': data?.studyPreference ?? '',
        'province_id': data?.province_id ?? '',
    });
    // handleSubmit enviará la informacion a la ruta especificada
    const handleSubmit = (event) => {
        formRef?.current?.reportValidity()
        if (checkCookie().status) {
            event.preventDefault();
            if (Object?.values?.(infoUser)?.length > 0) {
                const newData = {
                    ...infoUser,
                    'cookie': checkCookie().cookie
                }
                return save(
                    'info.save',
                    'post',
                    newData,
                    '',
                    'section.one.index',
                ).then((response) => { });
            }
        }
    };
    const handleChange = (event, value) => {
        setInfoUser({
            ...infoUser,
            [value]: event?.target?.value
        })
    };
    return <div className="custom-padding-top-left-right">
        <SubmitComponent
            handleSubmit={handleSubmit}
            children={
                <form onSubmit={handleSubmit} ref={formRef}>
                    <h3 className="generic-title">Este formulario está creado para brindar una respuesta a tus habilidades, aptitudes y gustos</h3>
                    <h2 className="generic-section-padding-top"> Informacion acerca del usuario</h2>
                    <p className="text-center generic-p">Ten en cuenta que esto es algo personal</p>
                    <CustomGrid
                        children={<>
                            <Grid
                                item
                                xs={6}
                            >
                                <FormControl fullWidth>
                                    <TextField
                                        margin="normal"
                                        label="Nombre y apellido"
                                        variant="outlined"
                                        value={infoUser?.fullname}
                                        onChange={(e) => handleChange(e, 'fullname')}
                                        required
                                    />
                                    {/* <DatePicker
                                         selected={infoUser.dateBorn ? formatDateForDatePicker(infoUser?.dateBorn) : null}
                                        label="Fecha de Nacimiento"
                                        onChange={(date) => setInfoUser({
                                            ...infoUser,
                                            //TODO VERIFICAR como se guarda esto
                                            'dateBorn': date.$d.toISOString()
                                        })}
                                        required
                                    /> */}
                                    <TextField
                                        type="text"
                                        value={infoUser?.phone}
                                        onChange={(e) => handleChange(e, 'phone')}
                                        margin="normal"
                                        label="Numero de teléfono"
                                        variant="outlined"
                                    />
                                    <Autocomplete
                                        disablePortal
                                        options={validProvinces}
                                        sx={{ width: 400 }}
                                        renderInput={(params) => <TextField {...params} label="Provincia" />}
                                        value={getValidValueSelect(infoUser?.province_id, validProvinces)}
                                        onChange={(item, newItem) => {
                                            setInfoUser({
                                            ...infoUser,
                                            'province_id': newItem?.id
                                        })}}
                                        isOptionEqualToValue={(e) => {
                                            return e?.id === infoUser?.province_id}
                                        }
                                    />
                                </FormControl>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                            >
                                <FormControl fullWidth>
                                    <TextField
                                        type="email"
                                        margin="normal"
                                        label="Correo electrónico (e-mail)"
                                        variant="outlined"
                                        value={infoUser?.email}
                                        onChange={(e) => handleChange(e, 'email')}
                                    />
                                    <TextField
                                        margin="normal"
                                        id="educationalUnit"
                                        label="Institución educativa actual"
                                        variant="outlined"
                                        value={infoUser?.educationalUnit}
                                        onChange={(e) => handleChange(e, 'educationalUnit')}
                                        required
                                    />
                                    <TextField
                                        margin="normal"
                                        id="studyPreference"
                                        label="Preferencias de carrera o campo de estudio"
                                        variant="outlined"
                                        value={infoUser?.studyPreference}
                                        onChange={(e) => handleChange(e, 'studyPreference')}
                                        required
                                    />
                                </FormControl>
                            </Grid>
                        </>}
                    />
                </form>
            }
        />
    </div>
};

export default infoUser;