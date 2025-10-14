"use client"

import React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DatePicker } from "./date-picker"
import { FaPlus } from "react-icons/fa6";

export function DrawerDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <FaPlus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Task</DialogTitle>
            <DialogDescription>
              Make task changes and updates here.
            </DialogDescription>
          </DialogHeader>
          <TaskForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <FaPlus />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>New Task</DrawerTitle>
          <DrawerDescription>
            Make task changes and updates here.
          </DrawerDescription>
        </DrawerHeader>
        <TaskForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function TaskForm({ className }) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="taskName">Task</Label>
        <Input type="text" id="taskName" defaultValue="Task" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="taskDescription">Description</Label>
        <Input type="text" id="taskDescription" defaultValue="Description" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="startDate">Start Date</Label>
        <DatePicker className="justify-center" />
      </div>
      <div className="grid gap-3 ">
        <Label htmlFor="endDate">End Date</Label>
        <DatePicker />
      </div>
      <Button type="submit" onClick="">Save changes</Button>
    </form>
  )
}

