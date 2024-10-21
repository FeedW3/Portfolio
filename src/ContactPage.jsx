import './App.css';
import Contact from "./components/Contact.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

function ContactPage() {
    return (
        <div className="contact-page">
            <Contact/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default ContactPage;
