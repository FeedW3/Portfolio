import React from 'react';

const Experience = () => {
    return (
        <>
            {/* Titre de la section */}
            <section id="experiences"></section>
            <div className="flex items-center justify-center p-8">
                <div className="max-w-md p-6 rounded-lg">
                    <h1 className="text-5xl font-bold text-center">Mes Expériences</h1>
                </div>
            </div>

        {/* Liste des expériences */}
            {/* Première expérience */}
            <div className="my-8 collapse collapse-arrow bg-base-200 shadow-lg rounded-lg h-full">
                <input type="checkbox" defaultChecked/>
                <div className="collapse-title text-xl font-medium">
                    E.Leclerc Étaples-Sur-Mer - Été 2024
                </div>
                <div className="collapse-content text-justify p-4">
                    <p className="font-bold mb-4">Employé dans la mise en rayon</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-sm text-gray-700">Organisation et gestion des stocks</li>
                        <li className="text-sm text-gray-700">Service à la clientèle</li>
                        <li className="text-sm text-gray-700">Travail d’équipe</li>
                        <li className="text-sm text-gray-700">Prises d’initiatives</li>
                    </ul>
                </div>
            </div>

            {/* Deuxième expérience */}
            <div className="my-8 collapse collapse-arrow bg-base-200 shadow-lg rounded-lg h-full">
                <input type="checkbox" defaultChecked/>
                <div className="collapse-title text-xl font-medium">
                    Intermarché Saint-Étienne-au-Mont - Été 2022
                </div>
                <div className="collapse-content text-justify p-4">
                    <p className="font-bold mb-4">Hôte de caisse</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-sm text-gray-700">Gestion de la caisse</li>
                        <li className="text-sm text-gray-700">Accueil clientèle</li>
                        <li className="text-sm text-gray-700">Travail d’équipe</li>
                        <li className="text-sm text-gray-700">Polyvalence sur les différentes tâches (mise en rayon et préparation des commandes)</li>
                    </ul>
                </div>
            </div>

            {/* Troisième expérience */}
            <div className="my-8 collapse collapse-arrow bg-base-200 shadow-lg rounded-lg h-full">
                <input type="checkbox" defaultChecked/>
                <div className="collapse-title text-xl font-medium">
                    Médiathèque de Saint-Étienne-au-Mont - Janvier 2022 - Février 2022
                </div>
                <div className="collapse-content text-justify p-4">
                    <p className="font-bold mb-4">Service informatique (stage)</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li className="text-sm text-gray-700">Maintenance d’ordinateurs</li>
                        <li className="text-sm text-gray-700">Formation des utilisateurs</li>
                        <li className="text-sm text-gray-700">Observation des méthodes de gestion d’un réseau informatique</li>
                        <li className="text-sm text-gray-700">Mise en réseau d’applications</li>
                    </ul>
                </div>
            </div>
        </>
    );
};
export default Experience;
