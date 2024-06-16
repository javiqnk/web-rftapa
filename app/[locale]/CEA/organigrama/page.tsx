import { getLanguage, Locale, i18n } from "@/get-language";

export default async function Page({
    params: { locale },
}: {
    params: { locale: Locale };
}) {

    const lang = await getLanguage(locale);

    return (

        <>
            <div className="mx-4 md:mx-16 rounded-xl bg-center bg-cover bg-[url('/img/fondos/fondo01.png')]">
                <div className="flex items-center justify-center rounded-xl w-full h-full bg-gray-900 bg-opacity-50 py-12">
                    <div className="text-center">
                        <div className="container px-4 mx-auto">
                            <div className="max-w-4xl mx-auto text-center">
                                <h2 className="md:my-12 my-8 text-4xl lg:text-5xl font-bold text-gray-100">Organigrama y equipo</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-10">

                <div className="grid grid-cols-3 gap-4">

                    <div className="py-8 px-8 bg-white rounded-xl shadow-lg border space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://media.licdn.com/dms/image/C4E03AQGcGpgl7LwNUg/profile-displayphoto-shrink_800_800/0/1651914815247?e=1723680000&v=beta&t=CskGtnLtLuAbK37VwuVGB7z-6DKDJc6hcKPupgUSb-I" alt="Woman's Face" />
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">
                                    José Manuel Andújar Márquez
                                </p>
                                <p className="text-slate-500 font-medium">
                                    Presidente
                                </p>
                            </div>
                            aa
                        </div>
                    </div>

                    <div className="py-8 px-8 bg-white rounded-xl shadow-lg border space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://media.licdn.com/dms/image/C4E03AQGcGpgl7LwNUg/profile-displayphoto-shrink_800_800/0/1651914815247?e=1723680000&v=beta&t=CskGtnLtLuAbK37VwuVGB7z-6DKDJc6hcKPupgUSb-I" alt="Woman's Face" />
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">
                                    José Manuel Andújar Márquez
                                </p>
                                <p className="text-slate-500 font-medium">
                                    Presidente
                                </p>
                            </div>
                            aa
                        </div>
                    </div>

                    <div className="py-8 px-8 bg-white rounded-xl shadow-lg border space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                        <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://media.licdn.com/dms/image/C4E03AQGcGpgl7LwNUg/profile-displayphoto-shrink_800_800/0/1651914815247?e=1723680000&v=beta&t=CskGtnLtLuAbK37VwuVGB7z-6DKDJc6hcKPupgUSb-I" alt="Woman's Face" />
                        <div className="text-center space-y-2 sm:text-left">
                            <div className="space-y-0.5">
                                <p className="text-lg text-black font-semibold">
                                    José Manuel Andújar Márquez
                                </p>
                                <p className="text-slate-500 font-medium">
                                    Presidente
                                </p>
                            </div>
                            aa
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}