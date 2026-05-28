import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Kelwin Vieira | Desenvolvedor Full Stack",
  description:
    "Full Stack especializado em Node.js, AWS e APIs REST — sistemas escaláveis em produção.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={"antialiased"}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
