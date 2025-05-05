/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "./globals.scss";
import Head from "next/head"; 

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
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Lato:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
