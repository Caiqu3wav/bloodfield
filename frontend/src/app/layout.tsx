import "./globals.css";
import "./fonts.css";
import SessionProvider from '../providers/auth-provider'
import { getServerSession } from "next-auth";
import { ReduxProviders } from "@/providers/ReduxProvider";
import ToastProvider from "@/providers/ToastProvider";

export const metadata = {
  title: "BloodField",
  description: "Loja high fashion",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <ReduxProviders>
    <html lang="pt-br">
      <body>
        <ToastProvider>
      <SessionProvider session={session}>
        {children}
        </SessionProvider>
        </ToastProvider>
        </body>
    </html>
    </ReduxProviders>
  );
}
