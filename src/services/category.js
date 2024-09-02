import { fakestoreapi } from "@/constants/baseUrls";
import { simulateDelay } from "@/utils/delay";

export async function fetchCategories(delay = 0) {
    console.log('=======>Menu fetched<======', new Date());
    const res = await fetch(`${fakestoreapi}/products/categories`);
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    await simulateDelay(delay);
    return res.json();
}