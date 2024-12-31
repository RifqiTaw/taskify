"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import CreateTask from "@/app/home/CreateTask";
import { ReactNode, useState } from "react";
import { useDarkMode } from "@/contexts/DarkModeContext"; 

interface ClientSideLayoutProps {
  children: ReactNode;
}

export default function ClientSideLayout({ children }: ClientSideLayoutProps) {
  const { isDarkMode } = useDarkMode();
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);

  const handleTaskCreated = () => {
    setIsCreateTaskModalOpen(false);
  };

  return (
    <div
      className={`flex min-h-screen ${
        isDarkMode
          ? "dark bg-dark-background text-dark-text"
          : "bg-light-background text-light-text"
      }`}
    >
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header
          onCreateTaskClick={() => setIsCreateTaskModalOpen(true)} // Buka modal
        />
        <main className="p-6 flex-grow">{children}</main>

        {/* Create Task Modal */}
        {isCreateTaskModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-full max-w-4xl">
              <CreateTask onTaskCreated={handleTaskCreated} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
