import React from "react"
import MainContent from "@/components/home/main";
import Benefits from "@/components/home/benefits";
import AboutUs from "../../../components/home/AboutUs";
import Rates from "@/components/home/rates";
import SubscriptionHome from "@/components/home/subscriptionHome";

const HomePage = () => {
    return <div className="home-page">
        <MainContent/>
        <AboutUs/>
        <Rates/>
        <Benefits/>
        <SubscriptionHome></SubscriptionHome>
    </div>
}

export default HomePage