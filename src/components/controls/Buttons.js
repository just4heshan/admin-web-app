// import React from "react";
// import { Button, Fab, makeStyles } from "@mui/material";
// import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

// const useStyles = makeStyles({

//     viewButtonColor: {
//       background: "linear-gradient(45deg, #00a152 90%, #33eb91 30%)",
//       color: "white",
//       height: 35,
//       padding: "0 30px",
//     },
//   });



// export const editButton = () => {
//     return (
//       <Button variant="outlined" color="success">
//         Edit
//       </Button>
//     );
//   };

// export  const viewButton = () => {
//     const classes = useStyles();
//     return (
//       <Button className={classes.viewButtonColor} variant="contained">
//         View
//       </Button>
//     );
//   };

// export  const floatingButton = () => {
//     const style = {
//       margin: 0,
//       top: "auto",
//       right: 4,
//       bottom: 65,
//       left: "auto",
//       position: "fixed",
//       boxShadow: 0,
//       opacity: 0.8,
//       backgroundColor: "#00a152",
//     };

//     return (
//         <Fab style={style} color="primary" aria-label="add" size="small">
//           <PersonAddAltIcon />
//         </Fab>
//       );
// };