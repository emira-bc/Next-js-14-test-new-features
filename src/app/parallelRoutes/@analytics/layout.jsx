import { NavBar } from "@/components/navBar/NavBar";
import styles from '@/styles/components/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <NavBar
          path="/parallelRoutes"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Analytic 1',
              slug: 'analyticSubRoute1',
            },
            {
              text: 'Analytic 2',
              slug: 'analyticSubRoute2',
            },
          ]}
        />
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}