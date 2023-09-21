"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch , BiTime} from "react-icons/bi";
import { AiOutlineUserAdd, AiOutlineSchedule} from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import Box from "./Box";
import SideBarItem from "./SideBarItem";


interface SideBarProps {
  children: React.ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(

    () => [
      {
        icon: AiOutlineSchedule,
        label: "Schedule Meeting",
        active: pathname === "/schedule meeting",
        href: "/schedule meeting",
      },

      {
        icon: AiOutlineUserAdd,
        label: "Add user",
        active: pathname === "/add user",
        href: "/add user",
      },   
    ]
  ,
    [pathname]
  );

    
  return (
    <div className="flex h-full">
      
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
        <div>
          <label className="text-white">Soumyadeep</label>
        
      </div>
      <div><select>
   
          <option value="fruit"></option>
   
          <option value="vegetable">Vegetable</option>
   
          <option value="meat">Meat</option>
   
        </select>
        </div>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <div>Bal</div>
        </Box>
      </div>
      <main className="h-full overflow-y-auto flex-1 py-2">{children}</main>
    </div>
  );
};

export default SideBar;