import React from "react";
import styles from "./Table.module.css";

export default function Table({ data }) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Reference ID</th>
            <th>Customer Number</th>
            <th>Liquidation Account</th>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Segment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.referenceId}</td>
              <td>{item.customerNumber}</td>
              <td>{item.liquidationAccount}</td>
              <td>{item.customerName}</td>
              <td>{item.productName}</td>
              <td>{item.segment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
