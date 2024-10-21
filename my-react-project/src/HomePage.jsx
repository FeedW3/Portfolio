import './App.css';
import Header from "./components/Header.jsx";
import Presentation from "./components/Presentation.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import BoutonCV from "./components/BoutonCV.jsx";
import Footer from "./components/Footer.jsx";

function HomePage() {
    return (
        <div className="App">
            <Header/>
            <Presentation/>
            <Projects/>
            <About/>
            <BoutonCV/>
            <Footer/>
        </div>
    );
}

export default HomePage;
