import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { FC } from "react";
import { Task } from "@/types/Task";
import TaskCard from "./TaskCard";

interface TaskBoardProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  onTaskClick?: (task: Task) => void;
}

const TaskBoard: FC<TaskBoardProps> = ({ tasks, setTasks, onTaskClick }) => {
  const handleDragEnd = (event: DragEndEvent): void => {
    const { active, over } = event;

    if (!over) return;

    const activeId = active.id;
    const targetStatus = String(over.id);

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === activeId ? { ...task, status: targetStatus } : task
      )
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {["To Do", "In Progress", "Review", "Completed"].map((status) => (
          <SortableContext
            key={status}
            id={status}
            items={tasks
              .filter((task) => task.status === status)
              .map((task) => task.id)}
            strategy={rectSortingStrategy}
          >
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{status}</h2>
              {tasks
                .filter((task) => task.status === status)
                .map((task) => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onClick={onTaskClick ? () => onTaskClick(task) : undefined}
                  />
                ))}
            </div>
          </SortableContext>
        ))}
      </div>
    </DndContext>
  );
};

export default TaskBoard;
