import { oldPrice } from "../GroupCoursesPage/consts/consts";
import PricingSection from "../GroupCoursesPage/parts/PricingSection/PricingSection";

const ChessGroupsPaymentLegacy = () => {
  return (
    <>
      <PricingSection price={oldPrice} />
    </>
  );
};

export default ChessGroupsPaymentLegacy;
