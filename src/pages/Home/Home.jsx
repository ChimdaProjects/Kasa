import React from 'react';
import Banner from '../../components/Banner/Banner';
import imgHome from "../../assets/img_home.png";
const Home = () => {
    return (
        <div>
            <Banner 
                imgSrc={imgHome}
                altText={"illustration au bord de mer"}
                title={"Chez vous, partout et ailleurs"}
            />
        </div>
    )
}

export default Home;