import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import ContactPage from './ContactPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contacts" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}

export default App;


