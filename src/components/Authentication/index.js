import React from "react";
import { Button, Grid, Divider, CssBaseline } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import CustomLoginTextField from "./CustomLoginTextField";
import { useAuthenticationFormStyles } from "./styles";
import styled from "styled-components";
import { ThemeProvider } from "@mui/styles";
import { theme } from "../../theme";

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
    position: fixed;
`;

const AuthenticationForm = (props) => {
  const classes = useAuthenticationFormStyles();
  const onSubmit = (formValues) => props.onSubmit(formValues);
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
        <form onSubmit={onSubmit} autoComplete="off">
          <Grid
            container
            spacing={3}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} container>
              <Field
                name="email"
                type="email"
                label="Email"
                required
                component={CustomLoginTextField}
                icon={<EmailIcon />}
              />
            </Grid>
            <Grid item xs={12} container>
              <Field
                name="password"
                type="password"
                label="Password"
                required
                component={CustomLoginTextField}
                icon={<LockIcon />}
              />
            </Grid>
          </Grid>
          <div className={classes.actions}>
            {" "}
            <Button
              variant="outlined"
              color="primary"
              type="submit"  
            >
              Log IN
            </Button>
          </div>
        </form>
    </Container>
    </ThemeProvider>
  );
};

// ContactForm.propTypes = {
//     open: PropTypes.bool.isRequired,
//     title: PropTypes.string.isRequired,
//     onClose: PropTypes.func.isRequired,
//     onSubmit: PropTypes.func.isRequired,
// };

function validate(values) {
  const errors = {};
  const { email, name, phoneNumber } = values;
  const emailRegex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const phoneNumberRegex = new RegExp(
    /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\\./0-9]*$/g
  );

  // email must be provided and must be a valid email
  if (!email || !emailRegex.test(email)) {
    errors.email = "A valid email must be provided.";
  }

  // name field must be provided
  if (!name) {
    errors.name = "You must enter a name.";
  }
  // this logic has purpose so that either you leave phone number empty or enter a valid working phone number
  if (phoneNumber && !phoneNumberRegex.test(phoneNumber)) {
    errors.phoneNumber = "A valid working phone number must be provided.";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "authenticationForm",
})(AuthenticationForm);
