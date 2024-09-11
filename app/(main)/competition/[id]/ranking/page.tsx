"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { fetchCompetitionData } from "@/lib/api"
import { ApiResponse } from "@/types"

export default function RankingPage({ params: { id } }: { params: { id: string } }) {
  const [dataApi, setDataApi] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetchCompetitionData(id).then(setDataApi);
  }, [id]);

  if (!dataApi) return <div>Cargando...</div>;

  const { events, qualification } = dataApi;
  const categoriesWithRanking = events.filter(event => 
    qualification.some(q => q.evCode === event.event && q.rank !== 0)
  );

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-sky-700 dark:text-sky-300">Ranking Final</h2>
        {categoriesWithRanking.map((event) => (
          <Link key={event.event} href={`/competition/${id}/ranking/${event.event}`} passHref>
            <Button variant="outline" className="mb-2 w-full justify-between">
              {event.descr}
            </Button>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}