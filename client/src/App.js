import { BrowserRouter, Route, Routes } from "react-router-dom"; // v6
import "./App.css";

import LoginRegister from "./components/LoginRegister/LoginRegister";

function App() {
  return (
    <div className="App">
      <h1>hi</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
