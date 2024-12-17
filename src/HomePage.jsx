import './App.css';
import Presentation from "./components/Presentation.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import BoutonCV from "./components/BoutonCV.jsx";
import Footer from "./components/Footer.jsx";
import Experience from "./components/Experience.jsx";
import Competences from "./components/Competences.jsx";

function HomePage() {
    return (
        <div className="App">
            <Presentation/>
            <Projects/>
            <About/>
            <Experience/>
            <Competences/>
            <BoutonCV/>
            <Footer/>
        </div>
    );
}

export default HomePage;
