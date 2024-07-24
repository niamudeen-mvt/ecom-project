import DealsSection from "../../components/deals/Deals";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductSection from "../../components/products/Products";
import LogoSlider from "../../components/Slider";
import StaticButtons from "../../components/StaticButton";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <>
      <div className="customContainer flex flex-col gap-10">
        <Header />
        <HeroSection />
        <LogoSlider />
        <StaticButtons />
      </div>
      <DealsSection />
      <ProductSection />
      <Footer />
    </>
  );
}
