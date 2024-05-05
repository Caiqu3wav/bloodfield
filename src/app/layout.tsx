import "./globals.css";
import "./fonts.css";
import SessionProvider from '../providers/auth-provider'
import { getServerSession } from "next-auth";
import { ReduxProviders } from "@/providers/ReduxProvider";

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
      <SessionProvider session={session}>
        {children}
        </SessionProvider>
        </body>
    </html>
    </ReduxProviders>
  );
}
