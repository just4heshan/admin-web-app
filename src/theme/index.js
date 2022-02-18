import { createTheme } from "@mui/material/styles";
import overrides from "./overrides";
const baseTheme = {
    palette: {
        primary: {
            light: "#33a095",
            main: "#00897b",
            dark: "#005f56",
            contrastText: "#fff",
        },
        secondary: {
            light: "#737373",
            main: "#616161",
            dark: "#333333",
        },
        success: {
            light: "#81c784",
            main: "#4caf50",
            dark: "#388e3c",
            contrastText: "rgba(0, 0, 0, 0.87)",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f",
            contrastText: "#fff",
        },
        background: {
            default: "rgb(240,240,240)",
        },
    },
    components: { ...overrides },
};

export const theme = createTheme(baseTheme);
