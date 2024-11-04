import imageProjetJava from "../assets/javaProjet.jpg";
import imageProjetBDD from "../assets/BDDProjet.jpg";
import imageProjetAgile from "../assets/AgileProjet.jpg";
import imageProjetErisse from "../assets/ErisseProjet.jpg";

function Projects() {
    return (
        <section id="projects">
        <h2>Mes Projets</h2>
            <div className="project-list">
                <div className="project-item">
                    <div className="project-item-content">
                        <h3>Projet Développement(Java, Javafx, Graphe) </h3>
                        <p>-Développement d'une application permettant de trouver le plus court chemin entre un point A
                            et un point B.</p>
                    </div>
                    <div className="project-image">
                        <img src={imageProjetJava} alt="moi" style={{width: '100%', maxWidth: '500px'}}/>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-content">
                        <h3>BDD Parcoursup</h3>
                        <p>-Création d'une base de données pour la gestion des étudiants de Parcoursup (SQL).</p>
                    </div>
                    <div className="project-image">
                        <img src={imageProjetBDD} alt="moi" style={{width: '100%', maxWidth: '500px'}}/>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-content">
                        <h3>Méthodologie Agile</h3>
                        <p>Mise en œuvre de la méthodologie Agile dans le cadre d'un mini projet d'une semaine.</p>
                    </div>
                    <div className="project-image">
                        <img src={imageProjetAgile} alt="moi" style={{width: '100%', maxWidth: '500px'}}/>
                    </div>
                </div>
                <div className="project-item">
                    <div className="project-item-content">
                        <h3>Projet érisse</h3>
                        <p>Mise en œuvre de la méthodologie Agile dans le cadre d'un mini projet d'une semaine.</p>
                    </div>
                    <div className="project-image">
                        <img src={imageProjetErisse} alt="moi" style={{width: '100%', maxWidth: '500px'}}/>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
}

export default Projects;
