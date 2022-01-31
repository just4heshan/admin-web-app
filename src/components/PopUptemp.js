import React from "react";
import { Dialog, DialogTitle, ListItem } from "@mui/material";
// import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
// import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";
import { Field, reduxForm } from "redux-form";




const onSubmit = (values) => {
  console.log(values);
}

const style3 = {
  marginLeft: 20,
};

const fullNameInput = (props) => {
  <Input
    {...props.input}
    // className={classes.inputs}
    required
    id="fullName"
    label="Full Name"
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <PersonIcon />
        </InputAdornment>
      ),
    }}
    // variant="outlined"
    type='text'
  />
};

const emailInput = (props) => {
<Input
  {...props.input}
  // className={classes.inputs}
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
  // variant="outlined"
  type='text'
/>;
};

const addressInput = (props) => {
<Input
  {...props.input}
  // className={classes.inputs}
  id="address"
  label="Home Address"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <HomeIcon />
      </InputAdornment>
    ),
  }}
  // variant="outlined"
  type='text'
/>;
};

const phoneNoInput = (props) => {
<Input
  {...props.input}
  // className={classes.secondaryInputs}
  id="phone"
  label="Phone Number"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <LocalPhoneIcon />
      </InputAdornment>
    ),
  }}
  // variant="outlined"
  type='text'
/>;
};

const jobTitleInput = (props) => {
<Input
  {...props.input}
  // className={classes.secondaryInputs}
  id="job"
  label="Job Title"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <WorkIcon />
      </InputAdornment>
    ),
  }}
  // variant="outlined"
  type='text'
/>;
};

function AddCustomerForm( props, {handleSubmit}) {
  const useStyles = makeStyles({
    main: {
      margin: 15,
    },
    inputs: {
      width: 500,
    },
    secondaryInputs: {
      width: 240,
    },
    test: {
      marginLeft: 100,
    },
  });
  
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const classes = useStyles();

  const style1 = {
    color: "#00a152",
    borderColor: "#00a152",
  };

  const style2 = {
    marginLeft: 330,
    backgroundColor: "#00a152",
    opacity: 0.9,
  };

  

  

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add New Customer</DialogTitle>
      <ListItem>
      <form onSubmit={handleSubmit}>
          <div className={classes.main}>
            <Field name="nameInput" component={fullNameInput} />
          </div>
          <div className={classes.main}>
            <Field name="emailInput" component={emailInput} />
          </div>
          <div className={classes.main}>
            <Field name="addressInput" component={addressInput} />
          </div>
          <div className={classes.main}>
            <Field name="phoneNoInput" component={phoneNoInput} />
            <Field name="jobTitleInput" component={jobTitleInput} />
          </div>
          <div className={classes.main}>
            <Button style={style1} variant="outlined">
              Reset
            </Button>
            <Button style={style2}  type="submit"  variant="contained">
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
  onSubmit,
})(AddCustomerForm);

