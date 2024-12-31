// src/components/Layout/Sidebar.tsx
import Link from "next/link";
import { FC, useState } from "react";
import {
  FaChevronLeft,
  FaProjectDiagram,
  FaCalendar,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { NavItem } from "@/types/Task";
import { FaMessage } from "react-icons/fa6";
import { FcTodoList } from "react-icons/fc";
import { useDarkMode } from "@/contexts/DarkModeContext";

const navItems: NavItem[] = [
  { name: "To-Do List", icon: <FcTodoList />, href: "/" },
  { name: "Calendar", icon: <FaCalendar />, href: "/calendar" },
  { name: "Projects", icon: <FaProjectDiagram />, href: "/projects" },
  { name: "Messages", icon: <FaMessage />, href: "/messages" },
];

const Sidebar: FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`${
        isCollapsed ? "w-20" : "w-64"
      } bg-light-sidebar dark:bg-dark-sidebar text-light-text dark:text-dark-text flex flex-col p-4 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-center" : "justify-between"
        } mb-6`}
      >
        <h2
          className={`text-2xl font-semibold ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          Task Minder
        </h2>
        <button
          onClick={toggleSidebar}
          className="text-light-text dark:text-dark-text focus:outline-none p-1 rounded-full hover:bg-light-tagHover dark:hover:bg-dark-tagHover"
        >
          <FaChevronLeft
            className={` transform transition-transform duration-300  ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center p-2 rounded hover:bg-[#DDE6FF] dark:hover:bg-[#3DC2EC]"
          >
            <span className="flex items-center justify-center h-6 w-6 mr-2">
              {item.icon}
            </span>
            {!isCollapsed && <span className="flex-1">{item.name}</span>}
          </Link>
        ))}
      </nav>
      <div
        className={`mt-auto sticky bottom-4 ${
          isCollapsed ? "justify-center" : "justify-start"
        } flex items-center`}
      >
        {/* Toggle Dark Mode */}
        <label className="relative inline-flex items-center cursor-pointer mx-auto">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div
            className={`w-16 h-8 rounded-full transition-all bg-gradient-to-r ${
              isDarkMode
                ? "from-gray-700 via-gray-800 to-black"
                : "from-yellow-200 via-yellow-300 to-yellow-500"
            } flex items-center px-1`}
          >
            {/* Icon Sun */}
            <FaSun
              className={`text-yellow-500 text-base transition-opacity ${
                isDarkMode ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Toggle Button */}
            <div
              className={`w-6 h-6 shadow-md transition-transform ${
                isDarkMode ? "translate-x-8" : "translate-x-1"
              }`}
            />
            {/* Icon Moon */}
            <FaMoon
              className={`text-white-400 text-base ml-auto transition-opacity ${
                isDarkMode ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
