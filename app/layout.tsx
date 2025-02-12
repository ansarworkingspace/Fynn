import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import type React from "react"; // Import React
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Fynn - AI-powered DM Automation",
  description: "Automate your Instagram DMs with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} ${outfit.variable} font-sans`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
