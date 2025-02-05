import React from 'react';
import Image from 'next/image';
import sparkle from '@/public/assets/images/Star.svg'
import springle from '@/public/assets/images/springle_orange.svg'


const AboutUs = () => {
  return (
    <section className="bg-white relative flex flex-col items-center justify-center">
      <div className="container">
        <div className="bg-bg_orange border rounded-2xl my-32 py-20 px-8 md:px-16 text-black relative">
          <Image
            src={springle}
            alt='springle'
            width={200}
            height={200}
            className="w-[120px] h-[120px] absolute bottom-[49px] left-[-60px]"
          />
          <Image
            src={sparkle}
            alt='sparkle'
            width={120}
            height={120}
            className="w-[200px] h-[200px] absolute top-[-57px] right-[-78px]"
          />

          <div className="inner flex flex-col gap-14">

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-montserrat-bold  text-center mx-auto leading-tight">
              Начни видеть вновь.
            </h1>
            <div className="flex gap-5 md:gap-32 relative flex-col sm:flex-row sm:justify-between">
              {/*<Image*/}
              {/*  src="/assets/images/arrows.svg"*/}
              {/*  width={75}*/}
              {/*  height={75}*/}
              {/*  className="absolute left-[47.5%] top-[45%]"*/}
              {/*  alt="arrows"*/}
              {/*/>*/}
              <div className="w-1/2]">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <Image
                    src="/assets/images/qs.svg"
                    alt="questions"
                    width={100}
                    height={100}
                    className="q&a w-[200px] h-[200px]"
                  />
                  <p className="font-montserrat-medium text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                    Curabitur ac ultrices odio. </p>

                </div>
              </div>
              <div className="w-[1/2]">
                <div className="flex flex-col gap-5 justify-center items-center">
                  <Image
                    src="/assets/images/idea.svg"
                    alt="questions"
                    width={100}
                    height={100}
                    className="q&a w-[200px] h-[200px]"
                  />

                  <p className="font-montserrat-medium text-base text-center">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                    Curabitur ac ultrices odio. </p>
                </div>

              </div>
            </div>
          </div>
        </div>
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

export default AboutUs;