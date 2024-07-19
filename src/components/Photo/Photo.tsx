import styles from "./Photo.module.css";
import type { PhotoProps } from "./types";

export default function Photo({ id }: PhotoProps) {
  return <div className={styles.photo}>{id}</div>;
}
