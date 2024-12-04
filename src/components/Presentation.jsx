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
        Actuellement étudiant en 2ᵉ année de BUT Informatique à l'IUT A de Villeneuve-d'Ascq, je suis en quête d’une opportunité qui me permettrait de découvrir le secteur dans lequel je pourrais évoluer
        </p>
        </div>
    </div>
    </div>
    )
        ;
}

export default Presentation;