import { Link } from "react-router-dom";
import { Button } from "../../../components";
import routes from "../../../config/routes";
import { useAuthContext } from "../../../hooks/useAuthContext";
import "./footer.scss";

const Footer = () => {
    const { state, logout } = useAuthContext();

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__main">
                    <section className="footer__section">
                        <Link to={routes.home}>
                            <img className="footer__logo" src="/icons/westsite-logo.svg" alt="logo" />
                        </Link>
                        <p>
                            De officiële Westsite trainingen website. Je vind er alles van onze trainingskalender tot tricklist en nog veel meer.
                            Bedankt voor jullie vertrouwen.
                        </p>
                        <div className="footer__socials">
                            <Link>
                                <button className="footer__social-btn">
                                    <img src="/icons/facebook-logo.svg" alt="facebook logo" />
                                </button>
                            </Link>
                            <Link>
                                <button className="footer__social-btn">
                                    <img src="/icons/instagram-logo.svg" alt="instagram logo" />
                                </button>
                            </Link>
                        </div>
                    </section>
                    <section className="footer__section">
                        <h4>Navigatie</h4>
                        <ul className="footer__links">
                            <li className="footer__link">Home</li>
                            <li className="footer__link">Trainingsmomenten</li>
                            <li className="footer__link">Trick List</li>
                            <li className="footer__link">About</li>
                            <li className="footer__link">Nieuws</li>
                        </ul>
                    </section>
                    <section className="footer__section">
                        <h4>Contact Info</h4>
                        <ul className="footer__links">
                            <li className="footer__link">Nederkouter 4</li>
                            <li className="footer__link">9000 Gent</li>
                            <li className="footer__link">Belgium</li>
                        </ul>
                        <ul className="footer__links footer__links--horizontal">
                            <li className="footer__link">
                                <span>Telefoon:</span>
                                <span>+32 (0)9 224 08 25</span>
                            </li>
                            <li className="footer__link">
                                <span>E-mail:</span>
                                <span>info@west-site.com</span>
                            </li>
                            <li className="footer__link">
                                <span>Shop</span>
                                <span>www.west-site.com</span>
                            </li>
                        </ul>
                    </section>
                    <section className="footer__section">
                        <h4>Account</h4>
                        {state.user ? (
                            <Button type="primary" onClick={() => logout()}>
                                Uitloggen
                            </Button>
                        ) : (
                            <Button type="primary">Inloggen</Button>
                        )}
                    </section>
                </div>
                <div className="footer__copyright">
                    &copy; Copyright 2023 <span className="footer__copyright-divider"></span>West Site Trainingen
                </div>
            </div>
        </footer>
    );
};

export default Footer;
