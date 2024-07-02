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
            <div className="dark:hidden absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(3,105,161,0.3),rgba(255,255,255,0))]"></div>

            <div className="text-center relative container py-12">
                <h1 className="text-5xl font-medium">2º entrenamiento 3D 2021</h1>
                <h3 className="text-lg mt-1">13 de abril de 2021</h3>
            </div>

            <div className="container md:px-24">
                <img className="object-cover w-full rounded-lg md:max-h-[35rem]" src="/img/noticia02.jpg" alt="" />

                <div className="my-10">
                    <p className="mb-4">
                        SESION DE ENTRENAMIENTO BOSQUE 3D
                    </p>
                    <p className="mb-5">
                        DEBIDO AL ESTADO DE ALARMA POR EL COVID-19 ES DE OBLIGADO CUMPLIMIENTO EL "PROTOCOLO" ESTABLECIDO, QUE SE PUEDE CONSULTAR EN
                        http://www.rftapa.com/docs/circulares/cir_287.pdf
                    </p>
                    <p className="mb-5">
                        DEBIDO AL ESTADO DE ALARMA POR EL COVID-19 ES DE OBLIGADO CUMPLIMIENTO EL "PROTOCOLO" ESTABLECIDO, QUE SE PUEDE CONSULTAR EN
                        http://www.rftapa.com/docs/circulares/cir_287.pdf
                    </p>
                    <p className="mb-5">
                        NO PODRÁ ACCEDER A LA ZONA DE COMPETICIÓN NINGÚN DEPORTISTA, MONITOR, JUEZ O MIEMBRO DE LA ORGANIZACION QUE NO HAGA ENTREGA DE LA "DECLARACIÓN RESPONSABLE" (PAGINA 28 DEL PROTOCOLO)
                    </p>
                    <p className="mb-5">
                        EN LA INSTALACIÓN DE TIRO NO PODRÁN ACCEDER ACOMPAÑANTES NI PUBLICO.
                    </p>
                    <p className="mb-5">
                        AQUELLAS PERSONAS QUE NO CUMPLAN CON LAS NORMAS DE SEGURIDAD DEL PROTOCOLO, Y QUE SE LE AVISE Y PERSISTAN EN SALTÁRSELAS, SERÁN EXPULSADAS DE LA COMPETICIÓN.
                    </p>
                    <p className="mb-5">
                        ORGANIZA: Federación de Tiro con arco del Principado de Asturias<br />
                        COLABORAN: Arco Los Valles
                    </p>
                    <p className="mb-5">
                        FECHA: 17 de abril de 2021 <br />
                        Hora de concentración: 15:15 <br />
                        Hora de revisión: 15:30 <br />
                        Hora de comienzo: 16:00

                    </p>
                    <p className="mb-5">
                        Lugar: Campo de tiro con arco Los Valles, La Llera, Colunga

                    </p>
                    <p className="mb-5">
                        Se ruega a los asistentes traer calzado y ropa adecuados. ES OBLIGATORIO LLEVAR LA LICENCIA
                    </p>
                    <p className="mb-5">
                        EL PLAZO DE INSCRIPCION FINALIZA EL 15 de abril A LAS 24:00 HORAS

                        CUOTAS INSCRIPCION:
                        10 euros
                        El pago de las inscripciones lo hará un responsable de cada club.<br />
                        Si un club inscribe a un arquero y este no acude, el club abonará igualmente la inscripción de dicho arquero.
                    </p>
                    <p className="mb-5">
                        Categorías:<br />
                        • Longbow Senior<br />
                        • Instintivo Senior<br />
                        • Recurvado Senior<br />
                        • Arco Compuesto Senior<br />
                        • Arco desnudo Senior<br />
                        • Instintivo Menor sin distinción de sexo<br />
                        • Recurvado Menor sin distinción de sexo<br />
                        • Compuesto Menor sin distinción de sexo
                    </p>
                    <p className="mb-5">
                        El entrenamiento constará de un recorrido de 24 animales y se realizará bajo la normativa WA, RFETA, FTAPA.<br /><br />

                        Las inscripciones se enviaran a inscripciones@ftapa.es, indicando:<br />
                        • Categoría del deportista<br />
                        • Numero de licencia<br />
                        • Lateralidad (diestro, zurdo)<br />
                        • Club al que pertenecen<br />
                    </p>
                </div>
            </div>


            <div className="container my-8 ">
                <h3 className="mb-5 ms-2 text-3xl font-medium">Últimas noticias:</h3>
                <div className=" grid grid-cols-3 gap-4">
                    <a href="#" className="grid grid-cols-1 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
                        <div className="w-full">
                            <img className="object-cover w-full rounded-lg md:h-44 " src="/img/fondo04.jpg" alt="" />
                        </div>
                        <div className="col-span-3 flex flex-col justify-between p-2">
                            <div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resultados</span>
                                <h1 className="text-2xl font-bold text-gray-700 my-1 dark:text-white">Resultados 2º Entrenamiento 3D 2021</h1>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    19 de abril de 2021
                                </div>
                                <div>
                                    <Button variant="ghost" className="inline-flex items-center justify-center py-0 text-base font-medium text-center ">
                                        Leer noticia
                                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="grid grid-cols-1 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
                        <div className="w-full">
                            <img className="object-cover w-full rounded-lg md:h-44 " src="/img/noticia03.jpg" alt="" />
                        </div>
                        <div className="col-span-3 flex flex-col justify-between p-2">
                            <div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resultados</span>
                                <h1 className="text-2xl font-bold text-gray-700 my-1 dark:text-white">2º entrenamiento 3D 2021</h1>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    19 de abril de 2021
                                </div>
                                <div>
                                    <Button variant="ghost" className="inline-flex items-center justify-center py-0 text-base font-medium text-center ">
                                        Leer noticia
                                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="#" className="grid grid-cols-1 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
                        <div className="w-full">
                            <img className="object-cover w-full rounded-lg md:h-44 " src="/img/noticia04.jpg" alt="" />
                        </div>
                        <div className="col-span-3 flex flex-col justify-between p-2">
                            <div>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resultados</span>
                                <h1 className="text-2xl font-bold text-gray-700 my-1 dark:text-white">Resultados primer entrenamiento 3D 2021</h1>
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    19 de abril de 2021
                                </div>
                                <div>
                                    <Button variant="ghost" className="inline-flex items-center justify-center py-0 text-base font-medium text-center ">
                                        Leer noticia
                                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>


        </>
    );
}