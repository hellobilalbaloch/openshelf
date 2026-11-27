import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { SmoothScrollShell } from "@/app/components/SmoothScrollShell";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "OpenShelf — Discover more. Pay nothing.",
  description:
    "A centralised index for legally free books and textbooks from trusted libraries, universities, and open-access publishers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans bg-[#FAF8F5] text-[#1E2022] antialiased min-h-screen flex flex-col selection:bg-[#E1F2FE] selection:text-[#0277BD]">
        <Navbar />
        <SmoothScrollShell>{children}</SmoothScrollShell>
        <Footer />
      </body>
    </html>
  );
}