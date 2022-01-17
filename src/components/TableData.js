import React from "react";
import { makeStyles } from "@mui/styles";
import {  Button, 
          Table, 
          TableBody, 
          TableFooter,
          TableCell,
          TableContainer,
          TableHead,
          TableRow,
          Paper,
          TablePagination,
          Checkbox,
         } from "@mui/material";


const useStyles = makeStyles({
  table: {
    widows: "100%",
  },
  viewButtonColor: {
    background: "linear-gradient(45deg, #00a152 90%, #33eb91 30%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 35,
    padding: "0 30px",
  },
});

function TableData(props) {
  const rows = props.arrayData;

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

  return (
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
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 49 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TableFooter>
        <TableRow>
          <TablePagination
            component="div"
            count={rows.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </TableContainer>
  );
}

export default TableData;
