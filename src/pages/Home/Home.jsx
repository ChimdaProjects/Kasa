import React from 'react';
import Banner from '../../components/Banner/Banner';
import imgHome from "../../assets/img_home.svg";
const Home = () => {
    return (
        <Banner 
                imgSrc={imgHome}
                altText={"illustration au bord de mer"}
                title={"Chez vous, partout et ailleurs"}
        />
       
    )
}

export default Home;