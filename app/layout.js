"use client"
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, GoogleOneTap } from "@clerk/nextjs";
import { useEffect, useState } from "react";

const inter = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider>
          {isMounted && (
            <>
              <GoogleOneTap />
              {children}
            </>
          )}
        </ClerkProvider>
      </body>
    </html>
  );
}
