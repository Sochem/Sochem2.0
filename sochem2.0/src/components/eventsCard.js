import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const EventsCard = ({ title, images }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeHeading, setActiveHeading] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  const handleSlideClick = (image) => {
    setActiveHeading(image.heading);
    setActiveDescription(image.description);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveHeading("");
    setActiveDescription("");
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-[90%] lg:max-w-[80%]">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white px-6 py-3">
            {title}
          </h1>
        </div>
        <div className="relative w-full max-w-[90%] md:max-w-[85%] lg:max-w-[85%]">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={62}
            slidesOffsetBefore={15}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation
            loop
            breakpoints={{
              767: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full relative"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} onClick={() => handleSlideClick(image)}>
                <div className="relative w-[20rem] h-[20rem] md:w-[22rem] md:h-[22rem] lg:w-[22rem] lg:h-[22rem] flex items-center justify-center cursor-pointer">
                  <img
                    src={image.src}
                    alt={`${title} - Slide ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-black border border-white rounded-lg w-[40rem] h-[23rem] flex flex-col items-center relative">
            <h2 className="text-white text-2xl font-bold absolute top-4">{activeHeading}</h2>
            <p className="text-white text-xl text-left px-4 mt-16 mb-16">{activeDescription}</p>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsCard;
