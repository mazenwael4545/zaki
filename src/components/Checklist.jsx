"use client"

import { Plus, Trash, X } from "lucide-react"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Button } from "./ui/button"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "./ui/input"
import { useState } from "react"

const Checklist = () => {
  const [tasks, setTasks] = useState([
    { title: "ذاكر العربي", priority: "high" },
    { title: "اعمل الواجب", priority: "medium" },
  ])

  const [selected, setSelected] = useState("")
  const [title, setTitle] = useState("")
  const [open, setOpen] = useState(false) // control dialog state

  const handleSelect = (value) => {
    setSelected(value)
  }

  const handleAddTask = () => {
    if (!title || !selected) return alert("الخانات فارغة")
    const newTask = { title, priority: selected }
    setTasks((prev) => [...prev, newTask])
    // reset form
    setTitle("")
    setSelected("")
    // close dialog
    setOpen(false)
  }

  return (
    <div className="w-full p-4 relative h-screen">
      <h1 className="font-bold text-3xl mb-2">المهام اليومية</h1>
      <div className="flex flex-col gap-3">
        {tasks.map((task, i) => (
          <Card
            key={i}
            className={`${
              task.priority === "high"
                ? "bg-red-500"
                : task.priority === "medium"
                ? "bg-yellow-200"
                : task.priority === "low"
                ? "bg-blue-500"
                : ""
            } flex justify-between p-4 items-center`}
          >
            <div className="flex items-center gap-3 font-bold text-xl">
              <Checkbox className="border-2 bg-white rounded-sm w-5 h-5" />
              <span>{task.title}</span>
            </div>
            <Trash />
          </Card>
        ))}
      </div>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button
            onClick={() => setOpen(true)}
            className="absolute bottom-[250px] rounded-full w-14 h-14 font-bold cursor-pointer"
          >
            <Plus />
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent className="flex flex-col justify-center items-center gap-4">
          <Button className="bg-transparent rounded-full w-6 h-6 text-md absolute top-5 right-5 cursor-pointer" onClick={()=> setOpen(false)}>
            <X />
          </Button>
          <h1 className="font-bold text-2xl">إضافة مهمة جديدة</h1>

          <Input
            placeholder="عنوان المهمة"
            dir="rtl"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="flex gap-2">
            <div className="flex flex-col gap-2 justify-center items-center">
              <span>ضروري</span>
              <Checkbox
                checked={selected === "high"}
                onCheckedChange={() => handleSelect("high")}
                className="border-2 border-red-500 w-8 h-8 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <span>متوسط</span>
              <Checkbox
                checked={selected === "medium"}
                onCheckedChange={() => handleSelect("medium")}
                className="border-2 border-yellow-500 w-8 h-8 rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <span>ثانوي</span>
              <Checkbox
                checked={selected === "low"}
                onCheckedChange={() => handleSelect("low")}
                className="border-2 border-blue-500 w-8 h-8 rounded-sm"
              />
            </div>
          </div>

          <Button onClick={handleAddTask}>إضافة</Button>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default Checklist
