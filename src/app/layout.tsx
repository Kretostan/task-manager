import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import Error from "@/app/error";
import AuthProvider from "@/components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Task Manager by Jakub Kret",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-center items-center min-h-screen antialiased`}
      >
          <AuthProvider >
            <div id="modal"></div>
            <AnimatedBackground />
            <Navigation />
            <ErrorBoundary errorComponent={Error}>
              <main className="flex flex-1 flex-col justify-center items-center px-4 md:px-0 pt-32 w-screen">

                {children}
              </main>
            </ErrorBoundary>
            <Footer />
          </AuthProvider>
      </body>
    </html>
  );
}
