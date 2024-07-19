import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Exploring and learning Next.js framework",
  title: {
    default: "Next.js Playground",
    template: "%s | Next.js Playground",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
