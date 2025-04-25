import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSideBar from "@/components/layout/LeftSideBar";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Metro Food Vendors",
  description: "Admin Dashboard for Metro Food Vendors",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex max-lg:flex-col text-grey-1">
      <LeftSideBar />
      <div className="flex-1">{children}</div>
      </div>
      </body>
    </html>
  );
}
