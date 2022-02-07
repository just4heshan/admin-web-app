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
} from "@mui/material";

import AddCustomerForm from "./popUp";

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
  // buttonStyle: {
  //   opacity: 0.9,
  // },
});



function TableData(props) {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false)

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

  const rows = items;

  const classes = useStyles();

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

  const [page, setPage] = React.useState(0);

  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        <AddCustomerForm 
          open={open}
          onClose={handleClose}

        />
      </div>
      <div onClick={popUpFormHandler}>{floatingButton()}</div>
    </div>
  );
}

export default TableData;
