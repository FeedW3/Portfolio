function About() {
    return (
        <>
        <section id="about"></section><div className="flex items-center justify-center p-8">
            <div className="max-w-md p-6 rounded-lg">
                <h1 className="text-5xl font-bold text-center">Présentations</h1>
            </div>

        </div><div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Université de Lille - IUT A</div>
                <div className="collapse-content">
                    <p><strong>Formation :</strong> BUT Informatique</p>
                    <p><strong>Période :</strong> 2022 - Présent</p>
                    <p>
                        Durant cette formation, j'ai acquis des compétences solides en développement logiciel,
                        en gestion de bases de données et en gestion de projets. Les cours m'ont permis de
                        développer une expertise en programmation (Java, Python, JavaScript) et d'approfondir
                        mes connaissances en architecture des systèmes d'information et en réseaux informatiques.
                    </p>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">Lycée St Joseph - Boulogne-sur-Mer</div>
                    <div className="collapse-content">
                        <p><strong>Diplôme :</strong> BACCALAURÉAT Technologique</p>
                        <p><strong>Période :</strong> 2018 - 2021</p>
                        <p>
                            J'ai obtenu mon baccalauréat technologique au lycée St Joseph, où j'ai développé un intérêt
                            particulier pour les sciences informatiques et les nouvelles technologies. Cette période
                            m'a permis de renforcer mes compétences en analyse de systèmes, de découvrir le
                            développement web
                            et de me familiariser avec les langages de programmation de base. J'ai également participé à
                            divers projets scolaires qui m'ont initié au travail en équipe.
                        </p>
                    </div>
                </div>
            </div></>
    );
}

export default About;
