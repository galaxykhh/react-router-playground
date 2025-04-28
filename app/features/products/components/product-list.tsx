import { Link } from "react-router";
import type { ProductEntity } from "~/features/products/api";
import { ProductListItem } from "~/features/products/components";

type ProductListProps = {
    products: ProductEntity[];
};

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="scrollbar-hide overflow-x-auto bg-orange-100 p-4">
            <ul className="flex min-w-max gap-4">
                {products.map((product: ProductEntity) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <ProductListItem product={product} />
                    </Link>
                ))}
            </ul>
        </div>
    );
}
