import type { ReactNode } from "react";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      <h2>Feeds Layout</h2>
      {children}
      {modal}
    </>
  );
}
