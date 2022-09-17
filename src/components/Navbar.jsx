import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar custom-navbar navbar-expand-md navbar-light fixed-top" data-spy="affix" data-offset-top="10">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="src\assets\imgs\logo.svg" alt="..." />
                    </a>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Our Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>

                            <li className="nav-item">
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testmonial">Testmonial</a>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/report" className="ml-4 nav-link btn btn-primary btn-sm rounded">File Report</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar