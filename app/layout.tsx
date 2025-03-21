import type { Metadata } from "next";
// import { Afacad } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Toaster } from "sonner";
// const afacad = Afacad({
//   variable: "--font-afacad",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "llygant",
  description: "E-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="fixed w-full">
          <NavBar />
        </div>
        <div className="afacad-local">
          {children}
          <Toaster position="top-right" richColors />
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
