export default async function Page() {

    return (
        <>
            <div className="dark:hidden absolute top-10 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

            <div className="text-gray-600 body-font z-10">
                <div className="container py-6 lg:py-8 mb-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 sm:mr-16 p-0 lg:p-10 flex flex-col justify-start z-10">
                        <div className="grow mb-8 sm:mb-0">
                            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-3 dark:text-white">Contacta con la Federación de Tiro con Arco del Principado de Asturias</h1>
                            <p className="leading-relaxed text-base dark:text-gray-300">Puedes escribirnos un correo  a: <a href="mailto:rftapa@hotmail.com" className="text-sky-600 hover:text-sky-800">rftapa@hotmail.com</a></p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 relative flex flex-wrap py-6 rounded shadow-md border border-inherit">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs">DIRECCIÓN</h2>
                                <p className="mt-1 dark:text-gray-300">
                                    Apartado de correos nº50 <br />
                                    33600 Mieres</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs">EMAIL</h2>
                                <a href="mailto:rftapa@hotmail.com" className="text-sky-600 hover:text-sky-800">rftapa@hotmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 dark:text-white tracking-widest text-xs mt-4">TELÉFONO</h2>
                                <p className="leading-relaxed dark:text-gray-300">722 315 171</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 flex flex-col md:ml-auto w-full lg:py-8 sm:mt-0 mt-8">
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600 dark:text-white">Nombre</label>
                            <input type="text" id="name" name="name" className="w-full dark:bg-gray-800 rounded border focus:border-lime-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600 dark:text-white">Email</label>
                            <input type="email" id="email" name="email" className="w-full rounded border dark:bg-gray-800 focus:border-lime-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600 dark:text-white">Asunto</label>
                            <input type="text" id="asunto" name="asunto" className="w-full rounded border dark:bg-gray-800 focus:border-lime-600 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label className="leading-7 text-sm text-gray-600 dark:text-white">Mensaje</label>
                            <textarea id="message" name="message" className="w-full rounded border dark:bg-gray-800 focus:border-lime-600 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white bg-sky-700 border-0 py-2 px-6 focus:outline-none hover:bg-sky-800 rounded text-lg">Enviar</button>
                        <p className="text-xs text-gray-500 mt-3 dark:text-gray-400">Enviando el formulario acepta la <a href="/privacidad" className="text-sky-600 hover:text-sky-800">política de privacidad</a> de la página.</p>
                    </div>
                </div>
            </div>
        </>
    );
}