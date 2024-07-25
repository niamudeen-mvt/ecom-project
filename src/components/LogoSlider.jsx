import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import FirstSlideImgae from "../assets/images/logo (1).png";
import SecondSlideImgae from "../assets/images/logo (2).png";
import ThirdSlideImgae from "../assets/images/logo (3).png";
import FourthSlideImgae from "../assets/images/logo(4).png";
import FifthSlideImgae from "../assets/images/logo (5).png";
import { Autoplay } from "swiper/modules";

const _slidesMenu = [
  {
    id: 1,
    img: FirstSlideImgae,
  },
  {
    id: 2,
    img: FourthSlideImgae,
  },
  {
    id: 3,
    img: FifthSlideImgae,
  },
  {
    id: 4,
    img: SecondSlideImgae,
  },
  {
    id: 5,
    img: ThirdSlideImgae,
  },
];

export default function LogoSlider() {
  return (
    <section className="py-28">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          1280: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 3,
          },
          550: {
            slidesPerView: 2,
          },
        }}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        {_slidesMenu.map((slide) => (
          <SwiperSlide key={slide.id} className="h-full">
            <div className="flex justify-center sm:justify-start">
              <img src={slide.img} alt={slide.name} className="w-[19rem]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
