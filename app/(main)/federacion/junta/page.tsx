'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Moon, Sun, Menu, UserIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Hero from '@/components/hero'

const data = {
  "pageTitle": "Junta directiva",
  "pageDescription": "Federación de Tiro con Arco del Principado de Asturias",
  "navigation": [
    { "href": "#junta_directiva", "label": "Junta directiva" },
    { "href": "#comites", "label": "Comités" },
    { "href": "#asamblea", "label": "Asamblea" },
    { "href": "#comite_disciplina", "label": "Comité disciplina" }
  ],
  "juntaDirectiva": [
    { "name": "José Luis López García", "position": "Presidente", "email": "rftapa@hotmail.com" },
    { "name": "Luis Sánchez Arboleya", "position": "Vicepresidente y Presidente del comité de precisión" },
    { "name": "Jairo Valentín Fernández Álvarez", "position": "Secretario" },
    { "name": "Caridad Fernández Osorio", "position": "Tesorera" },
    { "name": "Montserrat Valle Orviz", "position": "Vocal", "tel": "Presidenta del Comité de Jueces" },
    { "name": "María del Pilar González Menéndez", "position": "Vocal", "tel": "Presidente del Comité de Monitores" },
    { "name": "Emilio Álvarez Prendes", "position": "Vocal", "tel": "Presidente del Comité de 3D y Campo" },
    { "name": "Jairo Valentín Fernández Álvarez", "position": "Vocal", "tel": "Presidente del Comité de Tradicional" },
    { "name": "Carmen Fernández Llera", "position": "Vocal", "tel": "Presidenta del comité de inclusión" },
    { "name": "Mario Sánchez Medrano", "position": "Vocal", "tel": "Coordinador de Competiciones" }
  ],
  "comites": [
    {
      "title": "Comité de jueces",
      "subTitle": "comitedejueces@ftapa.es",
      "members": [
        { "name": "Montserrat Valle Orviz", "description": "Presidenta", "urlImage": "/images/avatar.png" },
        { "name": "Susana Campos Alonso", "description": "Vocal", "urlImage": "/images/avatar.png" },
        { "name": "Andrés Fernández Barbón", "description": "Vocal", "urlImage": "/images/avatar.png" }
      ]
    },
    {
      "title": "Comité de monitores",
      "subTitle": "comiteentrenadores@ftapa.es",
      "members": [
        { "name": "María del Pilar González Menéndez", "description": "Presidenta", "urlImage": "/images/avatar.png" },
        { "name": "Susana Martino Blanco", "description": "Vocal", "urlImage": "/images/avatar.png" },
        { "name": "Valentín Marcos Alonso Murias", "description": "Vocal", "urlImage": "/images/avatar.png" }
      ]
    }
  ],
  "asamblea": {
    "deportistas": [
      { "name": "Valentín Marcos ALONSO MURIAS", "urlImage": "/images/avatar.png" },
      { "name": "Yolanda CAMPOS SANTOS", "urlImage": "/images/avatar.png" },
      { "name": "Jennifer MEJUTO MATEO", "urlImage": "/images/avatar.png" },
      { "name": "Luis Carlos PUERTA MARTINEZ", "urlImage": "/images/avatar.png" },
      { "name": "Manuel Ángel MÉNDEZ ORDOÑEZ", "urlImage": "/images/avatar.png" },
      { "name": "Ana María LOPEZ de la REINA RIPOLL", "urlImage": "/images/avatar.png" },
      { "name": "Luzdivina AMOR CEPEDA", "urlImage": "/images/avatar.png" },
      { "name": "Emilio José CONDE RONDEROS", "urlImage": "/images/avatar.png" },
      { "name": "Olaya CORVELLE FERNANDEZ", "urlImage": "/images/avatar.png" },
      { "name": "Juan Manuel MARTINEZ GONZALEZ", "urlImage": "/images/avatar.png" },
      { "name": "Sonia LOPEZ ALVAREZ", "urlImage": "/images/avatar.png" }
    ],
    "tecnicos": [
      { "name": "María ÁLVAREZ COLLADA", "urlImage": "/images/avatar.png" },
      { "name": "Susana MARTINO BLANCO", "urlImage": "/images/avatar.png" },
      { "name": "Mario SÁNCHEZ MEDRANO", "urlImage": "/images/avatar.png" }
    ],
    "jueces": [
      { "name": "Diego BERCIAL ARGÜELLES", "urlImage": "/images/avatar.png" },
      { "name": "Francisco Manuel BERCIAL GARCÍA", "urlImage": "/images/avatar.png" },
      { "name": "Susana CAMPOS ALONSO", "urlImage": "/images/avatar.png" }
    ],
    "clubes": [
      { "name": "CDB Arco Astur", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arco Nalon", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arcos de Texu", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arkeros Corvera", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arqueros de Lugones Teresa Valdés", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arqueros Carreño", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arqueros de la Cruz de Oviedo", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arqueros de Villaviciosa", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arqueros del Xabalin", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arqueros Laviana", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Arqueros de San Martin", "urlImage": "/images/club-logo.png" },
      { "name": "CDB Lluarcos", "urlImage": "/images/club-logo.png" },
      { "name": "CDB XiTiA", "urlImage": "/images/club-logo.png" },
      { "name": "Club Hípico Astur", "urlImage": "/images/club-logo.png" },
      { "name": "Club Clan del Oso Astur", "urlImage": "/images/club-logo.png" },
      { "name": "R.G.C. Covadonga", "urlImage": "/images/club-logo.png" },
      { "name": "S.D. Agones", "urlImage": "/images/club-logo.png" }
    ]
  },
  "comiteDisciplina": {
    "title": "Comité de disciplina",
    "subTitle": "CONTUS ABOGADOS, C/ Alejandro Casona 26, 1ºB, 33013 Oviedo",
    "members": [
      { "name": "Juan José López de la Parte", "description": "Presidente", "urlImage": "/images/avatar.png" },
      { "name": "Adrián Martínez González", "description": "Abogado", "urlImage": "/images/avatar.png" },
      { "name": "Marcos González Suarez", "description": "Abogado", "urlImage": "/images/avatar.png" }
    ]
  }
}

