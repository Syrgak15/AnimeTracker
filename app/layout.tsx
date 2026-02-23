import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import Container from '@mui/material/Container';


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
      <Container suppressHydrationWarning={true}>
        <Header/>
          {children}
      </Container>
      </body>
    </html>
  );
}
