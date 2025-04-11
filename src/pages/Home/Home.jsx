import { useEffect, useState } from "react";
import MetricCard from "../../components/Metric-card/MetricCard";
import styles from "./Home.module.css";

export default function Home() {
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    fetchWithDelay("/data/metrics.json", 1000).then((data) => {
      setMetrics(data);
    });
  }, []);
  return (
    <>
      <h1>Welcome Home</h1>
      <div className={styles.cardGrid}>
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} major={metric.major} minor={metric.minor} />
        ))}
      </div>
    </>
  );
}

function fetchWithDelay(url, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then(resolve);
    }, delay);
  });
}
