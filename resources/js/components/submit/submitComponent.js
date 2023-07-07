import { Button } from "@mui/material";
import save from "../helpers/helper";


const submitComponent = ({children, handleSubmit}) => {
    return <div>
            {
                children && children
            }
            <Button
                variant="contained"
                onClick={handleSubmit}
                type="submit"
            >
                Enviar
            </Button>
    </div>
}
export default submitComponent;

