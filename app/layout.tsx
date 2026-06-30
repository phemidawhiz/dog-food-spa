
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "800"] 
});

export const metadata: Metadata = {
  title: "Premium Dog Food Nutrition",
  description: "Made fresh and vet developed for stronger, healthier dogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interTight.className} bg-white text-[#4b5563] antialiased`}>
        {children}
      </body>
    </html>
  );
}