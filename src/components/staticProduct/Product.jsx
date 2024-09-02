import styles from '@/styles/pages/product.module.css';
import { simulateDelay } from "@/utils/delay";

const Product = async ({ slug }) => {
    console.log('slug from component Product', slug);
    async function fetchProduct() {
        let currentTime = new Date();
        console.log('Time fetch product====', currentTime)
        const response = await fetch(`http://localhost:5000/products/${slug}`);
        await simulateDelay();
        const data = await response.json();
        return data
    }
    const productData = await fetchProduct();

    if (!productData) {
        return <div>Loading...</div>;
    }

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
    </div>)
}

export default Product;