export default function Hero({ title = "", description=""} : any) {

    return (
        <header className="-mt-20">
            <div className="w-full bg-center bg-cover bg-[url('/img/fondo01.jpeg')]">
                <div className="w-full h-full bg-black/50 pb-6 pt-20">
                    <div className="container pt-20 md:pt-32 text-start">
                        <h1 className="text-4xl text-balance md:text-4xl lg:text-5xl text-white">
                            <b>{title}</b>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}
