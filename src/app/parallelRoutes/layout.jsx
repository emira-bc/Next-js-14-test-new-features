import styles from '@/styles/components/layout.module.css';
  export default function DashboardLayout({ analytics, settings, children }) {
    return (
      <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.panel}>
          {children}
        </div>
        <div className={styles.panelWrapper}>
          <div className={styles.panel}>
            {analytics}
          </div>
          <div className={styles.panel}>
            {settings}
          </div>
        </div>
      </div>
    </div>
    );
}
