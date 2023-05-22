const routes = {
    home: "/",
    trainingSessions: "/trainingSessions",
    trick: "/trick/:id",
    profile: "/profile",
    login: "/login",
    register: "/register",

    admin: {
        members: "/dashboard/members",
        tricks: "/dashboard/tricks",
        nieuws: "/dashboard/nieuws",
        trainingSessions: "/dashboard/trainingSessions",
    },
};

export default routes;
