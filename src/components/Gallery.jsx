import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gallery_images } from "../constants/const";

const Gallery = () => {
  return (
    <section id="gallery" className="w-full max-w-6xl mx-auto">
      <div>
        <h1>My Gallery</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          voluptatem nulla eligendi blanditiis iste corporis?
        </p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile (smallest screens)
          640: { slidesPerView: 2, spaceBetween: 15 }, // Small tablets
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Laptops
          1280: { slidesPerView: 4, spaceBetween: 25 },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        className="mt-10"
      >
        {gallery_images.map((image, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-md w-full object-cover"
            />
            <p className="mt-3">{image.alt}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
