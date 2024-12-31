"use client";

import { FC, useState } from "react";

const ProjectsPage: FC = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      name: "Docker",
      description: "Landing Page Design",
      budget: "$5400",
      assigned: [
        { name: "Alice", avatar: "/avatars/alice.jpg" },
        { name: "Bob", avatar: "/avatars/bob.jpg" },
        { name: "Chris", avatar: "/avatars/chris.jpg" },
      ],
      taskCount: 120,
      deadline: "12 October, 2024",
      status: "In Progress",
      progress: 60,
    },
    {
      id: 2,
      name: "Retool",
      description: "One Page SEO",
      budget: "$2700",
      assigned: [
        { name: "David", avatar: "/avatars/david.jpg" },
        { name: "Eva", avatar: "/avatars/eva.jpg" },
      ],
      taskCount: 169,
      deadline: "28 September, 2024",
      status: "Completed",
      progress: 100,
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
        <input
          type="text"
          placeholder="Search projects"
          className="bg-gray-800 text-white p-2 rounded-md focus:outline-none"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-4 mb-4">
        {["All", "In Progress", "Completed"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-md ${
              filter === status
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-400 hover:bg-gray-600"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Projects Table */}
      <table className="w-full table-auto border-collapse border border-gray-800">
        <thead>
          <tr className="text-left bg-gray-800 text-gray-400">
            <th className="p-4 border-b border-gray-700">
              <input type="checkbox" className="accent-blue-500" />
            </th>
            <th className="p-4 border-b border-gray-700">Project</th>
            <th className="p-4 border-b border-gray-700">Budget</th>
            <th className="p-4 border-b border-gray-700">Assigned</th>
            <th className="p-4 border-b border-gray-700">Task</th>
            <th className="p-4 border-b border-gray-700">Deadline</th>
            <th className="p-4 border-b border-gray-700">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((project) => (
            <tr key={project.id} className="hover:bg-gray-800">
              <td className="p-4 border-b border-gray-700">
                <input type="checkbox" className="accent-blue-500" />
              </td>
              <td className="p-4 border-b border-gray-700">
                <div>
                  <span className="font-bold">{project.name}</span>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </td>
              <td className="p-4 border-b border-gray-700">{project.budget}</td>
              <td className="p-4 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  {project.assigned.map((member, index) => (
                    <img
                      key={index}
                      src={member.avatar}
                      alt={member.name}
                      className="w-8 h-8 rounded-full border-2 border-gray-700"
                    />
                  ))}
                  {project.assigned.length > 3 && (
                    <span className="bg-gray-700 text-sm px-2 rounded-full">
                      +{project.assigned.length - 3}
                    </span>
                  )}
                </div>
              </td>
              <td className="p-4 border-b border-gray-700">
                {project.taskCount}
              </td>
              <td className="p-4 border-b border-gray-700">
                {project.deadline}
              </td>
              <td className="p-4 border-b border-gray-700">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      project.status === "Completed"
                        ? "bg-green-500"
                        : "bg-orange-500"
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsPage;
