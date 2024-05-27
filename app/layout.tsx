import type { Metadata } from "next";
import { Poppins, Sora } from "next/font/google";
import "./globals.css";
import Header from "./ui/layout/header";
import Footer from "./ui/layout/footer";
import Head from "next/head";

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
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <html lang="en">
        <body className={`${poppins.className} flex flex-col`}>
          <Header />
          <main className="bg-paper-light px-2 md:m-auto md:w-3/4 xl:w-1/2">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
