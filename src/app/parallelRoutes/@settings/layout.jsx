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
              text: 'Setting 1',
              slug: 'settingsSubRoute1',
            },
            {
              text: 'Setting 2',
              slug: 'settingsSubRoute2',
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