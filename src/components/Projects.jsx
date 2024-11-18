import imageProjetJava from "../assets/javaProjet.jpg";
import imageProjetBDD from "../assets/BDDProjet.jpg";
import imageProjetAgile from "../assets/AgileProjet.jpg";
import imageProjetErisse from "../assets/ErisseProjet.jpg";

function Projects() {
    return (
        <>
        <section id="projects"></section>
        <div className="flex items-center justify-center p-8">
        <div className="max-w-md p-6 rounded-lg">
          <h1 className="text-5xl font-bold text-center">Mes Projets</h1>
        </div>
      </div>

        <div className="hero bg-base-200 min-h-screen lg:min-h-[50vh]">
            <div className="hero-content flex-col lg:flex-row lg:gap-8">
                <img
                    src={imageProjetJava}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Projet Développement(Java, Javafx, Graphe) </h1>
                    <p className="py-6">
                        Développement d'une application permettant de trouver le plus court chemin entre un point A et un point B.
                    </p>
                </div>
            </div>
        </div><div className="hero bg-base-100 min-h-screen lg:min-h-[50vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={imageProjetBDD}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">BDD Parcoursup(SQL) </h1>
                        <p className="py-6">
                            Création d'une base de données pour la gestion des étudiants de Parcoursup.
                        </p>
                    </div>
                </div>
            </div><div className="hero bg-base-200 min-h-screen lg:min-h-[50vh]">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={imageProjetAgile}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Méthodologie Agile</h1>
                        <p className="py-6">
                            Création d'une base de données pour la gestion des étudiants de Parcoursup.
                        </p>
                    </div>
                </div>
            </div><div className="hero bg-base-100 min-h-screen lg:min-h-[50vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={imageProjetErisse}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Projet Iris (Java, Javafx) </h1>
                        <p className="py-6">
                            Mise en œuvre de la méthodologie Agile dans le cadre d'un mini projet d'une semaine.</p>
                    </div>
                </div>
            </div></>
        );
}

export default Projects;
