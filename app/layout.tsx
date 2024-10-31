import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";
import { ToasterProvider } from "@/providers/toast-provider";

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
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* this link is where it cause hydration error for the footer social media icons */}
        {/* <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" /> */}
        <body className={inter.className}>
          <div id="backdrop-hook"></div>
          <ToasterProvider/>
            {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
