import { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:lamourenzo@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nFrom: " + name + "\nEmail: " + email)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section className="bg-base-200 flex justify-center items-center">
            <div className="w-full max-w-lg bg-base-200 p-8 rounded-lg shadow-md">
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
                    <div className="form-control">
                        <button type="submit" className="btn btn-primary w-full">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
