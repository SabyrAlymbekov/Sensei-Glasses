import React from 'react';
import Subscriptions from "@/components/shared/subscriptions/subscriptions";
import Image from "next/image";
import sparkle from "@/public/assets/images/Sparkle.svg";


const SubscriptionHome = () => {
  return (
      <section className="w-full bg-white py-32 relative flex flex-col justify-center items-center" >
        <div className="container flex flex-col items-center">
          <div className="flex flex-col gap-5 mb-24 relative">
            <Image
              src={sparkle}
              alt="questions"
              width={105}
              height={105}
              className="w-[105px] h-[105px] absolute top-[-63px] left-[-74px]"
            />
            <h1 className="inline-block text-2xl sm:text-4xl md:text-6xl font-montserrat-bold">
              Become a sponsor
            </h1>
            <p className="font-montserrat-medium text-2xl text-center">
              Get exclusive episodes, merch and more
            </p>
          </div>

        <Subscriptions></Subscriptions>
      </div>
        <Image
          src="/assets/images/ScribbleB.svg"
          alt="home page image"
          width={150}
          height={150}
          className="absolute bottom-[-75px] z-10"
        />
      </section>
  );
};

export default SubscriptionHome;