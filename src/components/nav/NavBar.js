import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item home">
                <Link className="navbar__link" to="/plants">GreenThumb </Link>
            </li>
            <li className="navbar__item tab">
                <Link className="navbar__link" to="/plants/create">Add Plant</Link>
            </li>
            <li className="navbar__item tab">
                <Link className="navbar__link" to="/expenses">Expenses</Link>
            </li>
        </ul>
    )
}