import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Alex Rivera — Full-Stack Engineer",
  description:
    "Full-stack engineer specializing in React, Next.js, and Node.js. Building fast, accessible, and beautiful web experiences.",
  keywords: ["Full-Stack Engineer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Alex Rivera" }],
  openGraph: {
    title: "Alex Rivera — Full-Stack Engineer",
    description: "Full-stack engineer specializing in React, Next.js, and Node.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Rivera — Full-Stack Engineer",
    description: "Full-stack engineer specializing in React, Next.js, and Node.js.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
