//import logo from '../assets/logo.svg';
import './App.scss';

//import components
import Header from '../Header/Header';
import Router from '../Router/Router';
import Footer from '../Footer/Footer';



const App = () => {
 
  return (
    <div className='App'>
        <Header />
        <Router />
        <Footer />
    </div>
  );
}

export default App;
