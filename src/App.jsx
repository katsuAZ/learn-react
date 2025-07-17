import './styles/App.scss'
import {BrowserRouter, Link, Route, Routes, RedirectFunction} from "react-router";
import About from "./pages/About.jsx";
import Posts from "./pages/Posts.jsx";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import {SwitchTransition} from "react-transition-group";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <SwitchTransition>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/posts" element={<Posts />} />
                </Routes>
                <RedirectFunction to="posts"/>
            </SwitchTransition>
        </BrowserRouter>
    )
}

export default App
