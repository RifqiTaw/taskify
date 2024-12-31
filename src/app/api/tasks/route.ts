import { NextResponse } from "next/server";
import { Task } from "@/types/Task";

let tasks: Task[] = []; // Penyimpanan data di memori

// Handler GET untuk mendapatkan semua tugas
export async function GET() {
  return NextResponse.json(tasks);
}

// Handler POST untuk menambahkan tugas baru
export async function POST(req: Request) {
  const body = await req.json();
  const newTask: Task = {
    id: String(Date.now()), // ID unik berdasarkan timestamp
    title: body.title,
    description: body.description,
    status: "To Do",
    completed: 0,
  };

  tasks.push(newTask); // Tambahkan tugas ke array
  return NextResponse.json(newTask, { status: 201 });
}
