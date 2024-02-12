"use client";
import * as z from "zod";

import { useCallback, useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
// import { auth } from "@/auth";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc"
import { AiFillGithub } from "react-icons/ai";

import { Modal } from "@/components/modal/modal";
import AuthButton from "../auth/authButton";
import { useSession } from "next-auth/react"
import { SignIn, SignOut } from "./authentication";
import { useCurrentUser } from "@/hooks/use-current-user";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,  
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { login } from "@/actions/login";
import useRegisterModal from "@/hooks/use-register-modal";
import useLoginModal from "@/hooks/use-login-modal";
import { register } from "@/actions/register";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
  

// const formSchema = z.object({
//   name: z.string().min(1)
// })





export const RegisterModal = () => {

  const registerHookModal = useRegisterModal();
  const loginHookModal = useLoginModal();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  // const user = useCurrentUser();

  // console.log("dsdfsjkfs", user)
   // alternative of loading
   const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  })

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //   }
  // })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("")
    setSuccess("")
    // console.log(values)
    // startTransition is used as loading
    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data?.error)
          setSuccess(data?.success)
        })
    })
  }
  // const handleClose = useCallback(() => {
    
  //   setTimeout(() => {
  //     registerHookModal.onClose
  //   }, 300)
  // }, [registerHookModal.onClose]);

  const onToggle = useCallback(() => {
    registerHookModal.onClose();
    loginHookModal.onOpen();
  }, [registerHookModal, loginHookModal])

  return (
   <Modal 
    title="Register" 
    description="Create an account with " 
    isOpen={registerHookModal.isOpen} 
    onClose={registerHookModal.onClose}
   >
     <div className="space-y-4 py-2 pb-4">
      <Form {...form}>
        <form 
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-10/12 mx-auto"
        >
        <div className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="John Doe"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="john.doe@example.com"
                  type="email"
                  // className="w-full "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  placeholder="******"
                  type="password"
                  // className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormError message={error} />
      <FormSuccess message={success}/>
      <Button
        disabled={isPending}
        type="submit"
        className="w-full"
      >
        Create an account
      </Button>
      </form>
      </Form>
     <AuthButton
        outline 
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />

      <AuthButton
        outline 
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <p>Already have an account?
          <span 
            onClick={onToggle} 
            className="
              text-neutral-800
              cursor-pointer 
              hover:underline
            "
            > Log in</span>
        </p>
      </div>
   </Modal>
  ) 
}