"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/navBar.module.css';

export function NavBar({ path, items }) {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {items.map((item, index) => {
          const navPath = `${path}${item.slug ? `/${item.slug}` : ''}`
          const isActive =
          (!item.slug && pathname === null) ||
          pathname === navPath
          return (
            <li key={index} className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}` }>
              <Link href={navPath}>
                {item.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}