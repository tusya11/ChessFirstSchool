import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import FailurePage from "./pages/FailurePage/FailurePage";
import Wrapper from "./Wrapper";
import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/main/*" element={<Wrapper />} />
        <Route path="/success/*" element={<SuccessPage />} />
        <Route path="/fail/*" element={<FailurePage />} />
        <Route path="/" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
