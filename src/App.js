import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Process from "./views/Process";
import Consultants from "./views/Consultants";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/minprofil" element={<Profile />} />
          <Route path="/prosess" element={<Process />} />
          <Route path="/konsulenter" element={<Consultants />} />
        </Routes>
      </div>
      ;
    </BrowserRouter>
  );
}

export default App;
