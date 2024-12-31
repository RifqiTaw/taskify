// /src/app/page.tsx
"use client";

import { FC, useEffect, useState } from "react";
import TaskBoard from "./home/components/TaskBoard";
import TodayTask from "./home/TodayTask";
import TodayMeeting from "./home/TodayMeeting";
import TaskDetail from "./home/TaskDetail";
import CreateTask from "./home/CreateTask";
import { Task } from "@/types/Task";

const HomePage: FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks");
      if (!response.ok) {
        throw new Error("Failed to fetch tasks.");
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const closeTaskDetail = () => {
    setSelectedTask(null);
  };

  return (
    <div>
      {/* Content */}
      <div className="p-2">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-6">
          <TodayTask />
          <TodayMeeting />
        </div>

        <TaskBoard
          tasks={tasks}
          setTasks={setTasks}
          onTaskClick={handleTaskClick}
        />

        {selectedTask && (
          <TaskDetail task={selectedTask} onClose={closeTaskDetail} />
        )}
      </div>

      {/* Create Task Modal */}
      {isCreateTaskModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-4xl">
            <CreateTask
              onTaskCreated={() => {
                fetchTasks();
                setIsCreateTaskModalOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
