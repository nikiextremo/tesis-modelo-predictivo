import React, { useEffect } from "react";
import {
    FormGroup,
    Paper,
    Box,
} from "@mui/material";
import { useState } from "react";
import SubmitComponent from "../../components/submit/submitComponent";
import { save, checkCookie } from "../../components/helpers/helper"
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';

export const Grid = styled(MuiGrid)(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& [role="separator"]': {
        margin: theme.spacing(0, 2),
    },
}));
export const ItemComponent = ({ title, content }) => {
    return (
        <div key={title}>
            <h2>{title}</h2>
        </div>
    );
};

const SectionOneForm = ({ data = [], user = [], dataSaved = [] }) => {
    //
    const [userSelections, setUserSelections] = useState([]);
    const [currentTab, setCurrentTab] = useState(0);
    const [activeSendButton, setActiveSendButton] = useState(0);
    const [currentTabStyle, setCurrentTabStyle] = useState('');
    //
    useEffect(() => {
        checkCookie().status
        setCurrentTabStyle(`tab-selected`);
    }, [currentTab]);

    useEffect(() => {
        setActiveSendButton(data.length - 1);
    }, [setActiveSendButton, data]);
    // handleSubmit enviará la informacion a la ruta especificada
    const handleSubmit = (event) => {
        if (checkCookie().status) {
            event.preventDefault();
            if (Object?.values?.(userSelections)?.length > 0) {
                const newData = {
                    'data': userSelections,
                    'IdUser': user?.IdUser,
                    'tokenQuestion': checkCookie().cookie,
                }
                return save(
                    'section.one.save',
                    'post',
                    newData,
                    '',
                    'result.index',
                    ''
                ).then((response) => { });
            }
        }
    };
    // Función para manejar el cambio de selección del usuario
    const handleOnChange = (event, IdCCharacteristic) => {
        setUserSelections((prevSelections) => {
            // Encuentra el índice de la pregunta con el mismo ID en el estado actual
            const questionIndex = prevSelections?.findIndex((question) => {
                return question?.IdCCharacteristic === IdCCharacteristic
            });
            // Si la pregunta ya está en el estado, actualiza su valor seleccionado
            if (questionIndex !== -1) {
                const updatedSelections = [...prevSelections];
                updatedSelections[questionIndex].ValueQuestion = event?.target?.value; // Corrección aquí
                return updatedSelections;
            }
            // Si la pregunta no está en el estado, agrégala con su valor seleccionado
            return [...prevSelections, { IdCCharacteristic, ValueQuestion: event.target.value }]; // Corrección aquí
        });
    };
    const handleNextTab = () => {
        setCurrentTab((prevTab) => prevTab + 1);
    };

    const handlePreviousTab = () => {
        setCurrentTab((prevTab) => prevTab - 1);
    };
    return <div className="custom-padding-top-left-right">
        <SubmitComponent
            handleSubmit={handleSubmit}
            children={
                <form onSubmit={handleSubmit}>
                    <h3 className="generic-title">Este formulario está creado para brindar una respuesta a tus habilidades, aptitudes y gustos</h3>
                    <p className="text-center generic-p">Ten en cuenta que esto es algo personal</p>
                    <Tabs selectedIndex={currentTab} onSelect={setCurrentTab}>
                        <TabList className="navbar">
                            {data?.map((item, index) => (
                                <Tab key={`${index}_${item?.Area}`} className={currentTab === index ? 'tab-selected' : 'nav-item'}>
                                    {item?.Area}
                                </Tab>
                            ))}
                        </TabList>
                        {data?.map((item, index) => (
                            <TabPanel key={`${index}_${item?.Area}`}>
                                <div key={index}>
                                    <Grid container>
                                        <Grid item xs>
                                            <FormGroup style={{ textAlign: 'center' }}>
                                                {item?.Questions?.map((question, indexQuestion) => {
                                                    const { IdCCharacteristic, C_description } = question;
                                                    const userSelection = userSelections?.find((userSelectionsQuestion) => userSelectionsQuestion?.IdCCharacteristic === IdCCharacteristic);
                                                    return (
                                                        <Paper
                                                            key={indexQuestion}
                                                            elevation={3}
                                                            style={{
                                                                padding: '10px',
                                                                margin: '10px',
                                                                borderRadius: '8px',
                                                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
                                                            }}
                                                        >
                                                            <Box
                                                                display="flex"
                                                                flexDirection="column"
                                                                alignItems="center"
                                                                sx={{
                                                                    backgroundColor: '#f5f5f5',
                                                                    borderRadius: '8px',
                                                                    padding: '16px',
                                                                    transition: 'background-color 0.2s ease-in-out',
                                                                    '&:hover': {
                                                                        backgroundColor: '#e0e0e0',
                                                                    },
                                                                }}
                                                            >
                                                                <FormLabel id={`${indexQuestion}_formLabel`} style={{ color: 'black' }}>
                                                                    {C_description}
                                                                </FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    id={`${indexQuestion}_radioGroup`}
                                                                    value={userSelection?.ValueQuestion || ''}
                                                                    onChange={(event) => handleOnChange(event, IdCCharacteristic)}
                                                                >
                                                                    <FormControlLabel value="1" control={
                                                                        <Radio
                                                                            checkedIcon={<DoneOutlineOutlinedIcon />}
                                                                        />
                                                                    }
                                                                        label="Me interesa" />
                                                                    <FormControlLabel value="0" control={
                                                                    <Radio
                                                                            checkedIcon={<DoneOutlineOutlinedIcon />}
                                                                        />
                                                                        } label="No me interesa" />
                                                                </RadioGroup>
                                                            </Box>
                                                        </Paper>
                                                    );
                                                })}
                                            </FormGroup>
                                        </Grid>
                                    </Grid>
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </form>
            }
            previousPage={currentTab === activeSendButton ? true : false}
            backButtonLabel={'Volver a editar usuario'}
            handleNextClick={handleNextTab}
            handlePreviousTab={handlePreviousTab}
            activateHandleNextClick={currentTab === activeSendButton ? false : true}
            activateHandleBackClick={currentTab > 0 ? true : false}
            activeSendButton={currentTab === activeSendButton ? true : false}
            previous={'info.index'}
        />
    </div>

}
export default SectionOneForm;