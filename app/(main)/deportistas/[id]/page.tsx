import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserIcon } from "@heroicons/react/24/outline";
import { MoveRight } from "lucide-react";
import Link from "next/link";

import { revalidatePath } from 'next/cache'

function Edad(FechaNacimiento: any) {

    var fechaNace: any = new Date(FechaNacimiento);
    var fechaActual: any = new Date()

    var mes = fechaActual.getMonth();
    var dia = fechaActual.getDate();
    var año = fechaActual.getFullYear();

    fechaActual.setDate(dia);
    fechaActual.setMonth(mes);
    fechaActual.setFullYear(año);

    var edad = Math.floor(((fechaActual - fechaNace) / (1000 * 60 * 60 * 24) / 365));

    return edad;

}

export default async function Page({
    params: { id },
}: {
    params: { id: any };

}) {

    revalidatePath('/api/federated/v1/athlete/' + id)
    const dataApi = await fetch('https://ftapa.com/api/federated/v1/athlete/' + id).then((res) =>
        res.json()
    )

    const fedeData = dataApi.data

    revalidatePath('/api/results/v1/athlete-results/' + fedeData.FederatedLicense)
    const resultsDataApi = await fetch('https://ftapa.com/api/results/v1/athlete-results/' + fedeData.FederatedLicense).then((res) =>
        res.json()
    )

    const resultsData = resultsDataApi.data

    return (
        <>
            <header className="-mt-32">
                <div className="w-full bg-gradient-to-r from-sky-500 to-blue-800 -skew-y-1">
                    <div className="w-full h-full pt-24">
                        <div className="container py-10 md:py-14 text-start skew-y-1">
                            <div className="flex align-middle items-center mt-4">
                                <div className="me-4 md:me-6">
                                    <Avatar className="h-14 w-14 md:h-20 md:w-20">
                                        <AvatarImage src={"https://docs.rfeta.es/" + fedeData.FederatedPhoto} alt="Imagen del federado" />
                                        <AvatarFallback><UserIcon className="h-8 w-8 md:h-14 md:w-14 mt-1 text-gray-600" /></AvatarFallback>
                                    </Avatar>
                                </div>
                                <div>
                                    <h1 className="text-2xl text-balance md:text-4xl text-white font-medium">
                                        {fedeData.Name} {fedeData.Surname}
                                    </h1>
                                    <h2 className="text-lg text-balance md:text-xl text-white">{fedeData.ClubName} ({fedeData.ClubLicense})</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>


            <div className="my-8 container">
                <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-8 font-sans font-semibold border-sky-600  dark:text-gray-200">
                    Información
                </h1>
                <div className="block mt-5 py-4 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            Deportista: <b>{fedeData.Name} {fedeData.Surname}</b>
                        </div>
                        <div>
                            Sexo: <b>{fedeData.Gender} </b>
                        </div>
                        <div>
                            Edad: <b>{Edad(fedeData.BirthDate)} AÑOS</b>
                        </div>
                        <div>
                            Provincia: <b>{fedeData.Province} </b>
                        </div>
                        <div>
                            Licencia club: <b>{fedeData.ClubLicense} </b>
                        </div>
                        <div className="col-span-3">
                            Club: <b>{fedeData.ClubName}</b>
                        </div>
                    </div>

                    <Link href="https://rfeta.es" target="blank" className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                            Ver perfil en rfeta.es
                            <MoveRight className="ms-2" />
                        </span>
                    </Link>
                </div>
            </div>

            <div className="my-8 container">
                <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-8 font-sans font-semibold border-sky-600  dark:text-gray-200">
                    Resultados
                </h1>

                {resultsDataApi.results == 0 &&
                    <div className="block mt-5 py-4 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-md italic">No hay ningún resultado disponible para este deportista...</h2>
                    </div>
                }

                {resultsData.map((item: any) => (
                    <div key={item.ResultsId} className="block mt-5 py-4 px-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h2 className="text-lg font-semibold mb-2">{item.TournamentName}</h2>
                        <div className="md:flex justify-between items-center">
                            <div>
                                <span className="bg-blue-100 text-blue-800 text-sm font-bold me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Ranking: {item.FinalRank}</span>
                                <span>Clasificación: {item.QualificationScore} - ({item.QualificationRank}º posición)</span>
                            </div>
                            <Link href="https://rfeta.es" target="blank" className="mt-4 place-content-center md:w-auto md:mt-0 w-full relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                <span className="relative w-full md:w-auto place-content-center text-center px-4 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                                    Ver detalles de la competición
                                    <MoveRight className="ms-2" />
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}


            </div>
        </>
    );
}