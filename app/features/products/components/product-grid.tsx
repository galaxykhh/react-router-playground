import type { Product } from "~/features/products/api/get-products";
import ProductGridItem from "./product-grid-item";
import { Link } from "react-router";

type ProductGridProps = {
    products: Product[];
};

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className="grid grid-cols-2 gap-2 px-3">
            {products.map((product) => (
                <Link key={product.id} to={`/products/${product.id}`}>
                    <ProductGridItem key={product.id} product={product} />
                </Link>
            ))}
        </div>
    );
}
