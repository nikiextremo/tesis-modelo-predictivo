import { Link, InertiaLink } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Inertia } from "@inertiajs/inertia";

const submitComponent = ({
    children,
    handleSubmit,
    previousPage = false,
    previous = ''
}) => {
    return <div className="container-white">
    {children && children}
    <div
      className={`${previousPage ? "flex justify-between mb-2.5 mt-2.5 mx-5 md:mx-0" : "text-center"}`}
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
              marginBottom: "10px"
            }}
          >
            Regresar
          </Button>
        )}
      </div>
      <div className="flex-shrink-0">
        <Button
          variant="outlined"
          onClick={handleSubmit}
          type="submit"
          endIcon={<SendIcon />}
          style={{
            color: "#52b202",
            borderColor: "#52b202",
            textAlign: "center",
            marginBottom: "10px"
          }}
        >
          Enviar
        </Button>
      </div>
    </div>
  </div>
}
export default submitComponent;

