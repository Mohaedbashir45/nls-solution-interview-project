import React, { useState } from "react";
import Nav from "../components/nav/Nav";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import Tabs from "../components/tabs/Tabs";
import WorkloadCard from "../components/workloadCard/WorkloadCard";
import styles from "./WorkloadReport.module.css";

export default function WorkloadReport() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const skipTraceData = [
    {
      referenceId: "AA09****1",
      customerNumber: "917****",
      liquidationAccount: "1000****",
      customerName: "N/A",
      productName: "3137",
      segment: "N/A"
    },
    {
      referenceId: "AA101****P",
      customerNumber: "991****",
      liquidationAccount: "1000****",
      customerName: "N/A",
      productName: "3115",
      segment: "N/A"
    }
  ];

  return (
    <div className={styles.pageWrapper}>
      <Nav onMenuClick={toggleSidebar} />
      <div className={styles.contentWrapper}>
        <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : styles.closed}`}>
          <Sidebar />
        </aside>
        <main className={styles.mainContent}>
          <Tabs />
          <WorkloadCard title="Skip Trace (2 of 2)" data={skipTraceData} />
        </main>
      </div>
    </div>
  );
}
