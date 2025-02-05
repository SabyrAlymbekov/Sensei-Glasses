import React from 'react';
import MemberSub from "@/components/shared/subscriptions/memberSub";
import MemberInfo from "@/components/shared/subscriptions/memberInfo";
import subscription from "@/constants/subscription";




const Subscriptions = () => {

  const [first, second, third] = subscription;

  return (
    <>

      <div className="lg:grid subscriptions hidden grid-cols-3 grid-rows-2 gap-5">
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

      <div className="lg:hidden subscriptions flex-wrap justify-center flex gap-10 md:gap-5 px-0 sm:px-20">

        <div className="flex flex-col gap-5">

          <MemberSub
            popular={first.popular}
            title={first.name}
            description={first.description}/>
          <MemberInfo info={first.included} popular={first.popular}/>
        </div>


        <div className="flex flex-col gap-5">

          <MemberSub
            popular={second.popular}
            title={second.name}
            description={second.description}/>
          <MemberInfo info={second.included} popular={second.popular}/>
        </div>


        <div className="flex flex-col gap-5">
          <MemberSub
            popular={third.popular}
            title={third.name}
            description={third.description}/>

          <MemberInfo info={third.included} popular={third.popular}/>
        </div>

      </div>
    </>
  );
};

export default Subscriptions;