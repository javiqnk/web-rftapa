"use client"

import { Locale } from "@/get-language";
import Link from "next/link";
import { Fragment, useState, useEffect } from "react";

export default function Footer({ getLanguage, locale, i18n }: any) {

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
                                <span className="sr-only">Comité Español de Automática</span>
                                <img className="h-14 w-auto" src="/img/logos/logo.png" alt="" height={55} width={55} />
                            </div>
                            <div className='ms-2'>
                                <div className="leading-6 text-xl">
                                    Comite Español
                                </div>
                                <div className="leading-5 text-xl">
                                    de <b>Automática</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2 md:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">CEA</h2>
                            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                <li className="mb-3">
                                    <Link href="/cea/nosotros" className="hover:underline">Sobre la CEA</Link>
                                </li>
                                <li className="mb-3">
                                    <Link href="/cea/organigrama" className="hover:underline">Organigrama</Link>
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
                                    <a href="https://twitter.com/CEAutomatica" className="hover:underline ">Twitter</a>
                                </li>
                                <li className="mb-3">
                                    <a href="https://www.youtube.com/user/CEAUTOMATICA" className="hover:underline">Youtube</a>
                                </li>
                                <li>
                                    <a href="https://es.wikipedia.org/wiki/Comit%C3%A9_Espa%C3%B1ol_de_Autom%C3%A1tica" className="hover:underline">Wikipedia</a>
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
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {year} <a href="https://www.ceautomatica.es/" className="hover:underline">Comité Español de Automática</a> - <b>Powered by <a className="text-[#3F84A6] font-extrabold" target="_blank" href="https://addon-sport.com/">Add On Sport</a></b>
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="https://twitter.com/CEAutomatica" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                                <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                            </svg>
                            <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://www.youtube.com/user/CEAUTOMATICA" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                            </svg>
                            <span className="sr-only">YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}
