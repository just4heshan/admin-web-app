import React from "react";
import PropTypes from "prop-types";
import { Drawer, Grid, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTableEditBarStyles } from "./styles";

const TableEditBar = ({ selected, onDelete, customActions, ...rest }) => {
    const classes = useTableEditBarStyles();
    const open = selected.length > 0; // only open the drawer when there are some contacts selected
    return (
        <Drawer
            anchor="bottom"
            open={open}
            PaperProps={{ elevation: 1 }}
            variant="persistent"
        >
            <div {...rest} className={classes.root}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item md={12}>
                        <div className={classes.actions}>
                            <Button
                                onClick={onDelete}
                                variant="contained"
                                color="secondary"
                                startIcon={<DeleteIcon />}
                            >
                                Delete {selected.length} data
                            </Button>
                            {customActions &&
                                customActions.map((actionComp) => actionComp)}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Drawer>
    );
};

TableEditBar.propTypes = {
    onDelete: PropTypes.func,
    selected: PropTypes.array.isRequired,
    customActions: PropTypes.arrayOf(PropTypes.element),
};

export default TableEditBar;
