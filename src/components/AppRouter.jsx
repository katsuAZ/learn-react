import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import {privateRoutes, publicRoutes} from "../router/routes.js";

const AppRouter = () => {
    const isAuth = false;
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.component />} />
                )}
                <Route path="/" element={<Navigate replace to="/posts" />} />
                <Route path="*" element={<Navigate replace to="/error" />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.component />} />
                )}
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;