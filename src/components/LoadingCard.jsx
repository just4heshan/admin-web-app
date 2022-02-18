import React from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles(() => ({
    root: {
        height: "calc(100vh - 40px)",
    },
    content: { marginTop: "25%", textAlign: "center", },
    textContainer: { textAlign: "center" },
    loading: {fontSize: "150%",}
}));
const LoadingCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <CircularProgress  color="primary" size={100} />
            </CardContent>
            <CardContent className={classes.textContainer}>
                <Typography variant="subtitle1"><span className={classes.loading}>Connecting...</span></Typography>
            </CardContent>
        </Card>
    );
};

export default LoadingCard;
