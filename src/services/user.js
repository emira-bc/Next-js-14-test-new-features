import { fakestoreapi } from "@/constants/baseUrls";
import { simulateDelay } from "@/utils/delay";

export const fetchUserById = async (id, delay = 0) => {
    console.log('=======>User fetched<======', new Date());
    const response = await fetch(`${fakestoreapi}/users/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    await simulateDelay(delay);
    return response.json();
}