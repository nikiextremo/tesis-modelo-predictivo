'use client';
import React from "react";
import { Typography, Paper, Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import RotateLeftOutlinedIcon from '@mui/icons-material/RotateLeftOutlined';
import Cookies from 'js-cookie';
import { Inertia } from "@inertiajs/inertia";
import route from "ziggy-js";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

const Result = ({ results = [] }) => {
    const userId = results?.dataSaved.find((id) => id?.Id_User)
    return (
        <div className="custom-padding-top-left-right">
            <div className="container-white">
                <div className="container">
                    <Typography variant="h4" component="h1" className="title">
                        Según tus resultados, las carreras más afines a tus elecciones son las siguientes:
                    </Typography>
                    <div className="career-list">
                        {results?.dataSaved?.map((result, index) => (
                            <div key={index} className="career-item-container">
                                <Paper elevation={2} className="career-item">
                                    <Typography variant="h6" className="faculty-title">
                                        {result.F_Name}
                                    </Typography>
                                    <span>Carrera afin </span>
                                    <KeyboardDoubleArrowDownIcon />
                                    <Typography variant="body1" className="career-name pt-2">
                                        <a className="career-a" href={result.C_Link} target="_blank" rel="noopener noreferrer">
                                            {`< ${result.C_Name} >`}
                                            <span className="redirect-message">
                                                <OpenInNewIcon />
                                            </span>
                                        </a>
                                    </Typography>
                                    <Typography variant="body2" className="compatibility-percentage">
                                        El porcentaje de compatibilidad de acuerdo a tus respuestas es de{" "}
                                        <span className="percentage-value">{(+result.Porcentaje).toFixed(2)}%</span>
                                    </Typography>
                                </Paper>
                                <Box sx={{ width: '100%', mt: 2 }}>
                                    <LinearProgress key={index} variant="determinate" value={parseInt((+result.Porcentaje * 5).toFixed(2))} sx={{ height: 15 }} />
                                </Box>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <Button
                        variant="outlined"
                        onClick={() => {
                            //actualizar la cookie, para ello, guardar la cookie anterior y mantener la nueva
                            const previousCookie = Cookies.get('cookie');

                            // Crear el nuevo timestamp
                            const newTimestamp = Date.now();

                            // Actualizar la cookie con el nuevo timestamp
                            const newCookie = previousCookie.split('_')[0] + '_' + newTimestamp;
                            // setear la nueva cookie
                            Cookies.set('cookie', newCookie);

                            // Guardar las referencias en diferentes constantes
                            const oldCookie = previousCookie;
                            const updatedCookie = newCookie;
                            // Cambiar la cookie anterior por la nueva
                            Inertia.post(route('update.cookie'), {
                                'oldCookie': oldCookie,
                                'updatedCookie': updatedCookie,
                                'userId': userId?.Id_User
                            })
                            // Ir a la pagina de la informacion del usuario
                            // console.log(updatedCookie, oldCookie);
                        }}
                        href={route('info.index')}
                        startIcon={<RotateLeftOutlinedIcon />}
                        style={{
                            color: "#3158D1",
                            borderColor: "#C83A16",
                            textAlign: "center",
                            marginBottom: "10px",
                            marginTop: "10px"
                        }}
                    >Volver a realizar cuestionario
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Result; 