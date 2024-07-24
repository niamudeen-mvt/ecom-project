import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import img_1 from "../../assets/images/products/img_1.png";
import img_2 from "../../assets/images/products/img_2.png";
import img_3 from "../../assets/images/products/img_3.png";
import img_4 from "../../assets/images/products/img_4.png";
import img_5 from "../../assets/images/products/img_5.png";

import { GoChevronLeft, GoChevronRight } from "react-icons/go";

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
          <div className="flex flex-col gap-9">
            <h2>Deals of the month</h2>
            <p>
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into elec
            </p>
            <div>
              <button className="btn">Buy now</button>
            </div>
          </div>
        </div>

        {/* slides section */}
        <div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
              disabledClass: "swiper-button-disabled",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
              550: {
                slidesPerView: 2,
              },
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="deals-swiper"
          >
            {_slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <img
                  src={slide.img}
                  alt="Slide"
                  className="h-[40rem]  sm:w-[95%] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>{" "}
      {/* navigation buttons section */}
      <div className="absolute left-[50%] bottom-[5%] lg:bottom-[10%] deals-swiper-buttons">
        <div class="swiper-button-prev swiper-button-disabled roundBtn shadow-lg">
          <GoChevronLeft />
        </div>
        <div class="swiper-button-next roundBtn bg-white shadow-lg">
          <GoChevronRight />
        </div>
      </div>
    </section>
  );
}
