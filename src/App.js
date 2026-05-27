import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Wrapper from "./Wrapper";
import ChessGroupsPaymentLegacy from "./pages/ChessGroupsPaymentLegacy/ChessGroupsPaymentLegacy";
import ChessProgramPage from "./pages/ChessProgramPage/ChessProgramPage";
import FailurePage from "./pages/FailurePage/FailurePage";
import GroupCoursesPage from "./pages/GroupCoursesPage/GroupCoursesPage";
import HolidaysWithGrandmasters from "./pages/HolidayWithGrandmasters/HolidayWithGrandmasters";
import IESection from "./pages/IESection/IESection";
import LandingPage from "./pages/LandingPage/LandingPage";
import Promo from "./pages/LandingPage/Promo";
import SuccessPage from "./pages/SuccessPage/SuccessPage";

const App = () => (
  <div className="App">
    <HashRouter>
      <Routes>
        <Route path="/landing-page/*" element={<LandingPage />} />
        <Route path="/landing-page/promo/*" element={<Promo />} />
        <Route path="/" element={<Wrapper />} />
        <Route
          path="/holiday-with-grandmasters/*"
          element={<HolidaysWithGrandmasters />}
        />
        <Route path="/contacts" element={<IESection />} />
        <Route path="/additional-program" element={<ChessProgramPage />} />
        <Route path="/chess-groups/*" element={<GroupCoursesPage />} />
        <Route
          path="/chess-groups/legacy/*"
          element={<ChessGroupsPaymentLegacy />}
        />

        <Route path="/success/*" element={<SuccessPage />} />
        <Route path="/fail/*" element={<FailurePage />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  </div>
);

export default App;
