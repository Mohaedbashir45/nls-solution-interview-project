import React from "react";
import FilterButton from '../filterButton/FilterButton'
import Table from "../table/Table";
import styles from "./WorkloadCard.module.css";

export default function WorkloadCard({ title, data }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <FilterButton />
      </div>
      <Table data={data} />
    </div>
  );
}
