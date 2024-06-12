import type { Metadata } from "next";
import "./globals.css";
import "./fonts.css";
import { AuthProvider } from '../providers/auth-provider';
import { ReduxProviders } from "../providers/ReduxProvider";
import ToastProvider from "../providers/ToastProvider";

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
    <ReduxProviders>
    <AuthProvider>
    <html lang="pt-br">
      <body>
        <ToastProvider>
        {children}
        </ToastProvider>
        </body>
    </html>
    </AuthProvider>
    </ReduxProviders>
  );
}