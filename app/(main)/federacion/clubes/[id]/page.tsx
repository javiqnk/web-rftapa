import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UserIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { Facebook, Twitter, Instagram, Youtube, TicketIcon } from "lucide-react"
import Link from "next/link"
import { revalidatePath } from 'next/cache'

export default async function Page({
  params: { id },
}: {
  params: { id: any }
}) {
  // revalidatePath('/api/federated/v1/club/' + id)
  // const dataApi = await fetch('http://localhost:3000/api/federated/v1/club/' + id).then((res) =>
  //   res.json()
  // )

  // const fedeData = dataApi.data

  return (
    <>
      {/* <header className="-mt-32">
        <div className="w-full bg-gradient-to-r from-sky-500 to-blue-800 -skew-y-1">
          <div className="w-full h-full pt-24">
            <div className="container py-10 md:py-14 text-start skew-y-1">
              <div className="flex align-middle items-center mt-4">
                <div className="me-4 md:me-6">
                  <Avatar className="h-14 w-14 md:h-20 md:w-20">
                    <AvatarImage className="bg-cover" src={"https://docs.rfeta.es/" + fedeData.ClubPhoto} alt={fedeData.ClubName + " logo"} />
                    <AvatarFallback><UserIcon className="h-8 w-8 md:h-14 md:w-14 mt-1 text-gray-600" /></AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <h1 className="text-2xl text-balance md:text-4xl text-white font-medium">
                    {fedeData.ClubName}
                  </h1>
                  <h2 className="text-lg text-balance md:text-xl text-white">{fedeData.ClubCity}, {fedeData.Provincia}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="my-8 container">
        <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-8 font-sans font-semibold border-sky-600 dark:text-gray-200">
          Información del Club
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 lg:mb-24">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-2" />
                Dirección
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{fedeData.Domicilio}</p>
              <p>{fedeData.CodPostal} {fedeData.Municipio}</p>
              <p>{fedeData.Provincia}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Tel: {fedeData.Tel1}</p>
              {fedeData.Tel2 && <p>Tel 2: {fedeData.Tel2}</p>}
              <p>Email: {fedeData.Email1}</p>
              {fedeData.Email2 && <p>Email 2: {fedeData.Email2}</p>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GlobeAltIcon className="w-5 h-5 mr-2" />
                Web y Redes Sociales
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={`https://${fedeData.Web}`} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-500">
                {fedeData.Web}
              </Link>
              <div className="flex mt-4 space-x-4">
                {fedeData.facebook && (
                  <Link href={fedeData.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-700" />
                  </Link>
                )}
                {fedeData.twitter && (
                  <Link href={fedeData.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-500" />
                  </Link>
                )}
                {fedeData.instagram && (
                  <Link href={`https://www.instagram.com/${fedeData.instagram}`} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-700" />
                  </Link>
                )}
                {fedeData.youtube && (
                  <Link href={fedeData.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-6 h-6 text-red-600 hover:text-red-700" />
                  </Link>
                )}
                {fedeData.tiktok && (
                  <Link href={`https://www.tiktok.com/@${fedeData.tiktok}`} target="_blank" rel="noopener noreferrer">
                    <TicketIcon className="w-6 h-6 text-black hover:text-gray-800" />
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div> */}
    </>
  )
}