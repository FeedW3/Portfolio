import React from 'react';

const Competences = () => {
    return (
        <>
            {/* Titre de la section */}
            <div className="flex items-center justify-center p-8">
                <div className="max-w-full p-6 rounded-lg">
                    <h1 className="text-5xl font-bold text-center">Mes Compétences</h1>
                </div>
            </div>

            {/* Liste des compétences */}
            <section id="competences" className="py-16">
                <div className="flex flex-wrap justify-center gap-8 sm:gap-6">
                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg"
                            alt="Java"
                            className="w-20 h-20 mx-auto"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">Java</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Database-postgres.svg"
                            alt="SQL"
                            className="w-20 h-20 mx-auto"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">SQL</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                            alt="HTML"
                            className="w-20 h-20 mx-auto"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">HTML</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg"
                            alt="CSS"
                            className="w-20 h-20 mx-auto"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">CSS</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
                            alt="C"
                            className="w-20 h-20 mx-auto"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">C</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
                            alt="Git"
                            className="w-20 h-20 mx-auto"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">Git</p>
                    </div>

                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                            alt="React"
                            className="w-20 h-20 mx-auto"
                        />
                        <p className="mt-4 text-lg font-semibold text-gray-700">React</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Competences;
