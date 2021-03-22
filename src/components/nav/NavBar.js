import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/plants">GreenThumb</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/locations">Add Plant</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/animals">Expenses</Link>
            </li>
        </ul>
    )
}