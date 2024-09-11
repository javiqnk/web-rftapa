"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { fetchCompetitionData } from "@/lib/api"
import { ApiResponse } from "@/types"

export default function ClassificationPage({ params: { id } }: { params: { id: string } }) {
  const [dataApi, setDataApi] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetchCompetitionData(id).then(setDataApi);
  }, [id]);

  if (!dataApi) return <div>Cargando...</div>;

  const { events } = dataApi;

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-sky-700 dark:text-sky-300">Clasificación por Categorías</h2>
        {events.map((event) => (
          <Link key={event.event} href={`/competition/${id}/classification/${event.event}`} passHref>
            <Button variant="outline" className="mb-2 w-full justify-between">
              {event.descr}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}