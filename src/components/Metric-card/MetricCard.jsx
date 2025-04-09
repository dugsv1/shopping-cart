import styles from "./MetricCard.modules.css";

export default function MetricCard(props) {
  const { major, minor } = props;
  return (
    <div className={styles.card}>
      <div className={styles.major}>{major}</div>
      <div className={styles.minor}>{minor}</div>
    </div>
  );
}
