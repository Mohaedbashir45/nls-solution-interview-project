import React from "react";
import { User, LogOut } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Workload Report</h1>
      <div className={styles.userSection}>
        <User className={styles.icon} />
        <span className={styles.userEmail}>user@nlsk.com</span>
        <button className={styles.logoutBtn}>
          <LogOut className={styles.logoutIcon} /> Logout
        </button>
      </div>
    </div>
  );
}
