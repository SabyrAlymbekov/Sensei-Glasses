'use client'

import React, { useState, useRef } from 'react';
import Rate from "@/components/home/rate";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const RatesSwiper = () => {
  const swiperRef = useRef(null);

  const rates = [
    { id: 0, name: "Чун1 фАН Гек", text: "lorem ipsum", avatar: "/assets/images/student.jpg" },
    { id: 1, name: "Чун2 фАН Гек", text: "lorem ipsum", avatar: "/assets/images/student.jpg" },
    { id: 2, name: "Чун3 фАН Гек", text: "lorem ipsum", avatar: "/assets/images/student.jpg" },
    { id: 3, name: "Чун4 фАН Гек", text: "lorem ipsum", avatar: "/assets/images/student.jpg" },
    { id: 4, name: "Чун5 фАН Гек", text: "lorem ipsum", avatar: "/assets/images/student.jpg" },
  ];


  return (
    <>
      <div className="ratesSwiper md:block hidden">
        <Swiper
          ref={swiperRef}
          slidesPerView={2.5}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{delay: 3000, disableOnInteraction: true}}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {rates.map((item) => (
            <SwiperSlide key={item.id}>
              <Rate name={item.name} text={item.text} avatar={item.avatar} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination"></div>
      </div>

      <div className="ratesSwiper md:hidden block">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={50}
          centeredSlides={true}
          loop={true}
          pagination={{ clickable: true, el: '.custom-pagination' }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper flex justify-center"
        >
          {rates.map((item) => (
            <SwiperSlide key={item.id} className="w-[500px]">
              <Rate name={item.name} text={item.text} avatar={item.avatar} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination"></div>
      </div>
    </>
  );
};

export default RatesSwiper;