import UserCard from "@/components/UserCard";
import Hero from "@/components/hero";
import { CardAvatars, CardAvatarsPerson } from "@/components/ui/cardAvatars";

import Link from "next/link";


export default async function Page() {

    return (
        <>
            <Hero title="Junta directiva" description="Federación de Tiro con Arco del Principado de Asturias" />

            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="py-5 container">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-2 rtl:space-x-reverse">
                            <li>
                                <Link href="#junta_directiva" className="text-gray-900 dark:text-white hover:bg-gray-400/30 px-3 py-2 rounded" aria-current="page">Junta directiva</Link>
                            </li>
                            <li>
                                <Link href="#comites" className="text-gray-900 dark:text-white hover:bg-gray-400/30 px-3 py-2 rounded" aria-current="page">Comités</Link>
                            </li>
                            <li>
                                <Link href="#asamblea" className="text-gray-900 dark:text-white hover:bg-gray-400/30 px-3 py-2 rounded" aria-current="page">Asamblea</Link>
                            </li>
                            <li>
                                <Link href="#comite_disciplina" className="text-gray-900 dark:text-white hover:bg-gray-400/30 px-3 py-2 rounded" aria-current="page">Comité disciplina</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="my-12">
                <section className="container grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4" id="junta_directiva">
                    <UserCard name="José Luis López García" position="Presidente" email="rftapa@hotmail.com" />
                    <UserCard name="Luis Sánchez Arboleya" position="Vicepresidente y Presidente del comité de precisión" />
                    <UserCard name="Jairo Valentín Fernández Álvarez" position="Secretario" />
                    <UserCard name="Caridad Fernández Osorio" position="Tesorera" />
                </section>
                <section className="container mt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4">
                    <UserCard name="Montserrat Valle Orviz" position="Vocal" tel="Presidenta del Comité de Jueces" />
                    <UserCard name="María del Pilar González Menéndez" position="Vocal" tel="Presidente del Comité de Monitores" />
                    <UserCard name="Emilio Álvarez Prendes" position="Vocal" tel="Presidente del Comité de 3D y Campo" />
                    <UserCard name="Jairo Valentín Fernández Álvarez" position="Vocal" tel="Presidente del Comité de Tradicional" />
                    <UserCard name="Carmen Fernández Llera" position="Vocal" tel="Presidenta del comité de inclusión" />
                    <UserCard name="Mario Sánchez Medrano" position="Vocal" tel="Coordinador de Competiciones" />
                </section>
                <section className="container mt-12 grid md:grid-cols-2 gap-4" id="comites">
                    <CardAvatars title="Comité de jueces" subTitle="comitedejueces@ftapa.es">
                        <CardAvatarsPerson name="Montserrat Valle Orviz" description="Presidenta" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Susana Campos Alonso" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Andrés Fernández Barbón" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                    </CardAvatars>
                    <CardAvatars title="Comité de monitores" subTitle="comiteentrenadores@ftapa.es">
                        <CardAvatarsPerson name="María del Pilar González Menéndez" description="Presidenta" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Susana Martino Blanco" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Valentín Marcos Alonso Murias" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                    </CardAvatars>
                    <CardAvatars title="Comité de precisión" subTitle="comiteprecision@ftapa.es">
                        <CardAvatarsPerson name="Luis Manuel Sánchez Arboleya" description="Presidente" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Javier Hurtado Canteli" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Miguel Menéndez de Ves" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                    </CardAvatars>
                    <CardAvatars title="Comité de tradicional" subTitle="comitetradicional@ftapa.es">
                        <CardAvatarsPerson name="Jairo Valentín Fernández Álvarez" description="Presidente" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Jose Manuel Rimada Fernández" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Iván Suarez Ramos" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                    </CardAvatars>
                    <CardAvatars title="Comité de 3D y campo" subTitle="comite3dcampo@ftapa.es">
                        <CardAvatarsPerson name="Emilio Álvarez Prendes" description="Presidente" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Valentín Marcos Alonso Murias" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                    </CardAvatars>
                    <CardAvatars title="Comité de integración y arco adaptado">
                        <CardAvatarsPerson name="Carmen Fernández Llera" description="Presidenta" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Natalia Díaz Fernández" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Cristina Martínez Rollán López" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Nuria González Rodríguez" description="Vocal" urlImage="/images/avatar.png"></CardAvatarsPerson>
                    </CardAvatars>
                </section>
                <section className="container mt-12 grid md:grid-cols-2 gap-4" id="asamblea">
                    <div>
                        <CardAvatars title="Asamblea" subTitle="Representantes de deportistas" className="mb-4">
                            <CardAvatarsPerson name="Valentín Marcos Alonso Murias" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Javier Hurtado Canteli" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="José Luis López García" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Luis Carlos Puerta Martínez" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Miguel Menéndez de Ves" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Luis Manuel Sánchez Arboleya" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="María Álvarez Collada" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="María del Carmen Fernández Llera" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        </CardAvatars>
                        <CardAvatars title="Asamblea" subTitle="Representantes de técnicos" className="mb-4">
                            <CardAvatarsPerson name="Mª del Pilar González Menéndez" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Alfredo Pérez Díaz" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        </CardAvatars>
                        <CardAvatars title="Asamblea" subTitle="Representantes de jueces">
                            <CardAvatarsPerson name="Montserrat Valle Orvíz" urlImage="/images/avatar.png"></CardAvatarsPerson>
                            <CardAvatarsPerson name="Andrés Fernandez Barbón" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        </CardAvatars>
                    </div>

                    <CardAvatars title="Asamblea" subTitle="Clubes">
                        <CardAvatarsPerson name="Agones " description="Carlos Banacloche Benavent" urlImage="https://scontent.fsvq5-1.fna.fbcdn.net/v/t39.30808-6/274156129_112058938074062_3203972089125332254_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=UbSZJTvAfzYQ7kNvgEuLAdf&_nc_ht=scontent.fsvq5-1.fna&oh=00_AYCDIwZWMkIxGWpZlSBCH5RZDN_Hr7OWQS1GUjIaQKLOxw&oe=6687D909"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arco Nalón " description="Cristina Cañón Rodríguez" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPpgSwLmhqvgszW350Oc4jyGWrMDINL0SE3Q&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="ArcoAstur  " description="Alfredo Perez Diaz" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7kvdWYrnue8vB_kBZkmj1uqv6O67p3cxGw&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arluteva  " description="Agustin Suarez Heres" urlImage="https://scontent.fsvq5-1.fna.fbcdn.net/v/t39.30808-6/417391783_890419809448262_4134315890334915278_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=VwxsdebB0Q8Q7kNvgHLacfR&_nc_ht=scontent.fsvq5-1.fna&oh=00_AYBwID4BvmXlGb8vV1uTBdM5b1vSI0egdeQYHcggNcR8Yg&oe=6687C2A8"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arqueros Villaviciosa " description="Emilio Álvarez Prendes" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj0tRDkhC4dy_PLjcKZbyKgvjhyYplHGWaTA&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arkeros Corvera " description="María del Pilar González Menéndez" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMtKShF0IQ2TFSm_OYDlHhrVZKv6TN7yusdQ&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arqueros del Xabalin " description="Luis Carlos Puerta Martínez" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXJhMRvtzINLm3w2hpZsqrgXSKPP3oJPwUA&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="XiTiA  " description="Jairo Valentín Fernández Álvarez" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoe9otr7PEYvyRAbbgWGHTFzDB46CxmESavQ&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="El Clan del Oso Astur " description="José Luis López García" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfqOnrxmMe-Z0o8W0ROynRC2w11n6l99wPA&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Lluarcos " description="Santiago Fernández Crespo" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfExEijI50xknaGjFAgy9xNzy56nwUkMRR-w&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Real Grupo Cultura Covadonga " description="Antonio Corripio Álvarez" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mLhviAhKNyjuzfcpbyCTV0H0KObTLSyOfw&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arcos de Texu " description="Valentín Marcos Alonso Murias" urlImage="https://mitxmitx.files.wordpress.com/2014/07/arcos-de-texu.gif"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arqueros de Carreño " description="Jorge Isidro Mata" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaxShew9Bmtn3PkrQ9-Uyr2nvLooZXkVNypA&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arqueros Laviana " description="Jose Antonio Amor Cepeda" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWV4MUlLU_6RPmkC_1gfaoKmdy0Rxa8y2yQQ&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arqueros de San Martín " description="Javir Hurtado Canteli" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXCLo7ezOHNeemIm45KyBUKh3Yr3afNScLIQ&s"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Arqueros de la Cruz de Oviedo " description="Ángeles Martínez Vega" urlImage="https://scontent.fsvq5-1.fna.fbcdn.net/v/t39.30808-6/305619021_565345772059241_3263681339896910976_n.png?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=74up36WDyxwQ7kNvgEq_eUe&_nc_ht=scontent.fsvq5-1.fna&oh=00_AYB5xDrcc6641R5H2IXJmOvsvN0Bh-gVGHqLEudBuHBwGA&oe=6687D69D"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Club Hípico Astur " description="Mario Vigil Pico" urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPbq8fKnymxd9MlDU1kZvsSevRy6tiicoDhw&s"></CardAvatarsPerson>
                    </CardAvatars>
                </section>
                <section className="container mt-12" id="comite_disciplina">
                    <CardAvatars title="Comité de disciplina" subTitle="CONTUS ABOGADOS, C/ Alejandro Casona 26, 1ºB, 33013 Oviedo" >
                        <CardAvatarsPerson name="Juan José López de la Parte" description="Presidente" urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Adrián Martínez González" description="Abogado " urlImage="/images/avatar.png"></CardAvatarsPerson>
                        <CardAvatarsPerson name="Marcos González Suarez" description="Abogado " urlImage="/images/avatar.png"></CardAvatarsPerson>
                    </CardAvatars>
                </section>
            </div>
        </>
    );
}