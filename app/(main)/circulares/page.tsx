import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
    ArrowDownTrayIcon,
    DocumentArrowDownIcon,
    ArrowLongRightIcon
} from '@heroicons/react/24/outline'

import DataTable from './table'
import { getDocuments, getDocumentsExceptCategory } from "@/data/documents";

export default async function Page() {

    const res = await getDocumentsExceptCategory(8)
    const lastFourCirculars = res?.slice(0, 4);

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
                    {lastFourCirculars?.map((circular) => (
                        <div key={circular.webDocFileID} className="flex flex-col text-gray-700 bg-white dark:bg-slate-900 shadow border rounded-md">
                            <div className="p-4 h-[4.5rem] overflow-hidden">
                                <h5 className="text-xl antialiased font-semibold leading-snug tracking-normal flex text-gray-900 dark:text-white">
                                    <DocumentArrowDownIcon className="h-7 w-7 me-2 mt-1" /> {circular.wdfFileNameToShow}
                                </h5>
                            </div>
                            <div className="p-4 text-end">
                                <Link href={circular.wdfPublicURL} target="_blank">
                                    <Button>Descargar <ArrowDownTrayIcon className="h-5 w-5 flex-none text-white ms-2 dark:text-gray-700" /></Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-8 container">
                <DataTable data={res as any} />
            </div>
        </>
    );
}