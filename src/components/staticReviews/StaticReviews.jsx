import React from 'react';
import { fetchReviews } from "@/services/review";
export const revalidate = 10;
export const dynamic = 'force-static';
export default async function StaticReviews() {

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