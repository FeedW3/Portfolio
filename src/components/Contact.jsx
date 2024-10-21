import {Link} from "react-router-dom";

function Contact() {
    return (
        <div className="contact">
            <header className="header">
                <h1>Lamour Enzo</h1>
                <nav className="nav-list">
                    <Link to="/">Accueil</Link>
                </nav>
            </header>
            <section id="contact">
                <h2 className="section-title">Contact</h2>
                <section id="contacts-list">
                    <p>Vous pouvez me contacter aux adresses suivante : </p>
                    <p>Université : enzo.lamour.etu@univ-lille.fr</p>
                    <p>Personnel : <a
                        href="mailto:lamourenzo@gmail.com">lamourenzo@gmail.com</a></p>
                    <p>Linkedin : <a
                        href="https://www.linkedin.com/in/lamour-enzo-4464a6270/"> https://www.linkedin.com/in/lamour-enzo-4464a6270/</a>
                    </p>
                    <p>Github : <a href="https://github.com/FeedW3"> https://github.com/FeedW3</a></p>
                </section>
            </section>
        </div>
    );
}

export default Contact;
