"use client";

import Modal from "./Modal";
import { useRouter } from "next/navigation";
import useAuthModal from "@/hooks/useAuthModal";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { useLogin } from "@/hooks/auth/useLogin";
import Cookies from "js-cookie";

function LoginAuthModal() {
  const router = useRouter();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const { isOpen, onClose } = useAuthModal();

  function onChange(open: boolean) {
    if (!open) {
      onClose();
    }
  }

  function handleChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { token, errors } = await useLogin({
      email: email ?? "",
      password: password ?? "",
    });
    if (!errors) {
      Cookies.set("token", token, { expires: 1 });
      console.log("Success");
    }
  }

  return (
    <Modal
      title="Welcome Back"
      description="Login to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit}>
        <label className="block mb-1 font-semibold">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChangeEmail}
          className="w-full  border-black rounded-md border px-3 py-1 text-sm outline-black outline-offset-4 mb-3"
        />
        <label className="block mb-1 font-semibold">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChangePassword}
          id="password"
          className="w-full border-black rounded-md border px-3 py-1 text-sm outline-black outline-offset-4 mb-3"
        />
        <Button className="w-full">Login</Button>
      </form>
    </Modal>
  );
}

export default LoginAuthModal;
