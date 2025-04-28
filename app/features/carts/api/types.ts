export type CartProductSummary = {
    productId: number;
    quantity: number;
};

export type CartEntity = {
    id: number;
    userId: number;
    date: string;
    products: CartProductSummary[];
};
