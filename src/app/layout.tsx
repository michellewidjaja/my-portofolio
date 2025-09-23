/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Michelle Lee Widjaja Portfolio",
  description: "Michelle Lee Widjaja Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Lato:wght@300;400;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="dark:text-theme-muted dark:bg-theme-background">
        {/* background gradient */}
        <div className="fixed top-[-100px] right-[-100px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] dark:bg-gradient-to-r dark:from-blue-700 dark:to-pink-500 opacity-30 blur-3xl rounded-full z-0"></div>
        
        {/* shared layout */}
        <div className="h-full md:flex relative md:px-20">
          <div className="md:w-[35%] md:sticky block md:top-0 md:h-screen">
            <Header />
          </div>
          <main className="w-full md:w-[65%] h-full md:overflow-y-auto md:p-12">
            <ThemeToggle />
            {children}
          </main>
        </div>

        <footer className="text-center p-4">
          &copy; 2025 Michelle Lee Widjaja
        </footer>
      </body>
    </html>
  );
}
