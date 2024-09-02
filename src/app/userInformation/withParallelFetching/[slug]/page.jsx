import { UserCardWithParallelFetchNestedComponent } from "@/components/user/UserCardWithParallelFetchNestedComponent";
import { CartCard } from "@/components/cart/CartCard";
import styles from '@/styles/pages/userInformation.module.css';

export default async function UserPage({ params: { slug } }) {

  console.log('////////////////////////////////////////Page USER  with sequential fetching\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
  return (
    <div className={styles.container}>
      <UserCardWithParallelFetchNestedComponent id={slug}/>
      <CartCard id={slug}/>
    </div>
  );
}

