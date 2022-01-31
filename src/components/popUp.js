import React from "react";
import { Dialog, DialogTitle, ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";
import { Field, reduxForm } from "redux-form";
import { useState } from "react";

const useStyles = makeStyles({
  main: {
    margin: 0,
  },
  inputs: {
    margin: 15,
  },
});

const style3 = {
  marginLeft: 20,
};

const onSubmit = (values) => {
  console.log(values);
};

const fullNameInput = (props) => {
 
  return (
    <TextField
      {...props.input}
      fullWidth
      required
      id="fullName"
      label="Full Name"
      floatingLabelText="Full Name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      type="string"
    />
  );
};

const emailInput = (props) => {
  return (
    <TextField
      {...props.input}
      fullWidth
      required
      id="email"
      label="Email"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      type="string"
    />
  );
};

const addressInput = (props) => {
  return (
    <TextField
      {...props.input}
      fullWidth
      id="address"
      label="Home Address"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <HomeIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      type="string"
    />
  );
};

const phoneNoInput = (props) => {
  return (
    <TextField
      {...props.input}
      id="phone"
      label="Phone Number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocalPhoneIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      type="string"
    />
  );
};

const jobTitleInput = (props) => {
  return (
    <TextField
      style={style3}
      {...props.input}
      id="job"
      label="Job Title"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <WorkIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      type="string"
    />
  );
};

const validate = values => {
  const errors = {}
  const requiredFields = [ 'fullName', 'email' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

function AddCustomerForm(props, { handleSubmit, valid }) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const classes = useStyles();

  const style1 = {
    color: "#00a152",
    borderColor: "#00a152",
    marginLeft:15,
  };

  const style2 = {
    marginLeft: 315,
    backgroundColor: "#00a152",
    opacity: 0.9,
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add New Customer</DialogTitle>
      <ListItem>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputs}>
            <Field name="nameInput" component={fullNameInput} value={props.value} />
          </div>
          <div className={classes.inputs}>
            <Field name="emailInput" component={emailInput} value={props.value} />
          </div>
          <div className={classes.inputs}>
            <Field name="addressInput" component={addressInput} value={props.value} />
          </div>
          <div className={classes.inputs}>
            <Field name="phoneNoInput" component={phoneNoInput} value={props.value} />
            <Field name="jobTitleInput" component={jobTitleInput} value={props.value} />
          </div>
          <div className={classes.main}>
            <Button style={style1} variant="outlined">
              Reset
            </Button>
            <Button style={style2} type="submit" variant="contained" disabled={!valid} >
              Submit
            </Button>
          </div>
        </form>
      </ListItem>
    </Dialog>
  );
}

export default reduxForm({
  form: "add-customer-form",
  validate,
  onSubmit,
  
})(AddCustomerForm);
