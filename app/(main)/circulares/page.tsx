import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import {
    ArrowDownTrayIcon,
    DocumentArrowDownIcon,
    ArrowLongRightIcon
} from '@heroicons/react/24/outline'

export default async function Page() {

    return (
        <>

            <header className="-mt-5">
                <div className="w-full bg-gradient-to-r from-blue-800 to-sky-600">
                    <div className="w-full h-full">
                        <div className="container py-8 md:py-12 text-center">
                            <h1 className="text-3xl text-balance md:text-4xl lg:text-5xl text-white font-medium">
                                Circulares
                            </h1>
                            <h2 className="text-xl text-balance md:text-3xl lg:text-3xl text-white">Circulares y convocatorias de la FTAPA</h2>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="my-8 container">
                
            </div>

        </>
    );
}