"use client";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/sections/Navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CodeQuest",
  description: "Test your Coding Knowledge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  if (!publishableKey) {
    console.warn("Clerk publishable key is missing");
    return <>{children}</>; // Render fallback during build
  }
  return (
    <ClerkProvider publishableKey={publishableKey}>
      <html lang="en">
        <body className={`${poppins.variable} font-poppins antialiased`}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
