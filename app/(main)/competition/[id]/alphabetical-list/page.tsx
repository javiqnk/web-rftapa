import { fetchCompetitionData } from "@/lib/api"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function AlphabeticalListPage({ params: { id } }: { params: { id: string } }) {
  const data = await fetchCompetitionData(id)
  const alphabeticallySortedQualification = [...data.qualification].sort((a, b) => a.athlete.localeCompare(b.athlete))

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Listado Alfabético</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Atleta</TableHead>
            <TableHead>Diana</TableHead>
            <TableHead>Categoría</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alphabeticallySortedQualification.map((q) => (
            <TableRow key={q.idQual}>
              <TableCell>{q.athlete}</TableCell>
              <TableCell>{q.target}</TableCell>
              <TableCell>{q.evCode}</TableCell>
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