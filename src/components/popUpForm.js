import React from "react";
import { Dialog, DialogContent, DialogTitle, ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';
import { Field, reduxForm } from "redux-form";







export default function SimpleDialog(props) {

  const useStyles = makeStyles({
    main: {
      margin: 15,
    },
    inputs:{
      width: 500,
    },
    secondaryInputs: {
      width: 240,
    },
    test:{
      marginLeft: 100,
    }
  });

  const style1 = {
    color: "#00a152",
    borderColor: "#00a152",
  }

  const style2 = {
    marginLeft: 330,
    backgroundColor: "#00a152",
    opacity: 0.9,
  }

  const style3 = {
    marginLeft: 20,
  }


  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

 

  const classes = useStyles();

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add New Customer</DialogTitle>
      <ListItem>
        <div>
        <form noValidate autoComplete="off">
        
        <div className={classes.main}>
        <TextField className={classes.inputs}
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
           variant="outlined"
         />
        </div>
         <div className={classes.main}>
         <TextField className={classes.inputs}
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
         />
         </div>
         <div className={classes.main}>
         <TextField className={classes.inputs}
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
         />
         </div>
         <div className={classes.main}>
         <TextField className={classes.secondaryInputs}
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
         />
         <TextField style={style3} className={classes.secondaryInputs}
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
         />
         </div>
         <div className={classes.main}>
         <Button style={style1}   variant="outlined">Cancel</Button>  
         <Button style={style2}   variant="contained">Submit</Button>
         
         </div>
       </form>
        </div>
      </ListItem>
    </Dialog>
  );
}
