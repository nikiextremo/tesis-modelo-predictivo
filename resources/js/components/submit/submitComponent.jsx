import { Link, InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const submitComponent = ({
    children,
    handleSubmit,
    previousPage = false,
    previous = ''
}) => {
    return <div>
        {
            children && children
        }
        <div className="pt-5">
            <div className={`${previousPage ? "flex justify-between mx-5 md:mx-0" : "text-center"}`}>
                <div className="flex-shrink-0">
                    {previousPage && (
                        <Button
                            href={route(previous)}
                            startIcon={<ArrowBackIosIcon />}
                            variant="outlined"
                            style={{
                                'color': '#2c387e', // Color de texto
                                'borderColor': '#2c387e', // Color del borde
                            }}
                        >
                            Regresar
                        </Button>
                    )}
                </div>
                <div className={"flex-shrink-0"}>
                    <Button
                        variant="outlined"
                        onClick={handleSubmit}
                        type="submit"
                        endIcon={<SendIcon />}
                        style={{
                            'color': '#52b202', // Color de texto
                            'borderColor': '#52b202', // Color del borde
                        }}
                    >
                        Enviar
                    </Button>
                </div>
            </div>
        </div>
    </div>
}
export default submitComponent;

