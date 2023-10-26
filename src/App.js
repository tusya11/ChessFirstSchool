import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Wrapper from "./Wrapper";
import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/main*" element={<Wrapper />} />
        <Route path="/" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
