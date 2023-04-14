import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PropetyCard from "@/features/data/common/modules/PropertyCards/PropetyCard";

function PropertySlider({ featuredProperties }) {
  return (
    <Swiper 
    slidesPerView={3}
    spaceBetween={10}
    loop={true}
    centeredSlides={true}
    autoplay={{ delay: 2000, disableOnInteraction: true }}
    pagination={{ dynamicBullets: true }}
    modules={[ Autoplay, Pagination ]}
    className="mySwiper"
    >
      {featuredProperties.map((property) => (
        <SwiperSlide key={property.id} >
          <PropetyCard {...property} />
        </SwiperSlide>

      ))}
        
    </Swiper>
  )
}

export default PropertySlider