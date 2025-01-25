import React from 'react';
import MemberSub from "@/components/shared/subscriptions/memberSub";
import MemberInfo from "@/components/shared/subscriptions/memberInfo";
import subscription from "@/constants/subscription";


const Subscriptions = () => {

  const [first, second, third] = subscription;

  return (
    <div className="subscriptions grid grid-cols-3 grid-rows-3 gap-5">
      <MemberSub
        popular={first.popular}
        title={first.name}
        description={first.description}/>

      <MemberSub
        popular={second.popular}
        title={second.name}
        description={second.description}/>

      <MemberSub
        popular={third.popular}
        title={third.name}
        description={third.description}/>

      <MemberInfo info={first.included} popular={first.popular}/>
      <MemberInfo info={second.included} popular={second.popular}/>
      <MemberInfo info={third.included} popular={third.popular}/>

    </div>
  );
};

export default Subscriptions;