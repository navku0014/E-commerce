import React from "react";
import MainCarousel from "../../components/homeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/homeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/mens_kurta";
import { mens_shirt } from "../../../Data/mens_shirt";

const HomePage = () =>{
    return(
        <div>
            <MainCarousel/>
            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
              <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
              <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"}/>
            </div>
        </div>
    )
}


export default HomePage;