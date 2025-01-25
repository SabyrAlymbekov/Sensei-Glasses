'use client'

import React from 'react';
import Rate from "@/components/home/rate";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const RatesSwiper = () => {

  const rates = [
    {
      id: 0,
      name: "Чун фАН Гек",
      text: "lorem ipsum",
      avatar: "/assets/images/student.jpg"
    },

    {
      id: 1,
      name: "Чун фАН Гек",
      text: "lorem ipsum",
      avatar: "/assets/images/student.jpg"
    },

    {
      id: 2,
      name: "Чун фАН Гек",
      text: "lorem ipsum",
      avatar: "/assets/images/student.jpg"
    },

    {
      id: 3,
      name: "Чун фАН Гек",
      text: "lorem ipsum",
      avatar: "/assets/images/student.jpg"
    },

    {
      id: 4,
      name: "Чун фАН Гек",
      text: "lorem ipsum",
      avatar: "/assets/images/student.jpg"
    },
  ]


  return (
    <div className="ratesSwiper">
      <Swiper
        slidesPerView={2.5}
        spaceBetween={50}
        // centeredSlides={}
        loop={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination'
        }}

        modules={[Pagination]}
        className="mySwiper"
      >

        {
        rates.map((item) => (
        <SwiperSlide
          key={item.id}

        >
          <Rate
            name={item.name}
            text={item.text}
            avatar={item.avatar}
          />
        </SwiperSlide>
        ))
        }
      </Swiper>
      <div className="custom-pagination">
      </div>
    </div>
  );
};

export default RatesSwiper;