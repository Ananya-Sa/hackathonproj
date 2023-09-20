"use client";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";
import { Form } from "../ui/form";
import { Button } from "../ui/button";

function AuthModal() {
  const router = useRouter();
  const { isOpen, onClose } = useAuthModal();

  function onChange(open: boolean) {
    if (!open) {
      onClose();
    }
  }

  return (
    <Modal
      title="Welcome Back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <form>
        <label className="block mb-1 font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full  border-black rounded-md border px-3 py-1 text-sm outline-black outline-offset-4 mb-3"
        />
        <label className="block mb-1 font-semibold">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          className="w-full border-black rounded-md border px-3 py-1 text-sm outline-black outline-offset-4 mb-3"
        />
        <Button className="w-full">Login</Button>
      </form>
    </Modal>
  );
}

export default AuthModal;
