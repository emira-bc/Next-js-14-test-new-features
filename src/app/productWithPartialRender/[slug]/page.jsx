import React, { Suspense } from 'react';
import Product from "@/components/dynamicProduct/Product";
import Reviews from "@/components/reviews/Reviews";
import LoadingSkeleton from '@/components/loadingskeleton/LoadingSkeleton';
import { fetchProductList } from "@/services/product";
export const experimental_ppr = true;
export const revalidate = 60000;

export async function generateStaticParams() {
  let posts = await fetchProductList();
  return posts.map((post) => ({
    id: post.id,
  }))
}
export default async function ProductStatic({ params: { slug } }) {

  console.log("////////////////////////////////////////Product Page\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", slug)

  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        <Product slug={slug} />
      </Suspense>
      <Reviews /> 
    </>
  );
}
