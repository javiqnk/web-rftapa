"use client"

import React, { useState, useEffect } from "react"
import { fetchCompetitionData } from "@/lib/api"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { ArrowLeft, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { ApiResponse, QualificationData, Event } from "@/types"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

function decodeArrowString(arrowString: string): any[] {
  return arrowString.split('').map(char => {
    if (char === 'L' || char === 'l') return 10;
    if (char === 'K' || char === 'k') return 10;
    if (char === 'J' || char === 'j') return 9;
    if (char === 'I' || char === 'i') return 8;
    if (char === 'H' || char === 'h') return 7;
    if (char === 'G' || char === 'g') return 6;
    if (char === 'F' || char === 'f') return 5;
    if (char === 'E' || char === 'e') return 4;
    if (char === 'G' || char === 'd') return 3;
    if (char === 'G' || char === 'c') return 2;
    if (char === 'G' || char === 'b') return 1;
    if (char === 'G' || char === 'a') return 0;

    return char;
  });
}

function ScoreTable({ arrowString, maxArrows, title }: { arrowString: string, maxArrows: number, title: string }) {
  console.log(arrowString)
  const scores = decodeArrowString(arrowString);
  const rows = maxArrows === 36 ? 6 : 10;
  const cols = maxArrows === 36 ? 6 : 3;

  const tableRows = [];
  let total = 0;

  for (let i = 0; i < rows; i++) {
    const rowScores = scores.slice(i * cols, (i + 1) * cols);
    const rowTotal = rowScores.reduce((sum, score) => sum + score, 0);
    total += rowTotal;

    tableRows.push(
      <TableRow key={i}>
        {rowScores.map((score, index) => (
          <TableCell key={index}>{score}</TableCell>
        ))}
        <TableCell className="font-bold">{rowTotal}</TableCell>
      </TableRow>
    );
  }

  return (
    <div className="w-full md:w-1/2 p-2">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            {Array.from({ length: cols }).map((_, index) => (
              <TableHead key={index}>Flecha {index + 1}</TableHead>
            ))}
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableRows}
          <TableRow>
            <TableCell colSpan={cols} className="text-right font-bold">Total</TableCell>
            <TableCell className="font-bold">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default function ClassificationPage({ params: { id, category } }: { params: { id: string, category: string } }) {
  const [dataApi, setDataApi] = useState<ApiResponse | null>(null);
  const [expandedAthlete, setExpandedAthlete] = useState<number | null>(null);

  useEffect(() => {
    fetchCompetitionData(id).then(setDataApi);
  }, [id]);

  if (!dataApi) return <div>Cargando...</div>;

  const { qualification, events } = dataApi;
  const categoryEvent = events.find(e => e.event === category) as Event;
  const categoryName = categoryEvent?.descr || category;
  const categoryQualification = qualification
    .filter((q) => q.evCode === category)
    .sort((a, b) => b.qualScore - a.qualScore);

  const maxArrows = categoryEvent?.maxArrows || 36;

  const toggleExpanded = (athleteId: number) => {
    setExpandedAthlete(expandedAthlete === athleteId ? null : athleteId);
  };

  return (
    <>
    <Card>
      <CardContent className="p-6">
        <h1 className="text-2xl font-bold mb-4">Clasificación - {categoryName}</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Posición</TableHead>
              <TableHead>Atleta</TableHead>
              <TableHead>Puntuación</TableHead>
              <TableHead> </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categoryQualification.map((q: QualificationData, index: number) => (
              <React.Fragment key={q.idQual}>
                <TableRow
                  className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  onClick={() => toggleExpanded(q.idQual)}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{q.athlete}</TableCell>
                  <TableCell>{q.qualScore}</TableCell>
                  <TableCell>
                    {expandedAthlete === q.idQual ? (
                      <ChevronUpIcon className="h-4 w-4" />
                    ) : (
                      <ChevronDownIcon className="h-4 w-4" />
                    )}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={4} className="p-0">
                    <Collapsible open={expandedAthlete === q.idQual}>
                      <CollapsibleContent>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800">
                          <div className="flex flex-wrap -mx-2">
                            <ScoreTable arrowString={q.D1Arrowstring} maxArrows={maxArrows} title="Distancia 1" />
                            <ScoreTable arrowString={q.D2Arrowstring} maxArrows={maxArrows} title="Distancia 2" />
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>

      </CardContent>
    </Card>
    <Link href="../classification">
    <Button className="mt-3"><ArrowLeft /> Volver</Button>
    </Link>
    </>
  );
}