import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header/Header";
import Container from '@mui/material/Container';
import Footer from "@/components/MainPageComponents/Footer/Footer";


export const metadata: Metadata = {
  title: "AnimeTracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Container suppressHydrationWarning>
        <Header/>
          {children}
          <Footer/>
      </Container>
      </body>
    </html>
  );
}
