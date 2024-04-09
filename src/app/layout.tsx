import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";


export const metadata: Metadata = {
  title: "BloodField",
  description: "Loja high fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
