import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { AuthProvider } from '../providers/auth-provider'

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
    <AuthProvider>
    <html lang="pt-br">
      <body>
        {children}
        </body>
    </html>
    </AuthProvider>
  );
}
