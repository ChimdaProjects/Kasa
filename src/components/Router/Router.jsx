import React from "react";
import Home from "../../pages/Home/Home";
import AboutUs from "../../pages/ABoutUs/AboutUs";
import Property from "../../pages/Property/Property";
import NotFound from "../../pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";


const Router = () => {
    return (
        <Routes>
          <Route 
            path="/" 
            element={< Home />} >
          </Route>

          <Route path="accommodation">
            <Route path=':locId' element= {<Property/>} />
          </Route>
          
          <Route 
            path="/aboutUs" 
            element={< AboutUs />} >
          </Route>
          <Route
            path="/notfound"
            element={< NotFound />}>
          </Route>
          <Route
            path="*"
            element={< NotFound />}>

          </Route>
        </Routes>
       
    )
}

export default Router;