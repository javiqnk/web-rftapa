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

            <PageTitle pageTitle={`Premio "Comité Español de Automática"`} pageDescription="El Premio “Comité Español de Automática” es una distinción otorgada por la asociación CEA a miembros de la comunidad científica, que desarrollan su actividad en el campo de la automática, como reconocimiento de los méritos alcanzados a lo largo de su trayectoria académica y profesional. Este Premio se entrega, por parte de CEA, cada dos años, en el marco de las Jornadas de Automática, y consiste en una escultura alegórica y un certificado.">
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
                            <BreadcrumbPage>Premio CEA</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </PageTitle>

            <div className="container relative my-10 ">

                {/* <p className="mt-10">
                    <b>El objetivo fundacional es:</b> El fomento e impulso de la enseñanza, investigación científica y el desarrollo tecnológico en el ámbito de la Automática
                </p>
                <p className="mt-3">
                    Serán beneficiarios de la Fundación aquellas personas relacionadas con la universidad, centros de investigación o la industria que, en base a los fines indicados en el párrafo anterior, respondan por sus características al desarrollo y obtención de los mismos.
                </p>
                <p className="mt-3">
                    Para la consecución de sus fines, la Fundación podrá establecer relaciones de reciprocidad y colaboración con cualesquiera entes que libremente determine el Patronato, dentro y fuera del territorio del Estado español.
                </p> */}
                
            </div>
        </>
    );
}