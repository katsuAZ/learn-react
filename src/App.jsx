import './styles/App.scss'
import {BrowserRouter} from "react-router";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import AppRouter from "./components/AppRouter.jsx";
import {AuthContext} from "./context/index.js";
import {useEffect, useState} from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App
