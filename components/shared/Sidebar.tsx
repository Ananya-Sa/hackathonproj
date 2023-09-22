// Sidebar.js

import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../ui/menubar";
import { AiOutlineSchedule, AiOutlineTeam } from "react-icons/ai";
import { GrStatusDisabled } from "react-icons/gr";
import { VscSignOut } from "react-icons/vsc";
import { LuHelpCircle, LuSettings } from "react-icons/lu";
import { BiSolidUserCircle, BiUser } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";

const Sidebar = ({ user }: { user: any }) => {
  return (
    <div className="bg-gray-50 w-64 h-screen border-r border-gray-200">
      <div className="p-4">
        <Menubar className="w-full">
          <MenubarMenu>
            <MenubarTrigger className="w-full flex justify-between">
              <div className="flex items-center">
                <BiSolidUserCircle size={25} className="mr-4" />
                User
              </div>
              <IoMdArrowDropdown size={18} className="ml-8" />
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <BiUser size={16} className="mr-3" /> My Profile
              </MenubarItem>
              <MenubarItem>
                <LuSettings size={16} className="mr-3" /> Profile Settings
              </MenubarItem>
              <MenubarItem>
                <GrStatusDisabled size={16} className="mr-3" /> Status
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <LuHelpCircle size={16} className="mr-3" /> Help
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                <VscSignOut size={16} className="mr-3" /> Sign Out
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="p-4">
        <ul>
          <li className="mb-4 flex items-center">
            <AiOutlineSchedule size={16} className="mr-3" /> Bookings
          </li>
          <MenubarSeparator />
          <li className="mb-4 flex items-center">
            <AiOutlineTeam size={16} className="mr-3" /> Teams
          </li>
          <MenubarSeparator />
          <li className="mb-4 flex items-center">
            <LuSettings size={16} className="mr-3" /> Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
