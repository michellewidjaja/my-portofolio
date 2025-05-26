/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Michelle Lee Widjaja Portfolio",
  description: "Michelle Lee Widjaja Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="fixed top-[-100px] right-[-100px] w-[400px] h-[400px] dark:bg-gradient-to-r dark:from-blue-700 dark:to-pink-500 opacity-30 blur-3xl rounded-full z-0"></div>
        {children}
      </body>
    </html>
  );
}
