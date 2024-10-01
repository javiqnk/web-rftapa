import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
    ArrowDownTrayIcon,
    DocumentArrowDownIcon,
    ArrowLongRightIcon
} from '@heroicons/react/24/outline'

import DataTable from './table'

const data = [
    {
      id: "1",
      date: "22/09/2024",
      url: "/docs/circulares/cir_424.pdf",
      name: "Calendario Temporada 2024/2025",
    },
    {
      id: "2",
      date: "11/09/2024",
      url: "/docs/circulares/cir_423.pdf",
      name: "Acta proclamación DEFINITIVA presidente FTAPA",
    },
    {
      id: "3",
      date: "03/09/2024",
      url: "/docs/circulares/cir_422.pdf",
      name: "Acta proclamación presidente FTAPA",
    },
    {
      id: "4",
      date: "15/08/2024",
      url: "/docs/circulares/cir_421.pdf",
      name: "RECORDS ASTURIAS",
    },
    {
      id: "5",
      date: "14/08/2024",
      url: "/docs/circulares/cir_420.pdf",
      name: "Campeonato de Asturias Equipos 3D 2023-2024",
    },
    {
      id: "6",
      date: "09/08/2024",
      url: "/docs/circulares/cir_419.pdf",
      name: "Candidatos oficiales presidencia FTAPA",
    },
    {
      id: "7",
      date: "05/08/2024",
      url: "/docs/circulares/cir_418.pdf",
      name: "Candidatos provisionales presidencia FTAPA",
    },
  ]

export default async function Page() {
    const lastFourCirculars = data.slice(0, 4);

    return (
        <>
            <header className="-mt-32">
                <div className="w-full bg-gradient-to-r from-sky-500 to-blue-800 -skew-y-1">
                    <div className="w-full h-full pt-24">
                        <div className="container py-10 md:py-16 text-center skew-y-1">
                            <h1 className="text-3xl text-balance md:text-4xl lg:text-5xl text-white font-medium">
                                Circulares
                            </h1>
                            <h2 className="text-xl text-balance md:text-3xl lg:text-3xl text-white">Circulares y convocatorias de la FTAPA</h2>
                        </div>
                    </div>
                </div>
            </header>
            <div className="my-8 mt-12 container">
                <h3 className="my-4 text-xl md:text-3xl">Últimas circulares:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {lastFourCirculars.map((circular) => (
                        <div key={circular.id} className="flex flex-col text-gray-700 bg-white dark:bg-slate-900 shadow border rounded-md">
                            <div className="p-4 h-[4.5rem] overflow-hidden">
                                <h5 className="text-xl antialiased font-semibold leading-snug tracking-normal flex text-gray-900 dark:text-white">
                                    <DocumentArrowDownIcon className="h-7 w-7 me-2 mt-1" /> {circular.name}
                                </h5>
                            </div>
                            <div className="p-4 text-end">
                                <Link href={circular.url} target="_blank">
                                    <Button>Descargar <ArrowDownTrayIcon className="h-5 w-5 flex-none text-white ms-2 dark:text-gray-700" /></Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-8 container">
                <DataTable />
            </div>
        </>
    );
}