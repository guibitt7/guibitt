import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Backgorund } from "@/components/Background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "<guibitt>",
  description: "FullStack developer and a Software Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Backgorund/>
        {children}
      </body>
    </html>
  );
}
