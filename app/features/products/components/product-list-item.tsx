import type { Product } from "~/features/products/api/get-products";

type ProductListItemProps = {
    product: Product;
};

export default function ProductListItem({ product }: ProductListItemProps) {
    return (
        <li className="flex h-[227px] w-[146px] flex-col items-center justify-center gap-2 rounded-xl bg-white pb-2 shadow">
            <img
                src={product.image}
                alt={product.title}
                className="aspect-square w-[146px] rounded-t-xl object-cover"
            />

            <div className="flex w-[126px] flex-col items-start gap-1">
                <p className="line-clamp-2 h-[44px] text-sm font-medium text-gray-800">
                    {product.title}
                </p>
                <div className="flex w-full justify-between">
                    <span className="text-sm font-bold text-gray-900">
                        ${product.price.toLocaleString()}
                    </span>
                    <span className="text-sm font-bold text-yellow-500">
                        {product.rating.rate}★
                    </span>
                </div>
            </div>
        </li>
    );
}
