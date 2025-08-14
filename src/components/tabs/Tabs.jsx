import React from "react";
import styles from "./Tabs.module.css";

export default function Tabs() {
  return (
    <div className={styles.tabs}>
      <button className={`${styles.tab} ${styles.active}`}>Skip Trace (2)</button>
      <button className={styles.tab}>PTP Queue (4)</button>
      <button className={styles.tab}>Restructure (1)</button>
    </div>
  );
}
