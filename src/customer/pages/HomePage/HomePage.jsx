import React from "react";
import MainCarousel from "../../component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../component/HomeSectionCarousel/HomeSectionCarousel";
import{ Saree1 } from "../../../Data/Saree1"
import{ Saree2 } from "../../../Data/Saree2"
import{ Saree3 } from "../../../Data/Saree3"
import{ Saree4 } from "../../../Data/Saree4"
const HomePage = () => {
    return(
        <div>
            <MainCarousel></MainCarousel>

            <div className=" space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <HomeSectionCarousel data={Saree1} sectionName={"Women Sarees"}/>
                <HomeSectionCarousel data={Saree2} sectionName={"Women Sarees"}/>
                <HomeSectionCarousel data={Saree3} sectionName={"Women Sarees"}/>
                <HomeSectionCarousel data={Saree4} sectionName={"Women Sarees"}/>
                <HomeSectionCarousel data={Saree1} sectionName={"Women Sarees"}/>
            </div>
        </div>
    ) 
    
}
export default HomePage;