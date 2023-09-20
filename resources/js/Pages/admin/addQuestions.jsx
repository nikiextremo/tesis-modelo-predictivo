import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { save, getValidSelectFormat } from "../../components/helpers/helper"
import { Autocomplete, FormControl, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Grid, CustomGrid } from '../../components/custom_components/customGrid';
import GenericFormControlLabel from '../../components/generic_form/genericForm';

const AddQuestions = ({ careerList, questionsList }) => {
    const formRef = React.useRef();
    // Es importante almacenar la lista de preguntas en un useState para poder almacenar el agregado al select
    const [question, setQuestion] = useState(questionsList);
    // handleQuestionSubmit enviará la question a la tabla de Career_Characteristic
    const handleQuestionSubmit = (event) => {
        formRef?.current?.reportValidity()
        event.preventDefault();
        if (Object?.values?.(characteristic)?.length > 0) {
            return save(
                'questions.save',
                'post',
                characteristic,
                '',
                '',
            ).then((response) => {
                // Despues de guardar, actualizamos la lista del select
                const data = response?.data;
                setQuestion((prevQuestion) => [
                    ...prevQuestion,
                    {
                        'id': data?.id,
                        'C_description': data?.C_description
                    }
                ]);
            });
        }
    };
    const handleCareerQuestionSubmit = (event) => {
        formRef?.current?.reportValidity()
        event.preventDefault();
        if (Object?.values?.(careerCharacteristic)?.length > 0) {
            return save(
                'career.questions.save',
                'post',
                careerCharacteristic,
                '',
                '',
            ).then((response) => { });
        }
    };
    const [characteristic, setCharacteristic] = useState({
        'Career_Characteristic': ""
    })
    const [careerCharacteristic, setCareerCharacteristic] = useState({
        'IdCareer': [], // Inicializar como una lista vacía para almacenar múltiples IDs
        'IdCharacteristic': "",
    });
    const handleSelectAll = () => {
        // Verificar si todas las carreras están seleccionadas o no
        const allSelected = careerList.every(career => careerCharacteristic.IdCareer.includes(career.IdCareer));

        // Si todas están seleccionadas, deseleccionarlas, de lo contrario, seleccionarlas todas
        if (allSelected) {
            setCareerCharacteristic((prevState) => ({
                ...prevState,
                IdCareer: [],
            }));
        } else {
            setCareerCharacteristic((prevState) => ({
                ...prevState,
                IdCareer: careerList.map(career => career.IdCareer),
            }));
        }
    };
    return <div className="custom-padding-top-left-right">
        <form onSubmit={handleQuestionSubmit} ref={formRef}>
            <div className="container-white">
                <h1 className="generic-title">Agregar/Crear preguntas</h1>
                <div className="text-center">
                    {/* Traerse las carreras del backend para enlazar con la preguntas */}
                    <CustomGrid
                        children={<>
                            <Grid
                                item
                                xs={6}
                            >
                                <FormControl fullWidth>
                                    <TextField
                                        fullWidth
                                        type="text"
                                        margin="normal"
                                        label="Caracteristica de la carrera"
                                        variant="outlined"
                                        value={characteristic?.Career_Characteristic}
                                        onChange={(e) =>
                                            setCharacteristic({
                                                ...characteristic,
                                                'Career_Characteristic': e?.target?.value
                                            })
                                        }
                                    />
                                </FormControl>
                            </Grid>
                        </>
                        }
                    />
                    <h2>
                        Enviar caracteristica a la base de datos
                    </h2>
                    <Button
                        variant="outlined"
                        onClick={handleQuestionSubmit}
                        type="submit"
                        endIcon={<SendIcon />}
                        style={{
                            color: "#52b202",
                            borderColor: "#52b202",
                            textAlign: "center",
                            marginBottom: "10px",
                            marginTop: "10px"
                        }}
                    >
                        Enviar
                    </Button>
                </div>
            </div>
        </form>
        <form onSubmit={handleCareerQuestionSubmit} ref={formRef}>
            <div className="container-white">
                <h1 className="generic-title">Linkear Carrera con pregunta</h1>
                <div className="text-center">
                    {/* Traerse las carreras del backend para enlazar con la preguntas */}
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <FormControlLabel
                                key="selectAll"
                                label="Seleccionar todo"
                                control={
                                    <Checkbox
                                        checked={careerList.length > 0 && careerList.every(career => careerCharacteristic.IdCareer.includes(career.IdCareer))}
                                        onChange={handleSelectAll}
                                    />
                                }
                            />
                            <FormGroup style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                                {careerList?.map((career) => (
                                    <FormControlLabel
                                        key={career.IdCareer}
                                        label={career.C_Name}
                                        control={
                                            <Checkbox
                                                checked={careerCharacteristic?.IdCareer?.includes(career?.IdCareer)}
                                                onChange={(event, e) => {
                                                    const checked = event?.target?.checked;
                                                    const careerId = career?.IdCareer;
                                                    setCareerCharacteristic((prevState) => {
                                                        const updatedCareerIds = checked
                                                            ? [...prevState?.IdCareer, careerId] // Agregar el ID a la lista
                                                            : prevState?.IdCareer?.filter((id) => id !== careerId); // Remover el ID de la lista

                                                        return {
                                                            ...prevState,
                                                            'IdCareer': updatedCareerIds,
                                                        };
                                                    });
                                                }}
                                            />
                                        }
                                    />
                                ))}
                            </FormGroup>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <Autocomplete
                                    disablePortal
                                    options={getValidSelectFormat(question, 'C_description', 'id', '')}
                                    renderInput={(params) => <TextField {...params} label="Caracteristica" />}
                                    onChange={(item, newItem) => {
                                        setCareerCharacteristic({
                                            ...careerCharacteristic,
                                            'IdCharacteristic': newItem?.value,
                                        });
                                    }}
                                    isOptionEqualToValue={(e) => {
                                        return e?.value === careerCharacteristic?.IdCharacteristic;
                                    }}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <h2>
                        Elegir la carrera y despues linkearla a una caracteristica
                    </h2>
                    <Button
                        variant="outlined"
                        onClick={handleCareerQuestionSubmit}
                        type="submit"
                        endIcon={<SendIcon />}
                        style={{
                            color: "#52b202",
                            borderColor: "#52b202",
                            textAlign: "center",
                            marginBottom: "10px",
                            marginTop: "10px"
                        }}
                    >
                        Linkear
                    </Button>
                </div>
            </div>
        </form>
    </div>
}
export default AddQuestions;
