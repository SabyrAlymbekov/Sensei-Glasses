import React from 'react';

interface MemberInfoProps {
  info: string[];
  popular?: boolean;
}

const MemberInfo: React.FC<MemberInfoProps> = ({ info, popular }) => {
  return (
    <div
      className={`${
        popular ? 'bg-orange_light border-orange' : ''
      } member w-full p-[40px] rounded-lg border-[1.5px] border-black text-greyish`}
    >
      <h2 className="font-montserrat-bold mb-5">What&apos;s included:</h2>
      <ul className="flex flex-col gap-3">
        {info.map((item, i) => (
          <li key={i}>
            <p>• {item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberInfo;