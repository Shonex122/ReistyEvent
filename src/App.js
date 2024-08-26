import { Container, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./styles/themes";

import LandingPage from "./pages/LandingPage/LandingPage";
import LoginSignup from "./pages/LoginSignup";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Container
            maxWidth="lg"
            sx={{
              background: "#fff",
            }}
          >
            <Navbar />
            <LandingPage />
          </Container>
        </ThemeProvider>
        <Routes>
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
