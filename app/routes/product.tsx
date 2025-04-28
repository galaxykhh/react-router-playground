import { useLoaderData } from "react-router";
import type { Route } from "./+types/product";
import { getProduct, type Product } from "~/features/products/api/get-products";
import Rating from "~/features/core/components/rating";

type Post = {
    id: string;
    title: string;
};

export function meta({ data }: Route.MetaArgs) {
    return [
        { title: data.title },
        { name: data.description, content: "Welcome to React Router!" },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    if (params.id === undefined) {
        throw new Response("Not Found", { status: 404 });
    }

    return getProduct(Number(params.id));
}

export default function Post({ params }: Route.ComponentProps) {
    const product = useLoaderData<Product>();

    return (
        <div>
            <img src={product.image} alt={product.title} />
            <div className="px-3 py-2">
                <p className="line-clamp-2 text-lg font-bold">
                    {product.title}
                </p>
                <div className="h-1" />
                <p className="text-sm text-gray-500">{product.description}</p>

                <div className="flex flex-row-reverse pt-3">
                    <div className="flex flex-col items-end">
                        <Rating rating={product.rating.rate} />
                        <p className="text-sm text-gray-500">
                            {product.rating.count} reviews
                        </p>
                    </div>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}
