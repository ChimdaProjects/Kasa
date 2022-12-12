//import logo from '../assets/logo.svg';
import './App.scss';
//router
import { Route, Routes } from 'react-router-dom';
//import components
import Home from '../../pages/Home/Home';
import Header from '../Header/Header';
import AboutUs from '../../pages/ABoutUs/AboutUs';
import NotFound from '../../pages/NotFound/NotFound';

const App = () => {
  return (
    <div className='App'>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={< Home />} >
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
       
      
    </div>

  );
}

export default App;
