import React from "react";
import { Typography, Paper } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Result = ({ results = [] }) => {
    return (
        <div className="custom-padding-top-left-right">
            <div className="container-white">
                <div className="container">
                    <Typography variant="h4" component="h1" className="title">
                        Según tus resultados, las carreras más afines a tus elecciones son las siguientes:
                    </Typography>
                    <div className="career-list">
                        {results?.dataSaved?.map((result, index) => (
                            <Paper key={index} elevation={2} className="career-item">
                                <Typography variant="h6" className="faculty-title">
                                    {result.F_Name}
                                </Typography>
                                <span>Carrera afin </span><KeyboardDoubleArrowDownIcon />
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
                                    <span className="percentage-value">{(+result.Porcentaje * 10).toFixed(2)}%</span>
                                </Typography>
                            </Paper>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Result; 