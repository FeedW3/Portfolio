import '../header.css';
import {useState} from "react";

function Header({changePage}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <h1 className="logo" onClick={() => changePage("home")}>Lamour Enzo</h1>

            <button className="menu-btn" onClick={toggleMenu}>
                ☰
            </button>

            <nav className={`nav-list ${isOpen ? "open" : ""}`}>
                <a href="#projects">Mes Projets</a>
                <a href="#about">Ma Formation</a>
                <a onClick={() => changePage("contact")}>Contact</a>
            </nav>
        </header>
    );
}

export default Header;