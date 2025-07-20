import React, {useContext} from 'react';
import {Link} from "react-router";
import MyButton from "../button/MyButton.jsx";
import {AuthContext} from "../../../context/index.js";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <nav className="navbar">
            {
                isAuth ?
                    <MyButton onClick={logout}>
                        Выйти
                    </MyButton>
                    :
                    undefined
            }
            <div className="navbar__links">
                <Link to="/about">О сайте</Link>
                <Link to="/posts">Посты</Link>
            </div>
        </nav>
    );
};

export default Navbar;