import MonImage from '../assets/moi.jpg';

function Presentation() {
    return (
        <div className="container">
            <div className="presentation">
                <h2>Lamour Enzo</h2>
                <p>Étudiant en informatique, actuellement en 2éme année de BUT informatique</p>
            </div>
            <div className="image">
                <img src={MonImage} alt="moi" style={{width: '100%', maxWidth: '500px'}}/>
            </div>
        </div>
    )
        ;
}

export default Presentation;