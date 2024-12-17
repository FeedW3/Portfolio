import MonImage from '../assets/moi.jpg';

function Presentation() {
    return (
    <div
    className="hero min-h-screen"
    style={{
        backgroundImage: `url(${MonImage})`,
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center z-auto">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Lamour Enzo</h1>
        <p className="mb-5">
            Actuellement étudiant en 2ᵉ année de BUT Informatique à l'IUT A de Villeneuve-d'Ascq, je suis à la recherche d'un stage d'une durée de trois mois, débutant en avril        </p>
        </div>
    </div>
    </div>
    )
        ;
}

export default Presentation;