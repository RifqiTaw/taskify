"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { FC } from "react";

interface HeaderProps {
  onCreateTaskClick: () => void;
}

const Header: FC<HeaderProps> = ({ onCreateTaskClick }) => {
  return (
    <header className="w-full bg-light-header dark:bg-dark-header shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-light-text dark:text-dark-text">
        Hello, Rifqi Taufiqurrohman
      </h1>
      <div className="flex items-center space-x-4">
        {/* Tombol Create Task */}
        <button
          onClick={onCreateTaskClick}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 flex items-center gap-2"
        >
          <span>Create Task</span>
          <IoIosAddCircle size={20} />
        </button>

        {/* Dropdown Notifications */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="focus:outline-none">
            <FaBell className="h-6 w-6 text-gray-900 dark:text-gray-100 cursor-pointer" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="end"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg p-2 text-gray-900 dark:text-gray-100 mt-2 mr-2 w-64"
          >
            <DropdownMenu.Item className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              You have a new message
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              Your report is ready
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              Update available
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>

        {/* Dropdown Profile */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="focus:outline-none">
            <FaUserCircle className="h-8 w-8 text-gray-900 dark:text-gray-100 cursor-pointer" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            align="end"
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg p-2 text-gray-900 dark:text-gray-100 mt-2 mr-2"
          >
            <DropdownMenu.Item className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              Settings
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="my-1 border-t border-gray-200 dark:border-gray-600" />
            <DropdownMenu.Item className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700">
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </header>
  );
};

export default Header;
