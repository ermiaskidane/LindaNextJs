"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc"
// import * as z from "zod";
// import { useForm } from "react-hook-form"
// import { zodResolver } from '@hookform/resolvers/zod'
// import axios from "axios";
// import {toast} from "react-hot-toast"

import { Modal } from "@/components/modal/modal";
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
import { useLoginModal } from "@/hooks/use-login-modal";
import AuthButton from "../authButton";
  

// const formSchema = z.object({
//   name: z.string().min(1)
// })


export const StoreModal = () => {

  const storeModal = useLoginModal();

  const [loading, setLoading] = useState(false)

  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: "",
  //   }
  // })

  // const onSubmit = async (values: z.infer<typeof formSchema>) => {
  //   // console.log(values)
  //   try {
  //     setLoading(true)

  //     const response = await axios.post("/api/stores", values)

  //     // console.log(response.data)
  //     // toast.success("stored created.")
  //     // we use instead of redirect to refresh the whole page
  //     window.location.assign(`/${response.data.id}`)
  //   } catch(error) {
  //     toast.error("something went wrong")
  //   }  finally{
  //     setLoading(false)
  //   }
  // }
  return (
   <Modal 
    title="Login" 
    description="Create an account with google" 
    isOpen={storeModal.isOpen} 
    onClose={storeModal.onClose}
   >
     <div className="space-y-4 py-2 pb-4">
     <AuthButton
        outline 
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      {/* <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
          control={form.control}
          name="name"
          render={({field}) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input 
                disabled={loading} 
                placeholder="E-Commerce" 
                {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />
          <div className="pt-6 space-x-2 flex items-center justify-end">
            <Button
              disabled={loading}
              variant="outline"
              onClick={storeModal.onClose} 
            >
              Cancle
            </Button>
            <Button disabled={loading} type="submit">Continue</Button>
          </div>
        </form>
      </Form> */}
     </div>
   </Modal>
  ) 
}