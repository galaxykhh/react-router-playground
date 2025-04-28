import type { ProductEntity } from "../api";

type ProductGridItemProps = {
    product: ProductEntity;
};

export default function ProductGridItem({ product }: ProductGridItemProps) {
    return (
        <div key={product.id} className="flex flex-col">
            <img
                className="aspect-square rounded-[12px] border-1 border-gray-200 object-contain"
                src={product.image}
                alt={product.title}
            />
            <div className="flex flex-col gap-2 p-1">
                <p className="text-md line-clamp-2 font-bold">
                    {product.title}
                </p>
                <div className="flex justify-between">
                    <p className="text-sm font-bold">${product.price}</p>
                    <span className="text-sm font-bold text-yellow-500">
                        {product.rating.rate}★
                    </span>
                </div>
            </div>
        </div>
    );
}
