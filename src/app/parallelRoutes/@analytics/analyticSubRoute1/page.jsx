import styles from '@/styles/components/layout.module.css';

export default function SubRoute1Page() {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Sub route 1 title</h1>
      <p>Sub route 1 content.</p>
    </div>
  );
}