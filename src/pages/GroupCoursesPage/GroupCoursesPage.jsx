// import HeroSection from './parts/HeroSection/HeroSection'
import ChessPromo from "./parts/ChessPromo/ChessPromo";
import BenefitsSection from "./parts/BenefitsSection/BenefitsSection";
import LearningProcessSection from "./parts/LearningProcessSection/LearningProcessSection";
import TrainersSlider from "./parts/TrainersSlider/TrainersSlider";
// import ReviewsSection from "./parts/ReviewsSection/ReviewsSection";
import PricingSection from "./parts/PricingSection/PricingSection";
// import CTAFormSection from './parts/CTAFormSection/CTAFormSection'
import Footer from "./parts/Footer/Footer";
import { newPrice } from "./consts/consts";

const GroupCoursesPage = () => {
  return (
    <>
      {/* TODO: убрать при необходимости */}
      {/* <HeroSection/> */}
      <ChessPromo />
      <BenefitsSection />
      <LearningProcessSection />
      <TrainersSlider />
      {/* <ReviewsSection /> */}
      <PricingSection price={newPrice} />
      {/* <CTAFormSection/> */}
      <Footer />
    </>
  );
};

export default GroupCoursesPage;
