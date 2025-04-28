import { Link } from "react-router";
import type { ProductEntity } from "~/features/products/api";
import { ProductGridItem } from "~/features/products/components";

type ProductGridProps = {
    products: ProductEntity[];
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
