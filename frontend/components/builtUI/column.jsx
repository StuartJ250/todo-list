"use client"

import React from "react";
import { MoreHorizontal, ArrowUpDown, ArrowDown, ArrowUp } from "lucide-react"
import { Button } from "../ui/Button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { handleDelete } from "../../services/taskService.jsx"
import { useTaskStore } from "../../src/store"


export const columns = [
    {
        id: "select",
        header: ({ table }) => (
        <Checkbox
            checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
        />
        ),
        cell: ({ row }) => (
        <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
        />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({column}) => {
            return(
                <div className="items-center inline-flex">
                    ID
                    <Button variant="ghost" className="p-2 align-center flex" onClick={() => column.toggleSorting(column.getIsSorted()=== "asc")}>
                        {column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) 
                        : column.getIsSorted() === "desc" ? (<ArrowUp className="h-4 w-4"/>) 
                        : (<ArrowUpDown className="h-4 w-4"/>)}
                    </Button>
                </div>
            )
        },
    },
    {
        accessorKey: "taskName",
        header: ({column}) => {
            return(
                <div className="items-center inline-flex">
                    Task 
                    <Button variant="ghost" className="p-2 align-center flex" onClick={() => column.toggleSorting(column.getIsSorted()=== "asc")}>
                    {column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) 
                        : column.getIsSorted() === "desc" ? (<ArrowUp className="h-4 w-4"/>) 
                        : (<ArrowUpDown className="h-4 w-4"/>)}
                    </Button>
                </div>
            )
        },
    
    },
    {
        accessorKey: "taskDescription",
        header: ({column}) => {
            return(
                <div className="items-center inline-flex">
                    Description 
                    <Button variant="ghost" className="p-2 align-center flex" onClick={() => column.toggleSorting(column.getIsSorted()=== "asc")}>
                    {column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) 
                        : column.getIsSorted() === "desc" ? (<ArrowUp className="h-4 w-4"/>) 
                        : (<ArrowUpDown className="h-4 w-4"/>)}
                    </Button>
                </div>
            )
        },
    },
    {
        accessorKey: "taskStartDate",
        header: ({column}) => {
            return(
                <div className="items-center inline-flex">
                    Start Date 
                    <Button variant="ghost" className="p-2 align-center flex" onClick={() => column.toggleSorting(column.getIsSorted()=== "asc")}>
                    {column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) 
                        : column.getIsSorted() === "desc" ? (<ArrowUp className="h-4 w-4"/>) 
                        : (<ArrowUpDown className="h-4 w-4"/>)}
                    </Button>
                </div>
            )
        },
    },
    {
        accessorKey: "taskEndDate",
        header: ({column}) => {
            return( 
                <div className="items-center inline-flex">
                    End Date 
                    <Button variant="ghost" className="p-2 align-center flex" onClick={() => column.toggleSorting(column.getIsSorted()=== "asc")}>
                    {column.getIsSorted() === "asc" ? (<ArrowDown className="h-4 w-4" />) 
                        : column.getIsSorted() === "desc" ? (<ArrowUp className="h-4 w-4"/>) 
                        : (<ArrowUpDown className="h-4 w-4"/>)}
                    </Button>
                </div>
            )
        },
    },
    {
        accessorKey: "taskIsComplete",
        header: ({column}) => <div>Status</div>,
        cell: ({row}) => {
            return(
                <div>{row.getValue("taskIsComplete") === false ? "Incomplete" : "Complete"}</div>
            )
        }


        
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const task = row.original

            return(
                
                <DropdownMenu className="p-0">
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-2">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick= {() => navigator.clipboard.writeText(task.id)}>
                            Copy Task ID
                        </DropdownMenuItem>
                        <DropdownMenuItem>View Task Details</DropdownMenuItem>
                        <DropdownMenuItem onClick= {() => { 
                            handleDelete(task.id);
                            useTaskStore.getState().deleteTasks(task.id);
                         }}>Delete Task</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
            
        },
        enableSorting: false,
        enableHiding: false,
    },

]