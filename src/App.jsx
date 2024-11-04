import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';

function App() {
    const basename = import.meta.env.MODE === "production" ? "/portfolio" : "";
    return (
        <BrowserRouter basename={basename}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contacts" element={<ContactPage />} />
                </Routes>
            </Router>
        </BrowserRouter>
    );
}

export default App;


