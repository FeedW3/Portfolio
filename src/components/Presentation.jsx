import MonImage from '../assets/moi.jpg';

function Presentation() {
    return (
        <div className="container">
            <div className="presentation">
                <h2>Lamour Enzo</h2>
                <p>Actuellement étudiant en 2ᵉ année de BUT Informatique à l'IUT A de Villeneuve-d'Ascq, je suis en quête d’une opportunité qui me permettrait de découvrir le secteur dans lequel je pourrais évoluer</p>
            </div>
            <div className="image">
                <img src={MonImage} alt="moi" style={{width: '100%', maxWidth: '500px'}}/>
            </div>
        </div>
    )
        ;
}

export default Presentation;