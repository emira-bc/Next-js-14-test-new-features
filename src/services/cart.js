import { fakestoreapi } from "@/constants/baseUrls";
import { simulateDelay } from "@/utils/delay";

export const fetchCartById = async (id, delay = 0) => {
    console.log('=======>Cart fetched<======', new Date());
    const response = await fetch(`${fakestoreapi}/carts/user/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    await simulateDelay(delay);
    return response.json();
}