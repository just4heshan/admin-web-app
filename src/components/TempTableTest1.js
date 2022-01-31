import React from "react";
import axios from "axios";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Checkbox,
  Dialog,
  DialogTitle,
  ListItem,
} from "@mui/material";
import Input from "@mui/material/Input";
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

const useStyles = makeStyles({
  table: {
    widows: "100%",
  },
  viewButtonColor: {
    background: "linear-gradient(45deg, #00a152 90%, #33eb91 30%)",
    color: "white",
    height: 35,
    padding: "0 30px",
  },
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
  
  // buttonStyle: {
  //   opacity: 0.9,
  // },
});



function TableData({handleSubmit}) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false)
  // const [selectedValue, setSelectedValue] = useState('bob')

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480"
      );
      setItems(response.data);
      console.log(response.data);
    };
    fetchData();
  }, []);

  const style1 = {
    color: "#00a152",
    borderColor: "#00a152",
  };

  const style2 = {
    marginLeft: 330,
    backgroundColor: "#00a152",
    opacity: 0.9,
  };

  const style3 = {
    marginLeft: 20,
  };

  const rows = items;

  const classes = useStyles();

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const editButton = () => {
    return (
      <Button variant="outlined" color="success">
        Edit
      </Button>
    );
  };

  const viewButton = () => {
    return (
      <Button className={classes.viewButtonColor} variant="contained">
        View
      </Button>
    );
  };

  const fullNameInput = (props) => {
  return (
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
    variant="outlined"
    type='text'
  />
  );
  };
  
  const emailInput = (props) => {
  return (
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
  />
  );
  };
  
  const addressInput = (props) => {
   return (
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
  />
   );
  };
  
  const phoneNoInput = (props) => {
    return (
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
    />
    );
  };
  
  const jobTitleInput = (props) => {
    return (
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
  />
    );
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const floatingButton = () => {
    const style = {
      margin: 0,
      top: "auto",
      right: 4,
      bottom: 65,
      left: "auto",
      position: "fixed",
      boxShadow: 0,
      opacity: 0.8,
      backgroundColor: "#00a152",
    };
    return (
      <Fab style={style} color="primary" aria-label="add" size="small">
        <PersonAddAltIcon />
      </Fab>
    );
  };


  const popUpFormHandler = () => {
    setOpen(true)
  };

  const handleClose = (vlaue) => {
    setOpen(false)
    // setSeletedValue(value)
  }

  return (
    <div>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <Checkbox size="small" />
                <TableCell>ID</TableCell>
                <TableCell>Full name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone number</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Job title</TableCell>
                <TableCell>Edit</TableCell>
                <TableCell>View</TableCell>
                <TableCell>{}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id}>
                  <Checkbox checkboxSelection size="small" />
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.jobTitle}</TableCell>
                  <TableCell>{editButton()}</TableCell>
                  <TableCell>{viewButton()}</TableCell>
                  <TableCell>{}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
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

      </div>
      <div onClick={popUpFormHandler}>{floatingButton()}</div>
    </div>
  );
}

export default reduxForm({
  form: 'add-customer-form',
  onSubmit,
})(TableData);;
