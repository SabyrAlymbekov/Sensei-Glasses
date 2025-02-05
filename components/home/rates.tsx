import React from 'react';
import Image from 'next/image';
import RatesSwiper from "@/components/home/ratesSwiper";
import sparkle from '@/public/assets/images/sparkle_3.svg'
// without data base



const Rates = () => {


  return (
    <section className="relative flex flex-col items-center rates py-36 bg-gray">
      <div className="container relative flex flex-col items-center">

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-montserrat-bold text-center leading-tight relative inline-block">
          Что же говорят сами СЛЕПЫЕ ?

          <Image
            src={sparkle}
            alt="questions"
            width={105}
            height={105}
            className="w-[105px] h-[105px] absolute top-[-69px] left-[-99px]"
          />
        </h1>

        <p className="text-center text-2xl text-greyish mt-5 mb-24">Lorem ipsum dolor sit amet.</p>
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