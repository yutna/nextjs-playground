import { inter } from "@/config/fonts";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  description: "Exploring and learning Next.js framework",
  title: {
    default: "Next.js Playground",
    template: "%s | Next.js Playground",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
