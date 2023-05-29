import { Routes, Route } from "react-router-dom";
import routes from "@config/routes";
import {
    LoginPage,
    HomePage,
    ProfilePage,
    TrickInfoPage,
    TrainingSessionsPage,
    ManageMembersPage,
    ManageTricksPage,
    ManageTrainingSessionsPage,
    ManageNieuwsPage,
} from "@pages";
import { DashboardLayout, DefaultLayout } from "@components";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path={routes.home} element={<HomePage />} />
                <Route path={routes.login} element={<LoginPage />} />
                <Route path={routes.profile} element={<ProfilePage />} />
                <Route path={routes.trainingSessins} element={<TrainingSessionsPage />} />
                <Route path={routes.trickInfo} element={<TrickInfoPage />} />
            </Route>

            <Route path="/dashboard/" element={<DashboardLayout />}>
                <Route path={routes.admin.members} element={<ManageMembersPage />} />
                <Route path={routes.admin.tricks} element={<ManageTricksPage />} />
                <Route path={routes.admin.nieuws} element={<ManageNieuwsPage />} />
                <Route path={routes.admin.trainingSessions} element={<ManageTrainingSessionsPage />} />
            </Route>

            <Route path="*" element={<HomePage />} />
        </Routes>
    );
};

export default App;
