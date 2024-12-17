function Contact() {
    return (

    <>
    <div className="flex items-center justify-center p-8">
        <div className="max-w-md rounded-lg">
            <h1 className="text-5xl font-bold text-center">Contact</h1>
        </div>
    </div>
            <section className="bg-base-200 flex items-center text-justify">
                <div className="w-full bg-base-100 rounded-lg">
                <p className="text-lg p-8">
                     Vous pouvez me contacter aux adresses suivantes :
                </p>
                    <div className="p-8 space-y-8">
                            <div className="flex items-center gap-4">
                                <span className="font-semibold">Université :</span>
                                <a
                                    href="mailto:enzo.lamour.etu@univ-lille.fr"
                                    className="link link-hover text-primary"
                                >
                                    enzo.lamour.etu@univ-lille.fr
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-semibold">Personnel :</span>
                                <a
                                    href="mailto:lamourenzo@gmail.com"
                                    className="link link-hover text-primary"
                                >
                                    lamourenzo@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-semibold">LinkedIn :</span>
                                <a
                                    href="https://www.linkedin.com/in/lamour-enzo-4464a6270/"
                                    className="link link-hover text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://www.linkedin.com/in/lamour-enzo-4464a6270/
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="font-semibold">GitHub :</span>
                                <a
                                    href="https://github.com/Gradlar"
                                    className="link link-hover text-primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://github.com/Gradlar
                                </a>
                            </div>
                        </div>
                    </div>
            </section></>
      );
}

export default Contact;
