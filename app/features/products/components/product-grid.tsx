import type { Product } from "~/features/products/api/get-products";

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
    return <div></div>;
}
