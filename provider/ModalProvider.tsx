"use client";

import AuthModal from "@/components/shared/AuthModel";
import Modal from "@/components/shared/Modal";
import { useEffect, useState } from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
}

export default ModalProvider;
