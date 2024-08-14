"use client"

import * as React from "react"
import { useState, useEffect } from 'react'
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
import { ArrowUpDown, ChevronDown, CircleUserRound, CircleUserRoundIcon, Download, UserRound } from "lucide-react"

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

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserCircleIcon, UserIcon } from "@heroicons/react/24/outline"


export type Payment = {
    FederatedPhoto: string
    FederatedId: string
    Name: string
    Surname: string
    ClubName: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "FederatedPhoto",
        header: () => <div className="">Imagen</div>,
        cell: ({ row }) => {

            return (
                <Avatar className="h-12 w-12">
                    <AvatarImage src={"https://docs.rfeta.es/" + row.getValue("FederatedPhoto")} alt="@shadcn" />
                    <AvatarFallback><UserIcon className="h-8 w-8 mt-1 text-gray-600"/></AvatarFallback>
                </Avatar>
            )
        },
    },
    {
        accessorKey: "Name",
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
        cell: ({ row }) => <div className="capitalize font-medium">{row.getValue("Surname") + ", " + row.getValue("Name")}</div>,
    },
    {
        accessorKey: "Surname",
        header: () => <div className="">Club</div>,
        cell: ({ row }) => {

            return <div className=""></div>
        },
    },
    {
        accessorKey: "ClubName",
        header: () => <div className="">Club</div>,
        cell: ({ row }) => {

            return <div className=" capitalize">{row.getValue("ClubName")}</div>
        },
    }
]

export default function DataTable({ data }: any) {
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

    const router = useRouter()

    const handleRowClick = (row:any) => {
        router.push(`/deportistas/${row.original.FederatedId}`);
    }

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Buscar deportista por sus apellidos..."
                    value={(table.getColumn("Surname")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("Surname")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
            </div>
            <div className="rounded-md border">
                <Table>
                    {/* <TableHeader className="bg-slate-100 dark:bg-slate-900">
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
                    </TableHeader> */}
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
                                    No hay deportistas para mostrar.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    Mostrando {table.getFilteredRowModel().rows.length} deportistas.
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
