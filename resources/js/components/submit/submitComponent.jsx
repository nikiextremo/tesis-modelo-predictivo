import { Link, InertiaLink  } from "@inertiajs/inertia-react";
import { Button } from "@mui/material";


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
        <div className="text-center pt-5">
            <Button
                variant="contained"
                onClick={handleSubmit}
                type="submit"
            >
                Enviar
            </Button>
        </div>
        <div className="text-center pt-5">
            {
                previousPage && <Link href={route(previous)} preserveState>
                Regresar
              </Link>
            }
        </div>
    </div>
}
export default submitComponent;

