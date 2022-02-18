import AuthenticationForm from "./components/Authentication";
import ContactApp from "./ContactApp";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/styles";
import { CssBaseline } from "@mui/material";
import { theme } from "./theme";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        {!isAuth && <AuthenticationForm />}
        {isAuth && <ContactApp />}
      </Container>
    </ThemeProvider>
  );
}

export default App;
