import Link from 'next/link';
import { AddToCart } from "@/components/addToCart/AddToCart";
import { fetchProductListById } from "@/services/product"
import styles from '@/styles/pages/productList.module.css';

const productList = async ({ slug }) => {
  console.log('*********productList component!************');
  const productListData = await fetchProductListById(slug);

  return (
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
  )
}

export default productList;