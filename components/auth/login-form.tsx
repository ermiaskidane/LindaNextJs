"use client";

import * as z from "zod";

import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { CardWrapper } from "./card-wrapper"
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

// Note: I could have used this full route system for the login and register instead of the modal way 
// since I using the modal now and the error occure when email has created with credential and gain want
// create with google or other provider, redirect here. I only use it to display for it. I recommended to use
// the page route login forms instead of the modal to get rid of this confusion.

const LoginForm = () => {
  const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
    : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");


  
  return (
    <CardWrapper
      headerLabel="Provider Error"
      backButtonLabel="Back to Login"
      backButtonHref="/"
      // showSocial
    >
      <FormError message={error || urlError} />
      <FormSuccess message={success}/>
    </CardWrapper>
  )
}

export default LoginForm