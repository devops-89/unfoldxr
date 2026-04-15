import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/widgets/Header";
import Footer from "@/components/widgets/Footer";
import { DemoModalProvider } from "@/components/context/DemoModalContext";
import DemoModal from "@/components/widgets/DemoModal";
import ReCaptchaProvider from "@/components/context/ReCaptchaProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "UnfoldXR",
  description: "UnfoldXR",
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
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, overflowX: "hidden" }} suppressHydrationWarning>
        <ReCaptchaProvider>
          <DemoModalProvider>
            <Header />
            {children}
            <Footer />
            <DemoModal />
          </DemoModalProvider>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
