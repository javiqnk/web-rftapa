import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
    ArrowDownTrayIcon,
    DocumentArrowDownIcon,
    ArrowLongRightIcon
} from '@heroicons/react/24/outline'
import { getDocumentsByCategory } from "@/data/documents";

export default async function Page() {

    const data = await getDocumentsByCategory(8)

    return (
        <>

            <header className="-mt-24">
                <div className="w-full bg-center bg-cover bg-[url('/img/fondo04.jpg')]">
                    <div className="w-full h-full bg-black/50 pb-8 pt-32">
                        <div className="container pt-20 md:pt-36 text-end">
                            <h1 className="text-4xl text-balance md:text-5xl lg:text-6xl text-white">
                                <b>Normativas y reglamentos</b>
                            </h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="my-8 container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {data?.map((circular) => (
                    <div className="flex flex-col text-gray-700 bg-white dark:bg-slate-900 shadow border rounded-md">
                        <div className="p-4">
                            <h5 className="text-xl antialiased font-semibold leading-snug tracking-normal flex text-gray-900 dark:text-white">
                                <DocumentArrowDownIcon className="h-7 w-7 me-2 mt-1" /> {circular?.wdfFileNameToShow}
                            </h5>
                        </div>
                        <div className="p-4 pt-0 text-end">
                            <Link href={circular?.wdfPublicURL} target="_blank">
                                <Button>Descargar <ArrowDownTrayIcon className="h-5 w-5 flex-none text-white ms-2 dark:text-gray-700" /></Button>
                            </Link>
                        </div>
                    </div>
                ))}

                </div>
            </div>
            <div className="my-8 container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <Link href="https://www.federarco.es/normativas-reglamentos/normativas" target="_blank" className="hover:scale-[1.01] transition-all ">
                        <div className="flex flex-col text-gray-700  shadow border rounded-md bg-red-400/10">
                            <div className="p-5">
                                <h5 className="text-2xl antialiased font-semibold leading-snug tracking-normal flex text-gray-900 dark:text-white">
                                    <img src="/img/logos/rfeta-bg.png" className="h-10 me-2" /> Normativas y reglas RFETA
                                </h5>
                            </div>
                            <div className="p-5 pt-0 text-end text-lg flex justify-end text-gray-700 ms-2 dark:text-gray-200">
                                Ver reglamentos <ArrowLongRightIcon className="w-5 flex-none text-gray-700 ms-2 dark:text-gray-200" />
                            </div>
                        </div>
                    </Link>
                    <Link href="https://www.worldarchery.sport/rulebook" target="_blank" className="hover:scale-[1.01] transition-all ">
                        <div className="flex flex-col text-gray-700  shadow border rounded-md bg-sky-400/10">
                            <div className="p-5">
                                <h5 className="text-2xl antialiased font-semibold leading-snug tracking-normal flex text-gray-900 dark:text-white">
                                    <img src="/img/logos/WA-bg.png" className="h-10 me-2" /> Libros de reglamentos WA
                                </h5>
                            </div>
                            <div className="p-5 pt-0 text-end text-lg flex justify-end text-gray-700 ms-2 dark:text-gray-200">
                                Ver reglamentos <ArrowLongRightIcon className="w-5 flex-none text-gray-700 ms-2 dark:text-gray-200" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </>
    );
}