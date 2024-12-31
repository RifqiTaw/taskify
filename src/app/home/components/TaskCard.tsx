"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { FC } from "react";
import { Task } from "@/types/Task";

interface TaskCardProps {
  task: Task;
}

const TaskCard: FC<TaskCardProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="bg-light-header dark:bg-dark-header p-4 rounded-lg shadow-lg mb-4"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="font-bold text-lg text-light-text dark:text-dark-text">
        {task.title}
      </h3>
      <p className="text-light-text dark:text-dark-text">{task.description}</p>
      <p className="text-sm text-gray-500 mt-2">Completed: {task.completed}%</p>
    </motion.div>
  );
};

export default TaskCard;
