import React from 'react';

// import components
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';

// import img
import imgHome from "../../assets/img_home.svg";

//import datas
import list from "../../datas/listLocations"

// css
import "./home.scss"


const Home = () => {
    
    return (
        <div className='home'>
     
        <Banner 
            imgSrc={imgHome}
            altText={"illustration au bord de mer"}
            title={"Chez vous, partout et ailleurs"}
        />

        <Gallery 
            list = {list}
        /> 

        </div>

        
       
    )
}

export default Home;