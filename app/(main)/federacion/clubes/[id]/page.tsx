import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { UserIcon, PhoneIcon, MapPinIcon, Globe2 } from "lucide-react"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Link from "next/link"
import { revalidatePath } from 'next/cache'

export default async function Component({
  params: { id },
}: {
  params: { id: string }
}) {
  revalidatePath('/api/federated/v1/club/' + id)
  const dataApi = await fetch('http://localhost:3000/api/federated/v1/club/' + id).then((res) =>
    res.json()
  )

  const fedeData = dataApi.data

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-md -mt-5">
        <div className="container mx-auto px-4 py-6 flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-sky-700">
            <AvatarImage src={`https://docs.rfeta.es/${fedeData.ClubPhoto}`} alt={`${fedeData.ClubName} logo`} />
            <AvatarFallback><UserIcon className="h-8 w-8 text-gray-400" /></AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{fedeData.ClubName}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">{fedeData.ClubCity}, {fedeData.Provincia}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-700 dark:text-gray-200">Información del Club</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-sky-700 dark:text-blue-400">
                <MapPinIcon className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Dirección</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">{fedeData.Domicilio}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{fedeData.CodPostal} {fedeData.Municipio}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{fedeData.Provincia}</p>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-sky-700 dark:text-blue-400">
                <PhoneIcon className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Contacto</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Tel: {fedeData.Tel1}</p>
              {fedeData.Tel2 && <p className="text-sm text-gray-600 dark:text-gray-300">Tel 2: {fedeData.Tel2}</p>}
              <p className="text-sm text-gray-600 dark:text-gray-300">Email: {fedeData.Email1}</p>
              {fedeData.Email2 && <p className="text-sm text-gray-600 dark:text-gray-300">Email 2: {fedeData.Email2}</p>}
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center mb-4 text-sky-700 dark:text-blue-400">
                <Globe2 className="w-5 h-5 mr-2" />
                <h3 className="font-semibold">Web y Redes Sociales</h3>
              </div>
              <Link href={`https://${fedeData.Web}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                {fedeData.Web}
              </Link>
              <div className="flex mt-4 space-x-4">
                {fedeData.facebook && (
                  <Link href={fedeData.facebook} target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-300" />
                  </Link>
                )}
                {fedeData.twitter && (
                  <Link href={fedeData.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300" />
                  </Link>
                )}
                {fedeData.instagram && (
                  <Link href={`https://www.instagram.com/${fedeData.instagram}`} target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-300" />
                  </Link>
                )}
                {fedeData.youtube && (
                  <Link href={fedeData.youtube} target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5 text-gray-600 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-300" />
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}