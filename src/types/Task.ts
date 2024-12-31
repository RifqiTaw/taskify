import { ReactNode } from "react";

export interface NavItem {
  name: string;
  icon: JSX.Element;
  href: string;
}

export interface Task {
  completed: ReactNode;
  status: string;
  id: string;
  title: string;
  description: string;
  project: string;
  teamMembers: string[];
  priority: "Low" | "Medium" | "High" | "Urgent";
  timeline: string; // Contoh format: "2024-09-15"
  attachment?: string; // URL atau path file yang diunggah
}

export type TasksByStatus = {
  [status: string]: Task[];
};

export interface ColumnProps {
  status: string;
  tasks: Task[];
}

export interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description: string;
    completed: number;
  };
  index: number;
}
