import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.svg";

const Header = () => {
    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <header className="header">
            {/** LOGO  */}
            <div className="header-img">
                <Link to="/">
                    <img className="header-img-content" src={logo} alt="logo of Kasa" />
                </Link>
            </div>
            {/** NAVIGATION */}
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-list-li">
                        {/** Link page Accueil */}
                        <NavLink 
                                className="header-nav-list-elt"
                                to="/"
                                style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                                }
                        >
                            Accueil
                        </NavLink>
                    </li>

                    <li className="header-nav-list-li">
                        {/** Link page A propos */}
                        <NavLink 
                            className="header-nav-list-elt"
                            to="/aboutUs"
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;