export default function Page() {
  const [activeSection, setActiveSection] = useState("junta_directiva")
  const [activeTab, setActiveTab] = useState("representantes")
  const categories = ['deportistas', 'tecnicos', 'jueces']

  const handleScroll = () => {
    const sections = document.querySelectorAll("section")
    const scrollPosition = window.scrollY

    sections.forEach((section) => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight

      if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
        setActiveSection(section.id)
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={``}>
      <Hero title={data.pageTitle} description={data.pageDescription} />
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <nav className="sticky top-[75px] z-10 bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex overflow-x-auto">
                {data.navigation.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className={`px-4 py-2 mx-2 rounded-md transition-colors whitespace-nowrap ${activeSection === item.href.slice(1)
                        ? "bg-primary text-primary-foreground"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-8">
          <section id="junta_directiva" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">Junta Directiva</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.juntaDirectiva.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader className='mb-0 pb-2'>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{member.position}</p>
                      {member.email && (
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Email: {member.email}
                        </p>
                      )}
                      {member.tel && (
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-0">
                          {member.tel}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="comites" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">Comités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.comites.map((comite, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50 dark:bg-gray-700">
                    <CardTitle className="text-2xl">{comite.title}</CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{comite.subTitle}</p>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {comite.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={member.urlImage} alt={member.name} />
                            <AvatarFallback><UserIcon className='w-[55%] h-[55%]' /></AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="asamblea" className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">Asamblea</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full flex justify-start mb-8 bg-transparent">
                <TabsTrigger
                  value="representantes"
                  className="flex-1 max-w-[200px] px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Representantes
                </TabsTrigger>
                <TabsTrigger
                  value="clubes"
                  className="flex-1 max-w-[200px] px-4 py-2 text-sm font-medium rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Clubes
                </TabsTrigger>
              </TabsList>
              <TabsContent value="representantes">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-12">
                      {categories.map((category) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-2xl font-semibold mb-6 capitalize text-gray-700 dark:text-gray-200">{category}</h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {data.asamblea[category as keyof typeof data.asamblea].map((person: any, index: number) => (
                              <motion.div
                                key={index}
                                className="flex items-center space-x-4"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 400 }}
                              >
                                <Avatar className="h-10 w-10 flex-shrink-0">
                                  <AvatarImage src={person.urlImage} alt={person.name} />
                                  <AvatarFallback><UserIcon className="w-3/5 h-3/5" /></AvatarFallback>
                                </Avatar>
                                <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{person.name}</p>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="clubes">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-8">
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {data.asamblea.clubes.map((club: any, index: number) => (
                        <motion.div
                          key={index}
                          className="flex items-center space-x-4"
                          whileHover={{ scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Avatar className="w-10 h-10 flex-shrink-0">
                            <AvatarImage src={club.urlImage} alt={club.name} />
                            <AvatarFallback><UserIcon className="w-3/5 h-3/5" /></AvatarFallback>
                          </Avatar>
                          <p className="font-medium text-sm text-gray-800 dark:text-gray-200">{club.name}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </section>

          <section id="comite_disciplina">
            <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">Comité de Disciplina</h2>
            <Card>
              <CardHeader className="bg-gray-50 dark:bg-gray-700">
                <CardTitle className="text-2xl">{data.comiteDisciplina.title}</CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-300">{data.comiteDisciplina.subTitle}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-8">
                  {data.comiteDisciplina.members.map((member, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={member.urlImage} alt={member.name} />
                        <AvatarFallback><UserIcon className='w-[55%] h-[55%]' /></AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}