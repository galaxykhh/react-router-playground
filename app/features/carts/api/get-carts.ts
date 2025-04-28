import { http } from "~/features/core/utils/http";

export type CartProduct = {
    productId: number;
    quantity: number;
};

export type Cart = {
    id: number;
    userId: number;
    date: string;
    products: CartProduct[];
};

export function getCarts(): Promise<Cart[]> {
    return http.get<Cart[]>("carts");
}

export function getCart(id: number): Promise<Cart> {
    return http.get<Cart>(`carts/${id}`);
}
