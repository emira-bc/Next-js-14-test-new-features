import Link from 'next/link';
import styles from "@/styles/pages/page.module.css";
export const dynamic = 'force-static';
export const revalidate = 50;
export default function Home() {
  console.log('//////////////////////Page home is rendred\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Link
            href="/productList"
          >
            <h2>
              Product auto static <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            href="/productListWithStreming"
          >
            <h2>
              Product List with streaming === auto static<span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            href="/productListWithStreming/jewelery"
          >
            <h2>
              Product List with reel streaming <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            href="/product/1"
          >
            <h2>
              Product SSR <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            href="/productStatic/1"
          >
            <h2>
              Product static <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            href="/productWithPartialRender/2"
          >
            <h2>
              Product with partial render <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link
            href="/productWithStreaming/3"
          >
            <h2>
              Product with streaming <span>-&gt;</span>
            </h2>
          </Link>
        </div>
        <div className={styles.card}>
          <Link 
            href="/parallelRoutes"
          >
            <h2>
              Parallel route <span>-&gt;</span>
            </h2>
          </Link>
        </div>
      </div>

    </main>
  );
}
