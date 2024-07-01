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
                <div className="w-full bg-gradient-to-r from-cyan-600 to-sky-700">
                    <div className="w-full h-full">
                        <div className="container py-12 text-center">
                            <h1 className="text-4xl text-balance md:text-5xl lg:text-6xl text-white">
                                <b>Circulares</b>
                                
                            </h1>
                            <h2 className="text-2xl text-balance md:text-3xl lg:text-4xl text-white">Circulares y convocatorias de la FTAPA</h2>
                        </div>
                    </div>
                </div>
            </header>
            
            <div className="my-8 container">
                
            </div>

        </>
    );
}