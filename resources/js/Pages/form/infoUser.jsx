import React, { useEffect, useState } from 'react';
import SubmitComponent from "../../components/submit/submitComponent";
import { save, checkCookie, getValidSelectFormat, getValidValueSelect } from "../../components/helpers/helper"
import TextField from '@mui/material/TextField';
import { Autocomplete, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Grid, CustomGrid } from '../../components/custom_components/customGrid';

const infoUser = ({
    data,
    provinces
}) => {
    const validProvinces = getValidSelectFormat(provinces, 'ProvinceName', 'ProvinceCode', 'IdProvince');
    const formRef = React.useRef();
    
    const [infoUser, setInfoUser] = useState({
        'Fullname': data?.Fullname ?? '',
        'NumberPhone': data?.phone ?? '',
        'Email': data?.email ?? '',
        'EducationalUnit': data?.EducationalUnit ?? '',
        'StudyPreference': data?.StudyPreference ?? '',
        'ProvinceId': data?.ProvinceId ?? '',
        'Identification': data?.identification ?? '',
        'SchoolTypeId': data?.SchoolTypeId ?? '',
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
                ).then((response) => {});
            }
        }
    };
    const handleChange = (event, value) => {
        setInfoUser({
            ...infoUser,
            [value]: event?.target?.value
        })
    };
    // 
    useEffect(() => {
        checkCookie().status
    }, []);
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
                                        value={infoUser?.Fullname}
                                        onChange={(e) => handleChange(e, 'Fullname')}
                                        required
                                    />
                                    <TextField
                                        type="text"
                                        value={infoUser?.NumberPhone}
                                        onChange={(e) => handleChange(e, 'NumberPhone')}
                                        margin="normal"
                                        label="Numero de teléfono"
                                        variant="outlined"
                                    />
                                    <TextField
                                        type="text"
                                        value={infoUser?.Identification}
                                        onChange={(e) => handleChange(e, 'Identification')}
                                        margin="normal"
                                        label="Numero de cédula o pasaporte"
                                        variant="outlined"
                                    />
                                    <Autocomplete
                                        disablePortal
                                        options={validProvinces}
                                        sx={{ width: 400 }}
                                        renderInput={(params) => <TextField {...params} label="Provincia" />}
                                        value={getValidValueSelect(infoUser?.ProvinceId, validProvinces)}
                                        onChange={(item, newItem) => {
                                            setInfoUser({
                                                ...infoUser,
                                                'ProvinceId': newItem?.id
                                            })
                                        }}
                                        isOptionEqualToValue={(e) => {
                                            return infoUser?.ProvinceId ? e?.id === infoUser?.ProvinceId : { id: '', value: '', label: '' }
                                        }
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
                                        type="Email"
                                        margin="normal"
                                        label="Correo electrónico (e-mail)"
                                        variant="outlined"
                                        value={infoUser?.Email}
                                        onChange={(e) => handleChange(e, 'Email')}
                                    />
                                    <TextField
                                        margin="normal"
                                        id="EducationalUnit"
                                        label="Institución educativa actual"
                                        variant="outlined"
                                        value={infoUser?.EducationalUnit}
                                        onChange={(e) => handleChange(e, 'EducationalUnit')}
                                        required
                                    />
                                    <TextField
                                        margin="normal"
                                        id="StudyPreference"
                                        label="Preferencias de carrera o campo de estudio"
                                        variant="outlined"
                                        value={infoUser?.StudyPreference}
                                        onChange={(e) => handleChange(e, 'StudyPreference')}
                                        required
                                    />
                                    <FormControl key={'SchoolTypeIdControl'}>
                                        <FormLabel id={'SchoolTypeLabel'}>¿Estudias en un colegio público o privado?</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            key={'SchoolTypeIdRadio'}
                                            onChange={(e) => handleChange(e, 'SchoolTypeId')}
                                            value={infoUser?.SchoolTypeId}
                                        >
                                            <FormControlLabel value="2" control={<Radio />} label="Privada" />
                                            <FormControlLabel value="1" control={<Radio />} label="Pública" />
                                        </RadioGroup>
                                    </FormControl>
                                </FormControl>
                            </Grid>
                        </>}
                    />
                </form>
            }
            activeSendButton
        />
    </div>
};

export default infoUser;