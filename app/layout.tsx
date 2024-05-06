import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";
import Footer from "./ui/footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["200", "300", "400", "600", "700"] });
const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "SEFF - The Search Engine For Fashion",
  description: "The Google Flights of luxury fashion and jewelry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-light">
      <body className={`${poppins.className} w-screen h-screen flex flex-col`}>
        <div className="relative top-0 left-0 right-0">
          <Header />
        </div>
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
