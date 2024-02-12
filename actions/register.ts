"use server";

import bcrypt from "bcryptjs"
import * as z from "zod";
import { db } from "@/lib/db"
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register  = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return  {error: "Invalid fields!"}
  }


  const { email, password, name} = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10)

  // const existingUser = await db.user.findUnique({
  //   where: {
  //     email
  //   }
  // })

  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return  {error: "Email already in use"}
  }

  await db.user.create({
    data: {
      name,
      email, 
      password: hashedPassword
    }
  })

  // send verification token email
  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(
    verificationToken.email,
    verificationToken.token
  )
  return { success: "User created and Confirmation email sent!"};
}