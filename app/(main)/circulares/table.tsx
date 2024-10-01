"use client"

import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, Download } from "lucide-react"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link"

const data = [
    {
      id: "1",
      date: "22/09/2024",
      url: "/docs/circulares/cir_424.pdf",
      name: "Calendario Temporada 2024/2025",
    },
    {
      id: "2",
      date: "11/09/2024",
      url: "/docs/circulares/cir_423.pdf",
      name: "Acta proclamación DEFINITIVA presidente FTAPA",
    },
    {
      id: "3",
      date: "03/09/2024",
      url: "/docs/circulares/cir_422.pdf",
      name: "Acta proclamación presidente FTAPA",
    },
    {
      id: "4",
      date: "15/08/2024",
      url: "/docs/circulares/cir_421.pdf",
      name: "RECORDS ASTURIAS",
    },
    {
      id: "5",
      date: "14/08/2024",
      url: "/docs/circulares/cir_420.pdf",
      name: "Campeonato de Asturias Equipos 3D 2023-2024",
    },
    {
      id: "6",
      date: "09/08/2024",
      url: "/docs/circulares/cir_419.pdf",
      name: "Candidatos oficiales presidencia FTAPA",
    },
    {
      id: "7",
      date: "05/08/2024",
      url: "/docs/circulares/cir_418.pdf",
      name: "Candidatos provisionales presidencia FTAPA",
    },
  ]

export type Payment = {
    id: string
    url: string
    date: any
    name: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="px-2 -ms-2"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
    },
    {
        accessorKey: "date",
        header: () => <div className="">Fecha</div>,
        cell: ({ row }) => {

            return <div className=" font-medium">{row.getValue("date")}</div>
        },
    },
    {
        accessorKey: "url",
        header: () => <div className="text-center">Descargar</div>,
        cell: ({ row }) => {

            return <div className="text-center"> 
                <a href={row.getValue("url")} target="_blank" className="font-medium cursor-pointer text-center hover:fill-white flex justify-center dark:text-gray-400 dark:hover:text-white text-gray-600 hover:text-gray-900"><Download className="h-5 w-5 text-inherit" /></a>
            </div> 
        },
    }
]

export default function DataTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    })

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Buscar por el nombre del archivo..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader className="bg-slate-100 dark:bg-slate-900">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={columns.length}
                                    className="h-24 text-center"
                                >
                                    No hay circulares publicadas.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Mostrando {table.getFilteredRowModel().rows.length} circulares.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Anterior
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Siguiente
                    </Button>
                </div>
            </div>
        </div>
    )
}
