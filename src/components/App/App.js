//import logo from '../assets/logo.svg';
import './App.scss';
//router
import { Route, Routes } from 'react-router-dom';
//import components
import Header from '../Header/Header';
import Router from '../Router/Router';


const App = () => {
  return (
    <div className='App'>
        <Header />
        <Router />
        
      
    </div>

  );
}

export default App;
