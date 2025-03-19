import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vieira | Em Manutenção",
  description: "Site em manutenção. Voltaremos em breve!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
