import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arpan | Web Developer Portfolio",
  description: "Bilingual portfolio of Arpan, a web programming student in Okinawa, Japan.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
