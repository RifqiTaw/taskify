"use client";

import { FC } from "react";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const TodayTask: FC = () => {
  const tasks = [
    {
      id: "1",
      title: "Create a Visual Style Guide",
      project: "MedPro Website Design",
    },
    {
      id: "2",
      title: "Outline Typography Scales",
      project: "MedPro Website Design",
    },
    {
      id: "3",
      title: "Establish Grid Systems",
      project: "MedPro Website Design",
    },
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">
          Today's Tasks <span className="text-sm text-gray-500">(03)</span>
        </h2>
        <a
          href="#"
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          Manage
        </a>
      </div>
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <FaPauseCircle className="text-blue-500 text-xl mr-3" />
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {task.title}
                </h3>
                <p className="text-sm text-gray-500">{task.project}</p>
              </div>
            </div>
            <AiFillStar className="text-yellow-500 text-lg cursor-pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayTask;
