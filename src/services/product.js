import { localBaseUrl } from "@/constants/baseUrls"
import { fakestoreapi } from "@/constants/baseUrls";
import { simulateDelay } from "@/utils/delay";

export const fetchProductById = async (id, delay = 0) => {
    console.log('=======>Product fetched<======', new Date());
    const response = await fetch(`${localBaseUrl}/products/${id}`);
    const data = await response.json();
    await simulateDelay(delay);
    return data
}

export async function fetchProductList() {
    console.log('=======>Product fetched<======', new Date());
    const response = await fetch(`${localBaseUrl}/products`);
    const data = await response.json();
    return data;
}

export async function fetchProductListById(id, delay = 3000) {
    console.log('=======>Product fetched<======', new Date());
    console.log('id', id)
    let url = `${fakestoreapi}/products`;
    if (id) {
        url += `/category/${id}`;
    }
    console.log('url', url)
    const response = await fetch(url);
    const data = await response.json();
    await simulateDelay(delay);
    return data;
}
