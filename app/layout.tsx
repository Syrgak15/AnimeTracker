import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header/Header";
import Container from '@mui/material/Container';
import Footer from "@/components/MainPageComponents/Footer/Footer";
import { Play } from 'next/font/google'
import { SessionProvider } from 'next-auth/react';


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
      <SessionProvider>
          <html lang="en" className={play.className} suppressHydrationWarning={true}>
          <body>
          <Header/>
          <Container suppressHydrationWarning maxWidth="xl">
              {children}
          </Container>
          <Footer/>
          </body>
          </html>
      </SessionProvider>
  );
}
