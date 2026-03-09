import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header/Header";
import Container from '@mui/material/Container';
import Footer from "@/components/MainPageComponents/Footer/Footer";
import { Play } from 'next/font/google'
import Banner from "@/components/MainPageComponents/Banner/Banner";


export const metadata: Metadata = {
  title: "Anira",
};

const play = Play({
  subsets: ['latin'],
  weight: ['400', '700']}
)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={play.className}>
      <body>
      <Header/>
      {/*<Banner/>*/}
      <Container suppressHydrationWarning maxWidth="xl">
          {children}
      </Container>
      <Footer/>
      </body>
    </html>
  );
}
