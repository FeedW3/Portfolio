import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>Lamour Enzo</h1>
            <nav className="nav-list">
                <a href="#projects">Mes Projets</a>
                <a href="#about">Ma Formation</a>
                <Link to="/contacts">Contacts</Link>
            </nav>
        </header>
    );
}

export default Header;