import React from 'react';
import {Button} from "@/components/ui/button";

interface Props {
  popular?: boolean;
  title?: string;
  description: string;
}


const MemberSub : React.FC<Props> = ({popular, title, description}) => {
  return (
    <div className={`${popular ? 'bg-orange_light border-orange' : ''} member md:pt-[60px] w-full md:pb-[30px] sm:p-10 p-8 rounded-lg border-[1.5px] border-black`}>
      <div className="flex flex-col gap-[70px]">

        <div className="flex flex-col gap-5">
          <h1 className="xl:flex font-montserrat-bold text-4xl hidden flex-col lg:flex-row lg:justify-between items-center">{title}{ popular && <span
            className="text-xs lg:text-base font-montserrat-medium h-[25px] text-white bg-orange flex justify-between items-center box-content px-4 py-1 rounded">most popular</span>}</h1>
          <h1 className="xl:hidden font-montserrat-bold text-4xl flex flex-row justify-between items-center">{title}{ popular && <span
            className="text-xs lg:text-base font-montserrat-medium h-[25px] text-white bg-orange flex justify-between items-center box-content px-4 py-1 rounded">popular</span>}</h1>
          <p>{description}</p>
        </div>
        <div className="btns flex md:flex-row flex-col-reverse items-end gap-2 md:justify-between">
          <div className="w-full h-[50px] md:w-[160px] md:h-[62px]">
            <Button className="w-full h-full col-span-2  font-montserrat-semibold text-base">Subscribe</Button>

          </div>
            <div className="flex flex-col text-right">
              <span className="price text-orange text-base md:text-2xl font-montserrat-semibold">$9.99</span>
              <span className="text-greyish text-sm md:text-base font-montserrat-medium">/month</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSub;