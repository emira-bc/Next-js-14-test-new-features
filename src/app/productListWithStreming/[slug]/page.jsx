import React, { Suspense } from 'react';
import ProductList from "@/components/productList/ProductList";
import Loading from '@/components/loadingBloc/LoadingBloc';
import styles from '@/styles/pages/productList.module.css';

const ProductListWithStreming = async function ({ params: { slug } }) {

  console.log('////////////////////////////////////////Page productListWithStreming\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\');
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <Suspense fallback={<Loading />}>
        <ProductList slug={slug}/>
      </Suspense>
    </div>
  );
}

export default ProductListWithStreming;
