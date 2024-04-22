import "./globals.css";
import "./fonts.css";
import SessionProvider from '../providers/auth-provider'
import { getServerSession } from "next-auth";
import CartProvider from "@/providers/cartProvider";

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
    <html lang="pt-br">
      <body>
        <CartProvider>
      <SessionProvider session={session}>
        {children}
        </SessionProvider>
        </CartProvider>
        </body>
    </html>
  );
}
