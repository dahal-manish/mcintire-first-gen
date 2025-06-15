import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  // variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "McIntire First-Gen Scholars",
  description: "McIntire First-Gen Scholars Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased text-blue-2`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
