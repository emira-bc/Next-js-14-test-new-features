import { fetchCartById } from "@/services/cart";
import styles from "@/styles/components/cart.module.css";

export const CartCard = async ({ id }) => {
    const cart = await fetchCartById(id);

    return (
        <>
            <h2 className={styles.heading}>Cart Information</h2>
            <div className={styles.cartInfo}>
                {cart.length === 0 ? (
                    <p>No items in the cart.</p>
                ) : (
                    cart.map((cartItem) => (
                        cartItem.products?.map((productItem, index) => (
                            <div key={`${cartItem.id}${index}`} className={styles.cartItem}>
                                <p><strong>Product ID:</strong> product {productItem.productId}</p>
                                <p><strong>Quantity:</strong> {productItem.quantity}</p>
                            </div>
                        ))
                    ))
                )}
            </div>
        </>
    )
}