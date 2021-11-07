import React from "react";
import { Link } from "react-router-dom"
import './GreenThumb.css'

export const Header = () => {
    return (
        <Link id="main-header" to="/" style={{textDecoration:'none'}} >
            <h2 id="main-header-title">GreenThumb</h2>
            <small id="main-header-subtitle">The house plant repository.</small>
        </Link>
    )
};

