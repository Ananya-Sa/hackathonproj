"use client";

import { Video } from "lucide-react";
import StartMeetingDialog from "../dialog/StartMeetingDialog";
import { Button } from "../ui/button";
import JoinMeetingDialog from "../dialog/JoinMeetingDialog";

function Navbar() {
  return (
    <div className="flex h-28 w-full items-center px-10 justify-between">
      <div className="space-y-1">
        <p className="font-bold text-xl">Previous Meets</p>
        <p className="text-slate-700 text-sm">
          See your previous meeting through recording and share document
        </p>
      </div>
      <div className="items-center flex space-x-6">
        <JoinMeetingDialog />
        <StartMeetingDialog />
      </div>
    </div>
  );
}

export default Navbar;
