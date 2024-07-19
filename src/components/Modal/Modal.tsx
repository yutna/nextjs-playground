"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import styles from "./Modal.module.css";

import type { ElementRef } from "react";
import type { ModalProps } from "./types";

export default function Modal({ children }: ModalProps) {
  // Hooks
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const router = useRouter();

  // Event handler
  function handleClose() {
    router.back();
  }

  // Effect hook
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return (
    <div className={styles.modalBackdrop}>
      <dialog className={styles.modal} onClose={handleClose} ref={dialogRef}>
        {children}
        <button className={styles.closeButton} onClick={handleClose} />
      </dialog>
    </div>
  );
}
