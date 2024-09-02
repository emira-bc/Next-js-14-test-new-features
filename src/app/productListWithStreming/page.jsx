import React, { Suspense } from 'react';
import Loading from '@/components/loadingBloc/LoadingBloc';
import ProductList from "@/components/productList/ProductList";
import styles from '@/styles/pages/productList.module.css';

const ProductListWithStreming = async function () {

  console.log('////////////////////////////////////////Page productListWithStreming\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\')
  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export default ProductListWithStreming;
