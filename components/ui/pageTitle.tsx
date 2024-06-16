
export default function PageTitle({
    children = "",
    pageTitle = "",
    pageDescription = "",
    showBg = true,
}: any) {

    return (
        <>
            {showBg && (
                <div className="absolute h-[70%] top-0 z-[-2] w-full  dark:bg-[#020817]">
                    <div className="dark:hidden absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#DBEDCA2e_1px,transparent_1px),linear-gradient(to_bottom,#DBEDCA2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                </div>
            )}
            <div className="container relative my-10 ">
                {children}
                <h2 className="pointer-events-none mt-4 z-10 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-500/70 bg-clip-text text-starrt text-3xl font-semibold leading-none text-transparent dark:from-white dark:to-gray-300/80 md:text-5xl">
                    {pageTitle}
                </h2>
                <p className="mt-3 text-gray-500 dark:text-gray-400 font-semibold md:w-[80%]">
                    {pageDescription}
                </p>
            </div>
        </>
    )
}
