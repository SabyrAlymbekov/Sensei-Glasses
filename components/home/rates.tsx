import React from 'react';
import Rate from "@/components/home/rate";
import Image from 'next/image';
import RatesSwiper from "@/components/home/ratesSwiper";

// without data base



const Rates = () => {


  return (
    <section className="relative flex flex-col items-center rates py-32">
      <div className="container relative">
        <h1 className="text-[59px] font-montserrat-bold w-1/2 text-center mx-auto mb-5 leading-tight mt">
          Что же говорят сами СЛЕПЫЕ ?
        </h1>
        <p className="text-center text-xl mb-20">Lorem ipsum dolor sit amet.</p>
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