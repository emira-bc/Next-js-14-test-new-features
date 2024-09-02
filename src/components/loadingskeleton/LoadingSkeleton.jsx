import styles from '@/styles/components/loadingSkeleton.module.css';

export default function LoadingSkeleton() {
    return (
      <div className={styles.skeletonCard}>
        <div className={styles.skeletonAvatar}></div>
        <div className={`${styles.skeletonLine} ${styles. skeletonTitle}`}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
        <div className={styles.skeletonLine}></div>
      </div>
    );
  }
  