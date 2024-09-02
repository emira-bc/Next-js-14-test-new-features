import { fetchUserById } from "@/services/user";
import { CartCard } from "@/components/cart/CartCard";
import styles from "@/styles/components/user.module.css";
export const UserCard = async ({ id }) => {

    const user = await  fetchUserById(id, 6000);
    return (
        <>
            <h1 className={styles.heading}>User Information</h1>
            <div className={styles.userInfo}>
                <p><strong>Name:</strong> {user.name.firstname} {user.name.lastname}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
            </div>
            <CartCard id={id}/>
        </>
    )
}