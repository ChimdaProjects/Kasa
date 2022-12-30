import React from "react";
import { Link } from "react-router-dom";
import "./notfound.scss";

/**
 * This component displays 404 page
 * @returns 
 */
const NotFound = () => {
    return (
        <div className="notfound">
            <p className="notfound-title">404</p>
            <p className="notfound-text">Oups ! La page que vous demandez n'existe pas</p>
            <p className="notfound-link">
                <Link
                    className="notfound-link-text"
                    to="/"
                >
                    Retourner sur la page d'accueil
                </Link>
            </p>
        </div>
    )
}

export default NotFound;