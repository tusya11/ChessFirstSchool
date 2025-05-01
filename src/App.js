import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import FailurePage from "./pages/FailurePage/FailurePage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Promo from "./pages/LandingPage/Promo";
import Wrapper from "./Wrapper";
// import NewPrices from "./NewPrices";
import "./App.css";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/landing-page/*" element={<LandingPage />} />
        <Route path="/landing-page/promo/*" element={<Promo />} />
        <Route path="/main/*" element={<Wrapper />} />
        {/* <Route path="/old-prices/*" element={<NewPrices />} /> */}
        <Route path="/success/*" element={<SuccessPage />} />
        <Route path="/fail/*" element={<FailurePage />} />
        <Route path="/*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
