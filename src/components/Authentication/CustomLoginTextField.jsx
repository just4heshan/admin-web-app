import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useCustomLoginTextField } from "./styles";
const CustomLoginTextField = ({ input, label, meta, required, type, icon }) => {
    const classes = useCustomLoginTextField();
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

export default CustomLoginTextField;
