import { ThemeProvider } from '@mui/material/styles'; 
import CssBaseline from '@mui/material/CssBaseline'; 
import theme from './styles/theme';
import './App.css'
import LoginButton from "./components/LoginButton"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <ThemeProvider theme={theme}> 
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */} 
    <CssBaseline /> 
    
    <Router>
        <Navbar />
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        ) : (
          <LoginButton />
        )}
    </Router>
    </ThemeProvider> 
  );
};

export default App;