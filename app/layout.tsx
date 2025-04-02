import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plannity - Your One-Stop Shop for Planners and Journals",
  description: "Discover our collection of premium planners and journals designed to help you organize your thoughts and achieve your goals.",
  keywords: "planners, journals, notebooks, organization, productivity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
