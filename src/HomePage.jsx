import './App.css';
import { useState, useEffect } from "react";
import Presentation from "./components/Presentation.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import BoutonCV from "./components/BoutonCV.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Competences from "./components/Competences.jsx";

function HomePage() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="App">
            <Presentation />
            <Projects />
            <About />
            <Experience />
            <Competences />
            <BoutonCV />
            <Footer />

            {/* Bouton "Retour au début" */}
            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-3 bg-black text-white rounded-full shadow-lg hover:bg-red-800 transition-all duration-300 transform hover:scale-110 animate-bounce"
                >
                    {/* Icône de flèche */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
}

export default HomePage;
