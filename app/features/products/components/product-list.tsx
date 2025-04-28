import { Link } from "react-router";
import type { Product } from "~/features/products/api/get-products";
import ProductListItem from "~/features/products/components/product-list-item";

type ProductListProps = {
    products: Product[];
};

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="scrollbar-hide overflow-x-auto bg-orange-100 p-4">
            <ul className="flex min-w-max gap-4">
                {products.map((product: Product) => (
                    <Link to={`/products/${product.id}`}>
                        <ProductListItem key={product.id} product={product} />
                    </Link>
                ))}
            </ul>
        </div>
    );
}
