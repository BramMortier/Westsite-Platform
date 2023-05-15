import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import "./sass/breakpoints.scss";
import "./sass/colors.scss";
import "./sass/reset.scss";
import "./sass/spacing.scss";
import "./sass/typography.scss";
import "./sass/fonts.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
