"use client";

import { Button } from "@/components/ui/button";
import useAuthModal from "@/hooks/useAuthModal";

function page() {
  const authModal = useAuthModal();

  return (
    <header className="flex justify-center h-screen items-center bg-gradient-to-b from-slate-200 to-white">
      <div>
        <p className="text-5xl font-bold text-center">Getting Started</p>
        <p className="mt-16 text-center tracking-widest text-lg">
          Welcome to AICTE Meeting Platform <br />
          Schedule you meeting share important files
        </p>
        <div className="mt-20 space-x-5 justify-center flex ">
          <div className="flex flex-col">
            <Button onClick={authModal.onOpen}>Login as AICTE Admin</Button>
          </div>
          <div className="flex flex-col">
            <Button onClick={authModal.onOpen}>
              Login as College Facility
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default page;
