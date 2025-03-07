"use client"

import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

export default function Footer() {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-gray-50 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div className="flex lg:flex-1">
                            <div>
                                <span className="sr-only">Federación de Tiro con Arco del Principado de Asturias</span>
                                <img className="h-14 w-auto" src="/img/logos/logo.png" alt="" height={55} width={55} />
                            </div>
                            <div className='ms-2 mt-1'>
                                <div className="leading-6 text-lg">
                                    Federación de Tiro con Arco
                                </div>
                                <div className="leading-5 text-lg font-medium">
                                    Principado de Asturias
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">FTAPA</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-3">
                                    <Link href="/federacion/historia" className="hover:underline">Historia</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/federacion/junta" className="hover:underline">Junta directiva</Link>
                                </li>
                                <li>
                                    <Link href="/contacto" className="hover:underline">Contacto</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Síguenos</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-3">
                                    <a href="https://www.facebook.com/rftapa" className="hover:underline">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/rftapa/" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-3">
                                    <a href="/aviso-legal" className="hover:underline">Aviso legal</a>
                                </li>
                                <li className="mb-3">
                                    <a href="/privacidad" className="hover:underline">Política de privacidad</a>
                                </li>
                                <li>
                                    <a href="/cookies" className="hover:underline">Política de cookies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://www.ftapa.com/" className="hover:underline">Federación Asturiana de Tiro con Arco</a> - <b>Powered by <a className="text-[#3F84A6] font-extrabold" target="_blank" href="https://addon-sport.com/">Add On Sport</a></b>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://www.facebook.com/rftapa" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/rftapa" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                            </svg>
                            <span className="sr-only">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
