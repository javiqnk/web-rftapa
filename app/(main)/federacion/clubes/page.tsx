import UserCard from "@/components/UserCard";
import Hero from "@/components/hero";
import { CardAvatars, CardAvatarsPerson } from "@/components/ui/cardAvatars";

import Link from "next/link";
import DataTable from "./table";
import { revalidatePath } from "next/cache";


export default async function Page() {

    revalidatePath("/api/federated/v1/clubs");
    const data = await fetch('http://localhost:3001/api/federated/v1/clubs').then((res) =>
        res.json()
    )
    console.log(data)
    return (
        <>
            <Hero title="Clubes asociados" description="Federación de Tiro con Arco del Principado de Asturias" />
            <div className="my-12 container">
                <DataTable data={data.data} />
            </div>
        </>
    );
}