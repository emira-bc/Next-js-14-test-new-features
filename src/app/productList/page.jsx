import Link from 'next/link';
import { AddToCart } from "@/components/addToCart/AddToCart";
import { fetchProductList } from "@/services/product";
import styles from '@/styles/pages/productList.module.css';

export default async function ProductList() {

  //cookies desactive le SSG const session = cookies().get('session');
  const productListData = await fetchProductList();
  console.log('////////////////////////////////////////Page produit SSR\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <ul className={styles.productList}>
        {productListData.map((item, index) => (
          <li key={index} className={styles.productCard}>
            <Link href={`/product/${item.id}`}>
              <img src={item.image} alt={`${item.title} `} />
              <p>{item.title} </p>
            </Link>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.rating.rate}</p>
            <p>{item.description}</p>
            <AddToCart />
          </li>
        ))}
      </ul>
    </div>
  );
}
