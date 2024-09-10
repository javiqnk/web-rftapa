'use client'

import * as React from "react"
import { useRouter } from 'next/navigation'

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
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/ui/table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserIcon } from "@heroicons/react/24/outline"

export type Payment = {
    FederatedPhoto: string
    FederatedId: string
    Name: string
    Surname: string
    ClubName: string
    ClubPhoto: string
    ClubCity: string
}

// Helper function to remove accents and convert to lowercase
const normalizeText = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "ClubPhoto",
        header: () => <div className="">Imagen</div>,
        cell: ({ row }) => (
            <Avatar className="h-12 w-12 border">
                <AvatarImage src={"https://docs.rfeta.es/" + row.getValue("ClubPhoto")} alt="Logo del club" />
                <AvatarFallback><UserIcon className="h-8 w-8 mt-1 text-gray-600" /></AvatarFallback>
            </Avatar>
        ),
    },
    {
        accessorKey: "ClubName",
        header: ({ column }) => (
            <Button
                variant="ghost"
                className="px-2 -ms-2"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Nombre
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div className="capitalize font-medium">{row.getValue("ClubName")}</div>,
    },
    {
        accessorKey: "ClubCity",
        header: () => <div className="">Club</div>,
        cell: ({ row }) => <div className="capitalize">{row.getValue("ClubCity")}</div>,
    }
]

export default function DataTable({ data }: { data: Payment[] }) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
    const [globalFilter, setGlobalFilter] = React.useState("")
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
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
        onGlobalFilterChange: setGlobalFilter,
        globalFilterFn: (row, columnId, filterValue) => {
            const safeValue = (() => {
                const value = row.getValue(columnId);
                return typeof value === 'string' ? value : '';
            })();
            const normalizedCellValue = normalizeText(safeValue);
            const normalizedFilterValue = normalizeText(filterValue);
            return normalizedCellValue.includes(normalizedFilterValue);
        },
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
            globalFilter,
        },
    })

    const router = useRouter()

    const handleRowClick = (row: any) => {
        router.push(`/federacion/clubes/${row.original.ClubID}`)
    }

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Buscar..."
                    value={globalFilter ?? ""}
                    onChange={(event) => setGlobalFilter(event.target.value)}
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    onClick={() => handleRowClick(row)}
                                    className="cursor-pointer"
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
                                    No hay clubes para mostrar.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Mostrando {table.getFilteredRowModel().rows.length} clubes.
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