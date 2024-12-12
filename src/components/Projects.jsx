import imageProjetJava from "../assets/javaProjet.png";
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

        <div className="hero bg-base-200 min-h-screen lg:min-h-[50vh] text-justify">
            <div className="hero-content flex-col lg:flex-row lg:gap-8">
                <img
                    src={imageProjetJava}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">Projet Développement(Java, Javafx, Graphe) </h1>
                    <p className="py-6">
                        Ce projet consiste à concevoir et développer une application informatique dont l'objectif principal est de permettre à l'utilisateur de déterminer le chemin le plus court entre deux points, désignés comme "point A" et "point B". Cette application repose sur l'implémentation d'algorithmes de recherche d'itinéraires optimisés, tels que l'algorithme de Dijkstra ou l'algorithme BellmanFord. Ces techniques garantissent une efficacité et une précision accrues dans la recherche du parcours le plus rapide ou le plus économique en fonction de divers critères comme le coût, l'émission de CO2 et le temps mais aussi les moyens de transport.                    </p>
                </div>
            </div>
        </div><div className="hero bg-base-100 min-h-screen lg:min-h-[50vh] text-justify">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={imageProjetBDD}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">BDD Parcoursup(SQL, MCD) </h1>
                        <p className="py-6">
                            Ce projet vise à concevoir et implémenter une base de données relationnelle dédiée à la gestion des étudiants inscrits sur la plateforme Parcoursup. Cette base de données sera structurée pour stocker, organiser et manipuler efficacement les informations liées aux candidats, aux formations proposées, et aux processus d'admission.
                        </p>
                    </div>
                </div>
            </div><div className="hero bg-base-200 min-h-screen lg:min-h-[50vh] text-justify">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={imageProjetAgile}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Méthodologie Agile</h1>
                        <p className="py-6">
                            Ce projet consistait à créer un jeu de cartes inspiré du célèbre jeu de bataille, mais enrichi avec des mécaniques innovantes et des éléments stratégiques. Le projet a été réalisé en une semaine, en appliquant une méthodologie agile adaptée pour maximiser la productivité et la créativité dans un temps limité.
                        </p>
                    </div>
                </div>
            </div><div className="hero bg-base-100 min-h-screen lg:min-h-[50vh] text-justify">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={imageProjetErisse}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-4xl font-bold">Projet Iris (Java, Javafx) </h1>
                        <p className="py-6">
                            Dans le cadre de ce projet, nous avons conçu et développé une application dont l’objectif principal était de représenter des données sous forme de nuage de points, en mettant l’accent sur des types génériques, avec comme exemple les iris et les pokemons.
                        </p>
                    </div>
                </div>
            </div></>
        );
}

export default Projects;
