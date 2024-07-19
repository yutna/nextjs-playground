import { Inter } from "next/font/google";
import Link from "next/link";

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
  analytics,
  children,
  team,
}: Readonly<{
  analytics: ReactNode;
  children: ReactNode;
  team: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{ display: "inline-flex", gap: "0.5rem" }}>
          <Link href="/">Home</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/feeds/photos/1">Feeds Photos 1</Link>
        </nav>
        <br />
        <br />
        <br />
        {children}
        {analytics}
        {team}
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
