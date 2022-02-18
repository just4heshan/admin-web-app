import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useCustomTextField } from "./styles";
const CustomTextField = ({ input, label, meta, required, type, icon }) => {
    const classes = useCustomTextField();
    const errorMessage = meta.error;
    const isTouched = meta.touched;
    return (
        <TextField
            {...input}
            error={isTouched && errorMessage ? true : false} // only show the error indicate when the field has been touched
            required={required}
            label={label}
            placeholder={label}
            variant="outlined"
            helperText={isTouched && errorMessage ? errorMessage : ""}
            type={type}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">{icon}</InputAdornment>
                ),
            }}
            className={classes.root}
        />
    );
};

export default CustomTextField;
