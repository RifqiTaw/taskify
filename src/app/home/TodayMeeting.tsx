"use client";

import { FC } from "react";
import { MdVideoCall, MdAdd } from "react-icons/md";

const TodayMeeting: FC = () => {
  const meetings = [
    { id: "1", title: "1:1 Deep Dive Feature Walkthrough", time: "12:30 PM" },
    { id: "2", title: "UI Review Dashboard", time: "2:40 PM" },
    { id: "3", title: "Sprint Sync Tagging Modules", time: "1:35 AM" },
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">
          Today&apos;s Meetings{" "}
          <span className="text-sm text-gray-500">(05)</span>
        </h2>
        <a
          href="#"
          className="text-blue-500 text-sm font-medium hover:underline"
        >
          View All
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {meetings.map((meeting) => (
          <div
            key={meeting.id}
            className="flex flex-col items-start justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm"
          >
            <span className="text-sm text-gray-500">{meeting.time}</span>
            <h3 className="font-medium text-gray-900 dark:text-gray-100">
              {meeting.title}
            </h3>
            <MdVideoCall className="text-blue-500 text-2xl mt-2 self-end cursor-pointer" />
          </div>
        ))}
        <div className="flex flex-col justify-center items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
          <MdAdd className="text-blue-500 text-3xl mb-1 cursor-pointer" />
          <span className="text-blue-500 text-sm font-medium">
            Schedule Meeting
          </span>
        </div>
      </div>
    </div>
  );
};

export default TodayMeeting;
