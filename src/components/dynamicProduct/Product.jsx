import styles from '@/styles/pages/product.module.css';
import { cookies } from 'next/headers';
import { fetchProductById } from "@/services/product";
// import Reviews from "@/components/reviews/Reviews";

const Product = async ({ slug }) => {
    console.log('slug from component Product', slug);
    const productData = await fetchProductById(slug);
    if (!productData) {
        return <div>Loading...</div>;
    }
    const session = cookies().get('session');
    console.log('session**********', session);

    return (<div className={styles.container}>
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
        {/* <Reviews />  */}
    </div>)
}

export default Product;