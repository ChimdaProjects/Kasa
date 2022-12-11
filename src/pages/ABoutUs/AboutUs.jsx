import React from "react";

// component
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
// import img
import imgAbout from "../../assets/img-about.svg"
import Collapse from "../../components/Collapse/Collapse";
//import data
import data from "../../datas/apropos"

const AboutUs = () => {

    return (
        <React.Fragment>
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
         
           
        </React.Fragment>
    )
}

export default AboutUs;