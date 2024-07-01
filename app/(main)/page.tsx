import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Autoplay from "embla-carousel-autoplay"
import Logos from "@/components/logos"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";



export default async function Page() {

  return (
    <>

      <header className=" -mt-20">
        <div className="w-full bg-center md:bg-bottom bg-cover md:bg-fixed bg-[url('/img/fondo03.jpg')]">
          <div className="w-full h-full bg-black/50 py-10 pt-48">
            <div className="container pt-20 md:pt-32 text-right">
              <h1 className="mb-4 text-4xl text-balance md:text-5xl lg:text-6xl text-white">
                Federación de Tiro con Arco<br />
                <b>Principado de Asturias</b>
              </h1>
              {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Página web oficial de la Federación de Tiro con Arco del principado de asturias, en esta web encontrarás toda la actualidad del tiro con arco en Asturias así cómo la información de competiciones y eventos oficiales.</p> */}
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-700 border-2 border-white hover:bg-sky-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Fedérate
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <Link href="/contacto" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border-2 border-white rounded-lg hover:bg-gray-100/10">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </header>

      <Logos />

      <section className="container">
        <div className="md:flex items-center px-4 pt-8 mx-auto gap-10">
          <div className="w-full mb-6 md:mb-0">
            <img className="rounded-lg w-full h-auto" src="/img/fondo02.jpg" />
          </div>
          <div className="w-full">
            <h2 className="text-base font-semibold leading-7 text-sky-700">Competiciones</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Circulares</p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
            <Link href="/circulares" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-sky-700 mt-6 hover:bg-sky-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Círculares
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <div className="bg-sky-700 text-white -skew-y-1">
          <div className="container mx-auto skew-y-1">
            <div className="flex flex-col items-center py-14 text-center ">
              <div className="w-full px-4 lg:w-2/3 lg:px-0">
                <div className="mb-6">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                    ¿Aún no estás federado?
                  </h2>
                  <p className="text-lg lg:text-xl opacity-80">
                    Fedérate para poder empezar a practicar el tiro con arco en el Principado de Asturias.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center justify-center px-8 py-3 mr-3 font-bold text-lg text-center text-sky-700 rounded-lg bg-white hover:bg-gray-200">
                  Fedérate
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                <div className="text-md mt-6">
                  <p>
                    ¿Necesitas ayuda?
                    <a href="/contacto " className="border-b ms-2 border-white pb-1">
                      Contáctanos
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mb-12 mt-20">
        <div className="mx-auto max-w-2xl text-center mb-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Noticias</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">Últimas noticias de la Federación Asturiana de Tiro con Arco.</p>
        </div>
        <Carousel className="w-[92%] md:w-[96%] mx-auto">
          <CarouselContent className="-ml-1">
            <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-lg font-semibold">Resultados 2º Entrenamiento 3D 2021</div>
                    <div className="mb-5">19/4/2021</div>
                    <a href="#" className="inline-flex items-center justify-center text-base font-medium hover:underline">
                      Leer noticia
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-lg font-semibold">Resultados primer entrenamiento 3D 2021</div>
                    <div className="mb-5">19/4/2021</div>
                    <a href="#" className="inline-flex items-center justify-center text-base font-medium hover:underline">
                      Leer noticia
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-lg font-semibold">2º entrenamiento 3D 2021</div>
                    <div className="mb-5">19/4/2021</div>
                    <a href="#" className="inline-flex items-center justify-center text-base font-medium hover:underline">
                      Leer noticia
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-lg font-semibold">Control puntuaciones 6 y 7 marzo 2021</div>
                    <div className="mb-5">19/4/2021</div>
                    <a href="#" className="inline-flex items-center justify-center text-base font-medium hover:underline">
                      Leer noticia
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem key={1} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-lg font-semibold">Control puntuaciones 20 y 21 febrero 2021</div>
                    <div className="mb-5">19/4/2021</div>
                    <a href="#" className="inline-flex items-center justify-center text-base font-medium hover:underline">
                      Leer noticia
                      <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}