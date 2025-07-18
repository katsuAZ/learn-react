import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import Error from "../pages/Error.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/error" element={<Error />} />
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route path="*" element={<Navigate replace to="/error" />} />
        </Routes>
    );
};

export default AppRouter;