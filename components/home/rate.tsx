import React from 'react';
import Image from 'next/image';

// 1. Define the Props interface
interface RateProps {
  avatar: string; // or StaticImageData if you're importing images
  text: string;
  name: string;
}

// 2. Annotate the component with the Props interface
const Rate: React.FC<RateProps> = ({ avatar, text, name }) => {
  return (
    <div className=" bg-white rounded-lg p-10 border border-black">
      <div className="w-full flex flex-col">
        <p className="text-8xl font-bold leading-[80px] text-orange">“</p>
        <p className="w-full mb-5">
          {text}
        </p>
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12">
            <Image
              src={avatar}
              alt={name}
              width={200}
              height={200}
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <span className="font-semibold">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Rate;