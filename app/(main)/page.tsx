<<<<<<< HEAD
"use client";

import Sidebar from "@/components/shared/Sidebar";
import useUser from "@/hooks/auth/useUser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { HiPhoneMissedCall } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillMicFill } from "react-icons/bs";
import { BsFillMicMuteFill } from "react-icons/bs";
=======
import { MenubarDemo } from "@/components/CollegeHomePage";
import SideBar from "@/components/sidebar";
import Dropdown from "@/components/ui/Dropdown";
>>>>>>> 6e5fdadc1d3d8c6b251f912d826da0d14caa866b

function page() {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const Icon = isOpen() ? BsFillMicFill : BsFillMicMuteFill;

  function isOpen() {
    return false;
  }
  useEffect(() => {
    useUser().then((data) => {
      setUser(data);

      if (data.user == null) {
        console.log("Done");
        return router.replace("/getting-started");
      }
      setLoaded(true);
    });
  }, []);

  useEffect(() => {}, []);

  return (
<<<<<<< HEAD
    <div className="flex">
      <div className="">
        <Sidebar user={user} />
      </div>
      <div className="relative">
        <div className="absolute inset-x-[300px] bottom-20">
          <BsFillChatRightDotsFill size={28} />
        </div>
        <div className="absolute inset-x-[400px] bottom-20">
          <HiPhoneMissedCall size={28} />
        </div>
        <div className="absolute inset-x-[500px] bottom-20">
          <BiPhoneCall size={28} />
        </div>

        <div onClick={() => {}} className="absolute inset-x-[600px] bottom-20">
          <Icon size={28} />
        </div>
=======
    <div>
      <div className="h-screen grid bg-gradient-to-r from-sky-600 to-indigo-600">
        <Dropdown />
>>>>>>> 6e5fdadc1d3d8c6b251f912d826da0d14caa866b
      </div>
    </div>
  );
}

export default page;
