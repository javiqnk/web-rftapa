"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MapPinIcon } from "lucide-react"
import { fetchCompetitionData } from "@/lib/api"
import { ApiResponse } from "@/types"

export default function CompetitionPage({ params: { id } }: { params: { id: string } }) {
  const [dataApi, setDataApi] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetchCompetitionData(id).then(setDataApi);
  }, [id]);

  if (!dataApi) return null;

  const { data } = dataApi;

  return (
    <Card>
      <CardContent className="p-6">
        <p className="flex items-center mb-2"><CalendarIcon className="mr-2 text-sky-600" />{new Date(data.TournamentWhenFrom).toLocaleDateString()} - {new Date(data.TournamentWhenTo).toLocaleDateString()}</p>
        <p className="flex items-center mb-6"><MapPinIcon className="mr-2 text-sky-600" />{data.TournamentWhere}</p>
        
        <Link href={`/competition/${id}/target-list`} passHref>
          <Button variant="outline" className="mb-2 w-full justify-between">
            Listado por Dianas
          </Button>
        </Link>

        <Link href={`/competition/${id}/alphabetical-list`} passHref>
          <Button variant="outline" className="mb-2 w-full justify-between">
            Listado Alfabético
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}