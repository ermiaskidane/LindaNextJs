import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
// import { Poppins } from 'next/font/google'
import "./globals.css";
import Navigation from "@/components/navbar";
import Footer from "@/components/footer/footer";
import Head from "next/head";
import { ModalProvider } from "@/providers/modal-provider";
import { SessionProvider } from "next-auth/react";
import { auth } from '@/auth'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linda Shop",
  description: "Linda Shop provide all traditional and latest clothes",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en" suppressHydrationWarning>
        {/* this link is where it cause hydration error for the footer social media icons */}
        <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <body className={inter.className}>
          <div id="backdrop-hook"></div>
          <ModalProvider/>
            {children}
        </body>
      </html>
    </SessionProvider>
  );
}
