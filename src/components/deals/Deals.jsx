import { SwiperSlide } from "swiper/react";

import img_1 from "../../assets/images/products/img_1.png";
import img_2 from "../../assets/images/products/img_2.png";
import img_3 from "../../assets/images/products/img_3.png";
import img_4 from "../../assets/images/products/img_4.png";
import img_5 from "../../assets/images/products/img_5.png";

import NavigationButton from "../shared/slider/NavigationButton";
import CustomSlider from "../shared/slider/CustomSlider";
import SectionText from "../shared/SectionText";

const _slides = [
  {
    id: 1,
    img: img_1,
  },
  {
    id: 2,
    img: img_2,
  },
  {
    id: 3,
    img: img_3,
  },
  {
    id: 4,
    img: img_4,
  },
  {
    id: 5,
    img: img_5,
  },
];

export default function DealsSection() {
  return (
    <section id="deals" className="bg-gray-50 section relative">
      <div className="customContainer grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* content section */}
        <div className="flexCenter !justify-start">
          <SectionText
            title="Deals of the month"
            desc="Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into elec"
            btnText="Buy now"
          />
        </div>

        {/* slides section */}
        <div>
          <CustomSlider>
            {_slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.img}
                  alt="Slide"
                  className="h-[40rem] object-cover"
                />
              </SwiperSlide>
            ))}
          </CustomSlider>
        </div>
      </div>
      {/* navigation buttons section */}
      <NavigationButton />
    </section>
  );
}
