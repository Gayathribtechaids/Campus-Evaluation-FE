import { ThemeProvider, createTheme } from "@mui/material";
import { NotificationsPage } from "./pages/NotificationsPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotificationsPage />
    </ThemeProvider>
  );
}


