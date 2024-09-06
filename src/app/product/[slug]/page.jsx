import StaticReviews from "@/components/staticReviews/StaticReviews";
import { fetchProductById } from "@/services/product";
// import { fetchReviews } from "@/services/review";
import styles from '@/styles/pages/product.module.css';

export default async function Product({ params: { slug } }) {

  const productData = await fetchProductById(slug);
  // const reviews = await fetchReviews();
  if (!productData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productHeader}>
          <img src={productData.image} alt={`${productData.title}`} />
          <div>
            <h1>{productData.title}</h1>
            <p>price: {productData.price}</p>
            <p>parent: {productData.category}</p>
            <p>rate: {productData.rating.rate}</p>
          </div>
        </div>
        <div className={styles.productDetails}>
          <p><span>Description:</span> {productData.description}</p>
        </div>
      </div>
      <StaticReviews />
    </>
  );
}
