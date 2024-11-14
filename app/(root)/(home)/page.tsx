import React from "react"
import MainContent from "@/components/home/main";
import Benefits from "@/components/home/benefits";
import AboutUs from "../../../components/home/AboutUs";

const HomePage = () => {
    return <div className="home-page">
        <MainContent/>
        <AboutUs/>
        <Benefits/>
    </div>
}

export default HomePage