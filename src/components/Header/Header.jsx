import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
      };

    return (
        <header className="header">
            <div className="header-img">
                <Link to="/">
                    <img className="header-img-content" src={logo} alt="logo of Kasa" />
                </Link>
                
            </div>

            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li >
                        <NavLink 
                            className="header-nav-list-elt"
                            exact 
                            to="/"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className="header-nav-list-elt"
                        exact 
                        to="/aboutUs"
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                        >
                            A propos
                        </NavLink>
                    </li>
                </ul>
            
            

        </nav>
        </header>
       

    );
};

export default Header;