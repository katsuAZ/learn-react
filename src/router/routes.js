import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPages from "../pages/PostIdPages.jsx";
import Error from "../pages/Error.jsx";
import Login from "../pages/Login.jsx";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPages},
    {path: '/error', component: Error},
]

export const publicRoutes = [
    {path: '/login', component: Login},
]