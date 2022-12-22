import React from "react";
// component
import Banner from "../../components/Banner/Banner";
import Collapsible from "../../components/Collapsible/Collapsible";
// import img
import imgAbout from "../../assets/img-about.svg"
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
            {
                data.map((item) => (
                        <Collapsible
                            key={item.id}
                            {...item}
                            namePage="about"
                        />  
                ))
            }
        </div>
    )
}

export default AboutUs;