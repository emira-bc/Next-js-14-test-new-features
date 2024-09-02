import { UserCard } from "@/components/user/UserCardWithSequentialFetch";
import styles from '@/styles/pages/userInformation.module.css';

export default async function UserPage({ params: { slug } }) {

  console.log('////////////////////////////////////////Page USER  with sequential fetching\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
  return (
    <div className={styles.container}>
      <UserCard id={slug}/>
    </div>
  );
}
