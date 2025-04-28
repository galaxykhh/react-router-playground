import { type ProductEntity } from "~/features/products/api";
import Rating from "~/features/core/components/rating";

interface ProductListRowProps {
    product: ProductEntity;
}

export default function ProductListRow({ product }: ProductListRowProps) {
    return (
        <div
            key={product.id}
            className="flex h-[120px] w-full gap-4 bg-white p-1"
        >
            <img
                src={product.image}
                alt={product.title}
                className="aspect-square w-[100px] object-cover"
            />
            <div className="flex flex-1 flex-col justify-between">
                <div className="flex flex-col gap-1">
                    <p className="line-clamp-2 text-sm font-medium text-gray-800">
                        {product.title}
                    </p>
                    <p className="line-clamp-2 text-xs text-gray-500">
                        {product.description}
                    </p>
                </div>
                <div className="flex flex-row-reverse items-center">
                    <span className="text-sm font-bold text-gray-900">
                        ${product.price.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    );
}
