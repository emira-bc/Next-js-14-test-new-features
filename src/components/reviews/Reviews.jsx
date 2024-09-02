import React from 'react';
import { fetchReviews } from "@/services/review"
export const revalidate = 300;
export const dynamic = 'force-static';
export const dynamicParams = true;
export default async function Reviews() {

  const reviews = await fetchReviews();

  return (
    <div>
      <h2>Product Reviews</h2>
      {reviews.map(review => (
        <div key={review.id} style={{ marginBottom: '20px' }}>
          <h3>{review.user}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.comment}</p>
          <p>Date: {review.date}</p>
        </div>
      ))}
    </div>
  );
}