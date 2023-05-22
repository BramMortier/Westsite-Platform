import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "@hooks/useAuthContext";
import { Button } from "@components";
import routes from "@config/routes";
import "./adminHeader.scss";

const AdminHeader = () => {
    const { state } = useAuthContext();
    const navigate = useNavigate();

    return (
        <header className="admin-header">
            <div className="admin-header__top">
                <div className="admin-header__section">
                    <Link to={routes.home}>
                        <img className="admin-header__logo" src="/icons/westsite-logo.svg" alt="logo" />
                    </Link>
                </div>
                <div className="admin-header__section">
                    <Button type="primary" onClick={() => navigate(routes.home)}>
                        <img src="/icons/arrow-left-dark.svg" alt="arrow icon" />
                        Dashboard Afsluiten
                    </Button>
                    <div className="admin-header__profile">
                        <span className="admin-header__profile-icon"></span>
                        {state.user && <p>{`${state.user.firstname} ${state.user.lastname}`}</p>}
                    </div>
                </div>
            </div>
            <div className="admin-header__bottom">
                <nav className="admin-header__nav">
                    <ul className="admin-header__nav-links">
                        <li className="admin-header__nav-link">
                            <Link to={routes.admin.members}>Leden</Link>
                        </li>
                        <li className="admin-header__nav-link">
                            <Link to={routes.admin.trainingSessions}>Trainingen</Link>
                        </li>
                        <li className="admin-header__nav-link">
                            <Link to={routes.admin.tricks}>Tricks</Link>
                        </li>
                        <li className="admin-header__nav-link">
                            <Link to={routes.admin.nieuws}>Nieuwsberichten</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AdminHeader;
