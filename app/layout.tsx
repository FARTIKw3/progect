import type { Metadata } from "next";
import { Montserrat_Alternates } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Basket } from "@/components/basket";

const MontAlt = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${MontAlt.className}  antialiased`}>
        <div>
          <Header />
          <div>{children}</div>
          <Basket />
          <Footer />
        </div>
      </body>
    </html>
  );
}
