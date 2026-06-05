import { SpeedInsights } from "@vercel/speed-insights/next";

import { JsonLd } from "@/components/seo/JsonLd";
import {
  createPageMetadata,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
} from "@/lib/seo/site";

import "./globals.css";

export const metadata = createPageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: "/",
  isHome: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={"antialiased"}>
        <JsonLd />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
