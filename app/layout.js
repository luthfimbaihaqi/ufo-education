import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // <--- 1. Import Navbar
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UFO - University For Everyone",
  description: "Platform edukasi data pendidikan Indonesia.",
};  

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* 2. Pasang Navbar di sini, SEBELUM children */}
        <Navbar />
        
        {/* Children adalah isi halaman (Home, Artikel, dll) */}
        {children}

        <Footer />
      </body>
    </html>
  );
}