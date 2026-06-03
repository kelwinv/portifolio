import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kelwin Vieira | Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack em React, Next.js, Node.js e Nest.js — startups, equipes ágeis, AWS, Docker e APIs REST.",
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
