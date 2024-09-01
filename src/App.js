import { Container, ThemeProvider } from "@mui/material";
import theme from "./styles/themes";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/SignupPage";
import LandingPage from "./pages/screens/LandingPage/LandingPage";
import "./App.css";
import LoginPage from "./pages/auth/Login";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="lg"
          sx={{
            background: "#fff",
          }}
        >
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/SignUp" element={<SignupPage />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
