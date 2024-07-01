'use client'

import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Logos() {

    return (

        <section className="bg-gray-100 dark:bg-slate-900 ">
            <Carousel className="w-full container md:hidden py-4"
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
            >
                <CarouselContent className="-ml-1">
                    <CarouselItem key={1} className="pl-1 basis-1/3 flex place-content-center items-center">
                        <a href="https://www.asturias.es/" target="_blank" className="hover:scale-105 transition-all">
                            <img src="/img/logos/principado.png" className="h-16" alt="" />
                        </a>
                    </CarouselItem>
                    <CarouselItem key={2} className="pl-1 basis-1/3 flex place-content-center items-center">
                        <a href="#" target="_blank" className="hover:scale-105 transition-all">
                            <img src="/img/logos/logo.png" className="h-16" alt="" />
                        </a>
                    </CarouselItem>
                    <CarouselItem key={3} className="pl-1 basis-1/3 flex place-content-center items-center">
                        <a href="https://www.federarco.es/" target="_blank" className="hover:scale-105 transition-all">
                            <img src="/img/logos/rfeta-bg.png" className="h-16" alt="" />
                        </a>
                    </CarouselItem>
                    <CarouselItem key={4} className="pl-1 basis-1/3 flex place-content-center items-center">
                        <a href="https://www.worldarchery.sport/" target="_blank" className="hover:scale-105 transition-all">
                            <img src="/img/logos/WA-bg.png" className="h-16" alt="" />
                        </a>
                    </CarouselItem>
                    <CarouselItem key={5} className="pl-1 basis-1/3 flex place-content-center items-center">
                        <a href="https://www.archeryeurope.org/" target="_blank" className="hover:scale-105 transition-all">
                            <img src="/img/logos/archery-europe-bg.png" className="h-16" alt="" />
                        </a>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
            <div className="hidden md:block">
                <div className="container flex place-content-center items-center py-4 gap-4 justify-between">
                    <a href="https://www.asturias.es/" target="_blank" className="hover:scale-105 transition-all">
                        <img src="/img/logos/principado.png" className="h-16" alt="" />
                    </a>
                    <a href="#" target="_blank" className="hover:scale-105 transition-all">
                        <img src="/img/logos/logo.png" className="h-24" alt="" />
                    </a>
                    <a href="https://www.federarco.es/" target="_blank" className="hover:scale-105 transition-all">
                        <img src="/img/logos/rfeta-bg.png" className="h-24" alt="" />
                    </a>
                    <a href="https://www.worldarchery.sport/" target="_blank" className="hover:scale-105 transition-all">
                        <img src="/img/logos/WA-bg.png" className="h-24" alt="" />
                    </a>
                    <a href="https://www.archeryeurope.org/" target="_blank" className="hover:scale-105 transition-all">
                        <img src="/img/logos/archery-europe-bg.png" className="h-24" alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}
