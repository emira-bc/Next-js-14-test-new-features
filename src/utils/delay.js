export async function simulateDelay(ms = 6000) {
    return new Promise(resolve => setTimeout(resolve, ms));
}