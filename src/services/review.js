import { localBaseUrl } from "@/constants/baseUrls";
export const fetchReviews = async () => {
  let currentTime = new Date();
  console.log('=======>Time fetchReviews<======', currentTime);
  // const res = await fetch(`${localBaseUrl}/reviews`, { next: { revalidate: 30 } });
  const res = await fetch(`${localBaseUrl}/reviews`);
  const data = await res.json();
  return data;
}
