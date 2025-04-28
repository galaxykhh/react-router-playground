import { http } from "~/features/core/utils/http";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};

export function getProducts(): Promise<Product[]> {
    return http.get<Product[]>("products");
}

export function getProduct(id: number): Promise<Product> {
    return http.get<Product>(`products/${id}`);
}
