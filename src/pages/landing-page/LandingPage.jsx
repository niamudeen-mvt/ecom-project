import DealsSection from "../../components/deals/Deals";
import ProductSection from "../../components/products/Products";
import Loader from "../../components/shared/Loader";
import StaticButtons from "../../components/StaticButton";
import HeroSection from "../../components/HeroSection";
import TestimonialSection from "../../components/testimonials/TestimonialSection";
import LogoSlider from "../../components/LogoSlider";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <LogoSlider />
      <DealsSection />
      <ProductSection />
      <TestimonialSection />
      <Loader />
      <StaticButtons />
    </>
  );
}
