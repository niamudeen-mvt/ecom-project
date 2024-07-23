import Header from "../../components/Header";
import LogoSlider from "../../components/Slider";
import StaticButtons from "../../components/StaticButton";
import HeroSection from "./HeroSection";

export default function LandingPage() {
  return (
    <div className="container max-w-[120rem] m-auto px-[10%] xl:px-0 flex flex-col gap-10">
      <Header />
      <HeroSection />
      <LogoSlider />
      <StaticButtons />
    </div>
  );
}
