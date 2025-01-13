import "./globals.css";
import "./fonts.css";
export const metadata = {
  title: "BloodField",
  description: "Loja high fashion",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        </body>
    </html>
  );
}
