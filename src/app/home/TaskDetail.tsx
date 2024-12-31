"use client";

import { FC } from "react";
import { Task } from "@/types/Task";

interface TaskDetailProps {
  task: Task;
  onClose: () => void;
}

const TaskDetail: FC<TaskDetailProps> = ({ task, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow-lg w-1/2">
        <h2 className="text-2xl font-bold mb-4">{task.title}</h2>
        <p className="text-gray-700 mb-4">{task.description}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskDetail;
