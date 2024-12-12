import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [captchaValue, setCaptchaValue] = useState(null); // Stocke le token CAPTCHA
    const [isSending, setIsSending] = useState(false);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Veuillez valider le CAPTCHA avant de soumettre le formulaire.');
            return;
        }

        setIsSending(true);

        const templateParams = {
            name: name,
            email: email,
            message: message,
        };

        try {
            await emailjs.send(
                'service_3wus19q',
                'template_jp1fk83',
                templateParams,
                'QqI5thbNrhK2yh12J'
            );
            alert('Email envoyé avec succès !');
            setName('');
            setEmail('');
            setMessage('');
            setCaptchaValue(null);
        } catch (error) {
            alert('Erreur lors de l\'envoi de l\'email. Réessayez plus tard.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="bg-base-200 flex justify-center items-center">
            <div className="w-full max-w-lg bg-base-200 p-8 rounded-lg">
                <h2 className="text-4xl font-bold text-center mb-6">Contactez-moi</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="form-control">
                        <label htmlFor="name" className="label">
                            <span className="label-text font-semibold">Nom:</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="email" className="label">
                            <span className="label-text font-semibold">Email:</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="message" className="label">
                            <span className="label-text font-semibold">Message:</span>
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    {/* Intégration de reCAPTCHA */}
                    <div className="form-control">
                        <ReCAPTCHA
                            sitekey={"6LcxApoqAAAAAFhEv_exwO6F7vnShnUmmlzhk2af"}
                            onChange={handleCaptchaChange}
                        />
                    </div>

                    <div className="form-control">
                        <button type="submit" className="btn btn-primary w-full" disabled={isSending}>
                            {isSending ? 'Envoi en cours...' : 'Envoyer'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
