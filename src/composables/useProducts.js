import { ref } from 'vue';

export function useProducts() {
    const products = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch('/api/products'); // Adjust the API endpoint as needed
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            products.value = await response.json();
        } catch (err) {
            error.value = err.message;
        } finally {
            loading.value = false;
        }
    };

    fetchProducts();

    return {
        products,
        loading,
        error,
    };
}