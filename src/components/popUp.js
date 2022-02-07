import React from "react";
import { Dialog, DialogTitle, ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";
import { Field, reduxForm } from "redux-form";



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


const fullNameInput = ({input}) => {
 
  return (
    <TextField
      {...input}
      fullWidth
      label="Full Name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

const emailInput = ({input}) => {
  return (
    <TextField
      {...input}
      fullWidth
      label="Email"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <EmailIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

const addressInput = ({input}) => {
  return (
    <TextField
      {...input}
      fullWidth
      label="Home Address"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <HomeIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

const phoneNoInput = ({input}) => {
  return (
    <TextField
      {...input}
      label="Phone Number"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocalPhoneIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

const jobTitleInput = ({input}) => {
  return (
    <TextField
      {...input}
      style={style3}
      label="Job Title"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <WorkIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
    />
  );
};

const emailValidate = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined

function AddCustomerForm(props, {handleSubmit, pristine, reset, submitting}) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
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
        <form 
          onSubmit={handleSubmit}
        >
          <div className={classes.inputs}>
            <Field name="nameInput" component={fullNameInput}  type="text" placeholder="First Name" />
          </div>
          <div className={classes.inputs}>
            <Field name="emailInput" component={emailInput}  type="email" />
          </div>
          <div className={classes.inputs}>
            <Field name="addressInput" component={addressInput}  type="text" />
          </div>
          <div className={classes.inputs}>
            <Field name="phoneNoInput" component={phoneNoInput}  type="text" />
            <Field name="jobTitleInput" component={jobTitleInput}  type="text" />
          </div>
          <div className={classes.main}>
            <Button style={style1} disabled={pristine || submitting} onClick={reset} variant="outlined">
              Reset
            </Button>
            <Button style={style2} type="submit" variant="contained" disabled={pristine || submitting}  >
              Submit
            </Button>
          </div>
        </form>
      </ListItem>
    </Dialog>
  );
}

export default reduxForm({
  form: 'add-customer-form',
  emailValidate,
  onSubmit,
  
})(AddCustomerForm);
