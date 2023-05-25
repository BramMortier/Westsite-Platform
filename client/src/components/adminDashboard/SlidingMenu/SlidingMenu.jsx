import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Button } from "@components";
import "./slidingMenu.scss";

const SlidingMenu = ({ title, children, open, setOpen }) => {
    const closeOnEscapeKeyDown = (e) => {
        if ((e.charCode || e.keyCode) === 27) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return () => document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    }, [setOpen]);

    return ReactDOM.createPortal(
        <div className={`sliding-menu__overlay ${open ? "sliding-menu__overlay--active" : ""}`} onClick={() => setOpen(false)}>
            <div className={`sliding-menu ${open ? "sliding-menu--active" : ""}`} onClick={(e) => e.stopPropagation()}>
                <div className="sliding-menu__header">
                    <h4>{title}</h4>
                    <Button type="secondary" variant="square" onClick={() => setOpen(false)}>
                        <img src="/icons/close-light.svg" alt="close icon" />
                    </Button>
                </div>
                <div className="sliding-menu__body">{children}</div>
            </div>
        </div>,
        document.getElementById("menus")
    );
};

export default SlidingMenu;
