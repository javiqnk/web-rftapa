import { revalidatePath } from "next/cache";
import DataTable from "./table";

export default async function Page() {

    revalidatePath('/api/federated/v1/competitions')
    const data = await fetch('https://ftapa.addon-sport.com/api/results/v1/competitions').then((res) =>
        res.json()
    )

    return (
        <>
            <header className="-mt-32">
                <div className="w-full bg-gradient-to-r from-sky-500 to-blue-800 -skew-y-1">
                    <div className="w-full h-full pt-24">
                        <div className="container py-10 md:py-16 text-center skew-y-1">
                            <h1 className="text-3xl text-balance md:text-4xl lg:text-5xl text-white font-medium">
                                Competiciones
                            </h1>
                            <h2 className="text-xl text-balance md:text-3xl lg:text-3xl text-white">Competiciones y resultados de la FTAPA</h2>
                        </div>
                    </div>
                </div>
            </header>

            <div className="my-8 container">
                <DataTable data={data.data} />
            </div>
        </>
    );
}