// import HeroSection from './parts/HeroSection/HeroSection'
import { newPrice } from "./consts/consts";
import BenefitsSection from "./parts/BenefitsSection/BenefitsSection";
import ChessPromo from "./parts/ChessPromo/ChessPromo";
import Footer from "./parts/Footer/Footer";
import LearningProcessSection from "./parts/LearningProcessSection/LearningProcessSection";
import PricingSection from "./parts/PricingSection/PricingSection";
import TrainersSlider from "./parts/TrainersSlider/TrainersSlider";

// import ReviewsSection from "./parts/ReviewsSection/ReviewsSection";
// import CTAFormSection from './parts/CTAFormSection/CTAFormSection'

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
