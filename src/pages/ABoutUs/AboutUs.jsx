import React from "react";
// component
import Banner from "../../components/Banner/Banner";
// import img
import imgAbout from "../../assets/img-about.svg"
import Collapse from "../../components/Collapse/Collapse";
//import data
import data from "../../datas/apropos"
//css
import "./aboutUs.scss"

const AboutUs = () => {

    return (
        <div className="aboutUs">
            <Banner 
                imgSrc={imgAbout}
                altText={"illustration à la montagne"}
                title={""}
            />
            {data.map((item)=> (
                        <Collapse
                            key={item.id}
                            {...item}
                        />  
            ))}
        </div>
    )
}

export default AboutUs;