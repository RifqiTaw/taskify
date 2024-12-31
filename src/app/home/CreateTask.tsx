"use client";

import { FC, useState } from "react";

interface CreateTaskProps {
  onTaskCreated: () => void; // Callback untuk memuat ulang tugas
}

const CreateTask: FC<CreateTaskProps> = ({ onTaskCreated }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    project: "",
    teamMembers: [],
    priority: "Low",
    timeline: "",
    attachment: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!task.title || !task.description || !task.project || !task.timeline) {
      setError("All fields are required.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to create task.");
      }

      setTask({
        title: "",
        description: "",
        project: "",
        teamMembers: [],
        priority: "Low",
        timeline: "",
        attachment: "",
      });
      onTaskCreated();
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setTask({ ...task, attachment: file.name });
    }
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Create Task</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Project Info */}
        <div className="lg:col-span-2">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Project Info
          </label>
          <input
            type="text"
            placeholder="Project Title"
            value={task.project}
            onChange={(e) => setTask({ ...task, project: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            placeholder="Write a short info"
            value={task.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Add Team Member */}
        <div className="lg:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Add Team Member
          </label>
          <input
            type="text"
            placeholder="Search Team Member"
            className="w-full p-2 border rounded mb-2"
          />
          <button
            onClick={() =>
              setTask({ ...task, teamMembers: [...task.teamMembers, "Hisham"] })
            }
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Add
          </button>
          <ul className="mt-2">
            {task.teamMembers.map((member, index) => (
              <li key={index} className="text-sm text-gray-500">
                • {member}
              </li>
            ))}
          </ul>
        </div>

        {/* Priority */}
        <div className="lg:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Priority
          </label>
          <div className="space-y-2">
            {["Low", "Medium", "High", "Urgent"].map((level) => (
              <label key={level} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="priority"
                  value={level}
                  checked={task.priority === level}
                  onChange={(e) =>
                    setTask({ ...task, priority: e.target.value })
                  }
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="lg:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Set Timeline
          </label>
          <input
            type="date"
            value={task.timeline}
            onChange={(e) => setTask({ ...task, timeline: e.target.value })}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* File Attachment */}
        <div className="lg:col-span-1">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            File Attachment
          </label>
          <div className="border-2 border-dashed rounded-lg p-4 text-center">
            <input
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-500"
            >
              Drag or drop your file
            </label>
            {task.attachment && (
              <p className="text-sm text-gray-500 mt-2">{task.attachment}</p>
            )}
          </div>
        </div>
      </div>

      {/* Submit */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={onTaskCreated}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Creating..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
