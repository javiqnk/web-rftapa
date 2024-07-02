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
                <h1 className="text-5xl font-medium">Últimas noticias</h1>
                <h3 className="text-2xl mt-1">Últimas noticias y publicaciones de la FTAPA</h3>
            </div>


            <div className="my-8 container">
                <a href="/noticias/2-entrenamiento-3D-2021" className="grid grid-cols-1 md:grid-cols-4 md:gap-4 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
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
            </div>


            <div className="my-8 container">
                <a href="/noticias/2-entrenamiento-3D-2021" className="grid grid-cols-1 md:grid-cols-4 md:gap-4 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
                    <div className="w-full">
                        <img className="object-cover w-full rounded-lg md:h-44 " src="/img/noticia02.jpg" alt="" />
                    </div>
                    <div className="col-span-3 flex flex-col justify-between p-2">
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resultados</span>
                            <h1 className="text-2xl font-bold text-gray-700 my-1 dark:text-white">2º entrenamiento 3D 2021</h1>
                            <p className="text-sm ">Lugar: Campo de tiro con arco Los Valles, La Llera, Colunga
                                Se ruega a los asistentes traer calzado y ropa adecuados. ES OBLIGATORIO LLEVAR LA LICENCIA</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                13 de abril de 2021
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


            <div className="my-8 container">
                <a href="/noticias/2-entrenamiento-3D-2021" className="grid grid-cols-1 md:grid-cols-4 md:gap-4 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
                    <div className="w-full">
                        <img className="object-cover w-full rounded-lg md:h-44 " src="/img/noticia03.jpg" alt="" />
                    </div>
                    <div className="col-span-3 flex flex-col justify-between p-2">
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resultados</span>
                            <h1 className="text-2xl font-bold text-gray-700 my-1 dark:text-white">Resultados primer entrenamiento 3D 2021</h1>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                4 de abril de 2021
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


            <div className="my-8 container">
                <a href="/noticias/2-entrenamiento-3D-2021" className="grid grid-cols-1 md:grid-cols-4 md:gap-4 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
                    <div className="w-full">
                        <img className="object-cover w-full rounded-lg md:h-44 " src="/img/noticia04.jpg" alt="" />
                    </div>
                    <div className="col-span-3 flex flex-col justify-between p-2">
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resultados</span>
                            <h1 className="text-2xl font-bold text-gray-700 my-1 dark:text-white">Control puntuaciones 6 y 7 marzo 2021</h1>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                9 de marzo de 2021
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


            <div className="my-8 container">
                <a href="/noticias/2-entrenamiento-3D-2021" className="grid grid-cols-1 md:grid-cols-4 md:gap-4 p-2 bg-white border border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-800 hover:shadow-lg hover:-translate-y-1 duration-200">
                    <div className="w-full">
                        <img className="object-cover w-full rounded-lg md:h-44 " src="/img/noticia05.jpg" alt="" />
                    </div>
                    <div className="col-span-3 flex flex-col justify-between p-2">
                        <div>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Resultados</span>
                            <h1 className="text-2xl font-bold text-gray-700 my-1 dark:text-white">Control puntuaciones 20 y 21 febrero 2021</h1>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                22 de febrero de 2021
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
        </>
    );
}