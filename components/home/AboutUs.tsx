import React from 'react';
import Image from 'next/image';


const AboutUs = () => {
  return (
    <section className="bg-white relative flex flex-col items-center justify-center">
      <div className="container">
        <div className="bg-greyish rounded-2xl my-32 p-16 text-white">
          <div className="inner flex flex-col gap-14">

            <h1 className="text-4xl md:text-5xl font-montserrat-bold text-center mx-auto leading-tight">
              Одень и Попробуй. Начни видеть вновь.
            </h1>
            <div className="flex gap-32 relative flex-col sm:flex-row sm:justify-between">
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
                    className="q&a w-[300px] h-[250px]"
                  />
                  <p className="font-montserrat-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing
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
                    className="q&a w-[250px] h-[250px]"
                  />

                  <p className="font-montserrat-medium text-base">Lorem ipsum dolor sit amet, consectetur adipiscing
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
        className="absolute bottom-[-75px]"
      />
    </section>
  );
};

export default AboutUs;