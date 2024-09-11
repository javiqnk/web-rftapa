import { fetchCompetitionData } from "@/lib/api"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default async function TargetListPage({ params: { id } }: { params: { id: string } }) {
  const data = await fetchCompetitionData(id)
  const sortedQualification = [...data.qualification].sort((a, b) => a.target.localeCompare(b.target))

  return (
    <>
    <Card>
      <CardContent className="p-6">
      <h1 className="text-2xl font-bold mb-4">Listado por Dianas</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Diana</TableHead>
            <TableHead>Atleta</TableHead>
            <TableHead>Categoría</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedQualification.map((q) => (
            <TableRow key={q.idQual}>
              <TableCell>{q.target}</TableCell>
              <TableCell>{q.athlete}</TableCell>
              <TableCell>{q.evCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      </CardContent>
    </Card>
      <Link href={`/competition/${id}`} passHref>
        <Button className="mt-4"><ArrowLeft /> Volver</Button>
      </Link>
      </>
  )
}