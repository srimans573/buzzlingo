import StatBox from '../components/StatBox';
import styles from '../styles/review.module.css';
import Sidebar from '../components/Sidebar';

export default function Review() {
    return (
        <div>
        <Sidebar/>
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Review</h1>
                <p className={styles.subtitle}>Revisit your past lessons and practice vocabulary</p>

                <section className={styles.statsRow}>
                    <StatBox label="Videos Watched" value="1" />
                    <StatBox label="Words Learned" value="1" />
                    <StatBox label="Current Streak" value={'1 🔥'} />
                </section>

                <section className={styles.sessions}>
                    <div className={styles.sessionCard}>
                        <div className={styles.sessionInfo}>
                            <h3 className={styles.sessionTitle}>Session X</h3>
                            <p className={styles.sessionMeta}>Videos Watched: 300</p>
                        </div>
                        <div className={styles.sessionAction}>review</div>
                    </div>

                    <div className={styles.sessionCard}>
                        <div className={styles.sessionInfo}>
                            <h3 className={styles.sessionTitle}>Session X</h3>
                            <p className={styles.sessionMeta}>Videos Watched: 300</p>
                        </div>
                        <div className={styles.sessionAction}>review</div>
                    </div>
                </section>
            </main>
        </div>
        </div>
    );
}