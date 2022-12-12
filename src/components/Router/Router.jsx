import React from "react";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/ABoutUs/AboutUs";
import Location from "../../pages/Location/Location";
import NotFound from "../../pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";

const Router = () => {
    return (
        <Routes>
          <Route 
            path="/" 
            element={< Home />} >
          </Route>

          <Route path="location">
            <Route path=':locId' element= {<Location/>} />
          </Route>
          
          <Route 
            path="/aboutUs" 
            element={< AboutUs />} >
          </Route>
        
          <Route
            path="*"
            element={< NotFound />}>

          </Route>
        </Routes>
       
    )
}

export default Router;