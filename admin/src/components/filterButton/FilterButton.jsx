import React from "react";
import { Filter } from "lucide-react";
import styles from "./FilterButton.module.css";

export default function FilterButton() {
  return (
    <button className={styles.filterBtn}>
      <Filter className={styles.icon} /> Filter
    </button>
  );
}
