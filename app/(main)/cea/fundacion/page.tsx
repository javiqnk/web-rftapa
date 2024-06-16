import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import PageTitle from "@/components/ui/pageTitle";
import { CardAvatars, CardAvatarsPerson } from "@/components/ui/cardAvatars";

export default async function Page() {

    return (

        <>
            {/* <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="container relative right-0 top-0 h-[500px] w-[500px] rounded-full bg-[rgba(109,244,170,0.5)] opacity-60 blur-[80px]"></div>
            </div> */}
            {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.2)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div> */}

            <PageTitle pageTitle="Fundación CEA" pageDescription="La Fundación FCEA fue constituida por la entidad Comité Español de Automática-CEA, en Barcelona, el 14 de abril de 2004, a raíz de diversas donaciones obtenidas con motivo de la celebración en Barcelona del XV Congreso Mundial de la IFAC, en Julio del 2002.">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">CEA</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Fundación CEA</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageTitle>
            
            <div className="container relative my-10 ">

                <p className="mt-10">
                    <b>El objetivo fundacional es:</b> El fomento e impulso de la enseñanza, investigación científica y el desarrollo tecnológico en el ámbito de la Automática
                </p>
                <p className="mt-3">
                    Serán beneficiarios de la Fundación aquellas personas relacionadas con la universidad, centros de investigación o la industria que, en base a los fines indicados en el párrafo anterior, respondan por sus características al desarrollo y obtención de los mismos.
                </p>
                <p className="mt-3">
                    Para la consecución de sus fines, la Fundación podrá establecer relaciones de reciprocidad y colaboración con cualesquiera entes que libremente determine el Patronato, dentro y fuera del territorio del Estado español.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-10">
                    <div>
                        <CardAvatars title="Patronos" className="mb-7">
                            <CardAvatarsPerson name="Albertos Pérez, D. Pedro" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Dormido Bencomo, D. Sebastián" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Prada Moraga, D. César de" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Salichs Sánchez-Caballero, D. Miguel Ángel" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        </CardAvatars>
                        <CardAvatars title="Secretario no patrono">
                            <CardAvatarsPerson name="Aranda Almansa, D. Joaquín" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        </CardAvatars>
                    </div>
                    <div>
                        <CardAvatars title="Patronos designados por: Asociación del Comité Español de Automática (ACEA):">
                            <CardAvatarsPerson name="Balaguer Bernaldo de Quirós, D. Carlos" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Costa Castelló, D. Ramón" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Mañanas Villanueva, D. Miguel Ángel" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Pagés Fita, D. Jaume" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Quevedo Casín, D. Joseba" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        </CardAvatars>
                    </div>
                </div>
            </div>
        </>
    );
}