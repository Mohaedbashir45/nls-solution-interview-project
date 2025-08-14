import React from "react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>NLS TECH</h2>
      <nav>
        <a href="#" className={styles.link}>
          
          Profile
        </a>
        <a href="#" className={styles.link}>Change Password</a>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Loans</h3>
          <a href="#" className={styles.link}>Recovery Officer Comments</a>
          <a href="#" className={styles.link}>Workload</a>
          <a href="#" className={styles.link}>Workload Data</a>
          <a href="#" className={styles.link}>Recovery Officer Report</a>
          <a href="#" className={styles.link}>Debt Officer Setup</a>
        </div>
      </nav>
    </aside>
  );
}
