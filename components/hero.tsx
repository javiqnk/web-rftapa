export default function Hero({ title = "", description=""} : any) {

    return (
        <header className="-mt-24">
            <div className="w-full bg-center bg-cover bg-[url('/img/fondo06.jpg')]">
                <div className="w-full h-full bg-black/70 pb-6 pt-20">
                    <div className="container pt-24 md:pt-36 text-start">
                        <h1 className="text-4xl text-balance md:text-5xl lg:text-6xl text-white">
                            <b>{title}</b>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
