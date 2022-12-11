import React from 'react';

// import components
import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Footer/Footer';
// import img
import imgHome from "../../assets/img_home.svg";

//import datas
import list from "../../datas/listLocations"


const Home = () => {
    return (
        <React.Fragment>
     
        <Banner 
            imgSrc={imgHome}
            altText={"illustration au bord de mer"}
            title={"Chez vous, partout et ailleurs"}
        />

        <Gallery 
            list = {list}
        /> 

        <Footer />
        </React.Fragment>

        
       
    )
}

export default Home;