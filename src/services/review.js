export const fetchReviews = async () => {
    let currentTime = new Date();
    console.log('Time fetchReviews====', currentTime)
    const res = await fetch('http://localhost:5000/reviews');
    const data = await res.json();
    return data;
  }
