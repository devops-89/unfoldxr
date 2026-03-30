import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/widgets/Header";
import Footer from "@/components/widgets/Footer";

export const metadata: Metadata = {
  title: "UnfoldXR",
  description: "UnfoldXR",
  viewport: "width=device-width, initial-scale=1", 
  icons: {
    icon: "/Fav-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, overflowX: "hidden" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}