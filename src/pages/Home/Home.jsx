import MetricCard from "../../components/Metric-card/MetricCard";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <h1>Welcome Home</h1>
      <div className={styles.cardGrid}>
        <MetricCard major="437" minor="Active Users" />
        <MetricCard major="92%" minor="Server Uptime" />
        <MetricCard major="$8,321" minor="Monthly Revenue" />
        <MetricCard major="12" minor="Open Support Tickets" />
        <MetricCard major="4.8★" minor="Customer Rating" />
        <MetricCard major="28 min" minor="Avg. Session Length" />
        <MetricCard major="1,203" minor="Total Orders" />
        <MetricCard major="16 GB" minor="Used Storage" />
        <MetricCard major="74%" minor="Goal Completion" />
      </div>
    </>
  );
}
