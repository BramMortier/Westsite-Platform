import { useState } from "react";
import routes from "../../../config/routes";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import { useAuthContext } from "../../../hooks/useAuthContext";
import "./header.scss";

const Header = () => {
    const { state } = useAuthContext();

    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <header className="header">
            <section className="header__section">
                <Link to={routes.home}>
                    <img className="header__logo" src="/icons/westsite-logo.svg" alt="logo" />
                </Link>
                <nav className="header__nav">
                    <ul className="header__nav-links">
                        <li className="header__nav-link">
                            <Link to="#">Trainingsmomenten</Link>
                        </li>
                        <li className="header__nav-link">
                            <Link to="#">Nieuws</Link>
                        </li>
                        <li className="header__nav-link">
                            <Link to="#">Trick List</Link>
                        </li>
                        <li className="header__nav-link">
                            <Link to="#">About</Link>
                        </li>
                    </ul>
                </nav>
            </section>
            {state.user ? (
                <section className="header__section">
                    <div className="header__user-menu">
                        <Button type="secondary" onClick={() => setUserMenuOpen(!userMenuOpen)}>
                            Welcome Terug <span className="header__user">{state.user.firstname}!</span>
                        </Button>
                        <div className={`header__user-menu-dropdown ${userMenuOpen ? "header__user-menu-dropdown--active" : ""}`}>
                            <ul className="header__user-menu-options">
                                <li className="header__user-menu-option">
                                    <img src="/icons/profile.svg" alt="profile icon" />
                                    <span>Mijn Account</span>
                                </li>
                                <li className="header__user-menu-option">
                                    <img src="/icons/logout.svg" alt="profile icon" />
                                    <span>Uitloggen</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            ) : (
                <section className="header__section">
                    <Button type="primary">Login</Button>
                </section>
            )}
        </header>
    );
};

export default Header;
