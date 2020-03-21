import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-spa';
export default function Header() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <nav className="nav">
            <div className="nav--brand">React Movie Search</div>
            <ul className="nav--items">
                <li>
                    <Link className="nav--item" to="/">
                        Home
                    </Link>
                </li>
                {isAuthenticated && (
                    <li>
                        <Link className="nav--item" to="/profile">
                            Profile
                        </Link>
                    </li>
                )}
                {!isAuthenticated && (
                    <button className="nav--item" onClick={loginWithRedirect}>
                        Log in
                    </button>
                )}
                {isAuthenticated && (
                    <button className="nav--item" onClick={logout}>
                        Log out
                    </button>
                )}
            </ul>
        </nav>
    );
}
