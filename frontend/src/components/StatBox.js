import styles from '../styles/review.module.css';

export default function StatBox({ label, value }) {
  return (
    <div className={styles.statBox}>
      <p className={styles.statLabel}>{label}</p>
      <p className={styles.statValue}>{value}</p>
    </div>
  );
}