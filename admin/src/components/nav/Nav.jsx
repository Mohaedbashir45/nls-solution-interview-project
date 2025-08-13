import React from "react";
import styles from "./Nav.module.css";
import { FaBars } from "react-icons/fa";

export default function Nav({ onMenuClick }) {
  return (
    <header className={styles.topNav}>
      <div className={styles.leftSection}>
        {/* Hamburger button */}
        <button className={styles.menuBtn} onClick={onMenuClick}>
          <FaBars size={22} />
        </button>
        <span className={styles.portalName}>Kollect Lite Portal</span>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.companyName}>KVB PVT LTD</div>
        <div className={styles.userInfo}>
          <span className={styles.userIcon}>👤</span>
          <span className={styles.userEmail}>user@nlsk.com</span>
        </div>
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </header>
  );
}
