import { fetchCompetitionData } from "@/lib/api"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function RankingPage({ params: { id, category } }: { params: { id: string, category: string } }) {
  const data = await fetchCompetitionData(id)
  const categoryName = data.events.find(e => e.event === category)?.descr || category
  const categoryRanking = data.qualification
    .filter((q) => q.evCode === category && q.rank !== 0)
    .sort((a, b) => a.rank - b.rank)

  if (categoryRanking.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Ranking Final - {categoryName}</h1>
        <p>No hay datos de ranking disponibles para esta categoría.</p>
        <Link href={`/competition/${id}`} passHref>
          <Button className="mt-4">Volver</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Ranking Final - {categoryName}</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Posición</TableHead>
            <TableHead>Atleta</TableHead>
            <TableHead>Puntuación Final</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categoryRanking.map((q) => (
            <TableRow key={q.idQual}>
              <TableCell>{q.rank}</TableCell>
              <TableCell>{q.athlete}</TableCell>
              <TableCell>{q.qualScore}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link href={`/competition/${id}`} passHref>
        <Button className="mt-4">Volver</Button>
      </Link>
    </div>
  )
}