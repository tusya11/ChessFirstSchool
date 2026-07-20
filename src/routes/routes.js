import { Navigate } from "react-router-dom";
import Wrapper from "../Wrapper";
import LandingPage from "../pages/LandingPage/LandingPage";
import Promo from "../pages/LandingPage/Promo";
import HolidaysWithGrandmasters from "../pages/HolidayWithGrandmasters/HolidayWithGrandmasters";
import SummerTournamentSeries from "../pages/SummerTournamentSeries/SummerTournamentSeries";
import GroupCoursesPage from "../pages/GroupCoursesPage/GroupCoursesPage";
import ChessGroupsPaymentLegacy from "../pages/ChessGroupsPaymentLegacy/ChessGroupsPaymentLegacy";
import IESection from "../pages/IESection/IESection";
import ChessProgramPage from "../pages/ChessProgramPage/ChessProgramPage";
import SuccessPage from "../pages/SuccessPage/SuccessPage";
import FailurePage from "../pages/FailurePage/FailurePage";

export const routes = [
  {
    path: "/",
    element: <Wrapper />,
    index: true,
  },
  {
    path: "/landing-page",
    element: <LandingPage />,
    children: [
      {
        path: "promo",
        element: <Promo />,
      },
    ],
  },
  {
    path: "/holiday-with-grandmasters",
    element: <HolidaysWithGrandmasters />,
  },
  {
    path: "/competition",
    element: <SummerTournamentSeries />,
  },
  {
    path: "/contacts",
    element: <IESection />,
  },
  {
    path: "/additional-program",
    element: <ChessProgramPage />,
  },
  {
    path: "/chess-groups",
    element: <GroupCoursesPage />,
    children: [
      {
        path: "legacy",
        element: <ChessGroupsPaymentLegacy />,
      },
    ],
  },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/fail",
    element: <FailurePage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];

export const PATHS = {
  HOME: "/",
  LANDING: "/landing-page",
  LANDING_PROMO: "/landing-page/promo",
  HOLIDAY: "/holiday-with-grandmasters",
  COMPETITION: "/competition",
  CONTACTS: "/contacts",
  ADDITIONAL_PROGRAM: "/additional-program",
  CHESS_GROUPS: "/chess-groups",
  CHESS_GROUPS_LEGACY: "/chess-groups/legacy",
  SUCCESS: "/success",
  FAIL: "/fail",
};
