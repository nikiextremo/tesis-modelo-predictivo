import React from "react";
import {
    Checkbox,
    FormControlLabel,
} from "@mui/material";

const GenericFormControlLabel = ({
    label = "",
    checked,
    onChange = () => { }
}) => {
    return <div>
        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={onChange}
                />
            }
            label={label}
        />
    </div>
}

export default GenericFormControlLabel;