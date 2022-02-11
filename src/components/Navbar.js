import React from 'react';
import { withRouter, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            {/* Responsive navbar*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#!">
                        Start Bootstrap
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={"nav-link" + (location.pathname === '/' ? " active": "" )} aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link" + (location.pathname === '/about' ? " active": "" )} to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link" + (location.pathname === '/contact' ? " active": "" )} to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={"nav-link" + (location.pathname === '/blog' ? " active": "" )} to="/blog">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withRouter(Navbar);