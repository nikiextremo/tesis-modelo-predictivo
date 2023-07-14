import React from 'react';
import TextField from '@mui/material/TextField';

const customTextField = ({
    label= '',
    key = '',
    variant = '',
    value = '',
    onChange = () => {}
}) => {

    return <TextField
        margin="normal"
        label={label}
        variant={variant}
        required
        value={value}
        onChange={onChange}
    />
}
export default customTextField;