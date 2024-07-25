import DealsSection from "../../components/deals/Deals";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductSection from "../../components/products/Products";
import Loader from "../../components/shared/Loader";
import StaticButtons from "../../components/StaticButton";
import HeroSection from "./HeroSection";
import TestimonialSection from "../../components/testimonials/TestimonialSection";
import LogoSlider from "../../components/LogoSlider";

export default function LandingPage() {
  return (
    <>
      <div className="customContainer flex flex-col gap-10">
        <Header />
        <HeroSection />
        <LogoSlider />
      </div>
      <DealsSection />
      <ProductSection />
      <TestimonialSection />
      <Footer />
      <Loader />
      <StaticButtons />
    </>
  );
}
