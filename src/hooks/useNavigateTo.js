import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  return {
    navigate,
    goTo: (path, options = {}) => navigate(path, options),
    goHome: () => navigate(PATHS.HOME),
    goToCompetition: () => navigate(PATHS.COMPETITION),
    goToHoliday: () => navigate(PATHS.HOLIDAY),
    goToContacts: () => navigate(PATHS.CONTACTS),
    goToChessGroups: () => navigate(PATHS.CHESS_GROUPS),
    goToSuccess: () => navigate(PATHS.SUCCESS),
    goToFail: () => navigate(PATHS.FAIL),
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
  };
};
