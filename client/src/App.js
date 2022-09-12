import { BrowserRouter, Route, Routes } from "react-router-dom"; // v6

import { ThemeProvider } from "styled-components";
import theme from "./theme";

import LoginRegister from "./components/LoginRegister/LoginRegister";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/register" element={<LoginRegister />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
