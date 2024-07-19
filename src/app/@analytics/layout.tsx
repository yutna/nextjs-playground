import Link from "next/link";
import type { ReactNode } from "react";

export default async function AnalyticsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div style={{ margin: "0.5rem" }}>
      <nav style={{ display: "inline-flex", gap: "0.5rem", padding: "0.5rem" }}>
        <Link href="/page-views">Page Views</Link>
        <Link href="/visitors">Visitors</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}
