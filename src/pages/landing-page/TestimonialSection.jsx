import img_1 from "../../assets/images/products/img_1.png";
import img_2 from "../../assets/images/products/img_2.png";
import img_3 from "../../assets/images/products/img_3.png";
import NavigationButton from "../../components/shared/slider/NavigationButton";
import CustomSlider from "../../components/shared/slider/CustomSlider";
import { SwiperSlide } from "swiper/react";
import TestmonialCard from "../../components/testimonials/Card";
import SectionText from "../../components/shared/SectionText";

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
];

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 relative py-10">
      <div className="section customContainer  space-y-10">
        <SectionText
          title="This Is What Our Customers Say"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis"
          textDirection="CENTER"
        />

        {/* slider section */}
        <div>
          <CustomSlider
            breakpoints={{
              1040: {
                slidesPerView: 3,
              },
            }}
          >
            {_slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <TestmonialCard slide={slide} />
              </SwiperSlide>
            ))}
          </CustomSlider>
        </div>
      </div>
      <NavigationButton />
    </section>
  );
}
