import Hero from "@/components/hero";

export default async function Page() {

    return (
        <>
            <Hero title="Historia de la federación" description="Federación de Tiro con Arco del Principado de Asturias" />
            <section className="container my-12">
                <p className="mb-5">
                    Corría el año 1962 cuando se funda el Club Oviedo, primer club de tiro con arco de Asturias, amparado por la Asociación Astur de Caza. En aquella época un grupo de amigos “jugaban a tirar con arco” en los alrededores del Monte Naranco de Oviedo con sus arcos Indian de fabricación española, semejantes a los recurvos tradicionales actuales pero que usaban un cable metálico en lugar de la cuerda como la conocemos hoy en día, sin más pretensión que pasarlo bien.
                </p>
                <p className="mb-5">
                    Con la fundación del Club Oviedo, empieza a entenderse el tiro con arco ya no como un “juego” sino como algo más serio, un deporte de competición.
                </p>
                <p className="mb-5">
                    Por aquellos años tiene lugar la 1ª Tirada de San Mateo, primera competición de tiro con arco que se organiza en Asturias, celebrándose ésta en la Plaza de España de Oviedo.
                </p>
                <p className="mb-5">
                    Los componentes del reducido grupo que comenzó a practicar de forma seria el tiro con arco, vieron como este grupo crecía rápidamente. Durante este tiempo se van haciendo con mejores equipamientos, en lo que a flechas y arcos se refiere, y van depurando su técnica tirando ya a distancias largas, 50 y 70 metros.
                </p>
                <p>
                    Se afianza la relación con la Real Federación Española de Tiro con Arco, hasta que en octubre 1963, este grupo de arqueros, reciben la visita de los miembros de La Real Federación Española de Tiro con Arco para apadrinar la fundación de La Federación de Tiro con Arco del Principado de Asturias, nombrándose como presidente a Juan Aurelio Álvarez Riera, como vicepresidente a Ildefonso Meré, a Carlos Hernández como secretario, Adolfo Rodríguez como interventor y con el cargo de tesorero Juan Hernandez, completando la composición de aquella recién formada Federación de Tiro con Arco del Principado de Asturias, Ramón y Armando Menéndez como vocales. Desde ese momento, los arqueros asturianos comienzan a entrenar con regularidad y a celebrarse las competiciones según el calendario nacional.
                </p>
            </section>
        </>
    );
}