import React, { Suspense } from 'react';
import StaticProduct from "@/components/staticProduct/Product";
import LoadingSkeleton from '@/components/loadingskeleton/LoadingSkeleton';
import Reviews from "@/components/reviews/Reviews";

const  ProductWithStreaming = ({ params: { slug } }) => {

  console.log("////////////////////////////////////////ProductWithStreaming Page\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\", slug)

  return (
    <>
    <h1>Product informations</h1> 
    <Suspense fallback={<LoadingSkeleton />}>
      <StaticProduct slug={slug} />
    </Suspense>
    <Reviews />
    </>
  );
}

export default ProductWithStreaming;