import { IoChevronBackSharp, IoChevronForward } from "react-icons/io5";

export default function NavigationButton() {
  return (
    <div className="absolute left-[50%] bottom-[5%] lg:bottom-[10%] deals-swiper-buttons">
      <div class="swiper-button-prev swiper-button-disabled roundBtn shadow-lg">
        <IoChevronForward />
      </div>
      <div class="swiper-button-next roundBtn bg-white shadow-lg">
        <IoChevronBackSharp />
      </div>
    </div>
  );
}
