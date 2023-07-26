import { Link, InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Inertia } from "@inertiajs/inertia";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const submitComponent = ({
  children,
  handleSubmit,
  previousPage = false,
  previous = '',
  ref = '',
  activeSendButton = false,
  backButtonLabel = 'Regresar',
  handleNextClick = (() => {}),
  handlePreviousTab = (() => {}),
  activateHandleNextClick = false,
  activateHandleBackClick = false,
}) => {
  return <div className="container-white">
    {children && children}
    <div
      className={`${previousPage ? "flex justify-between mb-2.5 mt-2.5 mx-5 md:mx-0" : activateHandleNextClick || activateHandleBackClick ? "flex justify-between mb-2.5 mt-2.5 mx-5 md:mx-0" : "text-center"}`}
    >
      <div className="flex-shrink-0">
        {previousPage && (
          <Button
            // href={route(previous)}
            onClick={() => {
              Inertia.get(route(previous));
            }}
            startIcon={<ArrowBackIosIcon />}
            variant="outlined"
            style={{
              color: "#2c387e",
              borderColor: "#2c387e",
              textAlign: "center",
              marginBottom: "10px",
              marginTop: "10px"
            }}
          >
            {backButtonLabel}
          </Button>
        )}
      </div> 
      <div className="flex-shrink-0">
      {activateHandleBackClick && <Button
          variant="contained"
          onClick={handlePreviousTab}
          startIcon={<ArrowLeftIcon />}
          style={{
            textAlign: "left",
            marginBottom: "10px",
            marginTop: "10px"
          }}
        >
          Anterior
        </Button>}
      </div>
      <div className="flex-shrink-0">
      {activateHandleNextClick && <Button
          variant="contained"
          onClick={handleNextClick}
          endIcon={<ArrowRightIcon />}
          style={{
            textAlign: "right",
            marginBottom: "10px",
            marginTop: "10px"
          }}
        >
          Siguiente
        </Button>}
      </div>
      <div className="flex-shrink-0">
      {activeSendButton && <Button
          variant="outlined"
          onClick={handleSubmit}
          type="submit"
          endIcon={<SendIcon />}
          style={{
            color: "#52b202",
            borderColor: "#52b202",
            textAlign: "right",
            marginBottom: "10px",
            marginTop: "10px"
          }}
        >
          Enviar
        </Button>}
      </div>
    </div>
  </div>
}
export default submitComponent;

