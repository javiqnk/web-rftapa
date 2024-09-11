"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserIcon, CalendarIcon, MapPinIcon } from "lucide-react"
import { fetchCompetitionData } from "@/lib/api"
import { ApiResponse } from "@/types"

export default function CompetitionLayout({
  children,
  params: { id },
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const [dataApi, setDataApi] = useState<ApiResponse | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    fetchCompetitionData(id).then(setDataApi);
  }, [id]);

  if (!dataApi) return <div className="flex items-center justify-center h-screen">Cargando...</div>;

  const { data, finals, qualification } = dataApi;

  const hasValidRanking = qualification.some(q => q.rank !== 0);

  const getActiveTab = () => {
    if (pathname.includes("/classification")) return "clasificacion";
    if (pathname.includes("/finals")) return "finales";
    if (pathname.includes("/ranking")) return "ranking";
    return "inicio";
  };

  return (
    <div className="min-h-[60vh] bg-gradient-to-b from-sky-100 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-800 shadow-md -mt-5">
        <div className="container mx-auto px-4 py-6 flex items-center space-x-4">
          <Avatar className="h-16 w-16 border-2 border-sky-700">
            <AvatarImage src="/placeholder.svg" alt={`${data.TournamentName} logo`} />
            <AvatarFallback><UserIcon className="h-8 w-8 text-gray-400" /></AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">{data.TournamentName}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">{data.TournamentWhere}</p>
          </div>
        </div>
      </header>

      <nav className="bg-sky-700 dark:bg-gray-700 shadow-md">
        <div className="container mx-auto">
          <Tabs value={getActiveTab()} className="w-full">
            <TabsList className="w-full justify-start bg-transparent">
              <Link href={`/competition/${id}`} passHref>
                <TabsTrigger value="inicio" className="text-white data-[state=active]:bg-sky-800 data-[state=active]:text-white">Inicio</TabsTrigger>
              </Link>
              <Link href={`/competition/${id}/classification`} passHref>
                <TabsTrigger value="clasificacion" className="text-white data-[state=active]:bg-sky-800 data-[state=active]:text-white">Clasificación</TabsTrigger>
              </Link>
              {finals.length > 0 && (
                <Link href={`/competition/${id}/finals`} passHref>
                  <TabsTrigger value="finales" className="text-white data-[state=active]:bg-sky-800 data-[state=active]:text-white">Finales</TabsTrigger>
                </Link>
              )}
              {hasValidRanking && (
                <Link href={`/competition/${id}/ranking`} passHref>
                  <TabsTrigger value="ranking" className="text-white data-[state=active]:bg-sky-800 data-[state=active]:text-white">Ranking Final</TabsTrigger>
                </Link>
              )}
            </TabsList>
          </Tabs>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}