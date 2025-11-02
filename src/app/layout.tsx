import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UI Testing",
  description: "UI prototyping with Next.js 16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
