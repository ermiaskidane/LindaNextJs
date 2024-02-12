"use client";

import { useEffect, useState } from "react";
 
import { LoginModal } from "@/components/modal/login-modal";
import { RegisterModal } from "@/components/modal/register-modal";
// all this done is prevent the hydration
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted) {
    return null;
  }

  return (
    <>
      <LoginModal />
      <RegisterModal/>
    </>
  )
}