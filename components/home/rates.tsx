import React from 'react';
import Image from 'next/image';
import RatesSwiper from "@/components/home/ratesSwiper";

// without data base



const Rates = () => {


  return (
    <section className="relative flex flex-col items-center rates py-32">
      <div className="container relative">
        <h1 className="text-4xl md:text-5xl font-montserrat-bold text-center leading-tight ">
          Что же говорят сами СЛЕПЫЕ ?
        </h1>
        <p className="text-center text-xl my-10">Lorem ipsum dolor sit amet.</p>
        <div className="section comments w-full">

          <RatesSwiper/>
        </div>

      </div>
      <Image
        src="/assets/images/ScribbleB.svg"
        alt="home page image"
        width={150}
        height={150}
        className="absolute z-40 bottom-[-75px]"
      />
    </section>
  );
};

export default Rates;