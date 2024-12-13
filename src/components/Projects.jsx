import Modal from "react-modal";
import {useState} from "react";

import imageProjetJava from "../assets/TrajetProjet.png";
import imageProjetBDD from "../assets/BDDProjet.jpg";
import imageProjetAgile from "../assets/AgileProjet.png";
import imageProjetIris from "../assets/IrisProjet.png";

function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState("");

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage("");
    };
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
                        alt="Projet Java"
                        className="max-w-sm rounded-lg shadow-2xl cursor-pointer"
                        onClick={() => openModal(imageProjetJava)}
                    />
                    <div>
                        <h1 className="text-4xl font-bold">Projet Développement(Java, Javafx, Graphe) </h1>
                        <p className="py-6">
                            Ce projet consiste à concevoir et développer une application informatique dont l'objectif
                            principal est de permettre à l'utilisateur de déterminer le chemin le plus court entre deux
                            points, désignés comme "point A" et "point B". Cette application repose sur l'implémentation
                            d'algorithmes de recherche d'itinéraires optimisés, tels que l'algorithme de Dijkstra ou
                            l'algorithme BellmanFord. Ces techniques garantissent une efficacité et une précision
                            accrues
                            dans la recherche du parcours le plus rapide ou le plus économique en fonction de divers
                            critères comme le coût, l'émission de CO2 et le temps mais aussi les moyens de transport.
                            <a href="https://github.com/Gradlar/TrajetGraphe"
                               className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition duration-300">En
                                savoir plus</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 min-h-screen lg:min-h-[50vh] text-justify">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={imageProjetBDD}
                        alt="Projet BDD"
                        className="max-w-sm rounded-lg shadow-2xl cursor-pointer"
                        onClick={() => openModal(imageProjetBDD)}
                    />
                    <div>
                        <h1 className="text-4xl font-bold">BDD Parcoursup(SQL, MCD) </h1>
                        <p className="py-6">
                            Ce projet vise à concevoir et implémenter une base de données relationnelle dédiée à la
                            gestion des étudiants inscrits sur la plateforme Parcoursup. Cette base de données sera
                            structurée pour stocker, organiser et manipuler efficacement les informations liées aux
                            candidats, aux formations proposées, et aux processus d'admission.
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-200 min-h-screen lg:min-h-[50vh] text-justify">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={imageProjetAgile}
                        alt="Projet Agile"
                        className="max-w-sm rounded-lg shadow-2xl cursor-pointer"
                        onClick={() => openModal(imageProjetAgile)}
                    />
                    <div>
                        <h1 className="text-4xl font-bold">Méthodologie Agile</h1>
                        <p className="py-6">
                            Ce projet consistait à créer un jeu de cartes inspiré du célèbre jeu de bataille, mais
                            enrichi avec des mécaniques innovantes et des éléments stratégiques. Le projet a été réalisé
                            en une semaine, en appliquant une méthodologie agile adaptée pour maximiser la productivité
                            et la créativité dans un temps limité.
                            <a href="https://github.com/Gradlar/WorldOfCards"
                               className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition duration-300">En
                                savoir plus</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="hero bg-base-100 min-h-screen lg:min-h-[50vh] text-justify">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={imageProjetIris}
                        alt="Projet Iris"
                        className="max-w-sm rounded-lg shadow-2xl cursor-pointer"
                        onClick={() => openModal(imageProjetIris)}
                    />
                    <div>
                        <h1 className="text-4xl font-bold">Projet Iris (Java, Javafx) </h1>
                        <p className="py-6">
                            Dans le cadre de ce projet, nous avons conçu et développé une application dont l’objectif
                            principal était de représenter des données sous forme de nuage de points, en mettant
                            l’accent sur des types génériques, avec comme exemple les iris et les pokemons.
                            <a href="https://github.com/Gradlar/ClassificationApp"
                               className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 py-1 rounded transition duration-300">En
                                savoir plus</a>
                        </p>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Image en grand"
                className="flex justify-center items-center h-screen"
                overlayClassName="fixed inset-0 bg-black bg-opacity-80"
            >
                <div className="relative rounded-lg shadow-lg">
                    <button
                        onClick={closeModal}
                        className="absolute top-2 right-2 text-white bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-600"
                    >
                        <span className="text-xl font-semibold">×</span>
                    </button>
                    <img src={currentImage} alt="Aperçu du projet" className="max-w-full max-h-screen"/>
                </div>
            </Modal>
        </>
    );
}

export default Projects;
